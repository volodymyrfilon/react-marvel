(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[3],{36:function(e,t,c){"use strict";var n=c(26),a=c(2);t.a=function(){return Object(a.jsx)("img",{src:n.a,alt:"ERROR",style:{display:"block",width:250,height:250,objectFit:"contain",margin:"0 auto"}})}},37:function(e,t,c){"use strict";var n=c(4),a=c(6),r=c(5),s=c(0);t.a=function(){var e=function(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),c=t[0],i=t[1],o=Object(s.useState)(null),l=Object(r.a)(o,2),u=l[0],j=l[1],b=Object(s.useCallback)(function(){var e=Object(a.a)(Object(n.a)().mark((function e(t){var c,a,r,s,o,l=arguments;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=l.length>1&&void 0!==l[1]?l[1]:"GET",a=l.length>2&&void 0!==l[2]?l[2]:null,r=l.length>3&&void 0!==l[3]?l[3]:{"Content-Type":"aplication/json"},i(!0),e.prev=4,e.next=7,fetch(t,{method:c,body:a,headers:r});case 7:if((s=e.sent).ok){e.next=10;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(s.status));case 10:return e.next=12,s.json();case 12:return o=e.sent,i(!1),e.abrupt("return",o);case 17:throw e.prev=17,e.t0=e.catch(4),i(!1),j(e.t0.message),e.t0;case 22:case"end":return e.stop()}}),e,null,[[4,17]])})));return function(t){return e.apply(this,arguments)}}(),[]);return{loading:c,request:b,error:u,clearError:Object(s.useCallback)((function(){return j(null)}),[])}}(),t=e.loading,c=e.request,i=e.error,o=e.clearError,l="https://gateway.marvel.com/v1/public/",u="apikey=3155e7e4773051f4be08caea81d21383",j=function(){var e=Object(a.a)(Object(n.a)().mark((function e(){var t,a,r=arguments;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:210,e.next=3,c("".concat(l,"characters?limit=9&offset=").concat(t,"&").concat(u));case 3:return a=e.sent,e.abrupt("return",a.data.results.map(m));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(a.a)(Object(n.a)().mark((function e(t){var a;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("".concat(l,"characters/").concat(t,"?").concat(u));case 2:return a=e.sent,e.abrupt("return",m(a.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(a.a)(Object(n.a)().mark((function e(){var t,a,r=arguments;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:0,e.next=3,c("".concat(l,"comics?orderBy=issueNumber&limit=8&offset=").concat(t,"&").concat(u));case 3:return a=e.sent,e.abrupt("return",a.data.results.map(O));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(a.a)(Object(n.a)().mark((function e(t){var a;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("".concat(l,"comics/").concat(t,"?").concat(u));case 2:return a=e.sent,e.abrupt("return",O(a.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(e){return{id:e.id,name:e.name,description:e.description?"".concat(e.description.slice(0,210),"..."):"There is no description for this character",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}},O=function(e){var t;return{id:e.id,title:e.title,description:e.description||"There is no description",pageCount:e.pageCount?"".concat(e.pageCount," p."):"No information about the number of pages",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,language:(null===(t=e.textObjects[0])||void 0===t?void 0:t.language)||"en-us",price:e.prices[0].price?"".concat(e.prices[0].price,"$"):"not available"}};return{loading:t,error:i,clearError:o,getAllCharacters:j,getCharacter:b,getAllComics:h,getComics:d}}},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},48:function(e,t,c){"use strict";c.r(t);var n=c(5),a=c(0),r=c.p+"static/media/vision.067d4ae1.png",s=c(37),i=c(36),o=(c(40),c(2)),l=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),Object(o.jsxs)("div",{className:"skeleton",children:[Object(o.jsxs)("div",{className:"pulse skeleton__header",children:[Object(o.jsx)("div",{className:"pulse skeleton__circle"}),Object(o.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(o.jsx)("div",{className:"pulse skeleton__block"}),Object(o.jsx)("div",{className:"pulse skeleton__block"}),Object(o.jsx)("div",{className:"pulse skeleton__block"})]})]})},u=c(25),j=(c(41),function(e){var t=e.char,c=t.name,n=t.description,a=t.thumbnail,r=t.homepage,s=t.wiki,i=t.comics,l={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"!==a&&"http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708.gif"!==a||(l={objectFit:"contain"}),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"char__basics",children:[Object(o.jsx)("img",{src:a,alt:c,style:l}),Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"char__info-name",children:c}),Object(o.jsxs)("div",{className:"char__btns",children:[Object(o.jsx)("a",{href:r,className:"button button__main",children:Object(o.jsx)("div",{className:"inner",children:"homepage"})}),Object(o.jsx)("a",{href:s,className:"button button__secondary",children:Object(o.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),Object(o.jsx)("div",{className:"char__descr",children:n}),Object(o.jsx)("div",{className:"char__comics",children:"Comics:"}),Object(o.jsxs)("ul",{className:"char__comics-list",children:[i.length>0?null:"There is no comics with this character",i.map((function(e,t){if(!(t>9))return Object(o.jsx)("li",{className:"char__comics-item",children:e.name},t)}))]})]})}),b=function(e){var t=Object(a.useState)(null),c=Object(n.a)(t,2),r=c[0],b=c[1],h=Object(s.a)(),d=h.loading,m=h.error,O=h.getCharacter,f=h.clearError;Object(a.useEffect)((function(){p()}),[e.charId]);var p=function(){var t=e.charId;t&&(f(),O(t).then(v))},v=function(e){b(e)},_=r||d||m?null:Object(o.jsx)(l,{}),x=m?Object(o.jsx)(i.a,{}):null,g=d?Object(o.jsx)(u.a,{}):null,N=d||m||!r?null:Object(o.jsx)(j,{char:r});return Object(o.jsxs)("div",{className:"char__info",children:[_,x,g,N]})},h=c(7),d=(c(42),function(e){var t=Object(a.useState)([]),c=Object(n.a)(t,2),r=c[0],l=c[1],j=Object(a.useState)(!1),b=Object(n.a)(j,2),d=b[0],m=b[1],O=Object(a.useState)(210),f=Object(n.a)(O,2),p=f[0],v=f[1],_=Object(a.useState)(!1),x=Object(n.a)(_,2),g=x[0],N=x[1],k=Object(s.a)(),y=k.loading,w=k.error,C=k.getAllCharacters;Object(a.useEffect)((function(){E(p,!0)}),[]);var E=function(e,t){m(!t),C(e).then(S)},S=function(e){var t=!1;e.length<9&&(t=!0),l((function(t){return[].concat(Object(h.a)(t),Object(h.a)(e))})),m((function(e){return!1})),v((function(e){return e+9})),N((function(e){return t}))},F=Object(a.useRef)([]),I=function(e){F.current.forEach((function(e){return e.classList.remove("char__item_selected")})),F.current[e].classList.add("char__item_selected"),F.current[e].focus()};var R=function(t){var c=t.map((function(t,c){var n={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"!==t.thumbnail&&"http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708.gif"!==t.thumbnail||(n={objectFit:"unset"}),Object(o.jsxs)("li",{className:"char__item",tabIndex:0,ref:function(e){return F.current[c]=e},onClick:function(){e.onCharSelected(t.id),I(c)},onKeyPress:function(n){" "!==n.key&&"Enter"!==n.key||(e.onCharSelected(t.id),I(c))},children:[Object(o.jsx)("img",{src:t.thumbnail,alt:t.name,style:n}),Object(o.jsx)("div",{className:"char__name",children:t.name})]},t.id)}));return Object(o.jsx)("ul",{className:"char__grid",children:c})}(r),T=w?Object(o.jsx)(i.a,{}):null,A=y&&!d?Object(o.jsx)(u.a,{}):null;return Object(o.jsxs)("div",{className:"char__list",children:[T,A,R,Object(o.jsx)("button",{className:"button button__main button__long",disabled:d,style:{display:g?"none":"block"},onClick:function(){return E(p)},children:Object(o.jsx)("div",{className:"inner",children:"load more"})})]})}),m=c(10),O=c(9),f=c(14),p=c(15),v=function(e){Object(f.a)(c,e);var t=Object(p.a)(c);function c(){var e;Object(m.a)(this,c);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={error:!1},e}return Object(O.a)(c,[{key:"componentDidCatch",value:function(e,t){console.log(e,t),this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?{ErrorMessage:i.a}:this.props.children}}]),c}(a.Component),_=v,x=c.p+"static/media/mjolnir.61f31e18.png",g=(c(43),function(e){var t=e.char,c=t.name,n=t.description,a=t.thumbnail,r=t.homepage,s=t.wiki,i={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===a&&(i={objectFit:"contain"}),Object(o.jsxs)("div",{className:"randomchar__block",children:[Object(o.jsx)("img",{src:a,alt:"Random character",className:"randomchar__img",style:i}),Object(o.jsxs)("div",{className:"randomchar__info",children:[Object(o.jsx)("p",{className:"randomchar__name",children:c}),Object(o.jsx)("p",{className:"randomchar__descr",children:n}),Object(o.jsxs)("div",{className:"randomchar__btns",children:[Object(o.jsx)("a",{href:r,className:"button button__main",children:Object(o.jsx)("div",{className:"inner",children:"homepage"})}),Object(o.jsx)("a",{href:s,className:"button button__secondary",children:Object(o.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})}),N=function(){var e=Object(a.useState)(null),t=Object(n.a)(e,2),c=t[0],r=t[1],l=Object(s.a)(),j=l.loading,b=l.error,h=l.getCharacter,d=l.clearError;Object(a.useEffect)((function(){O();var e=setInterval(O,6e4);return function(){clearInterval(e)}}),[]);var m=function(e){r(e)},O=function(){d();var e=Math.floor(400*Math.random())+1011e3;h(e).then(m)},f=b?Object(o.jsx)(i.a,{}):null,p=j?Object(o.jsx)(u.a,{}):null,v=j||b||!c?null:Object(o.jsx)(g,{char:c});return Object(o.jsxs)("div",{className:"randomchar",children:[f,p,v,Object(o.jsxs)("div",{className:"randomchar__static",children:[Object(o.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",Object(o.jsx)("br",{}),"Do you want to get to know him better?"]}),Object(o.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),Object(o.jsx)("button",{onClick:O,className:"button button__main",children:Object(o.jsx)("div",{className:"inner",children:"try it"})}),Object(o.jsx)("img",{src:x,alt:"mjolnir",className:"randomchar__decoration"})]})]})};t.default=function(){var e=Object(a.useState)(null),t=Object(n.a)(e,2),c=t[0],s=t[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(_,{children:Object(o.jsx)(N,{})}),Object(o.jsxs)("div",{className:"char__content",children:[Object(o.jsx)(_,{children:Object(o.jsx)(d,{onCharSelected:function(e){s(e)}})}),Object(o.jsx)(_,{children:Object(o.jsx)(b,{charId:c})})]}),Object(o.jsx)("img",{className:"bg-decoration",src:r,alt:"vision"})]})}}}]);
//# sourceMappingURL=3.7449c4b9.chunk.js.map