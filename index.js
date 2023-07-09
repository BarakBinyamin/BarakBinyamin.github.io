// builds 
const fs           = require('fs')
const path         = require('path')
const moment       = require('moment'); moment().format(); moment.suppressDeprecationWarnings = true
const {execSync}   = require('node:child_process')

const POSTS_FOLDER_PATH  =   "./view/public/posts"
const POST_DATABASE_PATH = "./view/public/posts/posts.json"
const VIEW_INDEX_HTML    = './docs/index.html'
const SPA_404_HTML       = './docs/404.html'

/*  
*   Add/update posts in git before running this script which:
*   1. Downloads build dependencies
*   2. #TODO Creates a sorted JSON database of the posts
*   3. Build the website into docs for github to serve it
*/

async function downloadBuildDependencies(){
    execSync(`cd view && npm install`, {stdio: 'inherit'})
}

async function createPostsDatabase(){
    const currentDirectory  = fs.readdirSync(POSTS_FOLDER_PATH)
    const postPaths         =  currentDirectory.filter(
        postFolderName      => fs.lstatSync(`${POSTS_FOLDER_PATH}/${postFolderName}`).isDirectory()
    ).filter(postFolderName => 
        fs.existsSync(`${POSTS_FOLDER_PATH}/${postFolderName}/README.md`)
    ).map(postFolderName    => {
        return {
            path: `${POSTS_FOLDER_PATH}/${postFolderName}/README.md`,
            name: postFolderName
        }
    })

    const postMetaData = []
    for (let index=0; index<postPaths.length; index++){
        const postPath     = postPaths[index]
        let   content      = fs.readFileSync(postPath.path).toString()
        const title        = content.split('\n')?.[0].replace(/# /,'').replace('\n','').replace(/[ ]*$/,'')
        const description  = content.split('\n')?.[1]
        const created      = execSync(`git log --diff-filter=A --follow --format=%aI -- '${postPath.path}' | tail -1`).toString().replace('\n','')
        const edited       = execSync(`git log -1 --pretty="format:%aI" '${postPath.path}'`).toString()
        const createdFomratted = created ? moment(created).format("MMMM Do, YYYY") : ''
        const editedFomratted  = created ? moment(edited).format("MMMM Do, YYYY") : ''
        content                = content.split('\n'); content.shift(); content.shift(); 
        content                = content.join('\n')
        postMetaData.push({
            id          : encodeURI(title),   // #TODO come up with reliable website link  
            created     : createdFomratted,   // Formatted created date
            updated     : editedFomratted,    // Formatted updated date
            title       : title,              // First line of readme
            description : description,        // Second line of readme
            url         : `/posts/${postPath.name}/README.md`
            // content     : content,         // readme - first 2 lines
            // tags        : tags,            // Any #tag's 
            // image       : image            // project logo - currently always /project/index.jpg

        })
        console.log(postMetaData)
    }

    // # TODO sort by timestamp!!!!

    // Pretty print post meta data into posts.json
    fs.writeFileSync(POST_DATABASE_PATH, JSON.stringify(postMetaData, null, 2))
}

async function buildWebsiteIntoDocs(){
    execSync(`cd view && npm run build`,{stdio: 'inherit'})
    fs.cpSync(VIEW_INDEX_HTML, SPA_404_HTML)
}

async function main(){
    await downloadBuildDependencies()
    await createPostsDatabase()
    await buildWebsiteIntoDocs()
}

// if __name__ == '__main__'
if (typeof require !== 'undefined' && require.main === module) {
    main()
}


// Get created date from git
// Copied files counts as the same file in terms of timestamps
// git log --diff-filter=A --follow --format=%aI -- view/public/posts/posts.json | tail -1

// Get last updated date from git
// git log -1 --pretty="format:%aI" view/public/posts/posts.json  