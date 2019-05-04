(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{383:function(t,e,r){"use strict";r.d(e,"b",function(){return o}),r.d(e,"a",function(){return i});var n=r(349),o=function(t){var e=new FileReader;return new Promise(function(r,n){try{e.readAsDataURL(t),e.onloadend=function(){r(e.result)}}catch(t){throw new Error("Ошибка при чтении файла")}})},i=function(t){var e=n.a.defaults.baseURL;return"".concat(e,"/").concat(t)}},395:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=this,r=e.$createElement,n=e._self._c||r;return n("adding-form",{attrs:{title:e.editFormTitle},on:{submit:function(t){"add"===e.mode?e.addNewWork():e.editWork()},cancel:e.cancelAdding}},[n("template",{slot:"form-content"},[n("div",{staticClass:"work__area"},[n("div",{staticClass:"work__loader"},[n("label",{staticClass:"download",class:{error:e.validation.hasError("work.photo")}},[n("input",{attrs:{type:"file",name:"loader"},on:{change:e.appendFileAndRenderPhoto}}),n("div",{staticClass:"download__label",class:{download__label_active:this.renderedPhotoUrl.length},style:{backgroundImage:e.workPhotoUrl}},[n("div",{staticClass:"download__title"},[e._v("Перетащите или загрузите для загрузки изображения")]),n("div",{staticClass:"btn btn_small download__btn"},[e._v("Загрузить")])]),n("div",{staticClass:"work__add"},[e._v("Изменить превью")]),n("errors-tooltip",{attrs:{errorText:e.validation.firstError("work.photo")}})],1)]),n("div",{staticClass:"work__content"},[n("div",{staticClass:"work__content-child work__content-title"},[n("app-input",{attrs:{title:"Название",errorText:e.validation.firstError("work.title"),nopadding:"",fieldType:"input"},model:{value:e.work.title,callback:function(t){e.$set(e.work,"title",t)},expression:"work.title"}})],1),n("div",{staticClass:"work__content-child work__content-link"},[n("app-input",{attrs:{title:"Ссылка",type:"text",errorText:e.validation.firstError("work.link"),nopadding:"",fieldType:"input"},model:{value:e.work.link,callback:function(t){e.$set(e.work,"link",t)},expression:"work.link"}})],1),n("div",{staticClass:"work__content-child work__content-descr"},[n("app-input",{attrs:{title:"Описание",type:"text",errorText:e.validation.firstError("work.description"),fieldType:"textarea",heightTextarea:"150px"},model:{value:e.work.description,callback:function(t){e.$set(e.work,"description",t)},expression:"work.description"}})],1),n("add-tags",{attrs:{errorText:e.validation.firstError("work.techs")},on:{removeTag:function(e){return t.work.techs=e}},model:{value:e.work.techs,callback:function(t){e.$set(e.work,"techs",t)},expression:"work.techs"}})],1)])])],2)};n._withStripped=!0;var o=r(65),i=r(383),a=r(348);function s(t,e,r,n,o,i,a){try{var s=t[i](a),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,o)}function c(t){return function(){var e=this,r=arguments;return new Promise(function(n,o){var i=t.apply(e,r);function a(t){s(i,n,o,a,c,"next",t)}function c(t){s(i,n,o,a,c,"throw",t)}a(void 0)})}}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),n.forEach(function(e){d(t,e,r[e])})}return t}function d(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var u={mixins:[r(348).mixin],validators:{"work.title":function(t){return a.Validator.value(t).required("Заполните название")},"work.techs":function(t){return a.Validator.value(t).required("Заполните технологии")},"work.link":function(t){return a.Validator.value(t).required("Заполните ссылку")},"work.description":function(t){return a.Validator.value(t).required("Заполните описание")},"work.photo":function(t){return a.Validator.value(t).required("Вставьте файл")}},props:{mode:{type:String,default:"add"},disabled:{type:Boolean,default:!1}},components:{addingForm:function(){return r.e(4).then(r.bind(null,401))},tags:function(){return r.e(3).then(r.bind(null,402))},addTags:function(){return r.e(12).then(r.bind(null,403))},errorsTooltip:function(){return r.e(2).then(r.bind(null,404))},appInput:function(){return r.e(0).then(r.bind(null,399))}},data:function(){return{disabledForm:this.disabled,renderedPhotoUrl:"",work:{id:0,title:"",techs:"",link:"",photo:"",description:""}}},computed:l({},Object(o.d)("works",{currentWork:function(t){return t.currentWork}}),{workPhotoUrl:function(){return"url(".concat(this.renderedPhotoUrl,")")},editFormTitle:function(){switch(this.mode){case"edit":return"Редактирование работы";case"add":return"Добавление работы"}}}),created:function(){"edit"===this.mode&&this.fillFormWithCurrentWorkData()},watch:{currentWork:function(t){"edit"===this.mode&&this.fillFormWithCurrentWorkData()},mode:function(t){"add"===t&&this.clearFormFields()}},methods:l({},Object(o.b)("works",["addWork","updateWork"]),Object(o.b)("tooltips",["showTooltip"]),{addNewWork:function(){var t=c(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.addWork(this.work);case 3:t.sent,this.clearFormFields(),this.showTooltip({type:"success",text:"Добавлена работа"}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),this.showTooltip({type:"error",text:"Ошибка добавления"});case 11:case"end":return t.stop()}},t,this,[[0,8]])}));return function(){return t.apply(this,arguments)}}(),cancelAdding:function(){this.clearFormFields(),this.$emit("closeWork")},clearFormFields:function(){this.work={},this.renderedPhotoUrl=""},appendFileAndRenderPhoto:function(){var t=c(regeneratorRuntime.mark(function t(e){var r,n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.target.files[0],this.work.photo=r,new FileReader,t.prev=3,t.next=6,Object(i.b)(r);case 6:n=t.sent,this.renderedPhotoUrl=n,this.showTooltip({type:"success",text:"Фото загружено"}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(3),this.showTooltip({type:"error",text:"Ошибка обработки фото"});case 14:case"end":return t.stop()}},t,this,[[3,11]])}));return function(e){return t.apply(this,arguments)}}(),editWork:function(){var t=c(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.updateWork(this.work);case 3:t.sent,this.$emit("closeWork"),this.showTooltip({type:"success",text:"Работа отредактирована"}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),this.showTooltip({type:"error",text:"Ошибка редактирования"});case 11:case"end":return t.stop()}},t,this,[[0,8]])}));return function(){return t.apply(this,arguments)}}(),fillFormWithCurrentWorkData:function(){this.work=l({},this.currentWork),this.renderedPhotoUrl=Object(i.a)(this.currentWork.photo)}})},p=r(97),h=Object(p.a)(u,n,[],!1,null,null,null);h.options.__file="src/admin/templates/work-add.vue";e.default=h.exports}}]);