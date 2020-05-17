# Food Cashier API

[![Express JS](https://img.shields.io/badge/Dependencies-Express%20JS-green)](https://expressjs.com/)
![GitHub repo size](https://img.shields.io/github/repo-size/HiRahmat-Dev/food-cashier-api)
![GitHub contributors](https://img.shields.io/github/contributors/HiRahmat-Dev/food-cashier-api)
![GitHub stars](https://img.shields.io/github/stars/HiRahmat-Dev/food-cashier-api?style=social)
![GitHub forks](https://img.shields.io/github/forks/HiRahmat-Dev/food-cashier-api?style=social)
![Tweet](https://img.shields.io/twitter/url?url=https%3A%2F%2Fgithub.com%2FHiRahmat-Dev%2Ffood-cashier-api
)

<p align="center">
  <a href="https://nodejs.org/" target="blank">
    <img src="https://cdn-images-1.medium.com/max/871/1*d2zLEjERsrs1Rzk_95QU9A.png">
  </a>
</p>

## Table of Contents
- [Prerequiste](#prerequiste)
- [Installation](#installation)
- [Link Collection Postman](#link-collection-postman)
- [Structure Folder](#structure-folder)
- [Contributing](#contributing)
- [Related Project](#related-project)
- [Contributors](#contributors)

## Prerequiste
- Node.js - Download and Install [Node.js](https://nodejs.org/en/).
- MySQL - Download and Install [MySQL](https://www.mysql.com/downloads/) - Make sure it's running on the default port.

## Installation
### Clone
```
$ git clone https://github.com/HiRahmat-Dev/food-cashier-api.git
$ cd food-cashier-api
$ npm install
```

### Create Environment Variable
```
$ touch .env
$ nano .env
```

```
DB_HOST=YOUR_HOST
DB_USER=YOUR_USER
DB_PASSWORD=YOUR_PASSWORD
DB_NAME=YOUR_TABLE-NAME

SERVER_PORT=YOUR_PORT

```

### Start Development Server
```
$ npm run serve
```
## Link Collection Postman
[Postman](https://www.getpostman.com/collections/bb923819853137d50b60)

## Structure Folder
```
\---src
|    \---config
|    |   +---db.js
|    \---controller
|    |   +---auth.js
|    |   +---menu.js
|    |   +---user.js
|    \---helper
|    \---models
|    |   +---auth.js
|    |   +---menu.js
|    |   +---user.js
|    \---router
|    |   +---auth.js
|    |   +---index.js
|    |   +---menu.js
|    |   +---user.js
+---server.js
```

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are greatly appreciated.

Fork the Project
1. Create your Feature Branch  ```git checkout -b [feature]```
2. Commit your Changes ```git commit -m 'Add some feature'```
3. Push to the Branch ```git push origin [feature]```
4. Open a Pull Request

## Related Project
* [`Frontend-Food-Cashier`](https://github.com/HiRahmat-Dev/food-cashier-vuejs)
* [`Backend-Food-Cashier`](https://github.com/HiRahmat-Dev/food-cashier-api)

## Contributors
<center>
  <table>
    <tr>
      <td align="center">
        <a href="https://github.com/HiRahmat-Dev/">
          <img width="150" src="https://avatars2.githubusercontent.com/u/55150659?s=460&u=c7171bb4128787c303efdce0d62bc86289f1211b&v=4" alt="Rahmat Hidayatullah"><br/>
          <b>Rahmat Hidayatullah</b>
        </a>
      </td>
    </tr>
  </table>
</center>
