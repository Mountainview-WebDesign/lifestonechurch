(window.webpackJsonp=window.webpackJsonp||[]).push([[30,29],{156:function(e,t,a){"use strict";a.r(t);var r=a(207),n=a(0),i=a.n(n),o=a(186),s=a(187),l=a.n(s),c=a(184),u=a(191),d=a(185),h=(a(190),a(199),a(53),a(1)),p=a.n(h),f=Object(c.b)("div",{target:"css-ry7rpn0"})("display:flex;justify-content:space-between;flex-wrap:wrap;width:700px;max-width:100%;margin:0 auto;> a{text-transform:uppercase;padding:8px 12px;}"),g=function(e){var t=e.items;return i.a.createElement(f,null,t.map(function(e,t){return e.external?i.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",key:t},e.name):i.a.createElement(o.Link,{to:e.link,key:t},e.name)}))};g.propTypes={items:p.a.arrayOf(p.a.shape({name:p.a.string.isRequired,link:p.a.string.isRequired}))};var m=g,A=(a(26),a(8)),w=a.n(A),b=a(57),E=a(189),y=a(40),v=Object(c.b)("div",{target:"css-czcbch0"})("margin-top:20px;color:red;"),x=Object(c.b)("div",{target:"css-czcbch1"})("text-align:center;"),k=Object(c.b)("div",{target:"css-czcbch2"})("display:flex;justify-content:center;align-items:baseline;flex-wrap:no-wrap;margin-top:20px;"),S=Object(c.a)("height:40px;width:200px;margin:0;padding:20px 14px;border-radius:0;font-size:16px;"),I=Object(c.b)("input",{target:"css-czcbch3"})(S,";color:",E.g,";&::placeholder{color:",E.b,";}"),j=Object(c.b)("button",{target:"css-czcbch4"})(S,";flex:0;background-color:",E.b,";border:none;border-radius:0;padding:0 20px;color:white;font-size:16px;font-weight:bold;cursor:pointer;transition:all 0.3s;&:hover{background-color:",E.d,";}&:active,&:focus{background-color:",E.c,";}"),C=function(e){function t(){for(var t,a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return(t=e.call.apply(e,[this].concat(r))||this).state={password:"",error:""},t.handleChange=function(e){var a=e.target.value;t.setState(function(e){return Object.assign({},e,{password:a,error:""})})},t.handleKeyDown=function(e){13===e.keyCode&&t.submitForm()},t.logout=function(){t.props.onLogout(),localStorage.setItem("loggedIn","false")},t.submitForm=function(){"livelife"===t.state.password?(t.props.onLogin(),t.setState(function(e){return Object.assign({},e,{error:"",password:""})}),localStorage.setItem("loggedIn","true")):t.setState(function(e){return Object.assign({},e,{error:"Incorrect password",password:""})})},t}w()(t,e);var a=t.prototype;return a.componentDidMount=function(){"true"===localStorage.getItem("loggedIn")&&this.props.onLogin()},a.render=function(){var e=this.props,t=e.isLoggedIn,a=e.children;return i.a.createElement("div",null,t?i.a.createElement("div",null,a,!1):i.a.createElement(x,null,i.a.createElement("p",null,"You must be logged in to view this page."),i.a.createElement(k,null,i.a.createElement(I,{type:"password",id:"password",placeholder:"Enter password",value:this.state.password,onChange:this.handleChange,onKeyDown:this.handleKeyDown}),i.a.createElement(j,{onClick:this.submitForm},"Submit")),i.a.createElement(v,null,this.state.error)))},t}(i.a.Component),L=Object(b.b)(function(e){return{isLoggedIn:function(e){return e.isLoggedIn}(e)}},{onLogin:function(){return{type:y.a}},onLogout:function(){return{type:y.b}}})(C),B=Object(c.b)("div",{target:"css-1cm7me10"})("margin:0 auto;max-width:700px;"),R=[{name:"Curriculum",link:"/lifegroup-leaders",external:!1},{name:"Attendance",link:"https://lifestonechurch.breezechms.com/events/overview#/?start_date=2018-10-19&view=month",external:!0},{name:"Resources",link:"/lifegroup-leaders/resources",external:!1}];t.default=function(e){var t=e.children;e.data,e.onLogout;return i.a.createElement(u.a,null,i.a.createElement(d.a,null,"LifeGroup Leader Resources"),i.a.createElement(B,null,i.a.createElement(o.StaticQuery,{query:"3708110635",render:function(e){return i.a.createElement(l.a,{sizes:e.lifeGroupLeaderImage.childImageSharp.sizes})},data:r})),i.a.createElement(L,null,i.a.createElement("div",null,i.a.createElement(m,{items:R}),t)))}},175:function(e,t,a){"use strict";a.r(t);a(190),a(199),a(53);var r=a(0),n=a.n(r),i=a(184),o=a(156),s=a(200),l=Object(i.b)("div",{target:"css-odty7p0"})("display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));grid-gap:24px;& a,& a:hover{text-decoration:none;}"),c=Object(i.b)("div",{target:"css-odty7p1"})("padding:20px;color:rgba(0,0,0,0.7);"),u=[{name:"Example LifeGroup Schedule",link:"https://s3-us-west-2.amazonaws.com/lifestonechurch.net/pdfs/Example+LifeGroup+Schedule+10.24.18.pdf"},{name:"Leader Expectations",link:"https://s3-us-west-2.amazonaws.com/lifestonechurch.net/pdfs/LifeGroup.Leader.Expectations.pdf"},{name:"Host Expectations",link:"https://s3-us-west-2.amazonaws.com/lifestonechurch.net/pdfs/LifeGroup.Host.Expectations.pdf"},{name:"LifeGroup Covenant",link:"https://s3-us-west-2.amazonaws.com/lifestonechurch.net/pdfs/LifeGroup_Group_Covenant.pdf"}];t.default=function(){return n.a.createElement(o.default,null,n.a.createElement("div",null,n.a.createElement("h2",null,"Resources"),n.a.createElement("h3",null,"PDFs"),n.a.createElement("ul",null,u.map(function(e,t){return n.a.createElement("li",{key:t},n.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},e.name))})),n.a.createElement("h3",null,"Training Videos"),n.a.createElement("h4",null,"Constant Talkers"),n.a.createElement(l,null,n.a.createElement(s.a,null,n.a.createElement("a",{href:"https://www.rightnowmedia.org/Training/Post/View/9755",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("img",{alt:"Tips for Dealing with Constant Talkers",src:"https://d2y24eux71xwor.cloudfront.net/Images/Production/Content/Element/98723.jpeg"}),n.a.createElement(c,null,n.a.createElement("p",null,"Is there someone in your group who is unaware of how little they allow others to speak? Listen to Larry Osborne, Pastor at North Coast Church in San Diego, CA, as he gives us practical tips to dealing with a constant talker.")))),n.a.createElement(s.a,null,n.a.createElement("a",{href:"https://www.rightnowmedia.org/Training/Post/View/9035",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("img",{alt:"Rein in the Chatterbox",src:"https://d2y24eux71xwor.cloudfront.net/Images/Production/Content/Element/98532.jpeg"}),n.a.createElement(c,null,n.a.createElement("p",null,"One persistent talker can disrupt your whole group. In this two-and-a-half minute video, Heather Zempel, Pastor of Discipleship at National Community Church in Washington, D.C., shares some practical and loving ways to keep your small group discussions on track."))))),n.a.createElement("h4",null,"General Help"),n.a.createElement(l,null,n.a.createElement(s.a,null,n.a.createElement("a",{href:"https://www.rightnowmedia.org/Training/Post/View/202578",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("img",{alt:"Biblical Shepherding",src:"https://d2y24eux71xwor.cloudfront.net/Images/Production/Content/Element/123075.jpeg"}),n.a.createElement(c,null,n.a.createElement("p",null,"Shepherding may be a foreign concept to many of us who grew in American cities or suburbs, but it was very familiar to people who lived in the biblical eras. What do shepherds actually do? How could it help us today as we lead and disciple others in Christ? In three videos, Mike Dsane, Matt Younger, and Beth Broom talk about what it means to spiritually shepherd small group members and what it looks like in both men’s and women’s groups. Mike Dsane, Matt Younger, and Beth Broom are Groups Pastors at The Village Church in the Dallas-Fort Worth area.")))),n.a.createElement(s.a,null,n.a.createElement("a",{href:"https://www.rightnowmedia.org/Training/Post/View/9099",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("img",{alt:"Two Keys to Successful Leadership",src:"https://d2y24eux71xwor.cloudfront.net/Images/Production/Content/Element/98540.jpeg"}),n.a.createElement(c,null,n.a.createElement("p",null,"If you want to successfully lead, you have to be willing to serve like Jesus. Listen to Jenny Boyett, Director of Assimilation for Small Groups at North Point Community Church in Alpharetta, GA, as she challenges us to focus on what really matters.")))),n.a.createElement(s.a,null,n.a.createElement("a",{href:"https://www.rightnowmedia.org/Training/Post/View/8957",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("img",{alt:"Leaders Should Take the Time to Build Relationships",src:"https://d2y24eux71xwor.cloudfront.net/Images/Production/Content/Element/97894.jpeg"}),n.a.createElement(c,null,n.a.createElement("p",null,"Darrin Patrick serves as Lead Pastor of The Journey Church in St Louis, which he founded in 2002. Darrin also serves on the board of directors of the Acts 29 Church Planting Network. In this session, he talks about the importance of the leader taking the time to build relationships with their group members outside of group time."))))),n.a.createElement("h4",null,"Going Deeper"),n.a.createElement(l,null,n.a.createElement(s.a,null,n.a.createElement("a",{href:"https://www.rightnowmedia.org/Training/Post/View/9002",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("img",{alt:"Deeper Teaching vs. Deeper Application",src:"https://d2y24eux71xwor.cloudfront.net/Images/Production/Content/Element/98521.jpeg"}),n.a.createElement(c,null,n.a.createElement("p",null,'Eric Metcalf is the Adult Ministries Champion for Community Christian Church in Chicago and for NewThing, a church-planting network. In this 3-minute clip, Eric challenges the notion that what small groups need is "deeper teaching."'))))),n.a.createElement("h4",null,"Asking Good Questions"),n.a.createElement(l,null,n.a.createElement(s.a,null,n.a.createElement("a",{href:"https://www.rightnowmedia.org/Training/Post/View/20658",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("img",{alt:"The Art of Asking Good Questions",src:"https://d2y24eux71xwor.cloudfront.net/Images/Production/Content/Element/98852.jpeg"}),n.a.createElement(c,null,n.a.createElement("p",null,"2nd video"),n.a.createElement("p",null,"Leading a small group can be intimidating, especially if you feel like you don’t know how to encourage meaningful discussions. In this session, Kevin Baker, Small Groups Pastor at Ada Bible Church near Grand Rapids, MI, takes us through a step-by-step process to asking great questions that will get your group talking on a deeper level.")))),n.a.createElement(s.a,null,n.a.createElement("a",{href:"https://www.rightnowmedia.org/Training/Post/View/69326",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("img",{alt:"Good Questions for Small Groups",src:"https://d2y24eux71xwor.cloudfront.net/Images/Production/Content/Element/105928.jpeg"}),n.a.createElement(c,null,n.a.createElement("p",null,'Hayley Miller, from Word of Life Fellowship, has several great ideas for asking good questions. We often ask questions that only return "churchy" answers, or we offer solutions to an answer so quickly that we fail to understand the real underlying problem. Listening well and asking probing questions will help us avoid both of these pitfalls.')))))))}},185:function(e,t,a){"use strict";a.d(t,"a",function(){return o}),a.d(t,"b",function(){return s}),a.d(t,"c",function(){return l}),a.d(t,"d",function(){return c});var r=a(0),n=a.n(r),i=a(192),o=function(e){var t=e.children;return n.a.createElement("h1",{id:i(t,{lower:!0})},t)},s=function(e){var t=e.children;return n.a.createElement("h2",{id:i(t,{lower:!0})},t)},l=function(e){var t=e.children;return n.a.createElement("h3",{id:i(t,{lower:!0})},t)},c=function(e){var t=e.children;return n.a.createElement("h4",{id:i(t,{lower:!0})},t)}},187:function(e,t,a){"use strict";var r=a(27);t.__esModule=!0,t.default=void 0;var n,i=r(a(8)),o=r(a(54)),s=r(a(194)),l=r(a(87)),c=r(a(0)),u=r(a(1)),d=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},h={},p=function(e){var t=d(e),a=t.fluid?t.fluid.src:t.fixed.src;return!!h[a]||(h[a]=!0,!1)},f=[];var g=function(e,t){(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){f.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),n).observe(e),f.push([e,t])},m=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",n=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",i=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",c=e.opacity?e.opacity:"1";return"<picture>"+r+n+"<img "+s+l+t+o+i+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+c+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},A=c.default.forwardRef(function(e,t){var a=e.style,r=e.onLoad,n=e.onError,i=(0,s.default)(e,["style","onLoad","onError"]);return c.default.createElement("img",(0,l.default)({},i,{onLoad:r,onError:n,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});A.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var w=function(e){function t(t){var a;a=e.call(this,t)||this;var r=!0,n=!0,i=!1,s=t.fadeIn,l=p(t);!l&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,n=!1,i=!0),"undefined"==typeof window&&(r=!1,n=!1),t.critical&&(r=!0,n=!1,i=!1);var u=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:r,imgLoaded:n,IOSupported:i,fadeIn:s,hasNoScript:u,seenBefore:l},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,o.default)((0,o.default)(a))),a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&g(e,function(){t.setState({isVisible:!0})})},a.handleImageLoaded=function(){this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=d(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,o=e.imgStyle,s=void 0===o?{}:o,u=e.placeholderStyle,h=void 0===u?{}:u,p=e.fluid,f=e.fixed,g=e.backgroundColor,w=e.Tag,b="boolean"==typeof g?"lightgray":g,E=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},s,h),y=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},s);if(p){var v=p;return c.default.createElement(w,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(v.srcSet)},c.default.createElement(w,{style:{width:"100%",paddingBottom:100/v.aspectRatio+"%"}}),v.base64&&c.default.createElement(A,{alt:this.state.isVisible?"":a,title:t,src:v.base64,style:E}),v.tracedSVG&&c.default.createElement(A,{alt:this.state.isVisible?"":a,title:t,src:v.tracedSVG,style:E}),b&&c.default.createElement(w,{title:t,style:{backgroundColor:b,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&c.default.createElement("picture",null,v.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:v.srcSetWebp,sizes:v.sizes}),c.default.createElement("source",{srcSet:v.srcSet,sizes:v.sizes}),c.default.createElement(A,{alt:a,title:t,src:v.src,style:y,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,l.default)({alt:a,title:t},v))}}))}if(f){var x=f,k=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:x.width,height:x.height},i);return"inherit"===i.display&&delete k.display,c.default.createElement(w,{className:(r||"")+" gatsby-image-wrapper",style:k,ref:this.handleRef,key:"fixed-"+JSON.stringify(x.srcSet)},x.base64&&c.default.createElement(A,{alt:this.state.isVisible?"":a,title:t,src:x.base64,style:E}),x.tracedSVG&&c.default.createElement(A,{alt:this.state.isVisible?"":a,title:t,src:x.tracedSVG,style:E}),b&&c.default.createElement(w,{title:t,style:{backgroundColor:b,width:x.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:x.height}}),this.state.isVisible&&c.default.createElement("picture",null,x.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:x.srcSetWebp,sizes:x.sizes}),c.default.createElement("source",{srcSet:x.srcSet,sizes:x.sizes}),c.default.createElement(A,{alt:a,title:t,width:x.width,height:x.height,src:x.src,style:y,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,l.default)({alt:a,title:t,width:x.width,height:x.height},x))}}))}return null},t}(c.default.Component);w.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var b=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string}),E=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string});w.propTypes={resolutions:b,sizes:E,fixed:b,fluid:E,fadeIn:u.default.bool,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,Tag:u.default.string};var y=w;t.default=y},199:function(e,t,a){"use strict";a(201)("link",function(e){return function(t){return e(this,"a","href",t)}})},200:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(184),o=Object(i.b)("div",{target:"css-63ec9t0"})("position:relative;margin-top:20px;margin-bottom:20px;color:rgba(0,0,0,0.6);background:rgb(255,255,255) none repeat scroll 0% 0%;border-radius:4px;box-shadow:rgba(25,17,34,0.05) 0px 3px 10px;transition:transform 250ms cubic-bezier(0.4,0,0.2,1) 0s,box-shadow 250ms cubic-bezier(0.4,0,0.2,1) 0s,padding 250ms cubic-bezier(0.4,0,0.2,1) 0s;&:active{box-shadow:0 3px 10px rgba(25,17,34,0.05);transform:translateY(0);transition:-webkit-transform 50ms,transform 50ms;}&:hover{transform:translateY(-4px);box-shadow:0 10px 42px rgba(25,17,34,0.1);-webkit-transform:translateY(-4px);}");t.a=function(e){var t=e.children;return n.a.createElement(o,null,t)}},201:function(e,t,a){var r=a(7),n=a(17),i=a(28),o=/"/g,s=function(e,t,a,r){var n=String(i(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(r).replace(o,"&quot;")+'"'),s+">"+n+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),r(r.P+r.F*n(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},207:function(e){e.exports={data:{lifeGroupLeaderImage:{childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAMBAgX/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAABzHpm5UVD/8QAGxABAAICAwAAAAAAAAAAAAAAAQISABARISP/2gAIAQEAAQUCKJ4mTm2ennX/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAVEQEBAAAAAAAAAAAAAAAAAAABEP/aAAgBAgEBPwEn/8QAGhAAAgIDAAAAAAAAAAAAAAAAAAEQISJBkf/aAAgBAQAGPwJFNmLqNcj/xAAbEAACAwEBAQAAAAAAAAAAAAAAAREhMZFBgf/aAAgBAQABPyGQNw4xE0SvhsNCmklyTDrgN35w/9oADAMBAAIAAwAAABDgH//EABcRAAMBAAAAAAAAAAAAAAAAAAABEVH/2gAIAQMBAT8QcIsP/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAERQVH/2gAIAQIBAT8QrGV9P//EAB4QAQEAAgICAwAAAAAAAAAAAAERACFBYTGxkdHw/9oACAEBAAE/EESkFQDxze9ZKVDK+n3g+GNUIzZrvIidC0+2Cpvv41iiA+DP/9k=",aspectRatio:1.7777777777777777,src:"/lifestonechurch.net/static/lifegroups-7f7ba6bc107714588d961775b55910ec-b6f9f.jpg",srcSet:"/lifestonechurch.net/static/lifegroups-7f7ba6bc107714588d961775b55910ec-52923.jpg 175w,\n/lifestonechurch.net/static/lifegroups-7f7ba6bc107714588d961775b55910ec-82f41.jpg 350w,\n/lifestonechurch.net/static/lifegroups-7f7ba6bc107714588d961775b55910ec-b6f9f.jpg 700w,\n/lifestonechurch.net/static/lifegroups-7f7ba6bc107714588d961775b55910ec-381a7.jpg 1050w,\n/lifestonechurch.net/static/lifegroups-7f7ba6bc107714588d961775b55910ec-6d028.jpg 1400w,\n/lifestonechurch.net/static/lifegroups-7f7ba6bc107714588d961775b55910ec-5f2ee.jpg 1920w",sizes:"(max-width: 700px) 100vw, 700px"}}}}}}}]);
//# sourceMappingURL=component---src-pages-lifegroup-leaders-resources-js-2806a27423f42deb0848.js.map