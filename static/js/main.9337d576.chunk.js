(this["webpackJsonpnews-feed"]=this["webpackJsonpnews-feed"]||[]).push([[0],{25:function(e,t,a){e.exports=a(56)},30:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),s=a.n(c),l=(a(30),a(24)),o=(a(9),a(4)),i=a.n(o),u=a(6),m=a(7),d=a.n(m),p=a(8),f=a.n(p),g="9a6674bf15bab6a11b3752f09986d972",E={getTopHeadlines:function(){return f.a.get("https://gnews.io/api/v3/top-news?token=".concat(g,"&country=in")).then((function(e){return console.log("All Indian new headlines are ",e.data),e.data.articles}))},getCategoryNews:function(e){return f.a.get("https://gnews.io/api/v3/topics/".concat(e,"?token=").concat(g,"&country=in")).then((function(e){return console.log("Queried news are ",e.data),e.data.articles}))},getKeywordNews:function(e){return f.a.get("https://gnews.io/api/v3/search?q=".concat(e,"&token=").concat(g,"&country=in")).then((function(e){return console.log("Queried news are ",e.data),e.data.articles}))}},b=a(2),h=function(e){return{type:"QUERY_SEARCH",payload:e}},w=function(e){return{type:"CATEGORY_SEARCH",payload:e}},y=function(e){return{type:"HEADLINES_SEARCH",payload:e}},v=function(e){return{type:"UPDATE_CATEGORIES",payload:e}};function N(e){var t=Object(b.b)(),a=Object(b.c)((function(e){return e.categoryR})),c=Object(n.useRef)(),s="",l={headerContainer:{display:"grid",gridTemplateColumns:"1fr 4fr",gridColumnGap:"5px"},searchContainer:{display:"grid",gridTemplateColumns:"3fr 1fr",gridColumnGap:"5px"}};function o(){return(o=Object(u.a)(i.a.mark((function e(n){var r,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),console.log("Query is",s),e.next=4,E.getKeywordNews(s);case 4:r=e.sent,t(h(r||[])),c.current.value="",l=a.map((function(e){return e.selected=!1,e})),t(v(l));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"navbar fixed-top navbar-dark bg-dark",style:l.headerContainer},r.a.createElement("div",{className:"hamburger"},r.a.createElement("i",{className:"fas fa-bars fa-2x",onClick:function(){console.log("Ham value is",e.showHamburger),e.toggle(!e.showHamburger)}})),r.a.createElement("div",{className:"navbar-brand"},r.a.createElement("img",{src:d.a,width:"30",height:"30",className:"d-inline-block align-top",alt:""}),"G-News"),r.a.createElement("form",{className:"form-inline",style:l.searchContainer},r.a.createElement("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search",ref:c,onChange:function(){s=c.current.value,console.log("Keyword is",s)}}),r.a.createElement("button",{className:"btn btn-outline-success my-2 my-sm-0",onClick:function(e){return o.apply(this,arguments)}},"Search"))))}function C(e){var t=Object(b.c)((function(e){return e.categoryR})),a=Object(b.b)();function n(e){return c.apply(this,arguments)}function c(){return(c=Object(u.a)(i.a.mark((function e(n){var r,c,l,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),console.log("Selected category is ",n.target.innerHTML),r=n.target.innerHTML,c=t.map((function(e){return e.name===r?e.selected=!0:e.selected=!1,e})),a(v(c)),console.log("\n\n Updated Categories are ",c),s(),"Top"!==r){e.next=15;break}return e.next=10,E.getTopHeadlines();case 10:l=e.sent,a(y(l||[])),console.log("Headlines from services is ",l),e.next=20;break;case 15:return e.next=17,E.getCategoryNews(r.toLowerCase());case 17:o=e.sent,a(w(o||[])),console.log("Headlines from services is ",o);case 20:r="";case 21:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function s(){console.log("Ham value is",e.showHamburger),e.toggle(!e.showHamburger)}return r.a.createElement(r.a.Fragment,null,r.a.createElement("aside",null,r.a.createElement("ul",{className:"list-group"},t.map((function(e,t){return r.a.createElement("li",{key:t,style:{cursor:"pointer"},className:"list-group-item list-group-item-dark "+(e.selected?"selectedCategory":""),onClick:n},e.name)})))))}function O(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Developed By: [Gurudutt]",r.a.createElement("a",{href:"mailto:gurudutt.iitr@gmail.com",style:{color:"#60dbfb",padding:"2px 0px 0px 2px",fontSize:"14px"}},"  Email Me")))}var H=a(23),x=a.n(H);function S(e){var t=e.newsItem;return r.a.createElement("div",{className:"flex-item card mb-3",onClick:function(){window.open(t.url,"_blank").focus()}},r.a.createElement("img",{className:"card-img-top",src:t.urlToImage?t.urlToImage:d.a,alt:"News Item",style:{height:"200px"}}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},t.title),r.a.createElement("p",{className:"card-text"},t.description),r.a.createElement("p",{className:"card-text"},r.a.createElement("small",{className:"text-muted"},"Published on ",x()(t.publishedAt).format("MMMM Do YYYY")),r.a.createElement("br",null),r.a.createElement("small",{className:"text-muted"},t.source.name))))}function T(e){var t=Object(b.c)((function(e){return e.newsListR}));return console.log("NewsIts are ",t),Object(n.useEffect)((function(){window.scrollTo(0,0)}),[t]),r.a.createElement("div",{className:"news-container container"},t.map((function(e,t){return r.a.createElement(r.a.Fragment,{key:t},r.a.createElement(S,{newsItem:e}))})))}var R=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],c=t[1],s=Object(b.b)(),o=Object(n.useRef)();function i(e){e?o.current.classList.add("show"):o.current.classList.remove("show"),c(e)}return console.log("Sidebar ref is",o),Object(n.useEffect)((function(){E.getTopHeadlines().then((function(e){console.log("Articles in appJs are",e),s(y(e||[]))}))}),[]),r.a.createElement("div",{className:"main-container"},r.a.createElement("div",{className:"topbar-style"},r.a.createElement(N,{toggle:i,showHamburger:a})),r.a.createElement("div",{className:"sidebar-style",ref:o},r.a.createElement(C,{toggle:i,showHamburger:a})),r.a.createElement("div",{className:"content-style"},r.a.createElement(T,null)),r.a.createElement("div",{className:"footer-style"},r.a.createElement(O,null)))},_=a(3),k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[{name:"Top",selected:!0},{name:"World",selected:!1},{name:"Nation",selected:!1},{name:"Business",selected:!1},{name:"Technology",selected:!1},{name:"Entertainment",selected:!1},{name:"Sports",selected:!1},{name:"Science",selected:!1},{name:"Health",selected:!1}],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_CATEGORIES":return t.payload;default:return e}},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CATEGORY_SEARCH":case"QUERY_SEARCH":case"HEADLINES_SEARCH":return t.payload;default:return e}},j=Object(_.b)({categoryR:k,newsListR:A,showHamburger:!1}),I=Object(_.c)(j,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());s.a.render(r.a.createElement(b.a,{store:I},r.a.createElement(R,null)),document.getElementById("root"))},7:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},9:function(e,t,a){}},[[25,1,2]]]);
//# sourceMappingURL=main.9337d576.chunk.js.map