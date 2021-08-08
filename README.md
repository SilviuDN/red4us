# red4me v0.1.1

## The Idea:
- red4me is a simple app that wants to be a "smartPhones - happyUsers matching" online store, when it grows up...

## Getting started:
### Locally: 
- clone the repo <$ https://github.com/SilviuDN/red4me.git>
- server: npm run dev
- client: npm start
### Remote (available soon):
- deployed with Heroku: https://red4me.herokuapp.com/ 

## Data persistency:
- MongoAtlass for the db
- Cloudinary for the images

## Environment variables:
DB_REMOTE
DOMAIN_LOCAL=http://localhost:3000
CLOUDINARY_NAME
CLOUDINARY_KEY
CLOUDINARY_SECRET

## Backend dependencies:
    "cloudinary": "^1.26.2",
    "cookie-parser": "^1.4.5",
    "cors": "^2.8.5",
    "dotenv": "^10.0.0",
    "express": "^4.17.1",
    "mongoose": "^5.13.5",
    "morgan": "^1.10.0",
    "multer": "^1.4.2",
    "multer-storage-cloudinary": "^4.0.0",

## Frontend:
    "axios": "^0.21.1",
    "bootstrap": "^5.0.2",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.4",
    "react-dom": "^17.0.2",
    "react-router-dom": "^5.2.0",

## Components: 
- App
    -Navbar
    - IndexPage
    - PhonesPage
        - PhonesList
            - PhoneCard
            - PhoneForm (modal)
    - PhoneDetailsCard
    - PhoneForm
    - Footer


## The challenge:
- deploying. What I've done:
    1. red4me/server:
        - heroku create red4us
        - git remote add red4us_app https://git.heroku.com/red4us.git
    2. red4me/client: 
        - npm run build 
    3. moved red4me/client/build to red4me/server and renamed as red4me/server/public
    4. red4me:
        - git add .
        - git commit -m "deploy"
        - git subtree push --prefix=server red4us_app main
- didn't work.


## Enjoy!