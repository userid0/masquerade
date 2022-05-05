module.exports=function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=22)}([,function(t,e){t.exports=flarum.core.compat["common/Model"]},function(t,e){t.exports=flarum.core.compat["forum/app"]},function(t,e,n){"use strict";function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function r(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,i(t,e)}n.d(e,"a",(function(){return r}))},function(t,e){t.exports=flarum.core.compat["common/helpers/icon"]},function(t,e){t.exports=flarum.core.compat["common/components/Button"]},function(t,e){t.exports=flarum.core.compat["common/Component"]},function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n(3),r=n(1),o=n.n(r),a=function(t){function e(){for(var e,n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))||this).name=o.a.attribute("name"),e.description=o.a.attribute("description"),e.type=o.a.attribute("type"),e.validation=o.a.attribute("validation"),e.required=o.a.attribute("required"),e.prefix=o.a.attribute("prefix"),e.icon=o.a.attribute("icon"),e.sort=o.a.attribute("sort"),e.deleted_at=o.a.attribute("deleted_at",o.a.transformDate),e.answer=o.a.hasOne("answer"),e.on_bio=o.a.attribute("on_bio"),e}return Object(i.a)(e,t),e.prototype.apiEndpoint=function(){return"/game/fields"+(this.exists?"/"+this.data.id:"")},e}(o.a)},function(t,e){t.exports=flarum.core.compat["common/components/Select"]},,function(t,e){t.exports=flarum.core.compat["common/extend"]},function(t,e){t.exports=flarum.core.compat["forum/components/UserPage"]},function(t,e){t.exports=flarum.core.compat["common/models/User"]},,function(t,e){t.exports=flarum.core.compat["common/app"]},function(t,e){t.exports=flarum.core.compat["common/utils/computed"]},function(t,e){t.exports=flarum.core.compat["common/components/LinkButton"]},function(t,e){t.exports=flarum.core.compat["common/components/LoadingIndicator"]},function(t,e){t.exports=flarum.core.compat["common/components/Link"]},function(t,e){t.exports=flarum.core.compat["forum/components/UserCard"]},,,function(t,e,n){"use strict";n.r(e),n.d(e,"components",(function(){return H})),n.d(e,"types",(function(){return J}));var i=n(2),r=n.n(i),o=n(12),a=n.n(o),s=n(7),u=n(3),l=n(14),f=n.n(l),c=n(1),d=n.n(c),p=n(15),h=n.n(p),v=function(t){function e(){for(var e,n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))||this).content=d.a.attribute("content"),e.fieldId=d.a.attribute("fieldId"),e.field=h()("fieldId",(function(t){return f.a.store.getById("game-field",t)})),e.userId=d.a.attribute("user_id"),e}return Object(u.a)(e,t),e}(d.a),y=n(10),b=n(16),w=n.n(b),g=n(11),x=n.n(g),A=n(17),F=n.n(A),O=n(6),_=n.n(O),C=n(4),j=n.n(C),P=function(){function t(t){var e=t.field,n=t.set,i=t.value;this.field=e,this.set=n,this.value=i}var e=t.prototype;return e.readAttribute=function(t,e){return"function"==typeof t[e]?t[e]():t[e]},e.validationRules=function(){return this.readAttribute(this.field,"validation").split("|")},e.validationRule=function(t){var e=null;return this.validationRules().forEach((function(n){var i=n.split(":",2);i[0]===t&&(e=i[1])})),e},e.editorField=function(){return m("div",{class:"Form-group Field"},m("label",null,this.field.icon()?[j()(this.field.icon())," "]:null," ",this.field.name()," ",this.field.required()?"*":null),m("div",{class:"FormField"},this.field.prefix()?m(".prefix",this.field.prefix()):null,this.editorInput(),this.field.description()?m("div",{class:"helpText"},this.field.description()):null))},e.editorInput=function(){return m("input",this.editorInputAttrs())},e.editorInputAttrs=function(){var t=this;return{className:"FormControl",oninput:function(e){t.set(e.target.value)},value:this.value,required:this.field.required()}},e.answerField=function(){var t=this.readAttribute(this.field,"icon");return m("div",{className:"Game-Bio-Set"+(this.hasAnswer()?"":" Game-Bio-Set--empty")},m("span",{class:"Game-Bio-Field"},t&&m("[",null,j()(t)," "),this.readAttribute(this.field,"name"),":"," "),m("span",{class:"Game-Bio-Answer"},this.answerContent()))},e.answerContent=function(){return this.value},e.hasAnswer=function(){var t=this.answerContent();return null!==t&&("object"==typeof t?!!Object.keys(t).length:!(null==t||!t.length))},t.isNoOptionSelectedValue=function(t){return null===t||""===t},t}(),I=function(t){function e(){return t.apply(this,arguments)||this}Object(u.a)(e,t);var n=e.prototype;return n.editorInput=function(){var t=this;return this.options().map((function(e){return m("div",m("label",[m("input[type=radio]",{checked:e.selected(t.value),onclick:function(){t.set(e.key)}})," "+e.label]))}))},n.options=function(){var t=[];return this.readAttribute(this.field,"required")||t.push({selected:function(t){return P.isNoOptionSelectedValue(t)},key:null,label:app.translator.trans("fof-game.forum.fields.select.none-optional")}),t.push({selected:function(t){return-1!==["true","1",1,!0,"yes"].indexOf(t)},key:"true",label:app.translator.trans("fof-game.forum.fields.boolean.yes")}),t.push({selected:function(t){return-1!==["false","0",0,!1,"no"].indexOf(t)},key:"false",label:app.translator.trans("fof-game.forum.fields.boolean.no")}),P.isNoOptionSelectedValue(this.value)||-1!==["true","1",1,!0,"yes","false","0",0,!1,"no"].indexOf(this.value)||t.push({selected:function(){return!0},key:this.value,label:"(invalid) "+this.value}),t},n.answerContent=function(){return P.isNoOptionSelectedValue(this.value)?"":-1!==[1,"1",!0,"true","yes"].indexOf(this.value)?[j()("far fa-check-square")," ",app.translator.trans("fof-game.forum.fields.boolean.yes")]:[j()("far fa-square")," ",app.translator.trans("fof-game.forum.fields.boolean.no")]},e}(P),B=n(5),S=n.n(B),G=function(t){function e(){return t.apply(this,arguments)||this}Object(u.a)(e,t);var n=e.prototype;return n.editorInputAttrs=function(){var e=t.prototype.editorInputAttrs.call(this);return e.type="email",e.placeholder="you@example.com",e},n.answerContent=function(){var t=this,e=this.value;if(!e)return null;var n=e.split(/@|\./).map((function(t){return t.replace(/(.{2})./g,"$1*")})).join("*");return S.a.component({onclick:function(){return t.mailTo()},className:"Button Button--text",icon:"far fa-envelope"},n)},n.mailTo=function(){window.location="mailto:"+this.value},e}(P),N=n(8),V=n.n(N),q=function(t){function e(){return t.apply(this,arguments)||this}Object(u.a)(e,t);var n=e.prototype;return n.editorInput=function(){var t=this;return V.a.component({onchange:function(e){"fof_game_no_option_selected"===e&&(e=null),t.set(e)},value:P.isNoOptionSelectedValue(this.value)?"fof_game_no_option_selected":this.value,options:this.options()})},n.options=function(){var t={};this.readAttribute(this.field,"required")?P.isNoOptionSelectedValue(this.value)&&(t.fof_game_no_option_selected=app.translator.trans("fof-game.forum.fields.select.none-required")):t.fof_game_no_option_selected=app.translator.trans("fof-game.forum.fields.select.none-optional");var e=this.validationRule("in");return e&&e.split(",").forEach((function(e){t[e]=e})),P.isNoOptionSelectedValue(this.value)||void 0!==t[this.value]||(t[this.value]="(invalid) "+this.value),t},e}(P),k=function(t){function e(){return t.apply(this,arguments)||this}Object(u.a)(e,t);var n=e.prototype;return n.editorInputAttrs=function(){var e=t.prototype.editorInputAttrs.call(this);return e.type="url",e.placeholder="https://example.com",e},n.answerContent=function(){var t=this,e=this.value;return e?S.a.component({onclick:function(){return t.to()},className:"Button Button--text",icon:"fas fa-link"},e.replace(/^https?:\/\//,"")):null},n.to=function(){window.open().location=this.value},e}(P),E=function(){function t(t){var e=t.field,n=t.set,i=t.value;this.field=e,this.set=n,this.value=i}var e=t.prototype;return e.readAttribute=function(t,e){return"function"==typeof t[e]?t[e]():t[e]},e.validationRules=function(){return this.readAttribute(this.field,"validation").split("|")},e.validationRule=function(t){var e=null;return this.validationRules().forEach((function(n){var i=n.split(":",2);i[0]===t&&(e=i[1])})),e},e.editorField=function(){return m("div",{class:"Form-group Field"},m("label",null,this.field.icon()?[j()(this.field.icon())," "]:null," ",this.field.name()," ",this.field.required()?"*":null),m("div",{class:"FormField"},this.field.prefix()?m(".prefix",this.field.prefix()):null,this.editorInput(),this.field.description()?m("div",{class:"helpText"},this.field.description()):null))},e.editorInput=function(){return m("input",this.editorInputAttrs())},e.editorInputAttrs=function(){var t=this;return{className:"FormControl",oninput:function(e){t.set(e.target.value)},type:"password",value:this.value,required:this.field.required()}},e.answerField=function(){var t=this.readAttribute(this.field,"icon");return m("div",{className:"Game-Bio-Set"+(this.hasAnswer()?"":" Game-Bio-Set--empty")},m("span",{class:"Game-Bio-Field"},t&&m("[",null,j()(t)," "),this.readAttribute(this.field,"name"),":"," "),m("span",{class:"Game-Bio-Answer"},this.answerContent()))},e.answerContent=function(){return this.value},e.hasAnswer=function(){var t=this.answerContent();return null!==t&&("object"==typeof t?!!Object.keys(t).length:!(null==t||!t.length))},t.isNoOptionSelectedValue=function(t){return null===t||""===t},t}(),R=function(){function t(){}return t.typeForField=function(t){var e=t.field,n=t.set,i=void 0===n?void 0:n,r=t.value,o=P,a=this.identify(e);return a&&(o=this.types()[a]),new o({field:e,set:i,value:r})},t.fieldAttribute=function(t,e){return"function"==typeof t[e]?t[e]():t[e]},t.types=function(){return{boolean:I,email:G,select:q,url:k,password:E}},t.identify=function(t){var e=this,n=(this.fieldAttribute(t,"validation")||"").split(","),i=null,r=this.fieldAttribute(t,"type");return void 0!==this.types()[r]?r:(n.forEach((function(t){t=t.trim(),void 0!==e.types()[t]&&(i=t)})),i)},t}(),M=function(t){function e(){for(var e,n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))||this).answers=void 0,e.user=void 0,e}Object(u.a)(e,t);var n=e.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e),this.loading=!0,this.answers=[],this.user=this.attrs.user,this.load(this.user)},n.view=function(){var t=this;return m("div",{class:"Game-Bio"},m("div",{class:"Fields"},r.a.store.all("game-field").sort((function(t,e){return t.sort()-e.sort()})).map((function(e){var n=t.answers.find((function(t){return t.field().id()===e.id()}));return t.field(e,(null==n?void 0:n.content())||"")}))))},n.field=function(t,e){return R.typeForField({field:t,value:e}).answerField()},n.load=function(){var t=this;this.answers=this.user.gameAnswers(),!1===this.answers&&(this.answers=[],r.a.store.find("users",this.user.id(),{include:"gameAnswers"}).then((function(){t.answers=t.user.gameAnswers(),m.redraw()}))),m.redraw()},e}(_.a),T=n(18),U=n.n(T),L=function(t){function e(){return t.apply(this,arguments)||this}Object(u.a)(e,t);var n=e.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e),this.loading=!0,this.enforceProfileCompletion=r.a.forum.attribute("game.force-profile-completion")||!1,this.profileCompleted=r.a.forum.attribute("game.profile-completed")||!1,this.profileNowCompleted=!1,this.answers=[],this.answerValues={},this.user=this.attrs.user,this.load(),this.dirty=!this.profileCompleted},n.view=function(){var t=this;return m("form",{class:"ProfileConfigurePane",onsubmit:this.update.bind(this)},!(!this.enforceProfileCompletion||this.profileCompleted)&&m("div",{class:"Alert Alert--Error"},r.a.translator.trans("fof-game.forum.alerts.profile-completion-required")),m("div",{class:"Fields"},r.a.store.all("game-field").sort((function(t,e){return t.sort()-e.sort()})).map((function(e){return t.field(e)}))),m(S.a,{type:"submit",className:"Button Button--primary",loading:this.loading,disabled:!this.dirty},r.a.translator.trans("fof-game.forum.buttons.save-profile")),!!this.profileNowCompleted&&m("span",{class:"Game-NowCompleted"},r.a.translator.trans("fof-game.forum.alerts.profile-completed",{a:m(U.a,{href:r.a.route("index")})})))},n.field=function(t){return R.typeForField({field:t,set:this.set.bind(this,t),value:this.answerValues[t.id()]}).editorField()},n.load=function(){var t=this;this.answers=this.user.gameAnswers(),!1===this.answers?(this.answers=[],r.a.store.find("users",this.user.id(),{include:"gameAnswers"}).then((function(){t.answers=t.user.gameAnswers(),t.answerValues={},r.a.store.all("game-field").forEach((function(e){var n=t.answers.find((function(t){return t.field().id()===e.id()}));t.answerValues[e.id()]=n?n.content():""})),t.loading=!1,m.redraw()}))):(this.loading=!1,r.a.store.all("game-field").forEach((function(e){var n=t.answers.find((function(t){return t.field().id()===e.id()}));t.answerValues[e.id()]=n?n.content():""}))),m.redraw()},n.set=function(t,e){this.answerValues[t.id()]=e,this.dirty=!0},n.update=function(t){var e=this;t.preventDefault(),this.loading=!0,r.a.request({method:"POST",url:r.a.forum.attribute("apiUrl")+"/game/configure/"+this.user.id(),body:this.answerValues}).then((function(t){e.dirty=!1,e.profileCompleted||(e.profileCompleted=!0,e.profileNowCompleted=!0),e.parseResponse(t)})).catch((function(){e.loading=!1,m.redraw()}))},n.parseResponse=function(t){this.answers=r.a.store.pushPayload(t),this.loading=!1,m.redraw()},e}(_.a),D=function(t){function e(){for(var e,n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))||this).loading=!0,e}Object(u.a)(e,t);var n=e.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e),this.loadUser(m.route.param("username"))},n.pageContentComponent=function(){return this.user?this.user.canEditGameProfile()?m(L,{user:this.user}):m(M,{user:this.user}):null},n.show=function(e){t.prototype.show.call(this,e),this.loading=!1,m.redraw()},n.content=function(){return m("div",{class:"MasqueradeRoot"},this.loading&&m(F.a,null),this.pageContentComponent())},e}(x.a);var z=n(19),$=n.n(z);r.a.initializers.add("fof-game",(function(t){t.store.models["game-field"]=s.a,t.store.models["game-answer"]=v,a.a.prototype.bioFields=d.a.hasMany("bioFields"),a.a.prototype.gameAnswers=d.a.hasMany("gameAnswers"),a.a.prototype.canEditGameProfile=d.a.attribute("canEditGameProfile"),r.a.routes["fof-game"]={path:"/u/:username/game",resolver:{onmatch:function(){if(!r.a.forum.attribute("canViewGame"))throw new Error;return D}}},Object(y.extend)(x.a.prototype,"navItems",(function(t){if(r.a.forum.attribute("canViewGame")||this.user.canEditGameProfile()){var e=this.user.canEditGameProfile();t.add("game",w.a.component({href:r.a.route("fof-game",{username:this.user.slug()}),icon:"fas fa-gamepad ","data-editProfile":e},r.a.translator.trans("fof-game.forum.buttons."+(e?"edit":"view")+"-profile")),200)}})),Object(y.extend)($.a.prototype,"infoItems",(function(t){var e=r.a.forum.attribute("canViewGame")&&this.attrs.user.bioFields()||[];t.add("game-bio",m("div",null,e.map((function(t){var e=t.attribute("field");return R.typeForField({field:e,value:t.content()}).answerField()}))))}))}));var H={ProfileConfigurePane:L,ProfilePane:M,RootGamePane:D},J={BaseField:P,BooleanField:I,EmailField:G,SelectField:q,TypeFactory:R,UrlField:k,PasswordField:E}}]);
//# sourceMappingURL=forum.js.map