# Birds-Near-Me

This project uses the same template than this [one](https://github.com/San-Bed/Shopify-Developer-Intern-Challenge), but adds new features. Users can share bitwatching hotspots and add reviews for each one. Hotspots are displayed on an interactive map. The deployed version is available [here](https://dashboard.heroku.com/apps/birds-near-me). Unfortunately, it's not compatible on Safari, so please use Google Chrome or Firefox.

## Installation

Make sure you have installed all of the following prerequisites on your development machine:

* [Git](https://git-scm.com/downloads) - OSX and Linux machines typically have this already installed
* [Node.js](https://nodejs.org/en/) and the npm package manager (usually installed with Node.js)
* [Nodemon](https://www.npmjs.com/package/nodemon) - Restarts the server when files change
* [MongoDB](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/) - Make sure it's running on the default port (27017)


Start by cloning the repository and installing all required packages.

```
git clone https://github.com/San-Bed/Birds-Near-Me.git 
npm install
```

Then, you must create a [Cloudinary](https://cloudinary.com) account to store images. From your dashboard, copy your Cloud name, API Key and API Secret and add them to a .env in the root directory of the project. You should follow this format:

```
CLOUDINARY_CLOUD_NAME=Cloud name
CLOUDINARY_KEY=API Key
CLOUDINARY_SECRET=API Secret
```

Additionally, you need to open a [Mapbox](https://www.mapbox.com) account to display the interactive map. Copy the API access token and add it to the .env file:

```
MAPBOX_TOKEN=API access token
```

In the deployed version, I use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) to store the products. However, for testing purposes, a local database is automatically created, so no further steps are required. Run the code with:

```
nodemon app.js
```

You should see on the CLI the following lines:

```
[nodemon] 2.0.7
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node app.js`
Serving on port 3000
Database connected
```
The website will be available at [http://localhost:3000/](http://localhost:3000/). 

## Support

If you run through any trouble with the installation, please contact me at [sandrine.bedard@icloud.com](mailto:sandrine.bedard@icloud.com]).


## Acknowledgment
I would like to thank Colt Steele for his course [The Web Developer Bootcamp 2021](https://www.udemy.com/course/the-web-developer-bootcamp/). I completed the 65-hour course in April 2021 and it helped me a lot for this project. 
