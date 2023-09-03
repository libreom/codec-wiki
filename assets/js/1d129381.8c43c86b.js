"use strict";(self.webpackChunkcodec_wiki=self.webpackChunkcodec_wiki||[]).push([[5302],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=i.createContext({}),l=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(r),f=n,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||o;return r?i.createElement(m,a(a({ref:t},u),{},{components:r})):i.createElement(m,a({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:n,a[1]=c;for(var l=2;l<o;l++)a[l]=r[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8140:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var i=r(7462),n=(r(7294),r(3905));const o={label:"FFMetrics",sidebar_position:3},a="FFMetrics",c={unversionedId:"utilities/FFMetrics",id:"utilities/FFMetrics",title:"FFMetrics",description:"This section is in need of contributions. If you believe you can help, please see our Contribution Guide to get started as a contributor!",source:"@site/docs/utilities/FFMetrics.md",sourceDirName:"utilities",slug:"/utilities/FFMetrics",permalink:"/docs/utilities/FFMetrics",draft:!1,editUrl:"https://github.com/av1-community-contributors/codec-wiki/tree/main/docs/utilities/FFMetrics.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{label:"FFMetrics",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"rAV1ator",permalink:"/docs/utilities/rAV1ator"},next:{title:"YUView",permalink:"/docs/utilities/YUView"}},s={},l=[],u={toc:l},p="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"ffmetrics"},"FFMetrics"),(0,n.kt)("admonition",{title:"Help Wanted",type:"warning"},(0,n.kt)("p",{parentName:"admonition"},"This section is in need of contributions. If you believe you can help, please see our ",(0,n.kt)("a",{parentName:"p",href:"/docs/contribution-guide"},"Contribution Guide")," to get started as a contributor!")),(0,n.kt)("p",null,"FFMetrics is a graphical user interface (GUI) for FFmpeg that allows you to visualize video quality metrics. You can select files without using the command line, and FFMetrics will calculate and visualize the PSNR, SSIM, and VMAF quality metrics for all of them in one go using graphs and numbers."))}d.isMDXComponent=!0}}]);