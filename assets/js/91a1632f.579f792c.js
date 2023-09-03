"use strict";(self.webpackChunkcodec_wiki=self.webpackChunkcodec_wiki||[]).push([[6896],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),b=o,m=p["".concat(s,".").concat(b)]||p[b]||d[b]||i;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},4731:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const i={title:"WebVTT"},a="WebVTT",l={unversionedId:"subtitles/webvtt",id:"subtitles/webvtt",title:"WebVTT",description:"WebVTT, or Web Video Text Tracks, is the format for subtitles on the web. It is used with the HTML \\ element, or embedded into a webm container.",source:"@site/docs/subtitles/webvtt.md",sourceDirName:"subtitles",slug:"/subtitles/webvtt",permalink:"/docs/subtitles/webvtt",draft:!1,editUrl:"https://github.com/av1-community-contributors/codec-wiki/tree/main/docs/subtitles/webvtt.md",tags:[],version:"current",frontMatter:{title:"WebVTT"},sidebar:"tutorialSidebar",previous:{title:"SRT",permalink:"/docs/subtitles/SRT"},next:{title:"Intro",permalink:"/docs/filtering/intro"}},s={},c=[{value:"Structure",id:"structure",level:2},{value:"Cue",id:"cue",level:3},{value:"Example",id:"example",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"webvtt"},"WebVTT"),(0,o.kt)("p",null,"WebVTT, or Web Video Text Tracks, is the format for subtitles on the web. It is used with the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track"},"HTML \\<track",">"," element"),", or embedded into a webm container."),(0,o.kt)("h2",{id:"structure"},"Structure"),(0,o.kt)("p",null,"WebVTT is a simple, text-based format, based on SRT. All files start with the string\n",(0,o.kt)("inlineCode",{parentName:"p"},"WEBVTT"),", optionally, some text, then two new lines. That's where the\ndata we're interested in starts."),(0,o.kt)("h3",{id:"cue"},"Cue"),(0,o.kt)("p",null,"A WebVTT file is basically a bunch of cues. They can have a line with\nan ID, then they have to have a line specifying from where to where\nthe cue should be displayed like this: ",(0,o.kt)("inlineCode",{parentName:"p"},"STARTTIME -> ENDTIME [optional\nsettings go here]"),", then all the text to be displayed goes after\nit. That text can have some HTML-like formatting in it. To learn about\nthem, see ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API#webvtt_cues"},"the documentation"),"."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"WEBVTT\n\n00:01.000 --\x3e 00:04.000\n- Never drink liquid nitrogen.\n\n00:05.000 --\x3e 00:09.000\n- It will perforate your stomach.\n- You could die.\n")))}d.isMDXComponent=!0}}]);