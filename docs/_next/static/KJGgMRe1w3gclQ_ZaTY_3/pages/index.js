(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"2qu3":function(e,n,t){"use strict";var a=t("ttDY"),i=t("/HRN"),o=t("WaGi"),r=t("p0XB"),l=t("XXOK"),s=t("Qetd"),c=t("eVuF"),u=t("pLtp"),d=t("hfKm"),m=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};d(n,"__esModule",{value:!0});var p=m(t("q1tI")),f=t("8L3h"),h=t("jwwS"),v=[],g=[],b=!1;function y(e){var n=e(),t={loading:!0,loaded:null,error:null};return t.promise=n.then(function(e){return t.loading=!1,t.loaded=e,e}).catch(function(e){throw t.loading=!1,t.error=e,e}),t}function _(e){var n={loading:!1,loaded:{},error:null},t=[];try{u(e).forEach(function(a){var i=y(e[a]);i.loading?n.loading=!0:(n.loaded[a]=i.loaded,n.error=i.error),t.push(i.promise),i.promise.then(function(e){n.loaded[a]=e}).catch(function(e){n.error=e})})}catch(a){n.error=a}return n.promise=c.all(t).then(function(e){return n.loading=!1,e}).catch(function(e){throw n.loading=!1,e}),n}function w(e,n){return p.default.createElement((t=e)&&t.__esModule?t.default:t,n);var t}function k(e,n){var t=s({loader:null,loading:null,delay:200,timeout:null,render:w,webpack:null,modules:null},n),a=null;function i(){if(!a){var n=new N(e,t);a={getCurrentValue:n.getCurrentValue.bind(n),subscribe:n.subscribe.bind(n),retry:n.retry.bind(n),promise:n.promise.bind(n)}}return a.promise()}if(!b&&"function"===typeof t.webpack){var o=t.webpack();g.push(function(e){var n=!0,t=!1,a=void 0;try{for(var r,s=l(o);!(n=(r=s.next()).done);n=!0){var c=r.value;if(-1!==e.indexOf(c))return i()}}catch(u){t=!0,a=u}finally{try{n||null==s.return||s.return()}finally{if(t)throw a}}})}var c=function(e,n){i();var o=p.default.useContext(h.LoadableContext),l=f.useSubscription(a);return p.default.useImperativeHandle(n,function(){return{retry:a.retry}}),o&&r(t.modules)&&t.modules.forEach(function(e){o(e)}),l.loading||l.error?p.default.createElement(t.loading,{isLoading:l.loading,pastDelay:l.pastDelay,timedOut:l.timedOut,error:l.error,retry:a.retry}):l.loaded?t.render(l.loaded,e):null};return c.preload=function(){return i()},c.displayName="LoadableComponent",p.default.forwardRef(c)}var N=function(){function e(n,t){i(this,e),this._loadFn=n,this._opts=t,this._callbacks=new a,this._delay=null,this._timeout=null,this.retry()}return o(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var n=this._res,t=this._opts;n.loading&&("number"===typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(function(){e._update({pastDelay:!0})},t.delay)),"number"===typeof t.timeout&&(this._timeout=setTimeout(function(){e._update({timedOut:!0})},t.timeout))),this._res.promise.then(function(){e._update(),e._clearTimeouts()}).catch(function(n){e._update(),e._clearTimeouts()}),this._update({})}},{key:"_update",value:function(e){this._state=s({},this._state,e),this._callbacks.forEach(function(e){return e()})}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return s({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading})}},{key:"subscribe",value:function(e){var n=this;return this._callbacks.add(e),function(){n._callbacks.delete(e)}}}]),e}();function S(e){return k(y,e)}function A(e,n){for(var t=[];e.length;){var a=e.pop();t.push(a(n))}return c.all(t).then(function(){if(e.length)return A(e,n)})}S.Map=function(e){if("function"!==typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return k(_,e)},S.preloadAll=function(){return new c(function(e,n){A(v).then(e,n)})},S.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new c(function(n){var t=function(){return b=!0,n()};A(g,e).then(t,t)})},window.__NEXT_PRELOADREADY=S.preloadReady,n.default=S},"9Jkg":function(e,n,t){e.exports=t("oh+g")},RNiq:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),i=t.n(a),o=t("8Kt/"),r=t.n(o),l=i.a.createElement,s=function(e){return l(r.a,null,l("meta",{charSet:"UTF-8"}),l("title",null,e.title||""),l("meta",{name:"description",content:e.description||""}),l("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),l("link",{rel:"icon",sizes:"192x192",href:"/static/touch-icon.png"}),l("link",{rel:"apple-touch-icon",href:"/static/touch-icon.png"}),l("link",{rel:"mask-icon",href:"/static/favicon-mask.svg",color:"#49B882"}),l("link",{rel:"icon",href:"/static/favicon.ico"}),l("link",{href:"https://fonts.googleapis.com/css?family=Roboto&display=swap",rel:"stylesheet"}))},c=t("a6RD"),u=t.n(c),d=(t("riYz"),t("labI"),t("oXEZ")),m=t("nOHt"),p=function(e){var n=Object(m.useRouter)();return n.query&&void 0!==n.query.pdf?e.children:null},f=i.a.createElement,h=function(){return f("div",{className:"columns"},f("div",{className:"column is-one-third"},f("h3",{className:"company"},"Booking.com"),f("p",{className:"location"},"Amsterdam, Netherlands"),f("p",{className:"date"},f("span",null,"2014 Aug")," - ",f("span",null,"Current"))),f("div",{className:"column"},f("h2",{className:"job-title"},"FrontEnd Developer & Team Lead"),f("div",{className:"role__container"},f("h3",{className:"team-title is-size-6"},"Partner Incentives"),f("div",{className:"job-desc"},f("p",{style:{paddingBottom:"10px"}},"Managing a team of 4 people and working on:"),f("ul",{className:"job-desc__bullets"},f("li",null,"Leading the team running incentive campaigns for accommodation partners enabling them to generate higher revenue based on their sales performance"),f("li",null,"Mentor team members on personal growth and identify opportunities outsite the team to leverage and grow"),f("li",null,"Plan objectives, set goals, run team meetings, agile alignment, retrospectives, track individual performance and deliver feedback")))),f("div",{className:"role__container"},f("h3",{className:"team-title is-size-6"},"Customer Service Innovations Team"),f("div",{className:"job-desc"},f(p,null,f("p",{style:{paddingBottom:"10px"}},"Managing a team of 3 people and worked together on:")),f("ul",{className:"job-desc__bullets"},f("li",null,"Identify and eliminating friction for customers trying to contact Booking.com, and at the same time optimizing the UI so maintain clarity, consistency, and context to both the customer and the support staff."),f("li",null,"Analyzing common customer behavior and identify patterns in customer service tickets and develop innovative solutions to reduce human handling and foster automation."),f("li",null,"Interviewing and assist in hiring frontend developers"," ",f(p,null,"(with Acceptance/Offer Ratio: 0.8)"))))),f("div",{className:"role__container",style:{pageBreakBefore:"avoid",pageBreakInside:"auto"}},f("h3",{className:"team-title is-size-6"},"Onboarding Lead"),f("div",{className:"job-desc"},f("ul",{className:"job-desc__bullets"},f("li",null,"Leading and managing the onboarding journey for new hires right from before they join the company until the end of their probation. Setting up training, tracking their overall development and providing developmental feedback."),f("li",null,"Identifying skills, strengths, weaknesses and mapping interests of the developers and match them to place them within different teams in the company."),f("li",null,"Contributing to the development of advanced tools to make the onboarding process smoother. For example, I spent on creating a lot of Google Drive Scripts that helped automate redundant processes like sending emails, grooming backlog, setting up automatic calendar invites for important training, tracking feedback and producing individual reports from spreadsheets."),f(p,null,f("li",null,"Over a span of 4 months, I worked with and successfully integrated 38 people in the company with an average of 14 reports at any time."),f(p,null,f("li",null,'I was also a part of a pilot program called "incubator teams" where the new Engineers along with a new Product Owner worked on researching a topic that could produce high value to the company in the future. One such topic that I worked for, the impact of website loading and interaction speed went on successful and eventually converted into a track called "Web Velocity" which is currently supported by 25+ people.')))))),f("div",{className:"role__container"},f("h3",{className:"team-title is-size-6"},"Landing Pages Team"),f("div",{className:"job-desc"},f("ul",{className:"job-desc__bullets"},f("li",null,"Worked on conducting user research, applying the learnings from user research in form of A/B Tests to optimize Booking.com landing pages (mobile, tablet and web) serving traffic from various sources like meta partners, SEO, PPC, etc."),f("li",null,"Built tools to automate processes like linting checks, boilerplate to create new A/B tests, etc. using Bash and Node.JS."),f("li",null,"Also, supported and facilitated onboarding new developers on the team.")))),f("div",{className:"role__container"},f("h3",{className:"team-title is-size-6"},"Other Teams"),f("div",{className:"job-desc"},f("ul",{className:"job-desc__bullets"},f("li",null,"Worked on rewriting the core routing component of the system and a new search box along with routine Frontend / Javascript tasks. I also worked on implementing Google Analytics events and dimension for various user interactions."),f("li",null,"Worked for over a year on parts of Mobile and Tablet website. Other daily activities include generating experiment ideas for A/B Testing, prioritizing and implementing them. I also worked on optimizing the mobile website for better performance.\u2003"))))))},v=i.a.createElement,g=function(){return v("div",{className:"columns",style:{pageBreakInside:"avoid"}},v("div",{className:"column is-one-third"},v("h3",{className:"company"},"Amazon.com"),v("p",{className:"location"},"Hyderabad, India"),v("p",{className:"date"},v("span",null,"2012 Jun")," - ",v("span",null,"2014 July"))),v("div",{className:"column"},v("h2",{className:"job-title"},"Web Development Engineer"),v("div",{className:"role__container"},v("h3",{className:"team-title is-size-6"},"Amazon Local Services"),v("div",{className:"job-desc"},v("p",null,"Worked on implementation of early UI model, PoC for Amazon Local Services"))),v("div",{className:"role__container"},v("h3",{className:"team-title is-size-6"},"Amazon Services"),v("div",{className:"job-desc"},v("p",null,"Working on Web Development, Traffic Analysis, A/B Testing and Optimization for Amazon Marketing Websites in US and Europe (services.amazon.com, services.amazon.co.uk, services.amazon.fr, services.amazon.de, services.amazon.es and services.amazon.it)."))),v("div",{className:"role__container"},v("h3",{className:"team-title is-size-6"},"TCS (Tenancy Configuration System)"),v("div",{className:"job-desc"},v("p",null,"Worked on the UI for a web based application which can orchestrate generation of configuration sets and monitoring configuration for new website launches")))))},b=i.a.createElement,y=u()(function(){return Promise.all([t.e(0),t.e(2)]).then(t.bind(null,"okPW"))},{loadableGenerated:{webpack:function(){return["okPW"]},modules:["../components/ProfileIcons"]}}),_=u()(function(){return Promise.all([t.e(0),t.e(2)]).then(t.bind(null,"uVmj"))},{loadableGenerated:{webpack:function(){return["uVmj"]},modules:["../data/experience/thinkful"]}}),w=u()(function(){return Promise.all([t.e(0),t.e(2)]).then(t.bind(null,"sq3t"))},{loadableGenerated:{webpack:function(){return["sq3t"]},modules:["../data/experience/uhg"]}}),k=u()(function(){return Promise.all([t.e(0),t.e(2)]).then(t.bind(null,"5rAC"))},{loadableGenerated:{webpack:function(){return["5rAC"]},modules:["../components/Skills"]}});n.default=function(){return b("div",{id:"app"},b(s,{title:"".concat(d.schema.name," | C.V | Resume | Personal Website | atif.work")}),b("div",{className:"container"},b("div",{className:"section"},b("div",{className:"columns is-vertical-center"},b("div",{className:"column is-one-fifth profile-pic__container"},b("img",{className:"profile-pic",alt:"Ameenuddin Atif Mohammed",loading:"lazy",src:"/static/atif-mohammed-150.webp",srcSet:"/static/atif-mohammed-225.webp 1.5x, /static/atif-mohammed-300.webp 2x, /static/atif-mohammed-450.webp 3x"})),b("div",{className:" column title__container"},b("span",{className:"title"},d.schema.name)),b("div",{className:"column is-one-fifth is-contact"},b("p",null,d.schema.telephone),b("p",null,d.schema.email),b(y,{person:d.schema})))),b("div",{className:"section achievements",style:{pageBreakInside:"avoid"}},b("div",{className:"columns"},b("div",{className:"column is-three-fifths"},b("div",{className:"main-heading"},"Achievements"),b("div",{className:"achievements--list"},b("h3",null,"Patent"),b("p",null,"Awarded Patent for Marketplace Seller Referrals (expiry 2035, Patent Number"," ",b("a",{href:"https://patents.google.com/patent/US10007937B1/en"},"US10007937B1"),")"),b("h3",null,"Front End Development Mentor"),b("p",null,"Mentored over 25 students for Front End Development (HTML, CSS, JS)."),b(p,null,b("h3",null,"Freelance / Consulting"),b("p",null,"Achieved a Top-Rated Status on Upwork - This is achieved by freelancers who secure a 95% or better overall positive feedback on 12+ projects in a year."),b("p",null,"Offered consulting and development services over 12 years to small/medium business owners around website/mobile development, online presence, and business automation.")))),b("div",{className:"column"},b(k,null)))),b("div",{className:"section",style:{pageBreakBefore:"auto"}},b("div",{className:"main-heading"},"Experience"),b("div",{className:"experience-holder"},b(h,null),b(g,null),b(i.a.Fragment,null,b(_,null),b(w,null)))),b("div",{className:"section"},b("div",{className:"main-heading"},"Education"),b("div",{className:"education-holder"},b("div",{className:"columns"},b("div",{className:"column is-one-third"},b("p",{className:"date"},b("span",null,"2007 Aug")," - ",b("span",null,"2011 June"))),b("div",{className:"column"},b("div",{className:"qualification-title"},"Bachelor of Technology (Information Technology)"),b("div",{className:"college"},"VIF College of Engineering and Technology, 2007 \u2013 2011"),b("div",{className:"location"},"Hyderabad, India")))))),b("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:d.schemaAsString}}))}},a6RD:function(e,n,t){"use strict";var a=t("pLtp"),i=t("Qetd"),o=t("eVuF"),r=t("hfKm"),l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};r(n,"__esModule",{value:!0});var s=l(t("q1tI")),c=l(t("2qu3")),u=!1;function d(e,n){if(delete n.webpack,delete n.modules,!u)return e(n);var t=n.loading;return function(){return s.default.createElement(t,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1})}}n.noSSR=d,n.default=function(e,n){var t=c.default,r={loading:function(e){return e.error,e.isLoading,e.pastDelay,null}};if(e instanceof o?r.loader=function(){return e}:"function"===typeof e?r.loader=e:"object"===typeof e&&(r=i({},r,e)),r=i({},r,n),"object"===typeof e&&!(e instanceof o)&&(e.render&&(r.render=function(n,t){return e.render(t,n)}),e.modules)){t=c.default.Map;var l={},s=e.modules();a(s).forEach(function(e){var n=s[e];"function"!==typeof n.then?l[e]=n:l[e]=function(){return n.then(function(e){return e.default||e})}}),r.loader=l}if(r.loadableGenerated&&delete(r=i({},r,r.loadableGenerated)).loadableGenerated,"boolean"===typeof r.ssr){if(!r.ssr)return delete r.ssr,d(t,r);delete r.ssr}return t(r)}},jwwS:function(e,n,t){"use strict";var a=t("hfKm"),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)Object.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n.default=e,n};a(n,"__esModule",{value:!0});var o=i(t("q1tI"));n.LoadableContext=o.createContext(null)},oXEZ:function(e,n,t){var a=t("9Jkg"),i={"@context":"https://schema.org/","@type":"Person",name:"Ameenuddin Atif Mohammed",alternateName:"Atif Mohammed",url:"http://atif.work/",image:"http://atif.work/static/atif-mohammed.jpg",telephone:"+31 644 939 013",email:"atif089@gmail.com",sameAs:["https://www.linkedin.com/in/atif089","https://github.com/atif089","https://atif.work/atif-mohammed-cv.pdf"],jobTitle:"Frontend Developer",hasOccupation:[{"@type":"Occupation",name:"Frontend Developer and Onboarding Lead",skills:"Javascript, NodeJS, HTML, CSS, React, Docker, WebPack, PHP, WordPress"}],worksFor:[{"@type":"Organization",name:"Booking.com"},{"@type":"Organization",name:"Amazon.com"},{"@type":"Organization",name:"Thinkful.com"},{"@type":"Organization",name:"UnitedHealth Group"}]};e.exports={schema:i,schemaAsString:a(i,null,2)}},"oh+g":function(e,n,t){var a=t("WEpk"),i=a.JSON||(a.JSON={stringify:JSON.stringify});e.exports=function(e){return i.stringify.apply(i,arguments)}},vlRD:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("RNiq")}])}},[["vlRD",1,0,8]]]);