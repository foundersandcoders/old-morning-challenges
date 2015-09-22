// Hello Curious Person! :-)

function fetchArticles(){
  $.getJSON('hackernews-rss.json', function(response){
    var html = '';
    response.rss.channel[0].item.forEach(function(item) {
      html += '<li class="newstitle">'+item.title +'</li>'
    })
    $('#articles').append(html);
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
