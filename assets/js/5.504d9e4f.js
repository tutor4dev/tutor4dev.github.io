(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{149:function(t,e,s){"use strict";s.r(e);s(18);var r=s(51),i={computed:{heroArticles:function(){var t=/articles\//,e=this.$site.pages.filter(function(e){return t.test(e.path)}).slice().reverse().slice(0,6);return Object(r.chunk)(e,3)}}},a=s(0),n=Object(a.a)(i,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h1",{staticStyle:{"margin-bottom":"1.5em"}},[t._v("บทความล่าสุด")]),t._v(" "),t._l(t.heroArticles,function(e,r){return s("div",{key:r,staticClass:"columns"},t._l(e,function(e){var r=e.key,i=e.path,a=e.frontmatter;return s("article",{key:r,staticClass:"column"},[s("router-link",{attrs:{to:i}},[s("figure",{staticClass:"image"},[s("img",{attrs:{src:"/images/thumbnails/"+a.heroImage}})]),t._v(" "),s("h4",[t._v(t._s(a.title))])])],1)}),0)}),t._v(" "),s("p",{staticClass:"control is-hidden-tablet"},[s("router-link",{staticClass:"button is-small is-rounded",attrs:{to:"/articles.html"}},[t._v("บทความทั้งหมด")])],1)],2)},[],!1,null,null,null);e.default=n.exports}}]);