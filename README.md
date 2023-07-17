# Rocky.dev
Here you'll find some posts about cool tech I run into, my favorite music, and some other stuff I like to write down

[Here's the link](https://BarakBinyamin.github.io/)

# Plan to add posts using markdown
1. Add a folder with a `README.md` to view/public/posts and `git commit`
2. `npm run build` from project directory
    - This looks at any changes in posts, updates the [posts database file](view/public/posts/posts.json) which contatins some metadata used by the site to search
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
3. `git commit` and `git push`

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
- [ ] add support for comments
- [ ] add directory
- [Description]()  
- [Developers info]()  
    - [Project Structure]()
    - [Adding Posts]()
- [Resources]()
- fix sub code button hover and coloring
- fix image buffer for large images vs inline


## Motivation
I'm interested in sharing & collecting feedback, so that I may gain the ability to simplify tech talk into normal words

## Technologies
- <img text-align="center" src="https://vuejs.org/logo.svg" height="20px"/>  [Vue](https://vuejs.org/) a view-model javascript framework, used to develop the **user interface**
- <img text-align="center" src="https://vitejs.dev/logo.svg" height="20px"/> [Vite](https://vitejs.dev/) a development, minification & website build tool
- <img text-align="center" src="https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png" height="20px"/> [Firebase](https://firebase.google.com/) a google cloud mobile and web app dev platform with opt in services including hosting and storage, used for it's free tier realtime database to store comments
- <img text-align="center" src="https://cdn.icon-icons.com/icons2/2699/PNG/512/stripe_logo_icon_167962.png" height="20px"/> [Stripe](https://stripe.com/pricing) a cloud payment processing platform, used to collect payments for items in the store

# Resources
- [This kind of helped, still unsure how stuff is working](https://firebase.google.com/docs/database/web/read-and-write#web-modular-api_1)