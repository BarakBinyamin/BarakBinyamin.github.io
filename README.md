# Rocky.dev
Here you'll find some posts about cool tech I run into, my favorite music, and some other stuff I like to write down

[Here's the link](https://BarakBinyamin.github.io/)

# Plan to add posts using markdown
- Add a folder to view/public/posts
- `npm run build` from project directory
    - This looks at any changes in posts, updates the posts database which contatins some metadata used by the site to search
    ```json
    [
        {
            "id"          : "encodeURI(title)",   // #TODO come up with reliab le website link  
            "created"     : "createdFomratted",   // Formatted created date
            "updated"     : "editedFomratted",    // Formatted updated date
            "title"       : "title",              // First line of readme
            "description" : "description",        // Second line of readme
            "url"         : "/posts/${postPath.name}/README.md"
        }
    ]
    ```
    - Rebuilds the app into docs folder for github

# Plan to add items to the store
TBD

# TODO
- [ ] clean up css, and folder structure 
- [ ] post images open new tab of image
- [ ] post titles have pop up links
- [ ] posts have storybook for each header on the left, iphone view open/close
- [ ] skip to top on bottom right
- [ ] add DIY speaker to store?
- [ ] make a real post
- [ ] consider folder structure, preferences storage like music, food, location sugesstions?
- [ ] lisence or disclaimer?
- [ ] upcoming events tab?
- [ ] add contact info
- [ ] add search for posts
- [ ] add general search? - items would need to be tagged with "type"
- [ ] add support for tags, beatifying tags, and tag searches
- [ ] add directory
- [Description]()  
- [Developers info]()  
    - [Project Structure]()
    - [Adding Posts]()
- [Resources]()
