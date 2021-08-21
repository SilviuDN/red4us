# red4me v0.1.1 - the server

## The Idea:
- red4me is a simple app that wants to be a "smartPhones - happyUsers matching" online store, when it grows up...

## Getting started
### Locally: 
- clone the repo <$ https://github.com/SilviuDN/red4us.git>
- npm i
- npm run dev
### Remote:
- server deployed with Heroku: https://red4me.herokuapp.com/ 
- client deployed with Netlify: https://elegant-mestorf-c094ac.netlify.app/

## Data persistency:
- MongoAtlass for the db
- Cloudinary for the images

## Environment variables:
- PORT=5000 (local)
- DB_REMOTE
- DOMAIN_LOCAL=http://localhost:3000
- CLOUDINARY_NAME
- CLOUDINARY_KEY
- CLOUDINARY_SECRET
- NETLIFY_BASE_URL
- SESS_SECRET

## Backend dependencies:
    "bcrypt": "^5.0.1",
    "cloudinary": "^1.26.2",
    "connect-mongo": "^4.5.0",
    "cookie-parser": "^1.4.5",
    "cors": "^2.8.5",
    "dotenv": "^10.0.0",
    "express": "^4.17.1",
    "mongoose": "^5.13.5",
    "morgan": "^1.10.0",
    "multer": "^1.4.2",
    "multer-storage-cloudinary": "^4.0.0",

## For client:
- see repo: <https://github.com/SilviuDN/red4us-client.git>

## Enjoy!