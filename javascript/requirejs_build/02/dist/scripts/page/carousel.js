!function(n){n.fn.pluginA=function(){console.log("$.fn.pluginA() : hello A")}}(jQuery),define("plugins/jquery.pluginA",function(){}),!function(n){n.fn.pluginB=function(){console.log("$.fn.pluginB() : hello B")}}(jQuery),define("plugins/jquery.pluginB",function(){}),define("modules/Carousel",["require","jquery","plugins/jquery.pluginA","plugins/jquery.pluginB"],function(n){n("jquery");n("plugins/jquery.pluginA"),n("plugins/jquery.pluginB");var u=function(n){n.append("Carousel module loaded!")};return u.prototype={},u}),require(["run"],function(){require(["jquery","modules/Carousel"],function(n,u){new u(n(".carousel"))})}),define("page/carousel",function(){});