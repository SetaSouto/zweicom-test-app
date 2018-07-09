# Zweicom test app

<p align="center">
  <a href="https://standardjs.com"><img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" alt="Standard - JavaScript Style Guide"></a>
</p>

This is a simple application to ilustrate how to create a basic REST api. It uses `express` as the backend framework and it is devloped in Node.js.  
Also, it uses `winston-namespace` to log errors or info messages, a package created by the author Fabián Souto Herrera.  
The project includes the test for the endpoint using `mocha`, `chai` and `chai-http`.  

### Installation

Having Node.js installed type in your terminal:
```bash
git clone https://github.com/SetaSouto/zweicom-test-app.git
cd zweicom-test-app
npm install
npm run start
```
And the app will run at `localhost:3000`. If you want to try it, you can make a `GET` request using a service like [Postman](https://www.getpostman.com/) as: `GET localhost:3000/fibonacci?n=100` where the value of `n` can change to any number.  

### Tests

The tests are in the `test` directory. To run the test you must run in the terminal `npm run test`.

### Errors

This app also can handle the errors, so if you try to send something that is not a number as `n` it will return a json with the error with a status and a message explaining the error. The same happens if you try to get another route than `/fibonacci`.