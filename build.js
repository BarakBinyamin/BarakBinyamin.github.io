const fs           = require('fs')
const path         = require('path')
const moment       = require('moment'); moment().format(); moment.suppressDeprecationWarnings = true
const {execSync}   = require('node:child_process')

const BLOG_DIRECTORY  = './blogs'
const EXPORT_BLOGS    = './view/public/blogs'
const EXPORT_DATABASE = './view/src/assets/database.json'

/*  
*   1. Get build dependencies
*   2. Copy all the blogs into /view/public/blogs
*   3. Make a JSON db from the blogs
*   4. Export the db into view/src/assets/database.json
*   5. Build the blog
*/

// 1. Get build dependencies
execSync(`cd view && npm install`, {stdio: 'inherit'})

// 2. Copy all the blogs into /view/public/blogs
fs.rmSync(EXPORT_BLOGS, { recursive: true, force : true })
fs.cpSync(BLOG_DIRECTORY, EXPORT_BLOGS, { recursive: true })

// 3. Make a db from the blogs
function walkDirSync(directory){
    const files = []
    const currentDirectory = fs.readdirSync(directory)
    for (let i=0;i<currentDirectory.length;i++){
        const currentPath = currentDirectory[i]
        const isDir = fs.lstatSync(`${directory}/${currentPath}`).isDirectory()
        if (isDir){
            const subFiles = walkDirSync(`${directory}/${currentPath}`)
            files.push(...subFiles)
        }else{
            files.push(`${directory}/${currentPath}`)
        }
    }
    return files
}
const files = walkDirSync(BLOG_DIRECTORY)
const db    = []
for (let i=0; i<files.length; i++){
    const currentFile = files[i]
    const isMarkdown  = (path.extname(currentFile) === '.md')
    if(isMarkdown){
        console.log(`Exporting ${currentFile} to database...`)
        let   content = fs.readFileSync(currentFile).toString()
        const title   = content.split('\n')?.[0].replace(/# /,'').replace('\n','').replace(/[ ]*$/,'')
        const description  = content.split('\n')?.[1]
        const tags    = Array.from(content.matchAll(/[#][A-z0-9-]+/g), (m) => m[0])
        const created = execSync(`git log --follow --format=%ad --date default '${currentFile}' | tail -1`).toString().replace(/-.*/,'').replace('\n','')
        const edited  = execSync(`git log -1 --pretty="format:%ci" '${currentFile}'`).toString()
        const createdFomratted = created ? moment(created).format("LT MM/DD/YYYY") : ''
        const editedFomratted  = created ? moment(edited).format("LT MM/DD/YYYY") : ''
        const image            = currentFile.replace(/[^/]*$/,'').replace('.','') + "index.jpg"
        content                = content.split('\n'); content.shift(); content.shift(); 
        content                = content.join('\n')
        db.push({
            id          : `project-${i}`,   // #TODO come up with reliable website link  
            created     : createdFomratted, // Formatted created date
            updated     : editedFomratted,  // Formatted updated date
            title       : title,            // First line of readme
            description : description,      // Second line of readme
            content     : content,          // readme - first 2 lines
            tags        : tags,             // Any #tag's 
            image       : image             // project logo - currently always /project/index.jpg
        })
    }
}

// 4. Export the db into 'view/src/assets/database.json'
fs.writeFileSync(EXPORT_DATABASE, JSON.stringify(db))

// 4. Build the blog
execSync(`cd view && npm run build`,{stdio: 'inherit'})