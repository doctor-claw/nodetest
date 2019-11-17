const { Before, BeforeAll, AfterAll, Given, When, Then } = require('cucumber')

const request = require('request')
const assert = require('assert')
const util = require('util')
const client = require('../../client.js')

Before('@pending', function(scenario, callback) {
    callback(null, 'pending')
});

BeforeAll(function () {
    server = require('../../server.js')
});

AfterAll(function () {
    server.close()
});

When('I attempt to login', function () {
    phone = "01467 234177"
    let login = client.loginUser(phone, response => {
        this.httpResponseCode = response.statusCode;
        this.message = response.body;
    });
    
    return login;
});