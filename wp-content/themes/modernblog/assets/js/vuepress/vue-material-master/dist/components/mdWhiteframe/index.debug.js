!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueMaterial=t():e.VueMaterial=t()}(this,function(){return function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var o={};return t.m=e,t.c=o,t.p="/",t(0)}({0:function(e,t,o){e.exports=o(94)},94:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e){e.component("md-whiteframe",e.extend(i.default))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var u=o(279),i=n(u);e.exports=t.default},149:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{mdElevation:{type:[String,Number],default:1},mdTag:{type:String,default:"div"}},computed:{classes:function(){var e=parseInt(this.mdElevation,10),t="md-whiteframe-";return isNaN(e)||"number"!=typeof e?this.mdElevation.indexOf("dp")>-1&&(t+=this.mdElevation):(t+=e,t+="dp"),t}},render:function(e){return e(this.mdTag,{staticClass:"md-whiteframe",class:this.classes},this.$slots.default)}},e.exports=t.default},177:function(e,t){},279:function(e,t,o){var n,r;o(177),n=o(149),r=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(r=n=n.default),"function"==typeof r&&(r=r.options),e.exports=n}})});
//# sourceMappingURL=index.debug.js.map