var fs     = require('fs');
var xml2js = require('xml2js');
var parser = new xml2js.Parser();

fs.readFile(__dirname + '/hackernews-rss.xml', function(err, data) {
    parser.parseString(data, function (err, result) {
        console.dir(result);
        var jsonString = JSON.stringify(result, null, 4);

        fs.writeFile(__dirname + '/hackernews-rss.json', jsonString, function(err, data){
          console.log(jsonString)
        });
        console.log('Done');
    });
});
