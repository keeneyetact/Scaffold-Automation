const{browserslist:e}=require("../package"),{AbsPath:s,IsEmptyArray:t,IsEmptyObject:l,IsExist:r}=require("../util");let i={};if(r("brucerc.js")){const e=require(s("brucerc.js"));e&&!l(e)&&(i=e)}if(Object.keys(i).length)for(let e in i){const s=i[e];(!s||t(s)||l(s))&&delete i[e]}module.exports=Object.assign({alias:{},browserList:e,eslintIgnores:[],eslintRules:{},openPath:"",proxy:{},publicPathProd:"",publicPathTest:"",stylelintIgnores:[],stylelintRules:{},successCb:null,uploadOpts:null},i);