"use strict";(self.webpackChunkcodec_wiki=self.webpackChunkcodec_wiki||[]).push([[9967],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(r),p=o,g=u["".concat(c,".").concat(p)]||u[p]||m[p]||i;return r?n.createElement(g,a(a({ref:t},d),{},{components:r})):n.createElement(g,a({ref:t},d))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},7892:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const i={title:"Embedding the Un-Embeddable: Dissecting discord.nfp.is, stolen.shoes & Others",description:"Revealing the secrets of those websites that allow you to embed AV1 videos, while also over 500MB on Discord.",slug:"embedding-the-un-embeddable",authors:[{name:"Simulping",title:"Maintainer / Encoder",url:"https://github.com/Simulping",image_url:"https://avatars.githubusercontent.com/u/12994794?v=4"}],tags:["video","discord"],image:"/img/discord-embed-blog-image.webp",hide_table_of_contents:!1},a=void 0,s={permalink:"/blog/embedding-the-un-embeddable",source:"@site/blog/2023-10-29-embedding-the-un-embeddable.md",title:"Embedding the Un-Embeddable: Dissecting discord.nfp.is, stolen.shoes & Others",description:"Revealing the secrets of those websites that allow you to embed AV1 videos, while also over 500MB on Discord.",date:"2023-10-29T00:00:00.000Z",formattedDate:"October 29, 2023",tags:[{label:"video",permalink:"/blog/tags/video"},{label:"discord",permalink:"/blog/tags/discord"}],readingTime:8.91,hasTruncateMarker:!0,authors:[{name:"Simulping",title:"Maintainer / Encoder",url:"https://github.com/Simulping",image_url:"https://avatars.githubusercontent.com/u/12994794?v=4",imageURL:"https://avatars.githubusercontent.com/u/12994794?v=4"}],frontMatter:{title:"Embedding the Un-Embeddable: Dissecting discord.nfp.is, stolen.shoes & Others",description:"Revealing the secrets of those websites that allow you to embed AV1 videos, while also over 500MB on Discord.",slug:"embedding-the-un-embeddable",authors:[{name:"Simulping",title:"Maintainer / Encoder",url:"https://github.com/Simulping",image_url:"https://avatars.githubusercontent.com/u/12994794?v=4",imageURL:"https://avatars.githubusercontent.com/u/12994794?v=4"}],tags:["video","discord"],image:"/img/discord-embed-blog-image.webp",hide_table_of_contents:!1},nextItem:{title:"AV1 Encoding for Dummies",permalink:"/blog/av1-encoding-for-dummies"}},c={authorsImageUrls:[void 0]},l=[{value:"A Scenario",id:"a-scenario",level:2}],d={toc:l},u="wrapper";function m(e){let{components:t,...i}=e;return(0,o.kt)(u,(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Copyright Disclosure",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The Codec Wiki unequivocally condemns any form of piracy, including the unauthorized distribution of copyrighted content. This blog post is intended to educate & inform. You may not use the tools discussed to infringe upon the intellectual property rights of content creators without serious legal risk. We encourage our readers to respect copyright laws & use the tools we discuss here appropriately.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Feature image",src:r(1403).Z,width:"1920",height:"1080"}),"\n",(0,o.kt)("strong",{parentName:"p"},'A 567.14 MB, 12 min 11 s, 2K (2,048 x 858), VP9 + Opus, 6.51 Mbps average, Blender short film "Cosmos Laundromat"')),(0,o.kt)("h2",{id:"a-scenario"},"A Scenario"),(0,o.kt)("p",null,"While chatting in your favorite Discord servers & group chats, you may see a friend send a weird link. You might even consider it suspicious on first glance. It is a video featuring an image of a movie poster with a play button that is almost begging to be clicked. Naturally, you click it."))}m.isMDXComponent=!0},1403:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/discord-embed-blog-image-2bcaf4f73f5fa33664328756753f3041.webp"}}]);