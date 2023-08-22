# 582-cors-fix

Cors Fix to enable Codespace to connect to Vue and to MongoDB Atlas.

For sample file, view [index.js](index.js)

## Project setup

I would recommend you do the following commands:

```npm init```

to start a package file for your node project.

You will most likely need to install Express, MongoDB and CORS modules and middleware.

```npm install express --save```

```npm install mongodb --save```

```npm install cors --save```

## MongoDB Atlas Network Access

![atlas network access](assets/atlas-network-access.jpg)

Log in to MongoDB Atlas, select Network Access on the side menu and click on ```Add IP Address```. Once you see the dialog box for 'Add IP Address List Entry', select ```ALLOW ACCESS FROM ANYWHERE``` and ```Confirm```.

## MongoDB Atlas Connection String

![atlas connect](assets/atlas-connect.jpg)

Log in to MongoDB Atlas, select Database on the side menu, select your database and click on ```Connect```. Once you see the dialog box for 'Connect', select ```Connecting with MongoDB Driver``` and follow the instructions. You will need to **copy** the connection string that is displayed and **do not forget to change your password** enclosed in ```<password>```.

## Enabling CORS access to COdespace

![cors fix](assets/cors.jpg)

Add and use the [cors middleware](https://expressjs.com/en/resources/middleware/cors.html) to to enable CORS with various options.

```js
var cors = require("cors");
app.use(cors());
```

Using cors this way will  **enable All CORS Requests**.

Once your server is running, make sure you ```right-click``` on your outgoing port (usually 3000) and set ```Port Visibility``` to ```Public```.

This will expose your Codespace application to ***any public***.