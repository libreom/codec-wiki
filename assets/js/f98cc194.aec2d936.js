"use strict";(self.webpackChunkcodec_wiki=self.webpackChunkcodec_wiki||[]).push([[2902],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>h});var o=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,o,n=function(e,t){if(null==e)return{};var i,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)i=a[o],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)i=a[o],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var c=o.createContext({}),l=function(e){var t=o.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},d=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(i),u=n,h=p["".concat(c,".").concat(u)]||p[u]||m[u]||a;return i?o.createElement(h,r(r({ref:t},d),{},{components:i})):o.createElement(h,r({ref:t},d))}));function h(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,r=new Array(a);r[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:n,r[1]=s;for(var l=2;l<a;l++)r[l]=i[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,i)}u.displayName="MDXCreateElement"},5198:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=i(7462),n=(i(7294),i(3905));const a={sidebar_position:4},r="Spotting Video Artifacts",s={unversionedId:"introduction/video-artifacts",id:"introduction/video-artifacts",title:"Spotting Video Artifacts",description:"https://xkcd.com/2414",source:"@site/docs/introduction/video-artifacts.md",sourceDirName:"introduction",slug:"/introduction/video-artifacts",permalink:"/docs/introduction/video-artifacts",draft:!1,editUrl:"https://github.com/av1-community-contributors/codec-wiki/tree/main/docs/introduction/video-artifacts.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Codecs",permalink:"/docs/introduction/codecs"},next:{title:"Psycho-visual",permalink:"/docs/introduction/psychovisual"}},c={},l=[{value:"Moir\xe9 Pattern",id:"moir\xe9-pattern",level:2},{value:"Staircase Effect",id:"staircase-effect",level:2},{value:"Color Bleed",id:"color-bleed",level:2},{value:"Ringing",id:"ringing",level:2},{value:"Blocking",id:"blocking",level:2},{value:"Banding/Contouring",id:"bandingcontouring",level:2},{value:"Mosquito Noise",id:"mosquito-noise",level:2}],d={toc:l},p="wrapper";function m(e){let{components:t,...i}=e;return(0,n.kt)(p,(0,o.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"spotting-video-artifacts"},"Spotting Video Artifacts"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/778167033401049098/1104708825770106910/solar_system_compression_artifacts.png",alt:"https://xkcd.com/2414"})),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},(0,n.kt)("a",{parentName:"em",href:"https://xkcd.com/2414"},"https://xkcd.com/2414"))),(0,n.kt)("p",null,"Video artifacts are visual distortions or anomalies that appear in a video, which can affect the quality of the image. Artifacts are first categorized by whether they\u2019re time/sequence-based (temporal) or location-based (spatial). If you can see the artifact when the video is paused, then it\u2019s probably a spatial artifact. If it\u2019s much more visible while the video plays, then it\u2019s likely temporal."),(0,n.kt)("h2",{id:"moir\xe9-pattern"},"Moir\xe9 Pattern"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/778167033401049098/1103668613241655336/moire-pattern.png",alt:"Moir\xe9 pattern on a brick building, result of compression."})),(0,n.kt)("p",null,"Moir\xe9 patterns is a large-scale spatial interference pattern produced when a pattern in the source image and the manner in which the encoder operates are slightly out of alignment spatially. The artifacts generated by the encoder then introduce strange, swirling effects in the source image's pattern upon decoding. and"),(0,n.kt)("h2",{id:"staircase-effect"},"Staircase Effect"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/778167033401049098/1103673827227078677/staircase-effect.png",alt:"Staircase Effect"})),(0,n.kt)("p",null,'The staircase effect is a spatial artifact that occurs when diagonal straight or curved edges that should be smooth take on a jagged appearance, looking somewhat like a set of stair steps. This is the effect that is being reduced by "anti-aliasing" filters.'),(0,n.kt)("h2",{id:"color-bleed"},"Color Bleed"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/778167033401049098/1103674365578584105/bleed.png",alt:"Color Bleed being present on compressed image."})),(0,n.kt)("p",null,"Color bleeding, as its name suggests, occurs when the edges of one color in the image unintentionally bleeds or overlaps into another color. The cause of color bleeding is usually related to the compression algorithm's handling of chrominance information. Chrominance refers to the color information in an image or video, and it's usually compressed separately from the luminance (brightness) information. In some compression algorithms, the chrominance information may be compressed more aggressively than the luminance information, resulting in a loss of color accuracy and detail."),(0,n.kt)("h2",{id:"ringing"},"Ringing"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/778167033401049098/1103677725383872583/ringing-effects.png",alt:"Ringing artifact on a star symbol."})),(0,n.kt)("p",null,"Note the blue and pink fringes around the edges of the star above (as well as the stepping and other significant compression artifacts). Those fringes are the ringing effect. It is very similar to mosquito noise which will be talked about down below."),(0,n.kt)("h2",{id:"blocking"},"Blocking"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/778167033401049098/1103678306223669248/blocky2.png",alt:"Blocking artifact on a cat."})),(0,n.kt)("p",null,'To understand this artifact, we first need to know what DCT (Discrete Cosine Transform)-based compression is. It\'s a way of reducing the size of a digital image or video file by analyzing the data in small chunks (called "blocks") and then using mathematical formulas to transform that data into a more compact representation. This transformed data can then be stored or transmitted more efficiently.'),(0,n.kt)("p",null,'However, this compression technique can sometimes lead to visible "distortions" in the compressed image or video. One of the most common types of distortion is the "blocking artifact," which occurs when the edges of the compressed blocks become visible, creating a grid-like pattern over the image or video.'),(0,n.kt)("p",null,"In simpler terms, imagine if you take a picture and then try to compress it to make the file size smaller. The compression algorithm divides the picture into small blocks and tries to simplify the information in each block. But when there's not enough bitrate/data, the algorithm simplifies the information too much, resulting in visible blocks or a grid pattern on the picture. This is what we call the DCT blocking compression artifact."),(0,n.kt)("h2",{id:"bandingcontouring"},"Banding/Contouring"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/778167033401049098/1103684037257736294/Colour_banding_example01.png",alt:"Banding Illustrated."})),(0,n.kt)("p",null,"Banding or contouring is a specific form of posterization in which the color blocks form bands or stripes in the image. This occurs when the video is encoded with too coarse a quantization (Technique used in video compression that reduces the amount of data needed to store or transmit a video by rounding off certain values in the video's signal) configuration and a lack of available color gradient. As a result, the video's contents show a \"layered\" look, where instead of smooth gradients and transitions, the transitions from color to color are abrupt, causing strips of color to appear."),(0,n.kt)("h2",{id:"mosquito-noise"},"Mosquito Noise"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/778167033401049098/1103685689444401204/mosquito-noise-_msqnois.png",alt:"Mosquito Noise surrounding an iron fence"})),(0,n.kt)("p",null,"Mosquito noise appears as small, moving, and blocky artifacts around sharp edges or fine details in videos or images. They are mostly found in videos that are compressed using the DCT algorithm we talked about earlier, such as MPEG videos or JPEG images."))}m.isMDXComponent=!0}}]);