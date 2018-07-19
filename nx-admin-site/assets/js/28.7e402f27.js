(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{192:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),s("p",[t._v("This feature is to respond to people's needs. In fact, I do not use this feature in company projects or personal projects. In the past, those traditional back-end frameworks often included this feature. Since most of the previous back-end projects were in the form of multiple pages, the navigation feature of the tags view still has some basic meaning. Most of them are based on the iframe.")]),s("p",[t._v("However, with the development of the times, the background projects are almost all spa (single page web application single page development), and it is obviously not appropriate to use the previous way to implement the navigation of the tags.")]),s("p",[t._v("So the current plan is:")]),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),s("p",[t._v("The current tag-view maintains two arrays.")]),s("ul",[s("li",[t._v("visitedViews : The page the user has visited is a collection of tag arrays displayed in the tags bar navigation.")]),s("li",[t._v("cachedViews : The actual keep-alive route. You can set whether or not you want to cache the route by configuring the route with "),s("code",[t._v("meta.noCache")]),t._v(".\n"),s("router-link",{attrs:{to:"./router-and-nav.html"}},[t._v("Configuration Document")])],1)]),t._m(6),s("p",[t._v("Because keep-alive and router-view are strongly coupled, and it is not difficult to find the keep-alive include default is to match the component's name, it is necessary to look at the document and source code when writing the routing component corresponding to the routing router and route.")]),s("p",[t._v("Make sure the name of both is exactly the same. (Keep in mind that the naming of the name is as unique as possible. Remember not to duplicate the naming of some components, or to refer to the last memory overflow issue recursively.)")]),t._m(7),t._m(8),t._m(9),s("p",[t._v("Make sure that the two names are the same. Remember not to write duplicates or mistakes. By default, if you do not write name, it will not be cached.")]),s("p",[t._v("For details, see\n"),s("a",{attrs:{href:"https://github.com/vuejs/vue/issues/6938#issuecomment-345728620",target:"_blank",rel:"noopener noreferrer"}},[t._v("issue"),s("OutboundLink")],1),t._v(".")]),t._m(10),t._m(11),s("ul",[s("li",[s("p",[t._v("Instead of using keep-alive's include, keep-alive caches all components directly. This way, it supports the aforementioned business situation.\nTo "),s("a",{attrs:{href:"https://github.com/mgbq/nx-admin/blob/master/src/views/layout/components/AppMain.vue",target:"_blank",rel:"noopener noreferrer"}},[t._v("@/layout/components/AppMain.vueAppMain.vue"),s("OutboundLink")],1),t._v(" remove the "),s("code",[t._v("include")]),t._v(" related code. Of course, using keep-alive directly also has disadvantages. He can't dynamically delete the cache. You can only help it to set a maximum cache instance limit.\n"),s("a",{attrs:{href:"https://github.com/vuejs/vue/issues/6509",target:"_blank",rel:"noopener noreferrer"}},[t._v("issue"),s("OutboundLink")],1)])]),t._m(12)]),t._m(13),t._m(14),t._m(15),t._m(16),t._m(17)])},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"tags-view"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tags-view","aria-hidden":"true"}},[this._v("#")]),this._v(" Tags View")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("Use a combination of "),a("code",[this._v("keep-alive")]),this._v(" and "),a("code",[this._v("router-view")]),this._v(" .")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("Code: "),a("code",[this._v("@/layout/components/AppMain.vue")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("keep-alive")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v(":include")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("cachedViews"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("router-view")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("router-view")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("keep-alive")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("The actual action of the tags view navigation is equivalent to another nav display mode. In fact, it is a router-link, and click to jump to the corresponding page. Then we are listening to changes in the route "),a("code",[this._v("$route")]),this._v(" to determine if the current page needs to be reloaded or cached.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"visitedviews-cachedviews"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#visitedviews-cachedviews","aria-hidden":"true"}},[this._v("#")]),this._v(" visitedViews && cachedViews")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"precautions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#precautions","aria-hidden":"true"}},[this._v("#")]),this._v(" Precautions")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("strong",[this._v("DEMO:")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("//Define routes")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  path"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'create-form'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  component"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),s("span",{attrs:{class:"token keyword"}},[t._v("import")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'@/views/form/create'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  name"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'createForm'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  meta"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" title"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'createForm'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" icon"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'table'")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("//The corresponding view of the route. such as: form/create")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"createForm"')]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"cache-is-not-suitable-for-the-scene"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cache-is-not-suitable-for-the-scene","aria-hidden":"true"}},[this._v("#")]),this._v(" Cache is not suitable for the scene")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("Currently cached solutions are not suitable for certain services, such as the article details page such as "),a("code",[this._v("/article/1")]),this._v("、"),a("code",[this._v("/article/2")]),this._v(", their routes are different but the corresponding components are the same, so their component name is the same, As mentioned earlier, the "),a("code",[this._v("keep-alive")]),this._v(" include can only be cached based on the component name, so this is a problem. There are currently two solutions:")])},function(){var t=this.$createElement,a=this._self._c||t;return a("li",[a("p",[this._v("Use a browser cache scheme such as localstorage, own to control the cache.")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"remove"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remove","aria-hidden":"true"}},[this._v("#")]),this._v(" Remove")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("In fact, keep-alive "),a("a",{attrs:{href:"(https://github.com/vuejs/vue/blob/dev/src/core/components/keep-alive.js)"}},[this._v("source code")]),this._v(" is not complicated, but the logic is still quite around. Before the vue author himself fixed a bug, he was not careful, he made two versions to fix it, so if there is no user who needs the navigation bar, it is recommended Remove this feature.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("First find\n"),a("code",[this._v("@/layout/components/AppMain.vue")]),this._v(" adn remove "),a("code",[this._v("keep-alive")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("section")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("app-main"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token style-attr language-css"}},[s("span",{attrs:{class:"token attr-name"}},[t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("style")])]),s("span",{attrs:{class:"token punctuation"}},[t._v('="')]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token property"}},[t._v("min-height")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("transition")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("fade-transform"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("mode")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("out-in"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("router-view")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("router-view")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("transition")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("section")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("p",[t._v("Then remove the entire file "),s("code",[t._v("@/layout/components/TagsView.vue")]),t._v(", and "),s("code",[t._v("@/layout/components/index")]),t._v(" \\ 、 "),s("code",[t._v("@/layout/Layout.vue")]),t._v("。Finally remove "),s("code",[t._v("@/store/modules/tagsView")]),t._v(".")])}],!1,null,null,null);a.default=n.exports}}]);