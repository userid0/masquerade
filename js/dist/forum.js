module.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=19)}([,function(t,e){t.exports=flarum.core.compat["common/Model"]},function(t,e){t.exports=flarum.core.compat["forum/app"]},function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,r(t,e)}n.d(e,"a",(function(){return o}))},function(t,e){t.exports=flarum.core.compat["common/helpers/icon"]},function(t,e){t.exports=flarum.core.compat["common/components/Button"]},function(t,e){t.exports=flarum.core.compat["forum/components/UserPage"]},function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(3),o=n(1),i=n.n(o),a=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).name=i.a.attribute("name"),e.description=i.a.attribute("description"),e.type=i.a.attribute("type"),e.validation=i.a.attribute("validation"),e.required=i.a.attribute("required"),e.prefix=i.a.attribute("prefix"),e.icon=i.a.attribute("icon"),e.sort=i.a.attribute("sort"),e.deleted_at=i.a.attribute("deleted_at",i.a.transformDate),e.answer=i.a.hasOne("answer"),e.on_bio=i.a.attribute("on_bio"),e}return Object(r.a)(e,t),e.prototype.apiEndpoint=function(){return"/masquerade/fields"+(this.exists?"/"+this.data.id:"")},e}(i.a)},function(t,e){t.exports=flarum.core.compat["common/components/Select"]},,function(t,e){t.exports=flarum.core.compat["common/extend"]},,function(t,e){t.exports=flarum.core.compat["common/models/User"]},function(t,e){t.exports=flarum.core.compat["common/components/LinkButton"]},function(t,e){t.exports=flarum.core.compat["common/components/Link"]},function(t,e){t.exports=flarum.core.compat["forum/components/UserCard"]},,,,function(t,e,n){"use strict";n.r(e);var r=n(2),o=n.n(r),i=n(12),a=n.n(i),s=n(7),u=n(3),l=n(1),f=n.n(l),c=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).content=f.a.attribute("content"),e.field=f.a.hasOne("field"),e.userId=f.a.attribute("user_id"),e}return Object(u.a)(e,t),e.prototype.apiEndpoint=function(){return"/masquerade/configure"+(this.exists?"/"+this.data.id:"")},e}(f.a),d=n(10),p=n(13),h=n.n(p),v=n(6),b=n.n(v),y=n(5),q=n.n(y),w=n(14),x=n.n(w),O=n(4),_=n.n(O),g=function(){function t(t){var e=t.field,n=t.set,r=t.value;this.field=e,this.set=n,this.value=r}var e=t.prototype;return e.readAttribute=function(t,e){return"function"==typeof t[e]?t[e]():t[e]},e.validationRules=function(){return this.readAttribute(this.field,"validation").split("|")},e.validationRule=function(t){var e=null;return this.validationRules().forEach((function(n){var r=n.split(":",2);r[0]===t&&(e=r[1])})),e},e.editorField=function(){return m(".Form-group.Field",[m("label",[this.field.icon()?[_()(this.field.icon())," "]:null,this.field.name(),this.field.required()?" *":null]),m(".FormField",[this.field.prefix()?m(".prefix",this.field.prefix()):null,this.editorInput(),this.field.description()?m(".helpText",this.field.description()):null])])},e.editorInput=function(){return m("input",this.editorInputAttrs())},e.editorInputAttrs=function(){var t=this;return{className:"FormControl",oninput:function(e){t.set(e.target.value)},value:this.value,required:this.field.required()}},e.answerField=function(){var t=this.readAttribute(this.field,"icon");return m(".Masquerade-Bio-Set",[m("span.Masquerade-Bio-Field",[t?[_()(t)," "]:null,this.readAttribute(this.field,"name")+": "]),m("span.Masquerade-Bio-Answer",this.answerContent())])},e.answerContent=function(){return this.value},t.isNoOptionSelectedValue=function(t){return null===t||""===t},t}(),F=function(t){function e(){return t.apply(this,arguments)||this}Object(u.a)(e,t);var n=e.prototype;return n.editorInput=function(){var t=this;return this.options().map((function(e){return m("div",m("label",[m("input[type=radio]",{checked:e.selected(t.value),onclick:function(){t.set(e.key)}})," "+e.label]))}))},n.options=function(){var t=[];return this.readAttribute(this.field,"required")||t.push({selected:function(t){return g.isNoOptionSelectedValue(t)},key:null,label:app.translator.trans("fof-masquerade.forum.fields.select.none-optional")}),t.push({selected:function(t){return-1!==["true","1",1,!0,"yes"].indexOf(t)},key:"true",label:app.translator.trans("fof-masquerade.forum.fields.boolean.yes")}),t.push({selected:function(t){return-1!==["false","0",0,!1,"no"].indexOf(t)},key:"false",label:app.translator.trans("fof-masquerade.forum.fields.boolean.no")}),g.isNoOptionSelectedValue(this.value)||-1!==["true","1",1,!0,"yes","false","0",0,!1,"no"].indexOf(this.value)||t.push({selected:function(){return!0},key:this.value,label:"(invalid) "+this.value}),t},n.answerContent=function(){return g.isNoOptionSelectedValue(this.value)?"":-1!==[1,"1",!0,"true","yes"].indexOf(this.value)?[_()("far fa-check-square")," ",app.translator.trans("fof-masquerade.forum.fields.boolean.yes")]:[_()("far fa-square")," ",app.translator.trans("fof-masquerade.forum.fields.boolean.no")]},e}(g),j=function(t){function e(){return t.apply(this,arguments)||this}Object(u.a)(e,t);var n=e.prototype;return n.editorInputAttrs=function(){var e=t.prototype.editorInputAttrs.call(this);return e.type="email",e.placeholder="you@example.com",e},n.answerContent=function(){var t=this,e=this.value;if(!e)return null;var n=e.split(/@|\./).map((function(t){return t.replace(/(.{2})./g,"$1*")})).join("*");return q.a.component({onclick:function(){return t.mailTo()},className:"Button Button--text",icon:"far fa-envelope"},n)},n.mailTo=function(){window.location="mailto:"+this.value},e}(g),A=n(8),C=n.n(A),N=function(t){function e(){return t.apply(this,arguments)||this}Object(u.a)(e,t);var n=e.prototype;return n.editorInput=function(){var t=this;return C.a.component({onchange:function(e){"fof_masquerade_no_option_selected"===e&&(e=null),t.set(e)},value:g.isNoOptionSelectedValue(this.value)?"fof_masquerade_no_option_selected":this.value,options:this.options()})},n.options=function(){var t={};this.readAttribute(this.field,"required")?g.isNoOptionSelectedValue(this.value)&&(t.fof_masquerade_no_option_selected=app.translator.trans("fof-masquerade.forum.fields.select.none-required")):t.fof_masquerade_no_option_selected=app.translator.trans("fof-masquerade.forum.fields.select.none-optional");var e=this.validationRule("in");return e&&e.split(",").forEach((function(e){t[e]=e})),g.isNoOptionSelectedValue(this.value)||void 0!==t[this.value]||(t[this.value]="(invalid) "+this.value),t},e}(g),P=function(t){function e(){return t.apply(this,arguments)||this}Object(u.a)(e,t);var n=e.prototype;return n.editorInputAttrs=function(){var e=t.prototype.editorInputAttrs.call(this);return e.type="url",e.placeholder="https://example.com",e},n.answerContent=function(){var t=this,e=this.value;return e?q.a.component({onclick:function(){return t.to()},className:"Button Button--text",icon:"fas fa-link"},e.replace(/^https?:\/\//,"")):null},n.to=function(){window.open().location=this.value},e}(g),S=function(){function t(){}return t.typeForField=function(t){var e=t.field,n=t.set,r=t.value,o=g,i=this.identify(e);return i&&(o=this.types()[i]),new o({field:e,set:n,value:r})},t.fieldAttribute=function(t,e){return"function"==typeof t[e]?t[e]():t[e]},t.types=function(){return{boolean:F,email:j,select:N,url:P}},t.identify=function(t){var e=this,n=(this.fieldAttribute(t,"validation")||"").split(","),r=null,o=this.fieldAttribute(t,"type");return void 0!==this.types()[o]?o:(n.forEach((function(t){t=t.trim(),void 0!==e.types()[t]&&(r=t)})),r)},t}(),I=function(t){function e(){return t.apply(this,arguments)||this}Object(u.a)(e,t);var n=e.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e),this.loading=!0,this.loadUser(o.a.session.user.username()),this.enforceProfileCompletion=o.a.forum.attribute("masquerade.force-profile-completion")||!1,this.profileCompleted=o.a.forum.attribute("masquerade.profile-completed")||!1,this.profileNowCompleted=!1,this.fields=[],this.answers={},this.load(),this.dirty=!this.profileCompleted},n.content=function(){var t=this;return m("form.ProfileConfigurePane",{onsubmit:this.update.bind(this)},[this.enforceProfileCompletion&&!this.profileCompleted?m(".Alert.Alert--Error",o.a.translator.trans("fof-masquerade.forum.alerts.profile-completion-required")):null,m(".Fields",this.fields.sort((function(t,e){return t.sort()-e.sort()})).map((function(e){return t.answers.hasOwnProperty(e.id())||(t.answers[e.id()]=e.answer()?e.answer().content():""),t.field(e)}))),q.a.component({type:"submit",className:"Button Button--primary",loading:this.loading,disabled:!this.dirty},o.a.translator.trans("fof-masquerade.forum.buttons.save-profile")),this.profileNowCompleted?m("span.Masquerade-NowCompleted",o.a.translator.trans("fof-masquerade.forum.alerts.profile-completed",{a:m(x.a,{href:o.a.route("index")})})):null])},n.field=function(t){return S.typeForField({field:t,set:this.set.bind(this,t),value:this.answers[t.id()]}).editorField()},n.load=function(){o.a.request({method:"GET",url:o.a.forum.attribute("apiUrl")+"/masquerade/configure"}).then(this.parseResponse.bind(this))},n.set=function(t,e){this.answers[t.id()]=e,this.dirty=!0},n.update=function(t){var e=this;t.preventDefault(),this.loading=!0,o.a.request({method:"POST",url:o.a.forum.attribute("apiUrl")+"/masquerade/configure",body:this.answers}).then((function(t){e.dirty=!1,e.profileCompleted||(e.profileCompleted=!0,e.profileNowCompleted=!0),e.parseResponse(t)})).catch((function(){e.loading=!1,m.redraw()}))},n.parseResponse=function(t){this.fields=o.a.store.pushPayload(t),this.loading=!1,m.redraw()},e}(b.a),M=function(t){function e(){return t.apply(this,arguments)||this}Object(u.a)(e,t);var n=e.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e),this.loading=!0,this.fields=[],this.answers={},this.loadUser(m.route.param("username"))},n.content=function(){var t=this;return m(".Masquerade-Bio",[m(".Fields",this.fields.sort((function(t,e){return t.sort()-e.sort()})).map((function(e){return t.answers[e.id()]=e.answer()&&e.answer().userId()==t.user.id()?e.answer().content():null,t.field(e)})))])},n.field=function(t){return S.typeForField({field:t,value:this.answers[t.id()]}).answerField()},n.load=function(t){app.request({method:"GET",url:app.forum.attribute("apiUrl")+"/masquerade/profile/"+t.id()}).then(this.parseResponse.bind(this))},n.show=function(e){this.load(e),t.prototype.show.call(this,e)},n.parseResponse=function(t){this.answers={},this.fields=app.store.pushPayload(t),this.loading=!1,m.redraw()},e}(b.a),k=n(15),B=n.n(k),R=function(){Object(d.extend)(B.a.prototype,"infoItems",(function(t){var e=app.forum.attribute("canViewMasquerade")&&this.attrs.user.bioFields()||[];t.add("masquerade-bio",m("div",e.map((function(t){var e=t.attribute("field");return S.typeForField({field:e,value:t.content()}).answerField()}))))}))};o.a.initializers.add("fof-masquerade",(function(t){t.store.models["masquerade-field"]=s.a,t.store.models["masquerade-answer"]=c,a.a.prototype.bioFields=f.a.hasMany("bioFields"),o.a.routes["fof-masquerade-configure-profile"]={path:"/masquerade/configure",component:I},o.a.routes["fof-masquerade-view-profile"]={path:"/masquerade/:username",component:M},Object(d.extend)(b.a.prototype,"navItems",(function(t){var e=o.a.forum.attribute("canHaveMasquerade")&&o.a.session.user.id()===this.user.id();if(o.a.forum.attribute("canViewMasquerade")||e){var n=e?o.a.route("fof-masquerade-configure-profile"):o.a.route("fof-masquerade-view-profile",{username:this.user.username()});t.add("masquerade",h.a.component({href:n,icon:"far fa-id-card"},o.a.translator.trans("fof-masquerade.forum.buttons.view-profile")),200)}})),R()}))}]);
//# sourceMappingURL=forum.js.map