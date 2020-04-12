!function(t){function e(e){for(var s,a,r=e[0],c=e[1],l=e[2],m=0,p=[];m<r.length;m++)a=r[m],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&p.push(i[a][0]),i[a]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);for(u&&u(e);p.length;)p.shift()();return n.push.apply(n,l||[]),o()}function o(){for(var t,e=0;e<n.length;e++){for(var o=n[e],s=!0,r=1;r<o.length;r++){var c=o[r];0!==i[c]&&(s=!1)}s&&(n.splice(e--,1),t=a(a.s=o[0]))}return t}var s={},i={0:0},n=[];function a(e){if(s[e])return s[e].exports;var o=s[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=s,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)a.d(o,s,function(e){return t[e]}.bind(null,s));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var r=window.webpackJsonp=window.webpackJsonp||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;n.push([8,1]),o()}({7:function(t,e,o){},8:function(t,e,o){"use strict";o.r(e);var s=o(0),i=(o(6),function(t){void 0!==t.remove?t.remove():t.parentNode.removeChild(t)}),n="undefined"!=typeof window?window.HTMLElement:Object,a=new s.a,r={name:"toast",props:{message:{type:String,required:!0},type:{type:String,default:"success"},position:{type:String,default:"bottom-right"},duration:{type:Number,default:3e3},dismissible:{type:Boolean,default:!0},onClose:{type:Function,default:function(){}},onClick:{type:Function,default:function(){}},queue:Boolean,container:{type:[Object,Function,n],default:null}},data:function(){return{isActive:!1,parentTop:null,parentBottom:null}},beforeMount:function(){this.setupContainer()},mounted:function(){this.showNotice(),a.$on("toast.clear",this.close)},methods:{setupContainer:function(){if(this.parentTop=document.querySelector(".notices.is-top"),this.parentBottom=document.querySelector(".notices.is-bottom"),!this.parentTop||!this.parentBottom){this.parentTop||(this.parentTop=document.createElement("div"),this.parentTop.className="notices is-top"),this.parentBottom||(this.parentBottom=document.createElement("div"),this.parentBottom.className="notices is-bottom");var t=this.container||document.body;t.appendChild(this.parentTop),t.appendChild(this.parentBottom);this.container&&(this.parentTop.classList.add("is-custom-parent"),this.parentBottom.classList.add("is-custom-parent"))}},shouldQueue:function(){return!!this.queue&&(this.parentTop.childElementCount>0||this.parentBottom.childElementCount>0)},close:function(){var t=arguments,e=this;clearTimeout(this.timer),this.isActive=!1,setTimeout((function(){e.onClose.apply(null,t),e.$destroy(),i(e.$el)}),150)},showNotice:function(){var t=this;this.shouldQueue()?setTimeout((function(){return t.showNotice()}),250):(this.correctParent.insertAdjacentElement("afterbegin",this.$el),this.isActive=!0,this.timer=setTimeout((function(){return t.close()}),this.duration))},whenClicked:function(){this.dismissible&&(this.onClick.apply(null,arguments),this.close())}},computed:{correctParent:function(){switch(this.position){case"top-right":case"top":case"top-left":return this.parentTop;case"bottom-right":case"bottom":case"bottom-left":return this.parentBottom}},transition:function(){switch(this.position){case"top-right":case"top":case"top-left":return{enter:"fadeInDown",leave:"fadeOut"};case"bottom-right":case"bottom":case"bottom-left":return{enter:"fadeInUp",leave:"fadeOut"}}}}},c=o(1),l=Object(c.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("transition",{attrs:{"enter-active-class":t.transition.enter,"leave-active-class":t.transition.leave}},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.isActive,expression:"isActive"}],staticClass:"toast",class:["toast-"+t.type,"is-"+t.position],attrs:{role:"alert"},on:{click:t.whenClicked}},[o("div",{staticClass:"toast-icon"}),t._v(" "),o("p",{staticClass:"toast-text"},[t._v(t._s(t.message))])])])}),[],!1,null,null,null).exports,u=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{open:function(o){var s;"string"==typeof o&&(s=o);var i={message:s},n=Object.assign({},i,e,o);return new(t.extend(l))({el:document.createElement("div"),propsData:n})},clear:function(){a.$emit("toast.clear")},success:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.open(Object.assign({},{message:t,type:"success"},e))},error:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.open(Object.assign({},{message:t,type:"error"},e))},info:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.open(Object.assign({},{message:t,type:"info"},e))},warning:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.open(Object.assign({},{message:t,type:"warning"},e))},default:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.open(Object.assign({},{message:t,type:"default"},e))}}};l.install=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=u(t,e);t.$toast=o,t.prototype.$toast=o};var m=l;o(7);s.a.use(m);var p={name:"app",data:function(){return{form:{message:"This is a sample message",type:"success",duration:1e4,dismissible:!0,queue:!1,position:"bottom-right",onClick:this.onClick,onClose:this.onClose,container:null},types:["success","error","warning","info","default"],positions:["top","bottom","top-right","bottom-right","top-left","bottom-left"]}},components:{},mounted:function(){this.showAll()},methods:{showAll:function(){var t=this;this.types.forEach((function(e){t.$toast.open({message:"Yet another toast notification!",duration:t.form.duration,type:e})}))},onClick:function(){},onClose:function(){},show:function(){this.$toast.open(this.form)},clearAll:function(){this.$toast.clear()}}},d=Object(c.a)(p,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t._m(0),t._v(" "),o("main",{staticClass:"container"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-8 mb-3"},[o("div",{staticClass:"card"},[o("form",{ref:"demoPanel",staticClass:"card-body",attrs:{method:"post"},on:{submit:function(e){return e.preventDefault(),t.show(e)}}},[o("div",{staticClass:"form-group"},[t._m(1),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.message,expression:"form.message",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",required:"",name:"message"},domProps:{value:t.form.message},on:{input:function(e){e.target.composing||t.$set(t.form,"message",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),t._v(" "),o("div",{staticClass:"form-group"},[o("label",[t._v("Type")]),t._v(" "),o("div",t._l(t.types,(function(e){return o("div",{staticClass:"custom-control custom-radio custom-control-inline"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.type,expression:"form.type"}],staticClass:"custom-control-input",attrs:{type:"radio",id:"radio-type-"+e},domProps:{value:e,checked:t._q(t.form.type,e)},on:{change:function(o){return t.$set(t.form,"type",e)}}}),t._v(" "),o("label",{staticClass:"custom-control-label text-capitalize",attrs:{for:"radio-type-"+e}},[t._v(t._s(e))])])})),0)]),t._v(" "),o("div",{staticClass:"form-group"},[o("label",[t._v("Duration "),o("code",[t._v("("+t._s(t.form.duration/1e3)+" seconds)")])]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model.number",value:t.form.duration,expression:"form.duration",modifiers:{number:!0}}],staticClass:"custom-range",attrs:{type:"range",min:"1",max:"500000"},domProps:{value:t.form.duration},on:{__r:function(e){t.$set(t.form,"duration",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),t._v(" "),o("div",{staticClass:"form-row"},[o("div",{staticClass:"col-md-3"},[o("div",{staticClass:"form-group"},[o("label",[t._v("Dismissible")]),t._v(" "),o("div",{staticClass:"custom-control custom-checkbox"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.dismissible,expression:"form.dismissible"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"checkbox-dismissible"},domProps:{checked:Array.isArray(t.form.dismissible)?t._i(t.form.dismissible,null)>-1:t.form.dismissible},on:{change:function(e){var o=t.form.dismissible,s=e.target,i=!!s.checked;if(Array.isArray(o)){var n=t._i(o,null);s.checked?n<0&&t.$set(t.form,"dismissible",o.concat([null])):n>-1&&t.$set(t.form,"dismissible",o.slice(0,n).concat(o.slice(n+1)))}else t.$set(t.form,"dismissible",i)}}}),t._v(" "),o("label",{staticClass:"custom-control-label",attrs:{for:"checkbox-dismissible"}},[t._v("Close on click")])])])]),t._v(" "),o("div",{staticClass:"col-md-9"},[o("div",{staticClass:"form-group"},[o("label",[t._v("Queue")]),t._v(" "),o("div",{staticClass:"custom-control custom-checkbox"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.queue,expression:"form.queue"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"checkbox-queue"},domProps:{checked:Array.isArray(t.form.queue)?t._i(t.form.queue,null)>-1:t.form.queue},on:{change:function(e){var o=t.form.queue,s=e.target,i=!!s.checked;if(Array.isArray(o)){var n=t._i(o,null);s.checked?n<0&&t.$set(t.form,"queue",o.concat([null])):n>-1&&t.$set(t.form,"queue",o.slice(0,n).concat(o.slice(n+1)))}else t.$set(t.form,"queue",i)}}}),t._v(" "),o("label",{staticClass:"custom-control-label",attrs:{for:"checkbox-queue"}},[t._v("Wait for previous to close before\n                      showing new")])])])])]),t._v(" "),o("div",{staticClass:"form-group"},[o("label",[t._v("Position")]),t._v(" "),o("div",t._l(t.positions,(function(e){return o("div",{staticClass:"custom-control custom-radio custom-control-inline"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.position,expression:"form.position"}],staticClass:"custom-control-input",attrs:{type:"radio",id:"radio-position-"+e},domProps:{value:e,checked:t._q(t.form.position,e)},on:{change:function(o){return t.$set(t.form,"position",e)}}}),t._v(" "),o("label",{staticClass:"custom-control-label text-capitalize",attrs:{for:"radio-position-"+e}},[t._v(t._s(e))])])})),0)]),t._v(" "),o("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Show notification")]),t._v(" "),o("button",{staticClass:"btn btn-outline-info",attrs:{type:"button"},on:{click:t.showAll}},[t._v("Demo all")]),t._v(" "),o("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:t.clearAll}},[t._v("Hide all")])])])]),t._v(" "),t._m(2)])]),t._v(" "),t._m(3)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("nav",{staticClass:"navbar navbar-expand-lg navbar navbar-light bg-white shadow-sm mb-3"},[e("span",{staticClass:"navbar-brand mb-0"},[this._v("Vue.js Toast")]),this._v(" "),e("ul",{staticClass:"navbar-nav ml-auto"},[e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"https://github.com/ankurk91/vue-toast-notification",target:"_blank"}},[this._v(" GitHub")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",[this._v("Message "),e("code",[this._v("(required)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("aside",{staticClass:"col-md-4 mb-3"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-header"},[this._v(" Links")]),this._v(" "),e("div",{staticClass:"card-body"},[e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/ankurk91/vue-toast-notification",target:"_blank"}},[this._v("GitHub")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://www.npmjs.com/package/vue-toast-notification",target:"_blank"}},[this._v("npm")])])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"text-center text-muted small mb-3"},[this._v("\n    Created by "),e("a",{attrs:{href:"https://twitter.com/ankurk91",target:"_blank",rel:"noopener"}},[this._v("@ankurk91")])])}],!1,null,null,null).exports;s.a.config.productionTip=!1,new s.a({el:"#app",render:function(t){return t(d)},created:function(){},mounted:function(){}})}});