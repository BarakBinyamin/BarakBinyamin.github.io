# Blog
How it was made

## Steps
1. Creation - created rough sketch the what I wanted the blog to look like
2. Barinstorming - listed all the features I wanted then how to accomplish them
3. Refinement - didn't end up taking anything out
4. Action   - started coding

Heres what it looked like
<p align="center">
    <img src="/blogs/blog/planning.jpg" width="75%"/>
</p>

```javascript
const fs = require('fs')
const showdown  = require('showdown')
const converter = new showdown.Converter()
let   markdown  = fs.readFileSync('./example.md', "utf8")
let   html      = converter.makeHtml(markdown)

fs.writeFileSync('./index2.html',html)
```
