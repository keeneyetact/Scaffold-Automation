function e(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(r){t(e,r,n[r])})}return e}function t(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const r=require("./setting"),n=require("./getting.js");module.exports=e({},n,r);