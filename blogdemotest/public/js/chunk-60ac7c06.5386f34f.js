(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-60ac7c06"],{"0fd9":function(t,e,n){"use strict";n("99af"),n("4160"),n("caad"),n("13d5"),n("4ec9"),n("b64b"),n("d3b7"),n("ac1f"),n("2532"),n("3ca3"),n("5319"),n("159b"),n("ddb0");var a=n("ade3"),r=n("5530"),i=(n("4b85"),n("2b0e")),s=n("d9f7"),o=n("80d2"),c=["sm","md","lg","xl"],l=["start","end","center"];function u(t,e){return c.reduce((function(n,a){return n[t+Object(o["t"])(a)]=e(),n}),{})}var d=function(t){return[].concat(l,["baseline","stretch"]).includes(t)},f=u("align",(function(){return{type:String,default:null,validator:d}})),v=function(t){return[].concat(l,["space-between","space-around"]).includes(t)},h=u("justify",(function(){return{type:String,default:null,validator:v}})),p=function(t){return[].concat(l,["space-between","space-around","stretch"]).includes(t)},g=u("alignContent",(function(){return{type:String,default:null,validator:p}})),b={align:Object.keys(f),justify:Object.keys(h),alignContent:Object.keys(g)},m={align:"align",justify:"justify",alignContent:"align-content"};function y(t,e,n){var a=m[t];if(null!=n){if(e){var r=e.replace(t,"");a+="-".concat(r)}return a+="-".concat(n),a.toLowerCase()}}var x=new Map;e["a"]=i["a"].extend({name:"v-row",functional:!0,props:Object(r["a"])(Object(r["a"])(Object(r["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d}},f),{},{justify:{type:String,default:null,validator:v}},h),{},{alignContent:{type:String,default:null,validator:p}},g),render:function(t,e){var n=e.props,r=e.data,i=e.children,o="";for(var c in n)o+=String(n[c]);var l=x.get(o);return l||function(){var t,e;for(e in l=[],b)b[e].forEach((function(t){var a=n[t],r=y(e,t,a);r&&l.push(r)}));l.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(a["a"])(t,"align-".concat(n.align),n.align),Object(a["a"])(t,"justify-".concat(n.justify),n.justify),Object(a["a"])(t,"align-content-".concat(n.alignContent),n.alignContent),t)),x.set(o,l)}(),t(n.tag,Object(s["a"])(r,{staticClass:"row",class:l}),i)}})},"132d":function(t,e,n){"use strict";n("7db0"),n("caad"),n("c975"),n("fb6a"),n("45fc"),n("a9e3"),n("2532"),n("498a"),n("c96a");var a,r=n("5530"),i=(n("4804"),n("7e2b")),s=n("a9ad"),o=n("af2b"),c=n("7560"),l=n("80d2"),u=n("2b0e"),d=n("58df");function f(t){return["fas","far","fal","fab","fad"].some((function(e){return t.includes(e)}))}function v(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(function(t){t["xSmall"]="12px",t["small"]="16px",t["default"]="24px",t["medium"]="28px",t["large"]="36px",t["xLarge"]="40px"})(a||(a={}));var h=Object(d["a"])(i["a"],s["a"],o["a"],c["a"]).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium:function(){return!1},hasClickListener:function(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon:function(){var t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),Object(l["s"])(this,t)},getSize:function(){var t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=Object(l["p"])(t).find((function(e){return t[e]}));return e&&a[e]||Object(l["f"])(this.size)},getDefaultData:function(){return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:Object(r["a"])({"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0},this.attrs$),on:this.listeners$}},getSvgWrapperData:function(){var t=this.getSize(),e=Object(r["a"])(Object(r["a"])({},this.getDefaultData()),{},{style:t?{fontSize:t,height:t,width:t}:void 0});return this.applyColors(e),e},applyColors:function(t){t.class=Object(r["a"])(Object(r["a"])({},t.class),this.themeClasses),this.setTextColor(this.color,t)},renderFontIcon:function(t,e){var n=[],a=this.getDefaultData(),r="material-icons",i=t.indexOf("-"),s=i<=-1;s?n.push(t):(r=t.slice(0,i),f(r)&&(r="")),a.class[r]=!0,a.class[t]=!s;var o=this.getSize();return o&&(a.style={fontSize:o}),this.applyColors(a),e(this.hasClickListener?"button":this.tag,a,n)},renderSvgIcon:function(t,e){var n={class:"v-icon__svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":!0}},a=this.getSize();return a&&(n.style={fontSize:a,height:a,width:a}),e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e("svg",n,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent:function(t,e){var n={class:{"v-icon__component":!0}},a=this.getSize();a&&(n.style={fontSize:a,height:a,width:a}),this.applyColors(n);var r=t.component;return n.props=t.props,n.nativeOn=n.on,e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e(r,n)])}},render:function(t){var e=this.getIcon();return"string"===typeof e?v(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}});e["a"]=u["a"].extend({name:"v-icon",$_wrapperFor:h,functional:!0,render:function(t,e){var n=e.data,a=e.children,r="";return n.domProps&&(r=n.domProps.textContent||n.domProps.innerHTML||r,delete n.domProps.textContent,delete n.domProps.innerHTML),t(h,n,r?[r]:a)}})},4804:function(t,e,n){},"4ec9":function(t,e,n){"use strict";var a=n("6d61"),r=n("6566");t.exports=a("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),r)},"62ad":function(t,e,n){"use strict";n("4160"),n("caad"),n("13d5"),n("45fc"),n("4ec9"),n("a9e3"),n("b64b"),n("d3b7"),n("ac1f"),n("3ca3"),n("5319"),n("2ca0"),n("159b"),n("ddb0");var a=n("ade3"),r=n("5530"),i=(n("4b85"),n("2b0e")),s=n("d9f7"),o=n("80d2"),c=["sm","md","lg","xl"],l=function(){return c.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),u=function(){return c.reduce((function(t,e){return t["offset"+Object(o["t"])(e)]={type:[String,Number],default:null},t}),{})}(),d=function(){return c.reduce((function(t,e){return t["order"+Object(o["t"])(e)]={type:[String,Number],default:null},t}),{})}(),f={col:Object.keys(l),offset:Object.keys(u),order:Object.keys(d)};function v(t,e,n){var a=t;if(null!=n&&!1!==n){if(e){var r=e.replace(t,"");a+="-".concat(r)}return"col"!==t||""!==n&&!0!==n?(a+="-".concat(n),a.toLowerCase()):a.toLowerCase()}}var h=new Map;e["a"]=i["a"].extend({name:"v-col",functional:!0,props:Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])({cols:{type:[Boolean,String,Number],default:!1}},l),{},{offset:{type:[String,Number],default:null}},u),{},{order:{type:[String,Number],default:null}},d),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,r=e.data,i=e.children,o=(e.parent,"");for(var c in n)o+=String(n[c]);var l=h.get(o);return l||function(){var t,e;for(e in l=[],f)f[e].forEach((function(t){var a=n[t],r=v(e,t,a);r&&l.push(r)}));var r=l.some((function(t){return t.startsWith("col-")}));l.push((t={col:!r||!n.cols},Object(a["a"])(t,"col-".concat(n.cols),n.cols),Object(a["a"])(t,"offset-".concat(n.offset),n.offset),Object(a["a"])(t,"order-".concat(n.order),n.order),Object(a["a"])(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),h.set(o,l)}(),t(n.tag,Object(s["a"])(r,{class:l}),i)}})},6566:function(t,e,n){"use strict";var a=n("9bf2").f,r=n("7c73"),i=n("e2cc"),s=n("0366"),o=n("19aa"),c=n("2266"),l=n("7dd0"),u=n("2626"),d=n("83ab"),f=n("f183").fastKey,v=n("69f3"),h=v.set,p=v.getterFor;t.exports={getConstructor:function(t,e,n,l){var u=t((function(t,a){o(t,u,e),h(t,{type:e,index:r(null),first:void 0,last:void 0,size:0}),d||(t.size=0),void 0!=a&&c(a,t[l],t,n)})),v=p(e),g=function(t,e,n){var a,r,i=v(t),s=b(t,e);return s?s.value=n:(i.last=s={index:r=f(e,!0),key:e,value:n,previous:a=i.last,next:void 0,removed:!1},i.first||(i.first=s),a&&(a.next=s),d?i.size++:t.size++,"F"!==r&&(i.index[r]=s)),t},b=function(t,e){var n,a=v(t),r=f(e);if("F"!==r)return a.index[r];for(n=a.first;n;n=n.next)if(n.key==e)return n};return i(u.prototype,{clear:function(){var t=this,e=v(t),n=e.index,a=e.first;while(a)a.removed=!0,a.previous&&(a.previous=a.previous.next=void 0),delete n[a.index],a=a.next;e.first=e.last=void 0,d?e.size=0:t.size=0},delete:function(t){var e=this,n=v(e),a=b(e,t);if(a){var r=a.next,i=a.previous;delete n.index[a.index],a.removed=!0,i&&(i.next=r),r&&(r.previous=i),n.first==a&&(n.first=r),n.last==a&&(n.last=i),d?n.size--:e.size--}return!!a},forEach:function(t){var e,n=v(this),a=s(t,arguments.length>1?arguments[1]:void 0,3);while(e=e?e.next:n.first){a(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!b(this,t)}}),i(u.prototype,n?{get:function(t){var e=b(this,t);return e&&e.value},set:function(t,e){return g(this,0===t?0:t,e)}}:{add:function(t){return g(this,t=0===t?0:t,t)}}),d&&a(u.prototype,"size",{get:function(){return v(this).size}}),u},setStrong:function(t,e,n){var a=e+" Iterator",r=p(e),i=p(a);l(t,e,(function(t,e){h(this,{type:a,target:t,state:r(t),kind:e,last:void 0})}),(function(){var t=i(this),e=t.kind,n=t.last;while(n&&n.removed)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),u(e)}}},"6d61":function(t,e,n){"use strict";var a=n("23e7"),r=n("da84"),i=n("94ca"),s=n("6eeb"),o=n("f183"),c=n("2266"),l=n("19aa"),u=n("861d"),d=n("d039"),f=n("1c7e"),v=n("d44e"),h=n("7156");t.exports=function(t,e,n){var p=-1!==t.indexOf("Map"),g=-1!==t.indexOf("Weak"),b=p?"set":"add",m=r[t],y=m&&m.prototype,x=m,j={},O=function(t){var e=y[t];s(y,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(g&&!u(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return g&&!u(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(g&&!u(t))&&e.call(this,0===t?0:t)}:function(t,n){return e.call(this,0===t?0:t,n),this})};if(i(t,"function"!=typeof m||!(g||y.forEach&&!d((function(){(new m).entries().next()})))))x=n.getConstructor(e,t,p,b),o.REQUIRED=!0;else if(i(t,!0)){var S=new x,w=S[b](g?{}:-0,1)!=S,C=d((function(){S.has(1)})),k=f((function(t){new m(t)})),z=!g&&d((function(){var t=new m,e=5;while(e--)t[b](e,e);return!t.has(-0)}));k||(x=e((function(e,n){l(e,x,t);var a=h(new m,e,x);return void 0!=n&&c(n,a[b],a,p),a})),x.prototype=y,y.constructor=x),(C||z)&&(O("delete"),O("has"),p&&O("get")),(z||w)&&O(b),g&&y.clear&&delete y.clear}return j[t]=x,a({global:!0,forced:x!=m},j),v(x,t),g||n.setStrong(x,t,p),x}},f5bd:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[t._t("default")],2),t._l(t.paginatedArticles,(function(e,a){return n("feed-card",{key:e.title,attrs:{size:t.layout[a],value:e}})}))],2),n("v-row",{attrs:{align:"center"}},[n("v-col",{attrs:{cols:"3"}},[1!==t.page?n("base-btn",{staticClass:"ml-0",attrs:{square:"",title:"Previous page"},on:{click:function(e){t.page--}}},[n("v-icon",[t._v("mdi-chevron-left")])],1):t._e()],1),n("v-col",{staticClass:"text-center subheading",attrs:{cols:"6"}},[t._v(" PAGE "+t._s(t.page)+" OF "+t._s(t.pages)+" ")]),n("v-col",{staticClass:"text-right",attrs:{cols:"3"}},[t.pages>1&&t.page<t.pages?n("base-btn",{staticClass:"mr-0",attrs:{square:"",title:"Next page"},on:{click:function(e){t.page++}}},[n("v-icon",[t._v("mdi-chevron-right")])],1):t._e()],1)],1)],1)},r=[],i=(n("fb6a"),n("d3b7"),n("5530")),s=n("2f62"),o={name:"Feed",components:{FeedCard:function(){return n.e("chunk-0bc1246a").then(n.bind(null,"eb3a"))}},data:function(){return{layout:[2,2,1,2,2,3,3,3,3,3,3],page:1}},computed:Object(i["a"])(Object(i["a"])({},Object(s["d"])(["articles"])),{},{pages:function(){return Math.ceil(this.articles.length/11)},paginatedArticles:function(){var t=11*(this.page-1),e=11*this.page;return this.articles.slice(t,e)}}),watch:{page:function(){window.scrollTo(0,0)}}},c=o,l=n("2877"),u=n("6544"),d=n.n(u),f=n("62ad"),v=n("a523"),h=n("132d"),p=n("0fd9"),g=Object(l["a"])(c,a,r,!1,null,null,null);e["default"]=g.exports;d()(g,{VCol:f["a"],VContainer:v["a"],VIcon:h["a"],VRow:p["a"]})}}]);
//# sourceMappingURL=chunk-60ac7c06.5386f34f.js.map