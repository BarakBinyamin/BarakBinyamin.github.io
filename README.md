# Rocky.dev
Here you'll find some posts about cool tech I run into, my favorite music, and some other stuff I like to write down

[Here's the link](BarakBinyamin.github.io/)

-[Description]()
-[Developers info]()
    - [Project Structure]()
    - [Adding Posts]()
-[Resources]()

# How I add posts
- Add a folder to view/public/posts
- Run build.js
    - This looks at any changes in posts, updates the posts database which contatins some metadata used by the site to search
    ```json
    posts = [
        {
            "name"       : "postFolderName",
            "description": "second line of poasts/postFolderName/README.md",
            "created"    : "taken from file info",
            "updated"    : "taken from file info"
        }
    ]
    ```
    - Rebuilds the app into docs folder for github

# How I add a item to the store
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


