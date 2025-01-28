# API
Services I serve off an old laptop in my house, they'll do all the stuff that github can't do like interface with a database for my blogs and help me automate my emails

Eventually it would be nice to add a metrics route to the api. AS well as some rate limiting and security measures.

```bash
project-root/
│
├── docker-compose.yml
├── api/
│   ├── Dockerfile
│   ├── index.js
│   ├── setupMeiliSearch.js
│   └── package.json
└── .env
```
# setup
1. generate web push keys
```javascript
const webPush = require('web-push');
webPush.generateVAPIDKeys()
```
2. make a secrets file
```bash
# .env example
DOMAIN=rockz.one
MEILI_MASTER_KEY=your_secret_master_key_here
MEILI_URL=http://meilisearch:7700
VAPID_PUBLIC_KEY=gen_public_key
VAPID_PRIVATE_KEY=gen_private_key
```
3. get the certs for https and pu tem in the api/certs folder
4. docker-compose up -d 
5. check the health using the health app