var getElement = function(string){
  switch (string[0]){
    case '#' :
      return document.getElementById(string.slice(1));
    case '.' :
      return document.getElementsByClassName(string.slice(1))[0];
    default :
      return document.getElementsByTagName(string)[0];
  }
};

var $ = function(string) {
  var elem = getElement(string);

  elem.addClass = function(className){
//     console.log(this.className);
        this.className += ' ' + className;
        return this;
  };

  elem.removeClass = function(className){
        var remove = new RegExp(className, 'g');
        this.className = this.className.replace(remove, '');
        return this;
  };
  return elem;
};

console.log($('.awesome').addClass('hide').removeClass('amazing').className);
