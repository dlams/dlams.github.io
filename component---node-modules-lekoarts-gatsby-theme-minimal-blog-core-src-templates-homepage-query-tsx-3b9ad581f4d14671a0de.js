"use strict";(self.webpackChunkminimal_blog=self.webpackChunkminimal_blog||[]).push([[956],{5782:function(e,t,n){n.r(t),n.d(t,{Head:function(){return x},default:function(){return y}});var r=n(6540),a=n(557),l=n(4794),o=n(3328),i=n(6988),c=n(5740);var s=e=>{let{children:t}=e;return(0,a.Y)("section",{sx:{mb:[5,5,6],ul:{margin:0,padding:0},li:{listStyle:"none",mb:3,a:{variant:"links.listItem"}},variant:"section_bottom"}},t)},m=n(3601),u=n(7533),p=n(2174),g=n(2809),E=n(7169),d=n(8453);function f(e){const t=Object.assign({p:"p",br:"br"},(0,d.RP)(),e.components),{Text:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Text",!0),r.createElement(r.Fragment,null,r.createElement(n,{children:"Hi.",sx:{fontSize:[4,5,6],fontWeight:"bold",color:"heading"}}),"\n",r.createElement(t.p,null,"안녕하세요",r.createElement(t.br),"\n","다양한 것을 탐구하고 있습니다"))}var h=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,d.RP)(),e.components);return t?r.createElement(t,e,r.createElement(f,e)):f(e)};function b(e){const t=Object.assign({ul:"ul",li:"li",a:"a"},(0,d.RP)(),e.components),{Title:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Title",!0),r.createElement(r.Fragment,null,r.createElement(n,{text:"Projects"}),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"#"},"준비중")),"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"#"},"준비중")),"\n"))}var v=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,d.RP)(),e.components);return t?r.createElement(t,e,r.createElement(b,e)):b(e)};var w=e=>{let{posts:t}=e;const{basePath:n,blogPath:r}=(0,m.A)(),{siteTitle:E}=(0,u.A)();return(0,a.Y)(o.A,null,(0,a.Y)("h1",{sx:g.Q},E),(0,a.Y)("section",{sx:{mb:[5,6,7],p:{fontSize:[1,2,3],mt:2},variant:"section_hero"}},(0,a.Y)(h,null)),(0,a.Y)(i.A,{text:"Latest Posts"},(0,a.Y)(l.Link,{to:(0,p.A)("/"+n+"/"+r)},"Read all posts")),(0,a.Y)(c.A,{posts:t,showTags:!1}),(0,a.Y)(s,null,(0,a.Y)(v,null)))};const x=()=>(0,a.Y)(E.A,null);var y=function(e){let{...t}=e;const{data:{allPost:n}}=t;return r.createElement(w,Object.assign({posts:n.nodes},t))}},5740:function(e,t,n){n.d(t,{A:function(){return u}});var r=n(557),a=n(6540),l=n(6835),o=n(4794),i=n(3601),c=n(2174);var s=e=>{let{tags:t}=e;const{tagsPath:n,basePath:l}=(0,i.A)();return(0,r.Y)(a.Fragment,null,t.map(((e,t)=>(0,r.Y)(a.Fragment,{key:e.slug},!!t&&", ",(0,r.Y)(o.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,c.A)("/"+l+"/"+n+"/"+e.slug)},e.name)))))};var m=e=>{let{post:t,showTags:n=!0}=e;return(0,r.Y)(l.az,{mb:4},(0,r.Y)(o.Link,{to:t.slug,sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a,fontSize:[1,2,3],color:"text"}}},t.title),(0,r.Y)("p",{sx:{color:"secondary",mt:1,a:{color:"secondary"},fontSize:[1,1,2]}},(0,r.Y)("time",null,t.date),t.tags&&n&&(0,r.Y)(a.Fragment,null," — ",(0,r.Y)(s,{tags:t.tags}))))};var u=e=>{let{posts:t,className:n="",showTags:a=!0}=e;return(0,r.Y)("section",{sx:{mb:[5,6,7]},className:n},t.map((e=>(0,r.Y)(m,{key:e.slug,post:e,showTags:a}))))}},7169:function(e,t,n){var r=n(6540),a=n(4794),l=n(7533);t.A=e=>{let{title:t="",description:n="",pathname:o="",image:i="",children:c=null,canonicalUrl:s=""}=e;const m=(0,l.A)(),{siteTitle:u,siteTitleAlt:p,siteUrl:g,siteDescription:E,siteImage:d,author:f,siteLanguage:h}=m,b={title:t?t+" | "+u:p,description:n||E,url:""+g+(o||""),image:""+g+(i||d)};return r.createElement(r.Fragment,null,r.createElement("html",{lang:h}),r.createElement("title",null,b.title),r.createElement("meta",{name:"description",content:b.description}),r.createElement("meta",{name:"image",content:b.image}),r.createElement("meta",{property:"og:title",content:b.title}),r.createElement("meta",{property:"og:url",content:b.url}),r.createElement("meta",{property:"og:description",content:b.description}),r.createElement("meta",{property:"og:image",content:b.image}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{property:"og:image:alt",content:b.description}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.createElement("meta",{name:"twitter:title",content:b.title}),r.createElement("meta",{name:"twitter:url",content:b.url}),r.createElement("meta",{name:"twitter:description",content:b.description}),r.createElement("meta",{name:"twitter:image",content:b.image}),r.createElement("meta",{name:"twitter:image:alt",content:b.description}),r.createElement("meta",{name:"twitter:creator",content:f}),r.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),r.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,a.withPrefix)("/favicon-32x32.png")}),r.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,a.withPrefix)("/favicon-16x16.png")}),r.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,a.withPrefix)("/apple-touch-icon.png")}),s?r.createElement("link",{rel:"canonical",href:s}):null,c)}}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-homepage-query-tsx-3b9ad581f4d14671a0de.js.map