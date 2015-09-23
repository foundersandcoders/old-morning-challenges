var fs     = require('fs');
var xml2js = require('xml2js');
var parser = new xml2js.Parser();

fs.readFile(__dirname + '/hackernews-rss.xml', function(err, data) {
    parser.parseString(data, function (err, result) {
        // console.dir(result);
        var html = '';
        result.rss.channel[0].item.forEach(function(item) {
          html += '<li class="newstitle">'+item.title +'</li>'
        })
        fs.writeFile(__dirname + '/news-articles.html', html, function(err, data){
          console.log(html);
          console.log('Done');
        });

    });
});
