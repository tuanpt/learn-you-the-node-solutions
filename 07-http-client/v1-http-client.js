//
// HTTP CLIENT
//
// Exercise 7 of 13
//
//  Write a program that performs an HTTP GET request to a URL provided to you
//  as the first command-line argument. Write the String contents of each
//  "data" event from the response to a new line on the console (stdout).
//

var httpGet = require('http').get;

//
// `response` is a node Stream object. They emit events like
// 'data', 'error' and 'end'.
//
httpGet(process.argv[2], function(response) {

    response.on('data', function(data) {
        console.log(data.toString());
    });
});
