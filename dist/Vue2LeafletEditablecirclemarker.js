(function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("leaflet-editablecirclemarker"),require("vue2-leaflet")):"function"==typeof define&&define.amd?define(["leaflet-editablecirclemarker","vue2-leaflet"],t):"object"==typeof exports?exports.Vue2LeafletEditablecirclemarker=t(require("leaflet-editablecirclemarker"),require("vue2-leaflet")):e.Vue2LeafletEditablecirclemarker=t(e["leaflet-editablecirclemarker"],e["vue2-leaflet"])})(this,function(e,t){return function(e){function t(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var r={};return t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=6)}([function(e,t,r){var n=r(2)(r(1),r(3),null,null);e.exports=n.exports},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(5),i=r(4),o=function(e){return e&&e.__esModule?e:{default:e}}(i),a={rad:{type:Number,custom:!0},latLng:{type:[Object,Array],custom:!0},visible:{type:Boolean,custom:!0,default:!0},options:{type:Object,default:function(){return{}}}};t.default={name:"LEditablecirclemarker",props:a,data:function(){return{ready:!1}},mounted:function(){var e=this;this.mapObject=(0,o.default)(this.latLng,this.rad,this.options),this.mapObject.on("moveend",function(t){e.$emit("update:latLng",t.target._latlng)}),n.L.DomEvent.on(this.mapObject,this.$listeners),(0,n.propsBinder)(this,this.mapObject,a),this.ready=!0,this.parentContainer=(0,n.findRealParent)(this.$parent),this.parentContainer.addLayer(this,!this.visible)},beforeDestroy:function(){this.parentContainer.removeLayer(this)},methods:{setVisible:function(e,t){e!=t&&(e?this.parentContainer.addLayer(this):this.parentContainer.removeLayer(this))},setLatLng:function(e){this.mapObject.setLatLng(e)},setRad:function(e){this.mapObject.setRadius(e)}}}},function(e,t){e.exports=function(e,t,r,n){var i,o=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(i=e,o=e.default);var u="function"==typeof o?o.options:o;if(t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns),r&&(u._scopeId=r),n){var s=u.computed||(u.computed={});Object.keys(n).forEach(function(e){var t=n[e];s[e]=function(){return t}})}return{esModule:i,exports:o,options:u}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticStyle:{display:"none"}},[e.ready?e._t("default"):e._e()],2)},staticRenderFns:[]}},function(e,t){e.exports=require("leaflet-editablecirclemarker")},function(e,t){e.exports=require("vue2-leaflet")},function(e,t,r){e.exports=r(0)}])});
//# sourceMappingURL=Vue2LeafletEditablecirclemarker.js.map