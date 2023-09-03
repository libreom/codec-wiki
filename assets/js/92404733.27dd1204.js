"use strict";(self.webpackChunkcodec_wiki=self.webpackChunkcodec_wiki||[]).push([[8971],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},l="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),l=c(n),g=i,d=l["".concat(s,".").concat(g)]||l[g]||p[g]||o;return n?r.createElement(d,a(a({ref:t},m),{},{components:n})):r.createElement(d,a({ref:t},m))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=g;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[l]="string"==typeof e?e:i,a[1]=u;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9296:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const o={title:"AV1 Encoding for Dummies",description:"AV1 Encoding for Dummies",slug:"av1-encoding-for-dummies",authors:[{name:"Simulping",title:"Maintainer / Encoder",url:"https://github.com/Simulping",image_url:"https://avatars.githubusercontent.com/u/12994794?v=4"},{name:"Gianni Rosato",title:"Maintainer",url:"https://github.com/gianni-rosato",image_url:"https://avatars.githubusercontent.com/u/35711760?v=4"}],tags:["video","compression"],hide_table_of_contents:!1},a=void 0,u={permalink:"/blog/av1-encoding-for-dummies",source:"@site/blog/2023-09-03-av1-for-dummies.md",title:"AV1 Encoding for Dummies",description:"AV1 Encoding for Dummies",date:"2023-09-03T00:00:00.000Z",formattedDate:"September 3, 2023",tags:[{label:"video",permalink:"/blog/tags/video"},{label:"compression",permalink:"/blog/tags/compression"}],readingTime:14.86,hasTruncateMarker:!0,authors:[{name:"Simulping",title:"Maintainer / Encoder",url:"https://github.com/Simulping",image_url:"https://avatars.githubusercontent.com/u/12994794?v=4",imageURL:"https://avatars.githubusercontent.com/u/12994794?v=4"},{name:"Gianni Rosato",title:"Maintainer",url:"https://github.com/gianni-rosato",image_url:"https://avatars.githubusercontent.com/u/35711760?v=4",imageURL:"https://avatars.githubusercontent.com/u/35711760?v=4"}],frontMatter:{title:"AV1 Encoding for Dummies",description:"AV1 Encoding for Dummies",slug:"av1-encoding-for-dummies",authors:[{name:"Simulping",title:"Maintainer / Encoder",url:"https://github.com/Simulping",image_url:"https://avatars.githubusercontent.com/u/12994794?v=4",imageURL:"https://avatars.githubusercontent.com/u/12994794?v=4"},{name:"Gianni Rosato",title:"Maintainer",url:"https://github.com/gianni-rosato",image_url:"https://avatars.githubusercontent.com/u/35711760?v=4",imageURL:"https://avatars.githubusercontent.com/u/35711760?v=4"}],tags:["video","compression"],hide_table_of_contents:!1},nextItem:{title:"Site Optimization by Reducing Image Load on the Web",permalink:"/blog/site-optimization"}},s={authorsImageUrls:[void 0,void 0]},c=[],m={toc:c},l="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(l,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This guide will show you how to encode in AV1 the ",(0,i.kt)("em",{parentName:"p"},"right")," and ",(0,i.kt)("em",{parentName:"p"},"optimal")," way. Yes, you using standalone ",(0,i.kt)("inlineCode",{parentName:"p"},"libaom"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"libsvtav1"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"librav1e")," from FFmpeg or even piping ",(0,i.kt)("inlineCode",{parentName:"p"},"yuv4mpeg")," into ",(0,i.kt)("strong",{parentName:"p"},"mainline")," aomenc are all unoptimal."))}p.isMDXComponent=!0}}]);