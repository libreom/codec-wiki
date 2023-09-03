"use strict";(self.webpackChunkcodec_wiki=self.webpackChunkcodec_wiki||[]).push([[5795],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),f=i,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5986:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const o={title:"Intro",sidebar_position:1},a="Intro",s={unversionedId:"filtering/intro",id:"filtering/intro",title:"Intro",description:"The content in this entry is incomplete & is in the process of being completed.",source:"@site/docs/filtering/intro.md",sourceDirName:"filtering",slug:"/filtering/intro",permalink:"/docs/filtering/intro",draft:!1,editUrl:"https://github.com/av1-community-contributors/codec-wiki/tree/main/docs/filtering/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Intro",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"WebVTT",permalink:"/docs/subtitles/webvtt"},next:{title:"Deband",permalink:"/docs/filtering/deband"}},l={},c=[{value:"Lore",id:"lore",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"intro"},"Intro"),(0,i.kt)("admonition",{title:"Under Maintenance",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The content in this entry is incomplete & is in the process of being completed.")),(0,i.kt)("p",null,"In the future, you will definitely come into contact with less than ideal or even downright terrible media, like a ton of film grain/unwanted noise that explodes the bitrate because of their randomness, annoying banding, random halos. Or even in more extreme cases, Interlaced and telecined videos you might come across because they're old and nobody cared about restoring them."),(0,i.kt)("p",null,"This is where filtering comes into play, currently there are three players in the filtering game. ",(0,i.kt)("a",{parentName:"p",href:"https://ffmpeg.org"},"FFmpeg"),", ",(0,i.kt)("a",{parentName:"p",href:"https://vapoursynth.com"},"Vapoursynth"),", and ",(0,i.kt)("a",{parentName:"p",href:"http://avisynth.nl/index.php/Main_Page"},"Avisynth"),". This wiki will only cover Vapoursynth (and FFmpeg when relevant) as it is intended as a replacement to Avisynth, you will need to understand a bit of Python as filtering involves a bit of scripting."),(0,i.kt)("h2",{id:"lore"},"Lore"),(0,i.kt)("p",null,"VapourSynth is supposed to be an upgrade and 21st century rewrite for Avisynth, created by Ben Rudiak-Gould, Edwin van Eggelen, Klaus Post, Richard Berg and Ian Brabham in ",(0,i.kt)("strong",{parentName:"p"},"May 2000"),". One of the most attractive feature from the full rewrite is better multithreading which Avisynth suffered a lot from due to it's very old infrastructure, despite this some Avisynth veterans refuse to move over because they're already used to their workflow (There is nothing inherently wrong with this)."))}d.isMDXComponent=!0}}]);