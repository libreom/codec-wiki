"use strict";(self.webpackChunkcodec_wiki=self.webpackChunkcodec_wiki||[]).push([[4591],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3075:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const i={label:"xz",sidebar_position:5},a="XZ",s={unversionedId:"data/xz",id:"data/xz",title:"XZ",description:"This section is in need of contributions. If you believe you can help, please see our Contribution Guide to get started as a contributor!",source:"@site/docs/data/xz.md",sourceDirName:"data",slug:"/data/xz",permalink:"/docs/data/xz",draft:!1,editUrl:"https://github.com/av1-community-contributors/codec-wiki/tree/main/docs/data/xz.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{label:"xz",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"7-zip (7z)",permalink:"/docs/data/7z"},next:{title:"Brotli",permalink:"/docs/data/brotli"}},c={},l=[],p={toc:l},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"xz"},"XZ"),(0,o.kt)("admonition",{title:"Help Wanted",type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"This section is in need of contributions. If you believe you can help, please see our ",(0,o.kt)("a",{parentName:"p",href:"/docs/contribution-guide"},"Contribution Guide")," to get started as a contributor!")),(0,o.kt)("p",null,"XZ is a data compression format based on the Lempel-Ziv-Markov Chain Algorithm (LZMA). The XZ format itself is an improvement on LZMA, allowing for preprocessing filters similar to ",(0,o.kt)("a",{parentName:"p",href:"/docs/data/7z"},"7-zip")," to increase the resulting archive's compression ratio."),(0,o.kt)("p",null,"XZ can only compress one file at a time, so making a tar archive of the files you'd like to compress (if there are multiple) is necessary when using XZ."),(0,o.kt)("p",null,"XZ is more widely supported when compared to other data compression formats, seeing support across iOS, macOS, and many Linux distributions by default. To decompress & compress XZ on Windows, you will likely need the 7-Zip archive utility."))}d.isMDXComponent=!0}}]);