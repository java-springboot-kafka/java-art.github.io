(this.webpackJsonponlinejavaclass=this.webpackJsonponlinejavaclass||[]).push([[0],{33:function(e,t,a){e.exports=a(60)},58:function(e,t){Array.prototype.flatMap=function(e){return Array.prototype.concat.apply([],this.map(e))}},60:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(29),c=a.n(l),i=a(8),o=a(6),s=a(13),m=a.n(s),u=a(18),p=a(1),d=a(2),h=a(4),f=a(3),v=function(e){Object(h.a)(a,e);var t=Object(f.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("footer",{className:"footer-distributed"},r.a.createElement("div",{className:"footer-left"},r.a.createElement("h3",null,"Online",r.a.createElement("span",null,"Java"),"Class"),r.a.createElement("p",{className:"footer-company-name"},"\xa9Copyright 2015-2020 All rights reserved.",r.a.createElement("br",null)," This blog is fully run by myself and the powerful React framework")),r.a.createElement("div",{className:"footer-center"},r.a.createElement("div",null,r.a.createElement(i.b,{to:"about"},r.a.createElement("i",{className:"fap fap-avatar"}),"About Me")),r.a.createElement("div",null,r.a.createElement(i.b,{to:"privacy"},r.a.createElement("i",{className:"fap fap-privacy"}),r.a.createElement("p",null,"Privacy Policy"))),r.a.createElement("div",null,r.a.createElement(i.b,{to:"terms"},r.a.createElement("i",{className:"fap fap-terms"}),r.a.createElement("p",null,"Terms of Use"))),r.a.createElement("div",null,r.a.createElement("i",{className:"fap fap-mail"}),r.a.createElement("p",null,r.a.createElement("a",{href:"mailto:support@company.com"},"contact@onlinejavaclass.com")))),r.a.createElement("div",{className:"footer-right"},r.a.createElement("p",{className:"footer-company-about"},r.a.createElement("span",null,"About Online Java Class"),"Online Java Class has different classes in Java for beginners and professionals."),r.a.createElement("div",{className:"footer-icons"},r.a.createElement("a",{href:"#"},r.a.createElement("i",{className:"fap fap-linkedin"})),r.a.createElement("a",{href:"#"},r.a.createElement("i",{className:"fap fap-github"})))))}}]),a}(n.Component),b=a(7),E=function(e){Object(h.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).state={},n.getFromStore=n.getFromStore.bind(Object(b.a)(n)),n}return Object(d.a)(a,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"getFromStore",value:function(){}},{key:"getResource",value:function(e){}},{key:"render",value:function(){return this.state.STORE_MISS?r.a.createElement("div",null):r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"col-md-9"},r.a.createElement("img",{alt:"me",src:"/assets/img/me.png",className:"avatar"}),r.a.createElement("div",{className:"about"},r.a.createElement("p",null,r.a.createElement("b",null,"Hi, I\u2019m Mehrdad, and I run the onlinejavaclass blog.")),r.a.createElement("p",null,"I\u2019m a software developer, consultant, architect, coach \u2026 whatever the role, I\u2019m focused on getting software ready for production."))),r.a.createElement("blockquote",{className:"center-box"},r.a.createElement("p",null,r.a.createElement("strong",null,"The goal of this blog is to persist the things I learned so that you (and future me) don\u2019t have to learn them the hard way (again)"))),r.a.createElement("div",{className:"below"},r.a.createElement("p",null,"With this blog, I produce:"),r.a.createElement("ul",null,r.a.createElement("li",null,"deep-dive tutorials about Spring Boot"),r.a.createElement("li",null,"hands-on tutorials about Java"),r.a.createElement("li",null,"best practices on complex algorithms and data structure implementations with Java"),r.a.createElement("li",null,"opinion on practices of the Software Craft"))),r.a.createElement("div",{className:"below center-box"},r.a.createElement("p",null,"If you\u2019re interested in working with me or have any feedback about my writing, don\u2019t hesitate to contact me."),r.a.createElement("ul",{className:"footer-social"},r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",title:"Follow me on LinkedIn",href:"https://www.linkedin.com/in/allahkarami",className:"follow-linkedin"},r.a.createElement("i",{className:"fap fap-linkedin"}))),r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",title:"Follow me on GitHub",href:"https://github.com/metao1",className:"follow-github"},r.a.createElement("i",{className:"fap fap-github"}))),r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",title:"Drop me an email",href:"mailto:contact@onlinejavaclass.com",className:"follow-email"},r.a.createElement("i",{className:"fap fap-mail"}))))))}}]),a}(n.Component),g=function(e){Object(h.a)(a,e);var t=Object(f.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"content"},r.a.createElement("section",null,r.a.createElement(E,{link:"/data/footer/about.md"})))}}]),a}(n.Component),k=a(12),N=a.n(k),y=function(e){Object(h.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).state={},n.getFromStore=n.getFromStore.bind(Object(b.a)(n)),n}return Object(d.a)(a,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){this.getResource(this.props.link)}},{key:"componentWillUnmount",value:function(){}},{key:"getFromStore",value:function(){this.setState(this.AppStore.getResource(this.props.link))}},{key:"getResource",value:function(e){var t=this;this.context.flux.getActions("appActions").getResource({src:e,link:e}).then((function(e){e&&e.text&&t.setState({text:e.text})}))}},{key:"render",value:function(){if(this.state.STORE_MISS)return r.a.createElement("div",null);var e=N()(this.state.text);return r.a.createElement("div",{className:"markdown",dangerouslySetInnerHTML:{__html:e}})}}]),a}(n.Component),w=(n.Component,function(e){Object(h.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).state={},n.getFromStore=n.getFromStore.bind(Object(b.a)(n)),n}return Object(d.a)(a,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){this.getResource(this.props.link)}},{key:"componentWillUnmount",value:function(){}},{key:"getFromStore",value:function(){this.setState(this.AppStore.getResource(this.props.link))}},{key:"getResource",value:function(e){var t=this;this.context.flux.getActions("appActions").getResource({src:e,link:e}).then((function(e){e&&e.text&&t.setState({text:e.text})}))}},{key:"render",value:function(){if(this.state.STORE_MISS)return r.a.createElement("div",null);var e=N()(this.state.text);return r.a.createElement("div",{className:"markdown",dangerouslySetInnerHTML:{__html:e}})}}]),a}(n.Component));n.Component;var O=a(15),j=a.n(O);O.Request.prototype.jsonp=function(){var e;return this.jsonpCallbackName="superagentCallback"+(new Date).valueOf()+parseInt(1e3*Math.random()),window[this.jsonpCallbackName]=function(t){delete window[this.jsonpCallbackName],e.parentNode.removeChild(e),this.callback.apply(this,[null,t])}.bind(this),this.end=function(t){this.callback=t,e=document.createElement("script");var a=-1===this.url.indexOf("?")?"?":"&";e.src=this.url+a+"callback="+this.jsonpCallbackName,document.getElementsByTagName("head")[0].appendChild(e)},this},O.Request.prototype.exec=function(){var e=this;return new Promise((function(t,a){e.end((function(e,n){if(e)return a(e);t(n)}))}))};var S=j.a,x=function(e){Object(h.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).submitEmail=function(){var e=Object(u.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a="https://o91o15qwvf.execute-api.eu-central-1.amazonaws.com/Prod/newsletter?email="+n.state.email,n.setState({email:""}),n.setState({subscribed:!0}),e.next=6,S.get(a).exec().then((function(e){return e.body}));case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={subscribed:!1,email:""},n.handleEmailChange=n.handleEmailChange.bind(Object(b.a)(n)),n}return Object(d.a)(a,[{key:"handleEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"render",value:function(){return this.state.STORE_MISS?r.a.createElement("div",null):r.a.createElement("div",{className:"newsletter"},r.a.createElement("div",{className:"popup"},r.a.createElement("span",null,r.a.createElement("small",null,"I WON'T SPAM YOU! You will be updated with newest Java classes if you insert your email here and press subscribe!")),r.a.createElement("form",{method:"GET",onSubmit:this.submitEmail},r.a.createElement("div",{hidden:!this.state.subscribed},"Thank you!"),r.a.createElement("input",{type:"email",name:"email",placeholder:"Your Email Please",value:this.state.email,onChange:this.handleEmailChange,hidden:this.state.subscribed,required:!0},r.a.createElement("button",{className:"button button1",type:"submit",disabled:this.state.subscribed},"Subscribe")))))}}]),a}(r.a.Component),C=function(e){Object(h.a)(a,e);var t=Object(f.a)(a);function a(e){return Object(p.a)(this,a),t.call(this,e)}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"main-popup",hidden:this.props.show},r.a.createElement("div",{className:"popup"},r.a.createElement("h1",null,this.props.text),r.a.createElement(x,null),r.a.createElement("button",{className:"button button1",onClick:this.props.closePopup},"close me")))}}]),a}(r.a.Component),R=a(16),M=a.n(R),I=function(e){Object(h.a)(a,e);var t=Object(f.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return n.createElement("div",{className:"consent_blackbar",hidden:this.props.show},n.createElement("div",{className:"consent-track"},n.createElement("div",{className:"consent-content"},n.createElement("div",{className:"consent-text messageColumn"},"We use cookies to improve your experience with the site. To find out more, you can read the full Privacy and Cookie Policy\xa0\xa0\xa0",n.createElement("a",{href:"https://onlinejavaclass.com/#/privacy",target:"_blank",id:"privacy-button"},"Privacy and Data Processing Policy")),n.createElement("div",{className:"buttonsColumn consent-buttons"},n.createElement("span",{className:"repop-msg"}),n.createElement("button",{className:"button button1",onClick:this.props.closePopup},"OK")))))}}]),a}(n.Component),_=(n.Component,a(21)),T=a.n(_),A=function(e){Object(h.a)(a,e);var t=Object(f.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props.src;return 0===e.length?r.a.createElement("div",{className:"post center-box"},"No data"):r.a.createElement("div",{className:"post center-box"},e.map((function(e,t){var a=e.date?T()(e.date).fromNow():"",n=e.title?e.title:"",l=e.tags?e.tags:"",c=e.link.split("/").pop();return r.a.createElement("div",null,r.a.createElement("div",{key:t,className:"post itemlist"},r.a.createElement("div",{className:"date"},a),r.a.createElement(i.b,{className:"post-title",to:"experiment",params:{link:c}},r.a.createElement("span",null,n)),r.a.createElement("div",{className:"tags center-box"},l.map((function(e,t){return r.a.createElement(i.b,{key:e+t,className:"tag",to:"search",params:{query:e}},e)})))))})))}}]),a}(r.a.Component),W=function(e){Object(h.a)(a,e);var t=Object(f.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"spinner","data-reactid":".0.2.1.1"},r.a.createElement("div",{className:"rect1 blue","data-reactid":".0.2.1.1.0"}),r.a.createElement("div",{className:"rect2 blue","data-reactid":".0.2.1.1.1"}),r.a.createElement("div",{className:"rect3 blue","data-reactid":".0.2.1.1.2"}),r.a.createElement("div",{className:"rect4 blue","data-reactid":".0.2.1.1.3"}),r.a.createElement("div",{className:"rect5 blue","data-reactid":".0.2.1.1.4"}),r.a.createElement("div",{className:"rect5 blue","data-reactid":".0.2.1.1.5"}),r.a.createElement("div",{className:"rect4 blue","data-reactid":".0.2.1.1.6"}),r.a.createElement("div",{className:"rect3 blue","data-reactid":".0.2.1.1.7"}),r.a.createElement("div",{className:"rect2 blue","data-reactid":".0.2.1.1.8"}),r.a.createElement("div",{className:"rect1 blue","data-reactid":".0.2.1.1.9"}))}}]),a}(r.a.Component),F=(n.Component,a(58),n.Component,a(31)),P=a(32),J=a.n(P),D=function(e){Object(h.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).state={},n.getFromStore=n.getFromStore.bind(Object(b.a)(n)),n}return Object(d.a)(a,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){this.getResource(this.props.link);var e=new J.a(".copy-button");e.on("success",(function(e){e.clearSelection()})),e.on("error",(function(e){}))}},{key:"componentWillUnmount",value:function(){}},{key:"getFromStore",value:function(){this.setState(this.AppStore.getResource(this.props.link))}},{key:"getResource",value:function(e){var t=this,a=this.context.flux.getActions("appActions"),n=this.AppStore.getSiteMap()[e];n&&(n.link=e,"undefined"!==typeof window&&(window.location.href="#"+e),document.title=this.filter(e),a.getResource(n).then((function(e){t.setState({STORE_MISS:e.STORE_MISS,date:e.date,link:e.link,next:e.next?e.next:void 0,pre:e.pre?e.pre:void 0,repo:e.repo?e.repo:"https://github.com/metao1",postLink:e.date,src:e.src,tags:e.tags,text:e.text,title:e.title,type:e.type})})))}},{key:"render",value:function(){var e,t=this;if(this.state.STORE_MISS)e=r.a.createElement(W,null);else{var a=N()(this.state.text),n=T()(this.state.date).fromNow();e=r.a.createElement("div",{className:"post markdown center-box"},r.a.createElement("div",{className:"operational-btn"},r.a.createElement("div",{className:"operational-link"},r.a.createElement("button",{className:"button button1",disabled:!this.state.pre,onClick:function(){return t.getResource(t.state.pre)}},"previous"),r.a.createElement("button",{className:"button button1",disabled:!this.state.next,onClick:function(){return t.getResource(t.state.next)}},"next")),r.a.createElement("div",{className:"operational-link"},r.a.createElement("span",{className:"navigation-spans"},this.filter(this.state.pre)),r.a.createElement("span",{className:"navigation-spans"},this.filter(this.state.next)))),r.a.createElement("hr",null),r.a.createElement("div",{className:"date"},r.a.createElement("span",null,n),r.a.createElement("a",{hidden:this.state.repo,id:"viewSourceOnGithub",className:"btn btn-primary",href:this.state.repo,target:"_blank"}," ",r.a.createElement("span",{className:"fap fap-github"}),"View Source on Github \xa0")),r.a.createElement("div",{className:"markdown",dangerouslySetInnerHTML:{__html:a}}))}return e}},{key:"filter",value:function(e){if(e)return e.split("-").join(" ").split("/").join(" ").substr(0,e.length>this.checkRightSize()?this.checkRightSize():e.length).concat(e.length>this.checkRightSize()?"...":"")}},{key:"checkRightSize",value:function(){return F.isMobile?50:60}}]),a}(r.a.Component),L=(n.Component,n.Component,function(e){Object(h.a)(a,e);var t=Object(f.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"top-header"},r.a.createElement("div",{className:"top-header-wrap-1"},r.a.createElement("div",{className:"top-header-wrap-2"},r.a.createElement("div",{className:"top-header-h1 z-depth-1"},r.a.createElement("span",{className:"top-header-title"},'bash-3.2$ echo "Online Java Class" | tee $1')),r.a.createElement("a",{className:"face",href:"/"},r.a.createElement("img",{alt:"avatar",className:"avatar",src:"assets/img/me.png"}))))),r.a.createElement("div",{className:"top-menu"},r.a.createElement("div",{className:"top-menu-wrap-1"},r.a.createElement("div",{className:"top-menu-wrap-2"},r.a.createElement("div",{className:"top-menu-wrap-3"},r.a.createElement("ul",{className:"menu pull-left"},r.a.createElement("li",{className:"item"},r.a.createElement(i.b,{to:"/"},r.a.createElement("i",{className:"fap fap-experiments"}),r.a.createElement("div",{className:"text"},"Articles")))),r.a.createElement("ul",{className:"menu pull-right"},r.a.createElement("li",{className:"item"},r.a.createElement("a",{href:"mailto:contact@onlinejavaclass.com"},r.a.createElement("i",{className:"fap fap-mail"}),r.a.createElement("div",{className:"text"},"Mail"))),r.a.createElement("li",{className:"item"},r.a.createElement("a",{href:"https://github.com/metao1",target:"_blank"},r.a.createElement("i",{className:"fap fap-github"}),r.a.createElement("div",{className:"text"},"Github"))),r.a.createElement("li",{className:"item"},r.a.createElement("a",{href:"https://www.linkedin.com/in/allahkarami",target:"_blank"},r.a.createElement("i",{className:"fap fap-linkedin"}),r.a.createElement("div",{className:"text"},"LinkedIn")))))))),r.a.createElement("div",null,r.a.createElement(v,null)))}}],[{key:"routerWillRunOnClient",value:function(){var e=Object(u.a)(m.a.mark((function e(t,a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()}]),a}(n.Component)),U=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function q(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var z=r.a.createElement(i.a,null,r.a.createElement("div",null,r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",component:L}),r.a.createElement(o.a,{path:"/about",component:g}))));c.a.render(z,document.getElementById("app")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");U?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):q(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):q(e)}))}}()}},[[33,1,2]]]);
//# sourceMappingURL=main.72a8dc33.chunk.js.map