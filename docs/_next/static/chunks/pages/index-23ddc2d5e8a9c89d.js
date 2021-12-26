(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(1361)}])},7544:function(e){"use strict";var n={"@context":"https://schema.org/","@type":"Person",name:"Ameenuddin Atif Mohammed",alternateName:"Atif Mohammed",url:"http://atif.work/",image:"http://atif.work/static/atif-mohammed.jpg",telephone:"+31 644 939 013",email:"atif089@gmail.com",sameAs:["https://www.linkedin.com/in/atif089","https://github.com/atif089","https://atif.work/atif-mohammed-cv.pdf"],jobTitle:"Engineering Manager",hasOccupation:[{"@type":"Occupation",name:"Engineering Manager",skills:"Javascript, NodeJS, HTML, CSS, React, Docker, WebPack, PHP, WordPress"}],worksFor:[{"@type":"Organization",name:"Booking.com"},{"@type":"Organization",name:"Amazon.com"},{"@type":"Organization",name:"Thinkful.com"},{"@type":"Organization",name:"UnitedHealth Group"}]};e.exports={schema:n,schemaAsString:JSON.stringify(n,null,2)}},638:function(e,n,t){"use strict";function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},i=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),i.forEach((function(n){a(e,n,t[n])}))}return e}n.default=function(e,n){var t=s.default,a={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};r=e,l=Promise,(null!=l&&"undefined"!==typeof Symbol&&l[Symbol.hasInstance]?l[Symbol.hasInstance](r):r instanceof l)?a.loader=function(){return e}:"function"===typeof e?a.loader=e:"object"===typeof e&&(a=i({},a,e));var r,l;var c=a=i({},a,n);if(c.suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");if(c.suspense)return t(c);a.loadableGenerated&&delete(a=i({},a,a.loadableGenerated)).loadableGenerated;if("boolean"===typeof a.ssr){if(!a.ssr)return delete a.ssr,o(t,a);delete a.ssr}return t(a)};r(t(7294));var s=r(t(4302));function r(e){return e&&e.__esModule?e:{default:e}}function o(e,n){return delete n.webpack,delete n.modules,e(n)}},6319:function(e,n,t){"use strict";var a;Object.defineProperty(n,"__esModule",{value:!0}),n.LoadableContext=void 0;var i=((a=t(7294))&&a.__esModule?a:{default:a}).default.createContext(null);n.LoadableContext=i},4302:function(e,n,t){"use strict";function a(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(n){i(e,n,t[n])}))}return e}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r,o=(r=t(7294))&&r.__esModule?r:{default:r},l=t(7161),c=t(6319);var d=[],h=[],u=!1;function m(e){var n=e(),t={loading:!0,loaded:null,error:null};return t.promise=n.then((function(e){return t.loading=!1,t.loaded=e,e})).catch((function(e){throw t.loading=!1,t.error=e,e})),t}var p=function(){function e(n,t){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this._loadFn=n,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}var n,t,i;return n=e,(t=[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this,n=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,a=this._opts;if(t.loading){if("number"===typeof a.delay)if(0===a.delay)this._state.pastDelay=!0;else{var i=this;this._delay=setTimeout((function(){i._update({pastDelay:!0})}),a.delay)}if("number"===typeof a.timeout){var s=this;this._timeout=setTimeout((function(){s._update({timedOut:!0})}),a.timeout)}}this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(e){n._update({}),n._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=s({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var n=this;return this._callbacks.add(e),function(){n._callbacks.delete(e)}}}])&&a(n.prototype,t),i&&a(n,i),e}();function f(e){return function(e,n){var t=function(){if(!i){var n=new p(e,a);i={getCurrentValue:n.getCurrentValue.bind(n),subscribe:n.subscribe.bind(n),retry:n.retry.bind(n),promise:n.promise.bind(n)}}return i.promise()},a=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},n);a.suspense&&(a.lazy=o.default.lazy(a.loader));var i=null;if(!u&&"function"===typeof a.webpack&&!a.suspense){var r=a.webpack();h.push((function(e){var n=!0,a=!1,i=void 0;try{for(var s,o=r[Symbol.iterator]();!(n=(s=o.next()).done);n=!0){var l=s.value;if(-1!==e.indexOf(l))return t()}}catch(c){a=!0,i=c}finally{try{n||null==o.return||o.return()}finally{if(a)throw i}}}))}var d=a.suspense?function(e,n){return o.default.createElement(a.lazy,s({},e,{ref:n}))}:function(e,n){t();var s=o.default.useContext(c.LoadableContext),r=l.useSubscription(i);return o.default.useImperativeHandle(n,(function(){return{retry:i.retry}}),[]),s&&Array.isArray(a.modules)&&a.modules.forEach((function(e){s(e)})),o.default.useMemo((function(){return r.loading||r.error?o.default.createElement(a.loading,{isLoading:r.loading,pastDelay:r.pastDelay,timedOut:r.timedOut,error:r.error,retry:i.retry}):r.loaded?o.default.createElement(function(e){return e&&e.__esModule?e.default:e}(r.loaded),e):null}),[e,r])};return d.preload=function(){return!a.suspense&&t()},d.displayName="LoadableComponent",o.default.forwardRef(d)}(m,e)}function g(e,n){for(var t=[];e.length;){var a=e.pop();t.push(a(n))}return Promise.all(t).then((function(){if(e.length)return g(e,n)}))}f.preloadAll=function(){return new Promise((function(e,n){g(d).then(e,n)}))},f.preloadReady=function(e){var n=void 0===e?[]:e;return new Promise((function(e){var t=function(){return u=!0,e()};g(h,n).then(t,t)}))},window.__NEXT_PRELOADREADY=f.preloadReady;var j=f;n.default=j},1361:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return g},default:function(){return j}});var a=t(5893),i=t(5152),s=(t(7294),t(9008)),r=function(e){return(0,a.jsxs)(s.default,{children:[(0,a.jsx)("meta",{charSet:"UTF-8"}),(0,a.jsx)("title",{children:e.title||""}),(0,a.jsx)("meta",{name:"description",content:e.description||""}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,a.jsx)("link",{rel:"icon",sizes:"192x192",href:"/static/touch-icon.png"}),(0,a.jsx)("link",{rel:"apple-touch-icon",href:"/static/touch-icon.png"}),(0,a.jsx)("link",{rel:"mask-icon",href:"/static/favicon-mask.svg",color:"#49B882"}),(0,a.jsx)("link",{rel:"icon",href:"/static/favicon.ico"}),(0,a.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,a.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"}),(0,a.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap",rel:"stylesheet"})]})},o=t(7544),l=function(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("header",{children:[(0,a.jsx)("h1",{className:"title",children:o.schema.name}),(0,a.jsx)("h2",{className:"subtitle",children:o.schema.jobTitle})]})})},c=function(){return(0,a.jsxs)("div",{className:"section achievements section-grid",children:[(0,a.jsx)("div",{className:"left label",children:(0,a.jsx)("h2",{children:"Achievements"})}),(0,a.jsxs)("div",{className:"right",children:[(0,a.jsx)("h4",{children:"Patent"}),(0,a.jsxs)("p",{children:["Awarded Patent for Marketplace Seller Referrals (expiry 2035, Patent Number"," ",(0,a.jsx)("a",{href:"https://patents.google.com/patent/US10007937B1/en",children:"US10007937B1"}),")"]}),(0,a.jsx)("h4",{children:"Hackathons"}),(0,a.jsxs)("p",{children:["Participated in various hackathons as a hobby and recently won AWS Graviton Hackathon -"," ",(0,a.jsx)("a",{target:"_blank",href:"https://devpost.com/atif089",children:"devpost.com/atif089"})]}),(0,a.jsx)("h4",{children:"Consulting / Freelance Experience"}),(0,a.jsx)("p",{children:"Achieved a Top-Rated Status on Upwork by providing technology related consulting and development services to small businesses Top-Rated freelancers secure a 95% or better overall positive feedback on 12+ projects in a year."}),(0,a.jsx)("h4",{children:"Front End Development Mentor (2014-2015)"}),(0,a.jsx)("p",{children:"Mentored over 25 students as a remote mentor over the platform Thinkful for Front End Development. Some of them have successfully transformed careers into Front End Developers."})]})]})},d=function(e){return(0,a.jsxs)("div",{className:"section skills section-grid",children:[(0,a.jsx)("div",{className:"left label",children:(0,a.jsx)("h2",{children:"Skills"})}),(0,a.jsxs)("div",{className:"right",children:[(0,a.jsxs)("div",{className:"skills-container",children:[(0,a.jsx)("span",{children:"Performance Management"})," ",(0,a.jsx)("span",{children:"Project Management"}),(0,a.jsx)("span",{children:"Conflict Resolution"})," ",(0,a.jsx)("span",{children:"System Design"}),(0,a.jsx)("span",{children:"Resource Allocation"})," ",(0,a.jsx)("span",{children:"Setting Objectives"}),(0,a.jsx)("span",{children:"Personal Development"})," ",(0,a.jsx)("span",{children:"Interviewing / Hiring"}),(0,a.jsx)("span",{children:"Creating Agile Teams"})]}),(0,a.jsx)("hr",{}),(0,a.jsxs)("div",{className:"skills-container",children:[(0,a.jsx)("span",{children:"Javascript"}),"  ",(0,a.jsx)("span",{children:"NodeJS"})," ",(0,a.jsx)("span",{children:"ES6"}),(0,a.jsx)("span",{children:"MySQL / MariaDB"})," ",(0,a.jsx)("span",{children:"MongoDB"})," ",(0,a.jsx)("span",{children:"Rethink DB"}),(0,a.jsx)("span",{children:"React"})," ",(0,a.jsx)("span",{children:"Vue"})," ",(0,a.jsx)("span",{children:"WebPack"})," ",(0,a.jsx)("span",{children:"GraphQL"})," ",(0,a.jsx)("span",{children:"Puppeteer"}),(0,a.jsx)("span",{children:"Google Drive Scripts"})," ",(0,a.jsx)("span",{children:"Postman"})," ",(0,a.jsx)("span",{children:"Git"}),(0,a.jsx)("span",{children:"AWS"})," ",(0,a.jsx)("span",{children:"Google Cloud Platform"}),(0,a.jsx)("span",{children:"Nginx"})," ",(0,a.jsx)("span",{children:"Apache"})," ",(0,a.jsx)("span",{children:"PHP"})," ",(0,a.jsx)("span",{children:"WordPress/WooCommerce"}),(0,a.jsx)("span",{children:"Terraform"})," ",(0,a.jsx)("span",{children:"Docker"})," ",(0,a.jsx)("span",{children:"Vagrant"})," ",(0,a.jsx)("span",{children:"Linux"}),(0,a.jsx)("span",{children:"A/B Testing"})," ",(0,a.jsx)("span",{children:"Google Analytics"})]})]})]})},h=function(){return(0,a.jsxs)("div",{className:"section contact-section",children:[(0,a.jsx)("div",{className:"contact-section-row",children:(0,a.jsxs)("address",{children:[(0,a.jsx)("span",{children:"Email: atif089@gmail.com"}),(0,a.jsx)("span",{children:"Phone: +31 644 939 013"})]})}),(0,a.jsxs)("div",{className:"contact-section-row",children:[(0,a.jsx)("a",{href:"https://atif.work",children:"atif.work"}),(0,a.jsx)("a",{href:"https://www.linkedin.com/in/atif089/",children:"linkedin.com/in/atif089"}),(0,a.jsx)("a",{href:"https://github.com/atif089",children:"github.com/atif089"}),(0,a.jsx)("a",{className:"screenOnly",href:"https://atif.work/atif-mohammed-cv.pdf",children:"Download PDF"})]}),(0,a.jsx)("hr",{})]})},u=function(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"section section-grid education-section",children:[(0,a.jsx)("div",{className:"left",children:(0,a.jsx)("h2",{children:"Education"})}),(0,a.jsx)("div",{className:"right",children:(0,a.jsx)("p",{children:(0,a.jsxs)("strong",{children:[(0,a.jsx)("h4",{children:"Bachelor of Technology (2007 \u2013 2011)"}),(0,a.jsx)("p",{children:"Computer Science and Information Technology"}),(0,a.jsx)("p",{children:"VIF College of Engineering and Technology \u2014 Hyderabad, India"})]})})})]})})},m=function(){return(0,a.jsxs)("div",{className:"columns",children:[(0,a.jsxs)("div",{className:"experience-header",children:[(0,a.jsxs)("h2",{children:[(0,a.jsx)("span",{className:"job-title",children:"Engineering Manager"})," "," at ",(0,a.jsx)("span",{className:"company",children:"Booking.com"})]}),(0,a.jsxs)("p",{className:"date-and-location",children:[(0,a.jsxs)("span",{className:"date",children:[(0,a.jsx)("span",{children:"2014 Aug"})," \u2014 ",(0,a.jsx)("span",{children:"Current"})]}),(0,a.jsx)("span",{className:"location",children:"Amsterdam, Netherlands"})]})]}),(0,a.jsx)("h3",{className:"team-title",children:"Team Partner Incentives & Team Upsell"}),(0,a.jsx)("div",{className:"role__container",children:(0,a.jsxs)("div",{className:"job-desc",children:[(0,a.jsx)("p",{style:{paddingBottom:"10px"},children:"Leading engineering for multiple teams managing Frontend and Backend developers."}),(0,a.jsxs)("ul",{className:"job-desc__bullets",children:[(0,a.jsx)("li",{children:"Formulated and executed replatforming strategy to decouple parts of team's scope from monolith and migrate to microservices and microfrontends effectively reducing cost of deployments from 4 hours of manual effort to 15 minutes using fully automated pipelines."}),(0,a.jsx)("li",{children:"Adopted best practices on improving code quality by maintaining minimum test coverage to 85%, adding E2E tests to cover all critical user flows and setting up business and continuity tests like failover, capacity and security according to SRE guidelines"}),(0,a.jsx)("li",{children:"Introduced SLOs to ensure that teams are on track to deliver. Reconstructed other monitoring and alerts at various orchestration points to position the team better at handling incident management. Conducted post-mortem analysis of outages and incidents, provide recommendations and publish RFOs (Reason For Outage)"}),(0,a.jsx)("li",{children:"Improved bus factor by documenting onboarding processes, data workflows, service catalogs and setting up product documentation like architecture diagrams(C4 and sequence)"}),(0,a.jsx)("li",{children:"Identified communication and psychological safety issues in the team and faciliated a team bootcamp to improve it. Resolved conflicts among team members and took necessary steps to align the team towards a common goal"}),(0,a.jsx)("li",{children:"Was responsible for performance evaluation and growth of my team members, part of which was also creating and monitoring progression of performance development plans for all reports"}),(0,a.jsx)("li",{children:"Involved in Product Strategy that includes aligning with Product and UX create meaningful achievable milestones. Liase with FE and BE developers to identify tech debt and bottlenecks and prepare a technical roadmap to overcome those challenges."})]})]})}),(0,a.jsx)("h3",{className:"team-title",children:"Partner Incentives"}),(0,a.jsx)("div",{className:"role__container",children:(0,a.jsxs)("div",{className:"job-desc",children:[(0,a.jsx)("p",{style:{paddingBottom:"10px"},children:"Managing a cross functional team of 4 people and working on:"}),(0,a.jsxs)("ul",{className:"job-desc__bullets",children:[(0,a.jsx)("li",{children:"Leading the team running incentive campaigns for accommodation partners"}),(0,a.jsx)("li",{children:"Create and maintain an effective frontend product roadmap, including specific projects and tasks, that aligns with the strategic direction of the organization and the company. Plan semi-annual team objectives and ensure KPIs are tracked, reviewed."}),(0,a.jsx)("li",{children:"Carry out team meetings, agile alignment, retrospectives. Ensure all team members are given a clear understanding of their individual objectives and performance and provide regular feedback."}),(0,a.jsx)("li",{children:"Mentor team members and identify opportunities for them outside the team to leverage and grow."}),(0,a.jsx)("li",{children:"Onboarding new team members on the team from various roles and ensuring they are up to their productivity in an expected time."}),(0,a.jsx)("li",{children:"Create a comfortable and healthy team environment. Keep a check on mental health and provide adequate support."})]})]})}),(0,a.jsx)("h3",{className:"team-title",children:"Customer Service Innovations Team"}),(0,a.jsx)("div",{className:"role__container",children:(0,a.jsx)("div",{className:"job-desc",children:(0,a.jsxs)("ul",{className:"job-desc__bullets",children:[(0,a.jsx)("li",{children:"Analyzing common customer behavior and identify patterns in customer service tickets and develop innovative solutions to reduce human handling and foster automation."}),(0,a.jsx)("li",{children:"Identify and eliminate points of friction for customers trying to contact Booking.com, and at the same time optimizing the UI to maintain clarity, consistency, and context to both the customer and the support staff."}),(0,a.jsx)("li",{children:"Ran Technical Interviews for frontend developers (with Acceptance/Offer Ratio: 0.8)"})]})})}),(0,a.jsx)("h3",{className:"team-title",children:"Onboarding Lead"}),(0,a.jsx)("div",{className:"role__container",children:(0,a.jsx)("div",{className:"job-desc",children:(0,a.jsxs)("ul",{className:"job-desc__bullets",children:[(0,a.jsx)("li",{children:"Leading and managing the onboarding journey for new hires right from before they join the company until the end of their probation. Setting up training, tracking their overall development and providing developmental feedback."}),(0,a.jsx)("li",{children:"Identifying skills, strengths, weaknesses and mapping interests of the developers and match them to place them within different teams in the company."}),(0,a.jsx)("li",{children:"Contributing to the development of advanced tools to make the onboarding process smoother. For example, I spent on creating a lot of Google Drive Scripts that helped automate redundant processes like sending emails, grooming backlog, setting up automatic calendar invites for important training, tracking feedback and producing individual reports from spreadsheets."}),(0,a.jsx)("li",{children:"Successfully integrated over 38 people in the company with an average of 14 reports at any time."})]})})}),(0,a.jsx)("h3",{className:"team-title",children:"Landing Pages Team"}),(0,a.jsx)("div",{className:"role__container",children:(0,a.jsx)("div",{className:"job-desc",children:(0,a.jsxs)("ul",{className:"job-desc__bullets",children:[(0,a.jsx)("li",{children:"Worked on conducting user research, applying the learnings from user research in form of A/B Tests to optimize Booking.com landing pages (mobile, tablet and web) serving traffic from various sources like meta partners, SEO, PPC, etc."}),(0,a.jsx)("li",{children:"Built tools to automate processes like linting checks, boilerplate to create new A/B tests, etc. using Bash and Node.JS."})]})})}),(0,a.jsx)("h3",{className:"team-title",children:"Other Previous Teams"}),(0,a.jsx)("div",{className:"role__container",children:(0,a.jsx)("div",{className:"job-desc",children:(0,a.jsxs)("ul",{className:"job-desc__bullets",children:[(0,a.jsx)("li",{children:"Worked on rewriting the core routing component of the system and a new search box along with routine Frontend / Javascript tasks. I also worked on implementing Google Analytics events and dimension for various user interactions."}),(0,a.jsx)("li",{children:"Worked for over a year on parts of Mobile and Tablet website. Other daily activities include generating experiment ideas for A/B Testing, prioritizing and implementing them. I also worked on optimizing the mobile website for better performance."})]})})})]})},p=function(){return(0,a.jsxs)("div",{className:"columns",style:{pageBreakInside:"avoid"},children:[(0,a.jsxs)("div",{className:"experience-header",children:[(0,a.jsxs)("h2",{children:[(0,a.jsx)("span",{className:"job-title",children:"Web Development Engineer"})," "," at ",(0,a.jsx)("span",{className:"company",children:"Amazon"})]}),(0,a.jsxs)("p",{className:"date-and-location",children:[(0,a.jsxs)("span",{className:"date",children:[(0,a.jsx)("span",{children:"2012 Jun"})," \u2014 ",(0,a.jsx)("span",{children:"2014 July"})]}),(0,a.jsx)("span",{className:"location",children:"Hyderabad, India"})]})]}),(0,a.jsx)("h3",{className:"team-title",children:"Amazon Local Services"}),(0,a.jsx)("div",{className:"role__container",children:(0,a.jsx)("div",{className:"job-desc",children:(0,a.jsx)("p",{children:"Worked on implementation of UIs for MVP for Amazon Local Services"})})}),(0,a.jsx)("h3",{className:"team-title",children:"Amazon Services"}),(0,a.jsx)("div",{className:"role__container",children:(0,a.jsx)("div",{className:"job-desc",children:(0,a.jsx)("p",{children:"Web Development, A/B Testing and Optimization for Amazon Marketing Websites in US and Europe (services.amazon.com, services.amazon.co.uk, services.amazon.fr, services.amazon.de, services.amazon.es and services.amazon.it)."})})}),(0,a.jsx)("h3",{className:"team-title",children:"TCS (Tenancy Configuration System)"}),(0,a.jsx)("div",{className:"role__container",children:(0,a.jsx)("div",{className:"job-desc",children:(0,a.jsx)("p",{children:"Worked on the UI for a web based application which can orchestrate generation of configuration sets and monitoring configuration for new website launches"})})})]})},f=(0,i.default)(t.e(322).then(t.bind(t,4465)),{loadableGenerated:{webpack:function(){return[4465]},modules:["index.js -> @/data/experience/uhg"]}}),g=!0,j=function(){return(0,a.jsxs)("div",{id:"app",children:[(0,a.jsx)(r,{title:"".concat(o.schema.name," | C.V | Resume | Personal Website | atif.work")}),(0,a.jsx)(l,{}),(0,a.jsx)(h,{}),(0,a.jsx)(c,{}),(0,a.jsx)(d,{}),(0,a.jsxs)("div",{className:"section section-grid experience-section",children:[(0,a.jsx)("div",{className:"left",children:(0,a.jsx)("h2",{children:"Experience"})}),(0,a.jsxs)("div",{className:"right",children:[(0,a.jsx)(m,{}),(0,a.jsx)(p,{}),(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(f,{})})]})]}),(0,a.jsx)(u,{}),(0,a.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:o.schemaAsString}})]})}},5152:function(e,n,t){e.exports=t(638)},9008:function(e,n,t){e.exports=t(5443)}},function(e){e.O(0,[774,888,179],(function(){return n=8581,e(e.s=n);var n}));var n=e.O();_N_E=n}]);