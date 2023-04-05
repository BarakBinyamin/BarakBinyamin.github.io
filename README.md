# Blog
Blog form of my projects with a cool UI

Use this tool to fulltext fuzzy search and filter through some of my projects

### Flow for how I update the blog
I use #tag to add tags, these tags can be setup with cool css presets in the view. Use the full path in links to images. To add or update a blog simply:  
1. Add a markdown file to the blogs folder
2. Run build
3. Push to repo

## Project Directory
| Name                                   | Purpose                                       | 
| :--                                    | :--                                           |
|[blogs](blogs)                          | Where the blogs are created & edited          |
|[docs](docs)                            | Where github serves the website from          |
|[misc](mic)                             | Retired resume wesbite, blogs, and scripts    |
|[view](view)                            | Where the UI is developed                     |   
|[build.js](build.js)                    | Used to build the website when updated        |
|[package.json](build.js)                | Nodejs project metadata file                  |

## TODO
- Get feedback on UI and color scheme
- Add projects
- Add tags
- Add dark theme

# Resources
- [Use git to find timestamps](https://stackoverflow.com/questions/2390199/finding-the-date-time-a-file-was-first-added-to-a-git-repository)
- [dynamic spa routing for github pages](https://huishun.medium.com/how-to-deploy-a-vue-js-application-with-dynamic-routing-on-github-pages-3d36f4644e54)
- [vite dynamic spa](https://stackoverflow.com/questions/68076527/how-to-set-vite-config-js-base-public-path)
- [npm run clean](https://stackoverflow.com/questions/42950501/delete-node-modules-folder-recursively-from-a-specified-path-using-command-line)

## Want to host a blog starting from this code?
If you're serving from a base domain, just change the asset base for production builds:  `--base=https://username.github.io` in [view/package.json](view/package.json)
