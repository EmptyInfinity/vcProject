(function(e){function t(t){for(var r,o,i=t[0],c=t[1],u=t[2],l=0,m=[];l<i.length;l++)o=i[l],s[o]&&m.push(s[o][0]),s[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(m.length)m.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==s[c]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},s={app:0},a=[];function o(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"3ad938a0"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=s[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=s[e]=[t,r]});t.push(n[2]=r);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=o(e),a=function(t){c.onerror=c.onload=null,clearTimeout(u);var n=s[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,o=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");o.type=r,o.request=a,n[1](o)}s[e]=void 0}};var u=setTimeout(function(){a({type:"timeout",target:c})},12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var d=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"29d2":function(e,t,n){},"43e9":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container-fluid",attrs:{id:"app"}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/users"}},[e._v("Users")]),e._v("|\n        "),n("router-link",{attrs:{to:"/about"}},[e._v("About")])],1)])]),n("router-view")],1)},a=[],o={},i=o,c=(n("5c0b"),n("2877")),u=Object(c["a"])(i,s,a,!1,null,null,null),l=u.exports,d=n("8c4f"),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"users"},[n("HelloWorld",{attrs:{msg:"Users CRUD"}}),e.updatingModal?n("form",{staticClass:"myModal",on:{submit:function(t){return t.preventDefault(),e.submitEditUser()}}},[n("h3",[e._v("Enter new data:")]),n("div",{staticClass:"d-flex mb-3"},[n("div",{staticClass:"mr-2"},[n("span",[e._v("Name:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newName,expression:"newName"}],attrs:{type:"text"},domProps:{value:e.newName},on:{input:function(t){t.target.composing||(e.newName=t.target.value)}}})]),n("div",[n("span",[e._v("Location:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newLocation,expression:"newLocation"}],attrs:{type:"text"},domProps:{value:e.newLocation},on:{input:function(t){t.target.composing||(e.newLocation=t.target.value)}}})])]),e.errorLength?n("p",{staticClass:"error"},[e._v("Name and location must be at list 2 letters length!")]):e._e(),n("input",{staticClass:"btn btn-success",attrs:{type:"submit",value:"Save"}}),n("div",{staticClass:"closeModal",on:{click:function(t){e.updatingModal=!1}}},[e._v("x")])]):e._e(),n("div",{staticClass:"wrap d-flex flex-column"},[n("form",{staticClass:"d-flex flex-column mb-3",on:{submit:function(t){return t.preventDefault(),e.submitAddUser()}}},[n("h3",[e._v("Add user")]),n("div",{staticClass:"d-flex mb-2"},[n("label",{staticClass:"mr-2",attrs:{for:"name"}},[e._v("Name:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newUserName,expression:"newUserName"}],attrs:{type:"text",id:"name",required:""},domProps:{value:e.newUserName},on:{input:function(t){t.target.composing||(e.newUserName=t.target.value)}}})]),n("div",{staticClass:"d-flex mb-2"},[n("label",{staticClass:"mr-2",attrs:{for:"location"}},[e._v("Location:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newUserLocation,expression:"newUserLocation"}],attrs:{type:"text",id:"location",required:""},domProps:{value:e.newUserLocation},on:{input:function(t){t.target.composing||(e.newUserLocation=t.target.value)}}})]),n("div",{staticClass:"d-flex mb-2"},[n("label",{staticClass:"mr-2",attrs:{for:"currency"}},[e._v("Curency:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newUserCurency,expression:"newUserCurency"}],attrs:{type:"number",min:"0",required:""},domProps:{value:e.newUserCurency},on:{input:function(t){t.target.composing||(e.newUserCurency=t.target.value)}}})]),n("input",{attrs:{type:"submit",value:"Add"}})]),n("div",{staticClass:"search d-flex flex-column text-left"},[n("h3",[e._v("Search")]),n("div",{staticClass:"d-flex"},[n("label",{staticClass:"mr-2",attrs:{for:"name"}},[e._v("Name:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",id:"name"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),n("div",{staticClass:"d-flex"},[n("label",{staticClass:"mr-2",attrs:{for:"location"}},[e._v("Location:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.location,expression:"location"}],attrs:{type:"text",id:"location"},domProps:{value:e.location},on:{input:function(t){t.target.composing||(e.location=t.target.value)}}})]),n("label",{attrs:{for:"currency"}},[e._v("Curency:")]),n("div",{staticClass:"currency d-flex mb-3"},[n("div",{staticClass:"w-50 mr-3"},[n("span",[e._v("From:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.currencyFrom,expression:"currencyFrom"}],staticClass:"mb-0",attrs:{type:"number",id:"currencyFrom"},domProps:{value:e.currencyFrom},on:{input:function(t){t.target.composing||(e.currencyFrom=t.target.value)}}})]),n("div",{staticClass:"w-50"},[n("span",[e._v("To:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.currencyTo,expression:"currencyTo"}],staticClass:"mb-0",attrs:{type:"number",id:"currencyTo"},domProps:{value:e.currencyTo},on:{input:function(t){t.target.composing||(e.currencyTo=t.target.value)}}})])])]),n("table",{staticClass:"users-list mr-3 mb-5"},[n("thead",[n("tr",[n("td"),n("td",[n("div",{staticClass:"d-flex justify-content-center"},[n("span",{staticClass:"mr-2"},[e._v("Name")]),n("div",{staticClass:"arrowToggle",class:{reverse:e.sortNameDesc},on:{click:function(t){return e.sortName()}}})])]),n("td",[n("div",{staticClass:"d-flex justify-content-center"},[n("span",{staticClass:"mr-2"},[e._v("Location")]),n("div",{staticClass:"arrowToggle",class:{reverse:e.sortLocationDesc},on:{click:function(t){return e.sortLocation()}}})])]),n("td",[e._v("Currency")]),n("td"),n("td"),n("td")])]),n("tbody",[e._l(e.usersFiltered,function(t,r){return n("tr",{key:++r},[n("td",[n("p",[e._v(e._s(r))])]),n("td",[n("p",[e._v(e._s(t.name))])]),n("td",[n("p",[e._v(e._s(t.location))])]),n("td",[n("p",[e._v(e._s(t.currency))])]),n("td",{staticClass:"edit",attrs:{title:"edit"},on:{click:function(t){return e.editUser(r)}}}),n("td",{staticClass:"eye",attrs:{title:"view details"},on:{click:function(n){return e.viewUser(t._id)}}}),n("td",{staticClass:"delete",attrs:{title:"delete"},on:{click:function(t){return e.deleteUser(r)}}})])}),n("tr",[n("td",{staticClass:"text-center",attrs:{colspan:"7"}},[e._v("currency sum: "+e._s(e.currencySum))])])],2)])])],1)},f=[],p=(n("6762"),n("2fdb"),n("55dd"),n("ac4d"),n("8a81"),n("ac6a"),n("7f7f"),n("bd86")),v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",{staticClass:"text-center"},[e._v(e._s(e.msg))])])},h=[],y={name:"HelloWorld",props:{msg:String}},w=y,b=(n("9405"),Object(c["a"])(w,v,h,!1,null,"02181ea4",null)),g=b.exports,C={name:"users",components:{HelloWorld:g},data:function(){return Object(p["a"])({users:[],name:"",location:"",currencyFrom:0,currencyTo:0,isMenuOpen:!1,maxCurrency:null,sortNameDesc:!0,sortLocationDesc:!0,newName:"",newLocation:"",updatingModal:!1,editedUserId:null,errorLength:!1,newUserName:"",newUserLocation:"",newUserCurency:null},"newUserName","")},methods:{submitAddUser:function(){var e=this;this.axios.post("".concat(this.$store.state.domen,"/users"),{name:this.newUserName,location:this.newUserLocation,currency:this.newUserCurency}).then(function(t){return e.users.push(t.data)}).catch(function(e){return console.log(e)})},viewUser:function(e){this.$store.commit("setUserId",e),window.location="".concat(e)},editUser:function(e){this.updatingModal=!0,this.editedUserId=e;var t=[this.usersFiltered[--e].name,this.usersFiltered[e].location];this.newName=t[0],this.newLocation=t[1]},deleteUser:function(e){var t=this.users[--e];this.users.splice(e,1),this.axios.delete("".concat(this.$store.state.domen,"/users/").concat(t._id)).catch(function(e){return console.log(e)})},submitEditUser:function(){var e=this,t=this.usersFiltered[--this.editedUserId];if(this.errorLength=!1,this.newName.length<2||this.newLocation.length<2)return this.errorLength=!0;this.newName===t.name&&this.newLocation===t.location||(this.updatingModal=!1,this.axios.put("".concat(this.$store.state.domen,"/users"),{id:t.id,name:this.newName,location:this.newLocation}).then(function(t){var n=!0,r=!1,s=void 0;try{for(var a,o=e.usersFiltered[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var i=a.value;if(i.id===t.data.id){var c=[t.data.name,t.data.location];i.name=c[0],i.location=c[1]}}}catch(u){r=!0,s=u}finally{try{n||null==o.return||o.return()}finally{if(r)throw s}}}).catch(function(e){return console.log(e)}))},sortName:function(){if(this.updatingModal)return!1;this.sortNameDesc?(this.users.sort(function(e,t){return t.name.localeCompare(e.name)}),this.sortNameDesc=!1):(this.users.sort(function(e,t){return e.name.localeCompare(t.name)}),this.sortNameDesc=!0)},sortLocation:function(){if(this.updatingModal)return!1;this.sortLocationDesc?(this.users.sort(function(e,t){return t.location.localeCompare(e.location)}),this.sortLocationDesc=!1):(this.users.sort(function(e,t){return e.location.localeCompare(t.location)}),this.sortLocationDesc=!0)}},created:function(){var e=this;fetch("".concat(this.$store.state.domen,"/users")).then(function(e){return e.json()}).then(function(t){e.maxCurrency=t[0].currency,t.forEach(function(t){e.users.push(t),t.currency>e.maxCurrency&&(e.maxCurrency=t.currency)}),e.currencyTo=e.maxCurrency})},computed:{currencySum:function(){var e=0;return this.usersFiltered.forEach(function(t){return e+=t.currency}),e},usersFiltered:function(){var e=this;return this.users.filter(function(t){return t.name.toLowerCase().includes(e.name.toLowerCase())&&t.location.toLowerCase().includes(e.location.toLowerCase())&&t.currency>e.currencyFrom&&t.currency<e.currencyTo})}}},_=C,x=(n("fca4"),Object(c["a"])(_,m,f,!1,null,"5f42d232",null)),N=x.exports,U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("Name: "+e._s(e.user.name))]),n("p",[e._v("Location: "+e._s(e.user.location))]),n("p",[e._v("Currency: "+e._s(e.user.currency))]),e.user.id?n("p",[e._v("ID: "+e._s(e.user.id))]):n("p",[e._v("MongoID: "+e._s(e.user._id))])])},L=[],j=(n("28a5"),{name:"User",data:function(){return{user:{}}},created:function(){var e=this,t=this.$store.state.id||window.location.href.split("users/")[1];fetch("http://localhost:3000/users/".concat(t)).then(function(e){return e.json()}).then(function(t){return e.user=t[0]})}}),P=j,T=Object(c["a"])(P,U,L,!1,null,null,null),D=T.exports;r["a"].use(d["a"]);var F=new d["a"]({routes:[{path:"/users",name:"users",component:N},{path:"/users/:id",name:"user",component:D},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),M=n("2f62");r["a"].use(M["a"]);var O=new M["a"].Store({state:{id:null,domen:"http://localhost:3000"},mutations:{setUserId:function(e,t){e.id=t}},actions:{}}),k=(n("29d2"),n("bc3a")),S=n.n(k),E=n("a7fe"),$=n.n(E);r["a"].use($.a,S.a),r["a"].config.productionTip=!1,new r["a"]({router:F,store:O,render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("5e27"),s=n.n(r);s.a},"5e27":function(e,t,n){},9405:function(e,t,n){"use strict";var r=n("43e9"),s=n.n(r);s.a},"9bd1":function(e,t,n){},fca4:function(e,t,n){"use strict";var r=n("9bd1"),s=n.n(r);s.a}});
//# sourceMappingURL=app.7199ddc4.js.map