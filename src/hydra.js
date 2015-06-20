// 这一段参考了way.js思想
// https://github.com/gwendall/way.js



var hydraData = {};
var hydraTemplates = {};
var hydraRenders = {};


function hydra(name) {
  return hydraData[name];
}


hydra.get = hydra;
hydra.data = hydraData;
hydra.template = hydraTemplates;
hydra.renders = hydraRenders;
hydra.artTemplate = template;


hydra.set = function(name, data) {

  var eles = $("[data-hydra=" + name + "]") || [];
  var renders = hydraRenders[name] || function(eles) {
    var ret = [];
    var temp;
    hydraTemplates[name] = [];

    each(eles, function(el) {
    	temp = el.innerHTML;
      ret.push(template.compile(temp));
      hydraTemplates[name].push(temp);
    });

    hydraRenders[name] = ret;

    return ret;

  }(eles);

  hydraData[name] = data;

  for (i = 0, len = renders.length; i < len; i++) {
    eles[i].innerHTML = renders[i](data);

    setTimeout((function(el) {
    	return function() {
    		$(el).find("*").on("input change", function(e) {
    			console.log(this.value)
    		});
    	}
    })(eles[i]), 0);
  }


};