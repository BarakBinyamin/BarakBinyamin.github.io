const fs = require('fs')
const yaml = require('js-yaml')
const { program }    = require('commander')

const BASE_URL = "https://rockz.one/blog/"
// const CREATE   = BASE_URL + "createBlog/"
const UPDATE   = BASE_URL + "updateBlog/"
const REMOVE   = BASE_URL + "deleteBlog/"

program
  .requiredOption('--blog  <blog>', 'path to blog')
  .parse()

const options    = program.opts()
const blogpath   = options.blog

async function addBlog(blog){
    try {
        const response = await fetch(UPDATE, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(blog),
        })
        if (!response.ok) {throw new Error('Subscription failed')}
        const res = await response.json()
        return res
    } catch (error) {
        console.error('Error subscribing to blog:', error);
        throw error;
    }
}

async function parseBlog(filepath){
    const markdownContent = fs.readFileSync(filepath, 'utf8')
    const yamlRegex       = /^---\n([\s\S]+?)\n---/

    const match  = markdownContent.match(yamlRegex)

    let yamlData = null
    let content  = markdownContent

    if (match) {
    yamlData = yaml.load(match[1])
    content = markdownContent.slice(match[0].length).trim()
    }
    yamlData.content = content
    const blog       = yamlData
    return blog
}


async function main(){
    const filepath = blogpath
    const blog     = await parseBlog(filepath)
    const res      = await addBlog(blog)
    console.log(blog)
    console.log(res)
}

main()
