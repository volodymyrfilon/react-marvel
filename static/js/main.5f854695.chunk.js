(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[0],{19:function(e,t,c){},21:function(e,t,c){},22:function(e,t,c){},23:function(e,t,c){},24:function(e,t,c){},25:function(e,t,c){},26:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),r=c(10),s=c.n(r),i=c(2),l=(c(19),c(0)),o=function(){return Object(l.jsxs)("header",{className:"app__header",children:[Object(l.jsx)("h1",{className:"app__title",children:Object(l.jsxs)("a",{href:"#",children:[Object(l.jsx)("span",{children:"Marvel"})," information portal"]})}),Object(l.jsx)("nav",{className:"app__menu",children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"#",children:"Characters"})}),"/",Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"#",children:"Comics"})})]})})]})},u=c(11),j=c(13),b=c(14),m=c(12),d=c.p+"static/media/error.42292aa1.gif",h=function(){return Object(l.jsx)("img",{src:d,alt:"ERROR",style:{display:"block",width:250,height:250,objectFit:"contain",margin:"0 auto"}})},f=function(e){Object(b.a)(c,e);var t=Object(m.a)(c);function c(){var e;Object(u.a)(this,c);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={error:!1},e}return Object(j.a)(c,[{key:"componentDidCatch",value:function(e,t){console.log(e,t),this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?{ErrorMessage:h}:this.props.children}}]),c}(a.Component),O=f,p=c(3),x=c(5),v=function(){var e=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)(null),s=Object(i.a)(r,2),l=s[0],o=s[1],u=Object(a.useCallback)(function(){var e=Object(x.a)(Object(p.a)().mark((function e(t){var c,a,r,s,i,l=arguments;return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=l.length>1&&void 0!==l[1]?l[1]:"GET",a=l.length>2&&void 0!==l[2]?l[2]:null,r=l.length>3&&void 0!==l[3]?l[3]:{"Content-Type":"aplication/json"},n(!0),e.prev=4,e.next=7,fetch(t,{method:c,body:a,headers:r});case 7:if((s=e.sent).ok){e.next=10;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(s.status));case 10:return e.next=12,s.json();case 12:return i=e.sent,n(!1),e.abrupt("return",i);case 17:throw e.prev=17,e.t0=e.catch(4),n(!1),o(e.t0.message),e.t0;case 22:case"end":return e.stop()}}),e,null,[[4,17]])})));return function(t){return e.apply(this,arguments)}}(),[]);return{loading:c,request:u,error:l,clearError:Object(a.useCallback)((function(){return o(null)}),[])}}(),t=e.loading,c=e.request,n=e.error,r=e.clearError,s="https://gateway.marvel.com:443/v1/public/",l="apikey=3155e7e4773051f4be08caea81d21383",o=function(){var e=Object(x.a)(Object(p.a)().mark((function e(){var t,a,n=arguments;return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:210,e.next=3,c("".concat(s,"characters?limit=9&offset=").concat(t,"&").concat(l));case 3:return a=e.sent,e.abrupt("return",a.data.results.map(m));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=Object(x.a)(Object(p.a)().mark((function e(t){var a;return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("".concat(s,"characters/").concat(t,"?").concat(l));case 2:return a=e.sent,e.abrupt("return",m(a.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(x.a)(Object(p.a)().mark((function e(){var t,a,n=arguments;return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:0,e.next=3,c("".concat(s,"comics?orderBy=issueNumber&limit=8&offset=").concat(t,"&").concat(l));case 3:return a=e.sent,e.abrupt("return",a.data.results.map(d));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(x.a)(Object(p.a)().mark((function e(t){var a;return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("".concat(s,"comics/").concat(t,"?").concat(l));case 2:return a=e.sent,e.abrupt("return",d(a.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(e){return{id:e.id,name:e.name,description:e.description?"".concat(e.description.slice(0,210),"..."):"There is no description for this character",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}},d=function(e){var t;return{id:e.id,title:e.title,description:e.description||"There is no description",pageCount:e.pageCount?"".concat(e.pageCount," p."):"No information about the number of pages",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,language:(null===(t=e.textObjects[0])||void 0===t?void 0:t.language)||"en-us",price:e.prices[0].price?"".concat(e.prices[0].price,"$"):"not available"}};return{loading:t,error:n,clearError:r,getAllCharacters:o,getCharacter:u,getAllComics:j,getComics:b}},g=function(){return Object(l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",style:{margin:"0 auto",background:"none",display:"block"},width:"200px",height:"200px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",children:[Object(l.jsx)("g",{transform:"translate(80,50)",children:Object(l.jsx)("g",{transform:"rotate(0)",children:Object(l.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"1",children:[Object(l.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.875s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(l.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.875s"})]})})}),Object(l.jsx)("g",{transform:"translate(71.21320343559643,71.21320343559643)",children:Object(l.jsx)("g",{transform:"rotate(45)",children:Object(l.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.875",children:[Object(l.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.75s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(l.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.75s"})]})})}),Object(l.jsx)("g",{transform:"translate(50,80)",children:Object(l.jsx)("g",{transform:"rotate(90)",children:Object(l.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.75",children:[Object(l.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.625s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(l.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.625s"})]})})}),Object(l.jsx)("g",{transform:"translate(28.786796564403577,71.21320343559643)",children:Object(l.jsx)("g",{transform:"rotate(135)",children:Object(l.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.625",children:[Object(l.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.5s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(l.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.5s"})]})})}),Object(l.jsx)("g",{transform:"translate(20,50.00000000000001)",children:Object(l.jsx)("g",{transform:"rotate(180)",children:Object(l.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.5",children:[Object(l.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.375s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(l.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.375s"})]})})}),Object(l.jsx)("g",{transform:"translate(28.78679656440357,28.786796564403577)",children:Object(l.jsx)("g",{transform:"rotate(225)",children:Object(l.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.375",children:[Object(l.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.25s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(l.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.25s"})]})})}),Object(l.jsx)("g",{transform:"translate(49.99999999999999,20)",children:Object(l.jsx)("g",{transform:"rotate(270)",children:Object(l.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.25",children:[Object(l.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.125s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(l.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.125s"})]})})}),Object(l.jsx)("g",{transform:"translate(71.21320343559643,28.78679656440357)",children:Object(l.jsx)("g",{transform:"rotate(315)",children:Object(l.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.125",children:[Object(l.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"0s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(l.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"0s"})]})})})]})},_=c.p+"static/media/mjolnir.61f31e18.png",y=(c(21),function(e){var t=e.char,c=t.name,a=t.description,n=t.thumbnail,r=t.homepage,s=t.wiki,i={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===n&&(i={objectFit:"contain"}),Object(l.jsxs)("div",{className:"randomchar__block",children:[Object(l.jsx)("img",{src:n,alt:"Random character",className:"randomchar__img",style:i}),Object(l.jsxs)("div",{className:"randomchar__info",children:[Object(l.jsx)("p",{className:"randomchar__name",children:c}),Object(l.jsx)("p",{className:"randomchar__descr",children:a}),Object(l.jsxs)("div",{className:"randomchar__btns",children:[Object(l.jsx)("a",{href:r,className:"button button__main",children:Object(l.jsx)("div",{className:"inner",children:"homepage"})}),Object(l.jsx)("a",{href:s,className:"button button__secondary",children:Object(l.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})}),N=function(){var e=Object(a.useState)(null),t=Object(i.a)(e,2),c=t[0],n=t[1],r=v(),s=r.loading,o=r.error,u=r.getCharacter,j=r.clearError;Object(a.useEffect)((function(){m();var e=setInterval(m,6e4);return function(){clearInterval(e)}}),[]);var b=function(e){n(e)},m=function(){j();var e=Math.floor(400*Math.random())+1011e3;u(e).then(b)},d=o?Object(l.jsx)(h,{}):null,f=s?Object(l.jsx)(g,{}):null,O=s||o||!c?null:Object(l.jsx)(y,{char:c});return Object(l.jsxs)("div",{className:"randomchar",children:[d,f,O,Object(l.jsxs)("div",{className:"randomchar__static",children:[Object(l.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",Object(l.jsx)("br",{}),"Do you want to get to know him better?"]}),Object(l.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),Object(l.jsx)("button",{onClick:m,className:"button button__main",children:Object(l.jsx)("div",{className:"inner",children:"try it"})}),Object(l.jsx)("img",{src:_,alt:"mjolnir",className:"randomchar__decoration"})]})]})},k=c.p+"static/media/vision.067d4ae1.png",C=(c(22),function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),Object(l.jsxs)("div",{className:"skeleton",children:[Object(l.jsxs)("div",{className:"pulse skeleton__header",children:[Object(l.jsx)("div",{className:"pulse skeleton__circle"}),Object(l.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(l.jsx)("div",{className:"pulse skeleton__block"}),Object(l.jsx)("div",{className:"pulse skeleton__block"}),Object(l.jsx)("div",{className:"pulse skeleton__block"})]})]})}),w=(c(23),function(e){var t=e.char,c=t.name,a=t.description,n=t.thumbnail,r=t.homepage,s=t.wiki,i=t.comics,o={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===n&&(o={objectFit:"contain"}),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"char__basics",children:[Object(l.jsx)("img",{src:n,alt:c,style:o}),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"char__info-name",children:c}),Object(l.jsxs)("div",{className:"char__btns",children:[Object(l.jsx)("a",{href:r,className:"button button__main",children:Object(l.jsx)("div",{className:"inner",children:"homepage"})}),Object(l.jsx)("a",{href:s,className:"button button__secondary",children:Object(l.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),Object(l.jsx)("div",{className:"char__descr",children:a}),Object(l.jsx)("div",{className:"char__comics",children:"Comics:"}),Object(l.jsxs)("ul",{className:"char__comics-list",children:[i.length>0?null:"There is no comics with this character",i.map((function(e,t){if(!(t>9))return Object(l.jsx)("li",{className:"char__comics-item",children:e.name},t)}))]})]})}),T=function(e){var t=Object(a.useState)(null),c=Object(i.a)(t,2),n=c[0],r=c[1],s=v(),o=s.loading,u=s.error,j=s.getCharacter,b=s.clearError;Object(a.useEffect)((function(){m()}),[e.charId]);var m=function(){var t=e.charId;t&&(b(),j(t).then(d))},d=function(e){r(e)},f=n||o||u?null:Object(l.jsx)(C,{}),O=u?Object(l.jsx)(h,{}):null,p=o?Object(l.jsx)(g,{}):null,x=o||u||!n?null:Object(l.jsx)(w,{char:n});return Object(l.jsxs)("div",{className:"char__info",children:[f,O,p,x]})},E=c(9),S=(c(24),function(e){var t=Object(a.useState)([]),c=Object(i.a)(t,2),n=c[0],r=c[1],s=Object(a.useState)(!1),o=Object(i.a)(s,2),u=o[0],j=o[1],b=Object(a.useState)(210),m=Object(i.a)(b,2),d=m[0],f=m[1],O=Object(a.useState)(!1),p=Object(i.a)(O,2),x=p[0],_=p[1],y=v(),N=y.loading,k=y.error,C=y.getAllCharacters;Object(a.useEffect)((function(){w(d,!0)}),[]);var w=function(e,t){j(!t),C(e).then(T)},T=function(e){var t=!1;e.length<9&&(t=!0),r((function(t){return[].concat(Object(E.a)(t),Object(E.a)(e))})),j((function(e){return!1})),f((function(e){return e+9})),_((function(e){return t}))},S=Object(a.useRef)([]),F=function(e){S.current.forEach((function(e){return e.classList.remove("char__item_selected")})),S.current[e].classList.add("char__item_selected"),S.current[e].focus()};var I=function(t){var c=t.map((function(t,c){var a={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"!==t.thumbnail&&"http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708.gif"!==t.thumbnail||(a={objectFit:"unset"}),Object(l.jsxs)("li",{className:"char__item",tabIndex:0,ref:function(e){return S.current[c]=e},onClick:function(){e.onCharSelected(t.id),F(c)},onKeyPress:function(a){" "!==a.key&&"Enter"!==a.key||(e.onCharSelected(t.id),F(c))},children:[Object(l.jsx)("img",{src:t.thumbnail,alt:t.name,style:a}),Object(l.jsx)("div",{className:"char__name",children:t.name})]},t.id)}));return Object(l.jsx)("ul",{className:"char__grid",children:c})}(n),M=k?Object(l.jsx)(h,{}):null,R=N&&!u?Object(l.jsx)(g,{}):null;return Object(l.jsxs)("div",{className:"char__list",children:[M,R,I,Object(l.jsx)("button",{className:"button button__main button__long",disabled:u,style:{display:x?"none":"block"},onClick:function(){return w(d)},children:Object(l.jsx)("div",{className:"inner",children:"load more"})})]})}),F=function(){var e=Object(a.useState)(null),t=Object(i.a)(e,2),c=t[0],n=t[1];return Object(l.jsxs)("div",{className:"app",children:[Object(l.jsx)(o,{}),Object(l.jsxs)("main",{children:[Object(l.jsx)(O,{children:Object(l.jsx)(N,{})}),Object(l.jsxs)("div",{className:"char__content",children:[Object(l.jsx)(O,{children:Object(l.jsx)(S,{onCharSelected:function(e){n(e)}})}),Object(l.jsx)(O,{children:Object(l.jsx)(T,{charId:c})})]}),Object(l.jsx)("img",{className:"bg-decoration",src:k,alt:"vision"})]})]})};c(25);s.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(F,{})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.5f854695.chunk.js.map