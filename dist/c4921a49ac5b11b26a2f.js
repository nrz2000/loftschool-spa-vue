(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{388:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"work"},[r("div",{staticClass:"container"},[r("div",{staticClass:"section__wrap work__wrap"},[r("h2",{staticClass:"section__title work__title"},[t._v('Блок "Работы" ')]),t.showWork?r("div",{staticClass:"section__form work__form"},[r("work-add",{attrs:{mode:t.mode},on:{closeWork:function(e){t.showWork=!1}}})],1):t._e(),r("div",{staticClass:"section__list work__list"},[r("button",{staticClass:"section__card work__card section__card_add",on:{click:t.createWork}},[t._m(0),t._m(1)]),t._l(t.works,function(e){return r("div",{staticClass:"section__card work__card"},[r("work-item",{attrs:{work:e},on:{updateWork:t.updateWork}})],1)})],2)])])])};n._withStripped=!0;var o=r(65);function s(t,e,r,n,o,s,i){try{var c=t[s](i),a=c.value}catch(t){return void r(t)}c.done?e(a):Promise.resolve(a).then(n,o)}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),n.forEach(function(e){c(t,e,r[e])})}return t}function c(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var a={components:{workAdd:function(){return r.e(9).then(r.bind(null,395))},workItem:function(){return r.e(10).then(r.bind(null,396))}},data:function(){return{showWork:!1,mode:"add"}},methods:i({},Object(o.b)("works",["fetchWorks"]),{createWork:function(){this.showWork=!0,this.mode="add"},updateWork:function(){this.mode="edit",this.showWork=!0}}),computed:i({},Object(o.d)("works",{works:function(t){return t.works}})),created:function(){var t,e=(t=regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.fetchWorks();case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),alert("Произошла ошибка при загрузке Работ");case 8:case"end":return t.stop()}},t,this,[[0,5]])}),function(){var e=this,r=arguments;return new Promise(function(n,o){var i=t.apply(e,r);function c(t){s(i,n,o,c,a,"next",t)}function a(t){s(i,n,o,c,a,"throw",t)}c(void 0)})});return function(){return e.apply(this,arguments)}}()},u=r(97),l=Object(u.a)(a,n,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"section__icon"},[e("div",{staticClass:"section__icon-plus"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"section__prompt"},[e("span",[this._v("Добавить работу")])])}],!1,null,null,null);l.options.__file="src/admin/templates/pages/works.vue";e.default=l.exports}}]);