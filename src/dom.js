function dom(selector, createOptions) {

  var self = this,
    elements = [];

  if (createOptions) {
    var element = document.createElement(selector);
    for (var k in createOptions) {
      element[k] = createOptions[k];
    }
  } else {
    if (utils.isString(selector)) {
      elements = [].slice.call(document.querySelectorAll(selector));
    } else {
      if (utils.isObject(selector) && selector.attributes) {
        elements = [selector];
      }
    }
    for (var i = 0, l = elements.length; i < l; i++) {
    	self[i] = elements[i];
    }
    
  	self._elements = elements;
    self.length = elements.length;
    return self;
  }

}


dom.prototype.on = function(events, fn) {

  var self = this,
    elements = self;
  events = events.split(" ");
  for (var i = 0, lenEl = elements.length; i < lenEl; i++) {
    var element = elements[i];
    for (var j = 0, lenEv = events.length; j < lenEv; j++) {
      if (element.addEventListener) {
        element.addEventListener(events[j], fn, false);
      }
    }
  }

}

dom.prototype.find = function(selector) {

  var self = this,
    element = self[0],
    elements = [];

  if (utils.isString(selector)) {
    elements = [].slice.call(element.querySelectorAll(selector));
  }
  for (var i = 0, l = elements.length; i < l; i++) {
  	self[i] = elements[i];
  }

  self._elements = elements;
  return self;

}


var $ = function(selector, createOptions) {
  return new dom(selector, createOptions)
}


extend(utils, {
  $: $
});