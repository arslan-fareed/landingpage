(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[599],{2675:function(e,a,s){Promise.resolve().then(s.bind(s,1708))},1708:function(e,a,s){"use strict";var t=s(7437),i=s(2265),l=s(3536),n=s.n(l),r=s(4402),o=s(4670),c=s(8390),d=s(4076),m=s(8322),u=s(4292),h=s(7868),p=s(4466),f=s(6406);s(7425),s(9608);var g=s(299),x=s(4814),_=s(9649),b=s(2526),j=s(2615),y=s(7254),v=s(6830),N=s(5864),F=s(9376);a.default=()=>{var e;let a=(0,F.useRouter)(),s={testimonials:[{description:"“FuturByte has launched the client's app on Google Play and the App Store with interactive touchpoints and a visually appealing UI. The team manages the project meticulously, has innovative problem-solving skills, and is responsive and accommodating. FuturByte's organized approach is unique”",designation:"Ben Widdows",company_name:"CEO, GWD"},{description:"“FuturByte delivered everything on time, often improving ideas that the client requested. The team took the time to understand the company's target market and how its business and product work. They were proactive, dedicated, and responsive.”",designation:"Rachael Wilding",company_name:"Director, Edsidera"},{description:"“FuturByte went the extra mile to ensure the project's success. The team demonstrated attention to detail and exceptional experience in a fast-paced environment. They also communicated through email, messaging apps, in-person meetings, and online meetings.”",designation:"Everton Dos Santos",company_name:"Founder & CEO, My Blue Hero"},{description:"“FuturByte's efforts have resulted in the client's product issues resolved, and more added features, leading to increased sales. The team is flexible, responsive, and punctual. FuturByte's fast solutions  and implementations are impressive. They communicate via virtual meetings, email, and messages.”",designation:"Luke Wade",company_name:"Founder & CEO, Facility Ally"},{description:"“FuturByte successfully delivered a new website with upsell functionality. The team was responsive and communicative throughout the project via virtual meetings, email, and messaging apps. The client was particularly impressed with the team's can-do attitude, which led to a positive engagement.”",designation:"Samantha Middleton",company_name:"Director, The Gorgeous Flower Co"}]},l={fullName:"",email:"",phone:"",message:""},k={infinite:!0,dots:!1,speed:500,slidesToShow:1,slidesToScroll:1,autoplay:!1,autoplaySpeed:2e3,nextArrow:(0,t.jsx)(m.default,{src:g.Z.src,alt:"arrow"}),prevArrow:(0,t.jsx)(m.default,{src:x.Z.src,alt:"arrow"})},[w,S]=(0,i.useState)(l),[Z,I]=(0,i.useState)(null),[T,C]=(0,i.useState)([]),[B,E]=(0,i.useState)(!1),G=e=>{let{name:a,value:s}=e.target;S(e=>({...e,[a]:s}))},A=async e=>{e.preventDefault(),I(j.al.SUBMITTING);try{let e=(0,v.g)({...w,subject:"Mobile App",consentCheck:B});(await (0,N.W)(j.kb.FEEDBACK,e)).success&&(I(j.al.SUCCESS),S(l),E(!1),a.push("thank-you"))}catch(e){I(j.al.FAILED)}finally{I(null)}};return(0,i.useEffect)(()=>{Z&&Z!==j.al.SUBMITTING&&setTimeout(()=>{I(null)},j.d6)},[Z]),(0,i.useEffect)(()=>{(async()=>{try{let e=await (0,N.getData)("/submit-feedback-heading?populate=*");C(e)}catch(e){console.error(e)}})()},[]),(0,t.jsx)("section",{className:n()["free-quote-section"],children:(0,t.jsxs)(r.default,{className:"".concat(n().feedIcon," w-100"),children:[(0,t.jsxs)(o.default,{xl:6,lg:12,className:"p-0",children:[(0,t.jsx)("div",{className:n().logocomments,children:(0,t.jsx)(m.default,{src:y.Z.src,alt:"logo"})}),(0,t.jsxs)("div",{className:n().commets,children:[(0,t.jsx)("h2",{children:"Get a Free Quote for your Mobile App idea!"}),(0,t.jsx)("p",{children:"We’d like to as you a few questions to better understand your mobile app development needs."}),(0,t.jsx)("div",{className:n().formWrapper,children:(0,t.jsxs)(c.Z,{onSubmit:A,className:n().sideicon,children:[(0,t.jsx)(r.default,{className:"mb-3",children:(0,t.jsxs)(o.default,{md:12,children:[(0,t.jsx)("label",{children:"Full Name *"}),(0,t.jsx)(c.Z.Group,{controlId:"fullName",children:(0,t.jsx)(c.Z.Control,{type:"text",name:"fullName",placeholder:"Full Name*",value:w.fullName,onChange:G,required:!0,className:n().firstNmae})})]})}),(0,t.jsxs)(r.default,{className:"mb-2 gx-3 gy-3",children:[(0,t.jsxs)(o.default,{md:6,children:[(0,t.jsx)("label",{children:"Work Email *"}),(0,t.jsx)(c.Z.Group,{controlId:"email",children:(0,t.jsx)(c.Z.Control,{type:"email",name:"email",placeholder:"Email*",value:w.email,onChange:G,required:!0,className:n().firstNmae})})]}),(0,t.jsxs)(o.default,{md:6,children:[(0,t.jsx)("label",{children:"Phone Number *"}),(0,t.jsx)(c.Z.Group,{controlId:"phone",children:(0,t.jsx)(c.Z.Control,{type:"tel",name:"phone",placeholder:"Phone Number*",value:w.phone,onChange:G,required:!0,className:n().firstNmae})})]})]}),(0,t.jsx)(r.default,{className:"mb-3",children:(0,t.jsxs)(o.default,{md:12,children:[(0,t.jsx)("label",{className:"mb-1",children:"Briefly describe your idea"}),(0,t.jsx)(c.Z.Group,{controlId:"message",children:(0,t.jsx)(c.Z.Control,{as:"textarea",name:"message",placeholder:"Type here",rows:3,value:w.message,onChange:G,className:n().firsttextarea})})]})}),(0,t.jsx)(r.default,{className:"purposr mb-3",children:(0,t.jsx)(o.default,{md:12,children:(0,t.jsx)(c.Z.Group,{controlId:"consent",children:(0,t.jsx)(c.Z.Check,{type:"checkbox",label:"I agree   to the Privacy Policy and give my permission to process my personal data for the purposes specified in the Privacy Policy.",className:n().permission,checked:B,onChange:e=>E(e.target.checked)})})})}),(0,t.jsx)(r.default,{children:(0,t.jsx)(o.default,{md:12,children:(0,t.jsxs)(d.Z,{type:"submit",className:n().sendmessage,children:["Get a Free Quote",(0,t.jsx)(m.default,{src:h.Z.src,alt:"arrow-right",className:"img-fluid"})]})})}),Z&&Z!==j.al.FAILED&&(0,t.jsxs)("div",{className:n().formstatus,children:[(0,t.jsx)(m.default,{src:p.Z.src,alt:"rightmark",className:"img-fluid"}),Z]}),Z&&Z===j.al.FAILED&&(0,t.jsxs)("div",{className:"".concat(n().formstatus," ").concat(n().failedFormStatus),children:[(0,t.jsx)(m.default,{src:p.Z.src,alt:"rightmark",className:"img-fluid"}),Z]})]})})]})]}),(0,t.jsxs)(o.default,{xl:6,className:n().bgImage,style:{backgroundImage:"url(".concat(u.Z.src,")"),backgroundSize:"cover"},children:[(0,t.jsxs)("div",{className:n().trusted,children:[(0,t.jsx)("h3",{children:"Privileged to be Trusted by Leading Businesses"}),(0,t.jsxs)("div",{className:n().leading,children:[(0,t.jsx)(m.default,{className:"img-fluid",src:_.Z.src,alt:"iamge"}),(0,t.jsx)(m.default,{className:"img-fluid",src:b.Z.src,alt:"iamge"})]})]}),(0,t.jsx)("div",{className:n().testimonialcard,children:(0,t.jsx)(f.Z,{...k,className:"sliderSubmit",children:null==s?void 0:null===(e=s.testimonials)||void 0===e?void 0:e.map((e,a)=>(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{children:e.description}),(0,t.jsx)("h5",{children:e.designation}),(0,t.jsx)("h4",{children:e.company_name})]},a))})})]})]})})}},3536:function(e){e.exports={"free-quote-section":"Feedback_free-quote-section__1e1Nl",bgImage:"Feedback_bgImage__bhx1T",trusted:"Feedback_trusted__Kam6r",leading:"Feedback_leading__GMsVx",logocomments:"Feedback_logocomments__haB_Y",formWrapper:"Feedback_formWrapper__oN3JX",commets:"Feedback_commets__qZYNS",firstNmae:"Feedback_firstNmae__5ei1h",firstoption:"Feedback_firstoption__SNUu8",firsttextarea:"Feedback_firsttextarea__zArFO",permission:"Feedback_permission__JUnMP",sendmessage:"Feedback_sendmessage__SAoJq",subject:"Feedback_subject__nVLDb",formstatus:"Feedback_formstatus__IzQsU",failedFormStatus:"Feedback_failedFormStatus__3nvmw",sideicon:"Feedback_sideicon__eo9dg",testimonialcard:"Feedback_testimonialcard__h_3Sg",feedIcon:"Feedback_feedIcon__wXy4B",sendmessageBottom:"Feedback_sendmessageBottom__l2RRo"}}},function(e){e.O(0,[630,525,31,73,971,117,744],function(){return e(e.s=2675)}),_N_E=e.O()}]);