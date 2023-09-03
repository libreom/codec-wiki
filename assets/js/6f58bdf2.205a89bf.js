"use strict";(self.webpackChunkcodec_wiki=self.webpackChunkcodec_wiki||[]).push([[1444],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>v});var i=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,i,n=function(e,t){if(null==e)return{};var o,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)o=r[i],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)o=r[i],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=i.createContext({}),u=function(e){var t=i.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},c=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=u(o),m=n,v=p["".concat(s,".").concat(m)]||p[m]||d[m]||r;return o?i.createElement(v,l(l({ref:t},c),{},{components:o})):i.createElement(v,l({ref:t},c))}));function v(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,l=new Array(r);l[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[p]="string"==typeof e?e:n,l[1]=a;for(var u=2;u<r;u++)l[u]=o[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,o)}m.displayName="MDXCreateElement"},64:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>u});var i=o(7462),n=(o(7294),o(3905));const r={label:"dovi_tool",sidebar_position:6},l="dovi_tool",a={unversionedId:"utilities/dovi_tool",id:"utilities/dovi_tool",title:"dovi_tool",description:"dovi_tool is a command line tool written in Rust combining multiple utilities for working with Dolby Vision.",source:"@site/docs/utilities/dovi_tool.md",sourceDirName:"utilities",slug:"/utilities/dovi_tool",permalink:"/docs/utilities/dovi_tool",draft:!1,editUrl:"https://github.com/av1-community-contributors/codec-wiki/tree/main/docs/utilities/dovi_tool.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{label:"dovi_tool",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"NMKODER",permalink:"/docs/utilities/nmkoder"},next:{title:"mp4box",permalink:"/docs/utilities/mp4box"}},s={},u=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...o}=e;return(0,n.kt)(p,(0,i.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"dovi_tool"},"dovi_tool"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"dovi_tool")," is a command line tool written in Rust combining multiple utilities for working with Dolby Vision."),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Download pre-built binaries from ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/quietvoid/dovi_tool/releases"},"here"))),(0,n.kt)("p",null,"or"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Compile yourself (Rust must be installed, minimum v1.64.0 at the time of writing)")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'git clone https://github.com/quietvoid/dovi_tool.git\ncd dovi_tool\nRUSTFLAGS="-C target-cpu=native" cargo build --release\n')),(0,n.kt)("p",null,"on Windows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/quietvoid/dovi_tool.git\ncd dovi_tool\nset RUSTFLAGS=-C target-cpu=native \ncargo build --release\n")),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"dovi_tool [OPTIONS] <SUBCOMMAND>\n")),(0,n.kt)("p",null,"To get more detailed options for a subcommand"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"dovi_tool <SUBCOMMAND> --help\n")))}d.isMDXComponent=!0}}]);