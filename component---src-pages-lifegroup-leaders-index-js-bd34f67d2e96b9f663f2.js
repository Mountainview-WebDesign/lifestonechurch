(window.webpackJsonp=window.webpackJsonp||[]).push([[28,29],{156:function(e,t,r){"use strict";r.r(t);var a=r(207),n=r(0),i=r.n(n),o=r(186),s=r(187),l=r.n(s),c=r(184),d=r(191),u=r(185),f=(r(190),r(199),r(53),r(1)),p=r.n(f),A=Object(c.b)("div",{target:"css-ry7rpn0"})("display:flex;justify-content:space-between;flex-wrap:wrap;width:700px;max-width:100%;margin:0 auto;> a{text-transform:uppercase;padding:8px 12px;}"),h=function(e){var t=e.items;return i.a.createElement(A,null,t.map(function(e,t){return e.external?i.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",key:t},e.name):i.a.createElement(o.Link,{to:e.link,key:t},e.name)}))};h.propTypes={items:p.a.arrayOf(p.a.shape({name:p.a.string.isRequired,link:p.a.string.isRequired}))};var g=h,m=(r(26),r(8)),b=r.n(m),w=r(57),E=r(189),y=r(40),v=Object(c.b)("div",{target:"css-czcbch0"})("margin-top:20px;color:red;"),S=Object(c.b)("div",{target:"css-czcbch1"})("text-align:center;"),k=Object(c.b)("div",{target:"css-czcbch2"})("display:flex;justify-content:center;align-items:baseline;flex-wrap:no-wrap;margin-top:20px;"),x=Object(c.a)("height:40px;width:200px;margin:0;padding:20px 14px;border-radius:0;font-size:16px;"),j=Object(c.b)("input",{target:"css-czcbch3"})(x,";color:",E.g,";&::placeholder{color:",E.b,";}"),I=Object(c.b)("button",{target:"css-czcbch4"})(x,";flex:0;background-color:",E.b,";border:none;border-radius:0;padding:0 20px;color:white;font-size:16px;font-weight:bold;cursor:pointer;transition:all 0.3s;&:hover{background-color:",E.d,";}&:active,&:focus{background-color:",E.c,";}"),z=function(e){function t(){for(var t,r=arguments.length,a=new Array(r),n=0;n<r;n++)a[n]=arguments[n];return(t=e.call.apply(e,[this].concat(a))||this).state={password:"",error:""},t.handleChange=function(e){var r=e.target.value;t.setState(function(e){return Object.assign({},e,{password:r,error:""})})},t.handleKeyDown=function(e){13===e.keyCode&&t.submitForm()},t.logout=function(){t.props.onLogout(),localStorage.setItem("loggedIn","false")},t.submitForm=function(){"livelife"===t.state.password?(t.props.onLogin(),t.setState(function(e){return Object.assign({},e,{error:"",password:""})}),localStorage.setItem("loggedIn","true")):t.setState(function(e){return Object.assign({},e,{error:"Incorrect password",password:""})})},t}b()(t,e);var r=t.prototype;return r.componentDidMount=function(){"true"===localStorage.getItem("loggedIn")&&this.props.onLogin()},r.render=function(){var e=this.props,t=e.isLoggedIn,r=e.children;return i.a.createElement("div",null,t?i.a.createElement("div",null,r,!1):i.a.createElement(S,null,i.a.createElement("p",null,"You must be logged in to view this page."),i.a.createElement(k,null,i.a.createElement(j,{type:"password",id:"password",placeholder:"Enter password",value:this.state.password,onChange:this.handleChange,onKeyDown:this.handleKeyDown}),i.a.createElement(I,{onClick:this.submitForm},"Submit")),i.a.createElement(v,null,this.state.error)))},t}(i.a.Component),L=Object(w.b)(function(e){return{isLoggedIn:function(e){return e.isLoggedIn}(e)}},{onLogin:function(){return{type:y.a}},onLogout:function(){return{type:y.b}}})(z),B=Object(c.b)("div",{target:"css-1cm7me10"})("margin:0 auto;max-width:700px;"),C=[{name:"Curriculum",link:"/lifegroup-leaders",external:!1},{name:"Attendance",link:"https://lifestonechurch.breezechms.com/events/overview#/?start_date=2018-10-19&view=month",external:!0},{name:"Resources",link:"/lifegroup-leaders/resources",external:!1}];t.default=function(e){var t=e.children;e.data,e.onLogout;return i.a.createElement(d.a,null,i.a.createElement(u.a,null,"LifeGroup Leader Resources"),i.a.createElement(B,null,i.a.createElement(o.StaticQuery,{query:"3708110635",render:function(e){return i.a.createElement(l.a,{sizes:e.lifeGroupLeaderImage.childImageSharp.sizes})},data:a})),i.a.createElement(L,null,i.a.createElement("div",null,i.a.createElement(g,{items:C}),t)))}},157:function(e,t,r){"use strict";r.r(t),r.d(t,"curriculum",function(){return u});r(190),r(53);var a=r(0),n=r.n(a),i=r(184),o=r(156),s=r(185),l=r(198),c=Object(i.b)("div",{target:"css-1cpkrqa0"})("display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));grid-gap:24px;margin-bottom:40px;"),d=Object(i.b)("div",{target:"css-1cpkrqa1"})("padding:20px;"),u={current:{weeks:[{name:"Week of 1/20",pdf:"https://s3-us-west-2.amazonaws.com/lifestonechurch.net/lifegroup-notes/LG.Study.Week.of.1.20.pdf"},{name:"Week of 1/27",pdf:"https://s3-us-west-2.amazonaws.com/lifestonechurch.net/lifegroup-notes/lifegroup-study-2019-01-27.pdf"},{name:"Week of 2/10",pdf:"https://s3-us-west-2.amazonaws.com/lifestonechurch.net/lifegroup-notes/lifegroup-study-2019-02-10.pdf"}]},previous:[{name:"The Good Book",weeks:[{pdf:"https://s3-us-west-2.amazonaws.com/lifestonechurch.net/library/the-good-book/the-good-book-week-1.pdf",video:"https://www.rightnowmedia.org/Content/Series/229881?episode=1 "},{pdf:"https://s3-us-west-2.amazonaws.com/lifestonechurch.net/library/the-good-book/the-good-book-week-2.pdf",video:"https://www.rightnowmedia.org/Content/Series/229881?episode=2 "},{pdf:"https://s3-us-west-2.amazonaws.com/lifestonechurch.net/library/the-good-book/the-good-book-week-3.pdf",video:"https://www.rightnowmedia.org/Content/Series/229881?episode=3 "},{pdf:"https://s3-us-west-2.amazonaws.com/lifestonechurch.net/library/the-good-book/the-good-book-week-4.pdf",video:"https://www.rightnowmedia.org/Content/Series/229881?episode=4 "},{pdf:"https://s3-us-west-2.amazonaws.com/lifestonechurch.net/library/the-good-book/the-good-book-week-5.pdf",video:"https://www.rightnowmedia.org/Content/Series/229881?episode=5 "},{pdf:"https://s3-us-west-2.amazonaws.com/lifestonechurch.net/library/the-good-book/the-good-book-week-6.pdf",video:"https://www.rightnowmedia.org/Content/Series/229881?episode=6 "},{pdf:"https://s3-us-west-2.amazonaws.com/lifestonechurch.net/library/the-good-book/the-good-book-week-7.pdf",video:"https://www.rightnowmedia.org/Content/Series/229881?episode=7 "},{pdf:"https://s3-us-west-2.amazonaws.com/lifestonechurch.net/library/the-good-book/the-good-book-week-8.pdf",video:"https://www.rightnowmedia.org/Content/Series/229881?episode=8 "}]}]};t.default=function(){return n.a.createElement(o.default,null,n.a.createElement("div",null,n.a.createElement(s.b,null,"Curriculum"),n.a.createElement(c,null,0===u.current.weeks.length?n.a.createElement("p",null,"Coming soon"):null,u.current.weeks.map(function(e,t){return n.a.createElement(l.a,{key:t},n.a.createElement(d,null,n.a.createElement(s.c,null,e.name),e.pdf&&n.a.createElement("p",null,n.a.createElement("a",{href:e.pdf,target:"_blank",rel:"noopener noreferrer"},"Discussion Guide")),e.video&&n.a.createElement("p",null,n.a.createElement("a",{href:e.video,target:"_blank",rel:"noopener noreferrer"},"Video"))))}))))}},185:function(e,t,r){"use strict";r.d(t,"a",function(){return o}),r.d(t,"b",function(){return s}),r.d(t,"c",function(){return l}),r.d(t,"d",function(){return c});var a=r(0),n=r.n(a),i=r(192),o=function(e){var t=e.children;return n.a.createElement("h1",{id:i(t,{lower:!0})},t)},s=function(e){var t=e.children;return n.a.createElement("h2",{id:i(t,{lower:!0})},t)},l=function(e){var t=e.children;return n.a.createElement("h3",{id:i(t,{lower:!0})},t)},c=function(e){var t=e.children;return n.a.createElement("h4",{id:i(t,{lower:!0})},t)}},187:function(e,t,r){"use strict";var a=r(27);t.__esModule=!0,t.default=void 0;var n,i=a(r(8)),o=a(r(54)),s=a(r(194)),l=a(r(87)),c=a(r(0)),d=a(r(1)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},p=function(e){var t=u(e),r=t.fluid?t.fluid.src:t.fixed.src;return!!f[r]||(f[r]=!0,!1)},A=[];var h=function(e,t){(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){A.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),n).observe(e),A.push([e,t])},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+r+"/>":"",n=e.srcSet?'<source srcSet="'+e.srcSet+'" '+r+"/>":"",i=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",c=e.opacity?e.opacity:"1";return"<picture>"+a+n+"<img "+s+l+t+o+i+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+c+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},m=c.default.forwardRef(function(e,t){var r=e.style,a=e.onLoad,n=e.onError,i=(0,s.default)(e,["style","onLoad","onError"]);return c.default.createElement("img",(0,l.default)({},i,{onLoad:a,onError:n,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},r)}))});m.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var b=function(e){function t(t){var r;r=e.call(this,t)||this;var a=!0,n=!0,i=!1,s=t.fadeIn,l=p(t);!l&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=!1,n=!1,i=!0),"undefined"==typeof window&&(a=!1,n=!1),t.critical&&(a=!0,n=!1,i=!1);var d=!(r.props.critical&&!r.props.fadeIn);return r.state={isVisible:a,imgLoaded:n,IOSupported:i,fadeIn:s,hasNoScript:d,seenBefore:l},r.imageRef=c.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,o.default)((0,o.default)(r))),r.handleRef=r.handleRef.bind((0,o.default)((0,o.default)(r))),r}(0,i.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.handleRef=function(e){var t=this;this.state.IOSupported&&e&&h(e,function(){t.setState({isVisible:!0})})},r.handleImageLoaded=function(){this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=u(this.props),t=e.title,r=e.alt,a=e.className,n=e.style,i=void 0===n?{}:n,o=e.imgStyle,s=void 0===o?{}:o,d=e.placeholderStyle,f=void 0===d?{}:d,p=e.fluid,A=e.fixed,h=e.backgroundColor,b=e.Tag,w="boolean"==typeof h?"lightgray":h,E=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},s,f),y=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},s);if(p){var v=p;return c.default.createElement(b,{className:(a||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(v.srcSet)},c.default.createElement(b,{style:{width:"100%",paddingBottom:100/v.aspectRatio+"%"}}),v.base64&&c.default.createElement(m,{alt:this.state.isVisible?"":r,title:t,src:v.base64,style:E}),v.tracedSVG&&c.default.createElement(m,{alt:this.state.isVisible?"":r,title:t,src:v.tracedSVG,style:E}),w&&c.default.createElement(b,{title:t,style:{backgroundColor:w,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&c.default.createElement("picture",null,v.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:v.srcSetWebp,sizes:v.sizes}),c.default.createElement("source",{srcSet:v.srcSet,sizes:v.sizes}),c.default.createElement(m,{alt:r,title:t,src:v.src,style:y,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:r,title:t},v))}}))}if(A){var S=A,k=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:S.width,height:S.height},i);return"inherit"===i.display&&delete k.display,c.default.createElement(b,{className:(a||"")+" gatsby-image-wrapper",style:k,ref:this.handleRef,key:"fixed-"+JSON.stringify(S.srcSet)},S.base64&&c.default.createElement(m,{alt:this.state.isVisible?"":r,title:t,src:S.base64,style:E}),S.tracedSVG&&c.default.createElement(m,{alt:this.state.isVisible?"":r,title:t,src:S.tracedSVG,style:E}),w&&c.default.createElement(b,{title:t,style:{backgroundColor:w,width:S.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:S.height}}),this.state.isVisible&&c.default.createElement("picture",null,S.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:S.srcSetWebp,sizes:S.sizes}),c.default.createElement("source",{srcSet:S.srcSet,sizes:S.sizes}),c.default.createElement(m,{alt:r,title:t,width:S.width,height:S.height,src:S.src,style:y,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:r,title:t,width:S.width,height:S.height},S))}}))}return null},t}(c.default.Component);b.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var w=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),E=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});b.propTypes={resolutions:w,sizes:E,fixed:w,fluid:E,fadeIn:d.default.bool,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,Tag:d.default.string};var y=b;t.default=y},198:function(e,t,r){"use strict";var a=r(0),n=r.n(a),i=r(184),o=Object(i.b)("div",{target:"css-82l17w0"})("position:relative;color:rgba(0,0,0,0.6);background:rgb(255,255,255) none repeat scroll 0% 0%;border-radius:4px;box-shadow:rgba(25,17,34,0.05) 0px 3px 10px;transition:transform 250ms cubic-bezier(0.4,0,0.2,1) 0s,box-shadow 250ms cubic-bezier(0.4,0,0.2,1) 0s,padding 250ms cubic-bezier(0.4,0,0.2,1) 0s;");t.a=function(e){var t=e.children;return n.a.createElement(o,null,t)}},199:function(e,t,r){"use strict";r(201)("link",function(e){return function(t){return e(this,"a","href",t)}})},201:function(e,t,r){var a=r(7),n=r(17),i=r(28),o=/"/g,s=function(e,t,r,a){var n=String(i(e)),s="<"+t;return""!==r&&(s+=" "+r+'="'+String(a).replace(o,"&quot;")+'"'),s+">"+n+"</"+t+">"};e.exports=function(e,t){var r={};r[e]=t(s),a(a.P+a.F*n(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",r)}},207:function(e){e.exports={data:{lifeGroupLeaderImage:{childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAMBAgX/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAABzHpm5UVD/8QAGxABAAICAwAAAAAAAAAAAAAAAQISABARISP/2gAIAQEAAQUCKJ4mTm2ennX/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAVEQEBAAAAAAAAAAAAAAAAAAABEP/aAAgBAgEBPwEn/8QAGhAAAgIDAAAAAAAAAAAAAAAAAAEQISJBkf/aAAgBAQAGPwJFNmLqNcj/xAAbEAACAwEBAQAAAAAAAAAAAAAAAREhMZFBgf/aAAgBAQABPyGQNw4xE0SvhsNCmklyTDrgN35w/9oADAMBAAIAAwAAABDgH//EABcRAAMBAAAAAAAAAAAAAAAAAAABEVH/2gAIAQMBAT8QcIsP/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAERQVH/2gAIAQIBAT8QrGV9P//EAB4QAQEAAgICAwAAAAAAAAAAAAERACFBYTGxkdHw/9oACAEBAAE/EESkFQDxze9ZKVDK+n3g+GNUIzZrvIidC0+2Cpvv41iiA+DP/9k=",aspectRatio:1.7777777777777777,src:"/lifestonechurch.net/static/lifegroups-7f7ba6bc107714588d961775b55910ec-b6f9f.jpg",srcSet:"/lifestonechurch.net/static/lifegroups-7f7ba6bc107714588d961775b55910ec-52923.jpg 175w,\n/lifestonechurch.net/static/lifegroups-7f7ba6bc107714588d961775b55910ec-82f41.jpg 350w,\n/lifestonechurch.net/static/lifegroups-7f7ba6bc107714588d961775b55910ec-b6f9f.jpg 700w,\n/lifestonechurch.net/static/lifegroups-7f7ba6bc107714588d961775b55910ec-381a7.jpg 1050w,\n/lifestonechurch.net/static/lifegroups-7f7ba6bc107714588d961775b55910ec-6d028.jpg 1400w,\n/lifestonechurch.net/static/lifegroups-7f7ba6bc107714588d961775b55910ec-5f2ee.jpg 1920w",sizes:"(max-width: 700px) 100vw, 700px"}}}}}}}]);
//# sourceMappingURL=component---src-pages-lifegroup-leaders-index-js-bd34f67d2e96b9f663f2.js.map