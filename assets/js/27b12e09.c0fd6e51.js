"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[71],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(t),m=a,g=u["".concat(p,".").concat(m)]||u[m]||c[m]||i;return t?r.createElement(g,o(o({ref:n},d),{},{components:t})):r.createElement(g,o({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2657:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var r=t(3117),a=t(102),i=(t(7294),t(3905)),o=["components"],l={sidebar_position:2},p="Installing",s={unversionedId:"installing",id:"installing",title:"Installing",description:"Using react-native>0.60",source:"@site/docs/installing.md",sourceDirName:".",slug:"/installing",permalink:"/docs/installing",editUrl:"https://github.com/dooboolab/react-native-iap/edit/master/docs/docs/installing.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"React Native IAP",permalink:"/docs/intro"},next:{title:"Lifecycle",permalink:"/docs/usage_instructions/connection_lifecycle"}},d=[{value:"Using <code>react-native&gt;0.60</code>",id:"using-react-native060",children:[],level:2},{value:"Using <code>react-native&lt;=0.60</code>",id:"using-react-native060-1",children:[],level:2},{value:"Manual install",id:"manual-install",children:[],level:2},{value:"Upgrading from older versions",id:"upgrading-from-older-versions",children:[{value:"Upgrading to 6.1.0",id:"upgrading-to-610",children:[],level:3},{value:"Upgrading to 3.4.0",id:"upgrading-to-340",children:[],level:3}],level:2}],c={toc:d};function u(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"installing"},"Installing"),(0,i.kt)("h2",{id:"using-react-native060"},"Using ",(0,i.kt)("inlineCode",{parentName:"h2"},"react-native>0.60")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Install the package into your React Native Project.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm install --save react-native-iap\n")),(0,i.kt)("p",null,"The package will be linked automatically using autolinking.\nThen follow the instructions below depending on the platform you're working with:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"iOS Platform:")),(0,i.kt)("p",{parentName:"li"},"Install cocoa pods: ",(0,i.kt)("inlineCode",{parentName:"p"},"cd ios && pod install")," ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Android Platform with Android Support:")),(0,i.kt)("p",{parentName:"li"},"Modify your ",(0,i.kt)("strong",{parentName:"p"},"android/build.gradle")," configuration:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'buildscript {\n  ext {\n    buildToolsVersion = "28.0.3"\n    minSdkVersion = 21\n    compileSdkVersion = 28\n    targetSdkVersion = 28\n    # Only using Android Support libraries\n    supportLibVersion = "28.0.0"\n  }\n')),(0,i.kt)("p",{parentName:"li"}," note: Using ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikehardy/jetifier"},"Jetifier tool")," for backward-compatibility.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Android Platform with AndroidX:")),(0,i.kt)("p",{parentName:"li"},"Modify your ",(0,i.kt)("strong",{parentName:"p"},"android/build.gradle")," configuration:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'buildscript {\n  ext {\n    buildToolsVersion = "28.0.3"\n    minSdkVersion = 21\n    compileSdkVersion = 28\n    targetSdkVersion = 28\n    # Remove \'supportLibVersion\' property and put specific versions for AndroidX libraries\n    androidXAnnotation = "1.1.0"\n    androidXBrowser = "1.0.0"\n    // Put here other AndroidX dependencies\n  }\n')),(0,i.kt)("p",{parentName:"li"},"You have two options depending on the stores you support:"),(0,i.kt)("p",{parentName:"li"},"  a. If you only need for Google Play IAP, Insert this inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"defaultConfig")," section in ",(0,i.kt)("inlineCode",{parentName:"p"},"android/app/build.gradle"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-gradle"},"defaultConfig {\n      ...\n      // react-native-iap: we only use the Google Play flavor\n      missingDimensionStrategy 'store', 'play'\n  }\n")),(0,i.kt)("p",{parentName:"li"},"  b. If you are using it for both Google Play and Amazon, insert the following lines inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"android")," block in ",(0,i.kt)("inlineCode",{parentName:"p"},"android/app/build.gradle")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-gradle"},'android {\n  ...\n  flavorDimensions "appstore"\n  productFlavors{\n      googlePlay{\n          dimension "appstore"\n          missingDimensionStrategy "store", "play"\n      }\n      amazon{\n          dimension "appstore"\n          missingDimensionStrategy "store", "amazon"\n      }\n  }\n}\n')))),(0,i.kt)("h2",{id:"using-react-native060-1"},"Using ",(0,i.kt)("inlineCode",{parentName:"h2"},"react-native<=0.60")),(0,i.kt)("p",null,"Follow the steps above and then link the package using: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"react-native link react-native-iap\n")),(0,i.kt)("h2",{id:"manual-install"},"Manual install"),(0,i.kt)("p",null,"Refer to ",(0,i.kt)("a",{parentName:"p",href:"./manual_install"},"Manual installation"),"."),(0,i.kt)("h2",{id:"upgrading-from-older-versions"},"Upgrading from older versions"),(0,i.kt)("h3",{id:"upgrading-to-610"},"Upgrading to 6.1.0"),(0,i.kt)("p",null,"On Android, follow step 3 of the ",(0,i.kt)("a",{parentName:"p",href:"./manual_install"},"Manual Installation")," instructions."),(0,i.kt)("h3",{id:"upgrading-to-340"},"Upgrading to 3.4.0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Upgrade to the new ",(0,i.kt)("a",{parentName:"li",href:"./usage_instructions/purchase"},"purchase flow"),"."),(0,i.kt)("li",{parentName:"ul"},"There is no longer any need to call endConnection on Android as this is done automatically.")))}u.isMDXComponent=!0}}]);