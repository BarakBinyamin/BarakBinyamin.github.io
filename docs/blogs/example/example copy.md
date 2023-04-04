# Example
It's really great to learn javascript! I know right?

- [ ] Mercury
- [x] asdasd
- [ ] asdasd
- [ ] asdasd

```javascript
const variable = "goober"
const foo      = require('example')

async function(goober){
    console.log(goober)
}
```

```javascript
const fs = require('fs')
const showdown  = require('showdown')
const converter = new showdown.Converter()
let   markdown  = fs.readFileSync('./example.md', "utf8")
let   html      = converter.makeHtml(markdown)

fs.writeFileSync('./index2.html',html)
```