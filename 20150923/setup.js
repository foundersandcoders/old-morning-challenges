// Don't alter anything in setup.js or you'll have a bad time...

function renderArticles(articles) {
  // this is ONE way of rednering things. its not the best. you will discover better. ;-)
  var html = '';
  var style = ' style="background-color:#D3D3D3; padding: 0.5em;" ';
  articles.forEach(function(item) {
     item.pubDate = item.pubDate.replace(' +0000', '');
     html += '<p class="newsitem">';
     html += '<time ' +style +' datetime="' + item.pubDate +'">' +item.pubDate +'</time> '
     html += '<span class="title">'+item.title +'</span> ';
     html += '</p>';
   })
  $('#articles').append(html);
}

var articles = []; // extract just the title and pubDate
function fetchArticles(){
  $.getJSON('hackernews-rss.json', function(json){
    json.rss.channel[0].item.forEach(function(item) {
      articles.push({title:item.title[0], pubDate:item.pubDate[0]});
    })
    console.log(articles[0]);
    challenge();
  })
}

function loadCSS(href){
  var css = document.createElement('link');
   css.setAttribute('rel', 'stylesheet');
   css.setAttribute('href', href);
   document.getElementsByTagName('head')[0].appendChild(css);
}

/**
 * next is the callback
 */
function loadJS(src, next) {
  var script = document.createElement('script');
  // Note: only loading JQUERY to Setup this *Challenge*. You will have to do your own "Ajax" for the next few weeks
  script.src = src;
  script.onload = function () {
    next();
  };
  document.head.appendChild(script); //or something of the likes
}

var css = [
  'http://yui.yahooapis.com/pure/0.6.0/pure-min.css',
  'https://code.jquery.com/qunit/qunit-1.18.0.css'
]

css.forEach(function(href){ loadCSS(href) });
loadJS('https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js', fetchArticles)
