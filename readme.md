# Bruce Cli <img src="https://img.shields.io/badge/bruce--cli-React应用自动化构建脚手架-f66.svg">

<a><img src="https://img.shields.io/badge/author-Joway%20Young-f66.svg"></a>
<a><img src="https://img.shields.io/badge/version-0.0.1-f66.svg"></a>
<a><img src="https://img.shields.io/badge/node-%3E%3D%208.0.0-3c9.svg"></a>
<a><img src="https://img.shields.io/badge/npm-%3E%3D%205.0.0-3c9.svg"></a>
<a><img src="https://img.shields.io/badge/coverage-92%25-09f.svg"></a>
<a><img src="https://img.shields.io/badge/size-595%20kb-09f.svg"></a>
<a><img src="https://img.shields.io/badge/build-passing-f90.svg"></a>
<a><img src="https://img.shields.io/badge/test-passing-f90.svg"></a>
<a><img src="https://img.shields.io/badge/platform-win--32%20%7C%20win--64%20%7C%20osx--64%20%7C%20linux--64-66f.svg"></a>
<a><img src="https://img.shields.io/badge/license-MIT-66f.svg"></a>

### 背景 <img src="https://img.shields.io/badge/Background-66f.svg">

在前端技术的日益壮大下，从以前简单的几个文件到现在的一堆文件，各种扩展和工具植入到项目里，使得项目越来越庞大越来越难管理，前端项目也因此而趋于工程化和一体化。日新月异的前端技术已经让前端代码的业务逻辑和交互效果越来越复杂，项目会一直维护和迭代，令开发者更加不易于管理。模块化开发和各种框架把项目分成若干个小模块，增加了最后发布的困难，没有一个统一的标准，让前端项目结构千奇百怪。通常的项目都是团队开发，每个人的代码编写习惯和逻辑编写风格也很难一致。工作围绕着**开发效率**和**运行性能**的工程化问题是我们作为前端开发者必须得处理的问题。因此前端项目自动化构建在整个项目开发中越来越重要。

### 依赖 <img src="https://img.shields.io/badge/Dependence-66f.svg">

> 本项目是基于`Webpack4.x.x`进行开发的极速零配置Web应用打包工具(**每次更新版本都会保持最新的依赖**)，集成各种常用工具(`Postcss`、`Sass`、`Less`、`Babel`、`TypeScript`、`Stylelint`、`Eslint`等)扩展构建功能，用于构建和管理React技术栈的项目应用

<a><img src="https://img.shields.io/badge/commander-2.x.x-3c9.svg"></a>
<a><img src="https://img.shields.io/badge/inquirer-6.x.x-3c9.svg"></a>
<a><img src="https://img.shields.io/badge/webpack-4.x.x-3c9.svg"></a>
<a><img src="https://img.shields.io/badge/postcss-7.x.x-3c9.svg"></a>
<a><img src="https://img.shields.io/badge/sass-7.x.x-3c9.svg"></a>
<a><img src="https://img.shields.io/badge/less-3.x.x-3c9.svg"></a>
<a><img src="https://img.shields.io/badge/babel-7.x.x-3c9.svg"></a>
<a><img src="https://img.shields.io/badge/typescript-3.x.x-3c9.svg"></a>
<a><img src="https://img.shields.io/badge/stylelint-9.x.x-3c9.svg"></a>
<a><img src="https://img.shields.io/badge/eslint-5.x.x-3c9.svg"></a>

### 安装 <img src="https://img.shields.io/badge/Installation-66f.svg">

- `npm i -g bruce-cli`
- `yarn add bruce-cli`

> 安装失败

- 将npm源镜像设置为淘宝镜像：`npm config set registry https://registry.npm.taobao.org`
- 重新执行命令安装：`npm i -g bruce-cli` 或 `yarn add bruce-cli`

### 使用 <img src="https://img.shields.io/badge/Usage-66f.svg">

~|命令|缩写
-|-|-
构建项目|**bruce build**|`bruce b`
构建动态链接库|**bruce dll**|`bruce d`
初始项目|**bruce init**|`bruce i`
切换语言|**bruce lang**|`bruce l`
创建组件|**bruce new**|`bruce n`

### 功能 <img src="https://img.shields.io/badge/Function-66f.svg">

> 命令功能

- [x] **构建项目**：根据终端交互式问答选择所需的配置进行项目调试和项目打包
- [x] **构建动态链接库**：构建项目前把第三方依赖单独提取出来，提高构建速度和减少构建过程中代码被重复编译的次数
- [x] **初始项目**：根据终端交互式问答选择所需的配置生成项目的基本文件和入口文件
- [x] **切换语言**：切换在终端面板中显示的文本语言，可选中文简体、中文繁体、英文
- [x] **创建组件**：输入组件路径后在项目根目录对应的路径下创建模板文件

> 内置功能

- [x] **模式选择**：提供`开发环境`、`测试环境`、`生产环境`三中模式，每种模式对应不同的构建配置和优化方案
- [x] **端口监听**：使用开发模式时，启动本地服务器，并监听指定端口，可自动打开浏览器来访问页面
- [x] **局部刷新**：启用Webpack内置的`HMR`，配合`react-hot-loader`，增量更新`css文件`和`js文件`，修哪更哪，无需刷新页面即可实时看见修改结果
- [x] **垫片插入**：根据项目兼容性自动插入垫片，兼容低版本浏览器
	- 插入动态`polyfill`，根据浏览器请求时的`UserAgent`返回垫片文件，`babel`编译JS代码时就不带上垫片进行编译，起到`减包作用`
	- 插入静态`polyfill`，根据`browserslist`和编写代码中的ES6语法自动插入所需的垫片代码
- [x] **动态导入**：可使用动态导入的语法(`import().then()`)，处理代码时会单独分离此模块，执行页面对应操作时才加载此模块，使用才加载不使用则不加载(`代码懒加载`)，减少首屏加载代码大小和渲染时间
- [x] **代码编译**：内置CSS编译器(`Postcss`、`Sass`、`Less`)和JS编译器(`Babel`、`TypeScript`)编译样式和脚本，开发时可使用最新或草案规范中的语法，使得代码更简洁，提高代码的可读性
	- 使用`style-loader`和`css-loader`处理CSS，把CSS从JS中单独抽离出来
	- 使用`postcss-loader`处理CSS新特性和草案规范，根据`browserslist`增加CSS前缀
	- 使用`sass-loader`处理Sass，通过`node-sass`编译`sass文件`为`css文件`
	- 使用`less-loader`处理Less，通过`less`编译`less文件`为`css文件`
	- 使用`babel-loader`根据预设环境和`browserslist`处理编写的`ES6代码`，并生成浏览器可识别的`ES5代码`
	- 使用`ts-loader`处理TS，可使用`typescript`提供的各种语法来编写和规范`ES6代码`
- [x] **代码校验**：确保编写的语法没有错误，统一规范团队协作中每位同事的代码编写风格，减少代码冗余，在保证代码语法正确的前提下提高代码的可读性
	- `CSS校验`：内置`stylelint`，配置标准的CSS语法规则，对开发过程中出现的语法错误进行检查和纠正
	- `JS校验`：内置`eslint`，配置标准的JS语法规则，对开发过程中出现的语法错误进行检查和纠正
- [x] **友好提示**：当遇到警告和错误时输出语法高亮的代码片段和解决提示，帮助开发者定位问题
- [x] **代码分割**：对业务代码进行打包，分割成`WebpackRuntime代码块`、`第三方依赖代码块`、`公共业务代码块`、`单个业务代码块`
- [x] **代码合并**：通过对相同模块、相同功能或复用多次的代码进行整体合并，起到`减包作用`
- [x] **压缩合并**：
	- `CSS压缩`：内置`cssnano`，对抽离出来的CSS进行压缩去重
	- `JS压缩`：内置`uglifyjs`和`terser`，对抽离出来的JS进行压缩去重，`uglifyjs`用于压缩`ES5`，`terser`用于压缩`ES6`
	- `图片压缩`：内置`imagemin`，对`png`、`jpg`等图像进行无损压缩
- [x] **接口代理**：使用`proxy`反向代理服务端接口，解决接口跨域问题
- [x] **资源处理**：使用`file-loader`和`url-loader`来处理字体、图像、音频、视频资源
- [x] **摇树优化**：启用Webpack内置的`Tree Shaking`，禁止`babel`把代码转换成`Commonjs规范`，使用`ESM规范`的静态声明特点来去除不被引用或不被执行的代码块，起到`减包作用`
- [x] **缓存优化**：在开启文件哈希化后，根据文件哈希值是否发生变化来执行打包操作，哈希没有变化的文件直接从缓存中获取，减少打包生成文件的时间
- [x] **文件哈希**：可对生成文件设置哈希值，只有文件内容修改了才会更改哈希值，用于长缓存优化
- [x] **目录时化**：可对输出的根目录进行时间序列化命名，增加时间戳来区分版本
- [x] **打包分析**：可在打包完成后展示打包依赖的关系，根据关系图对模块的编写进行合理的分配和修改
- [x] **文件上传**：暴露出构建成功的钩子，可在钩子函数上编写上传到服务器的代码用于打包后将文件上传到服务器，还可进行其他操作
- [x] **配置定制**：当部分配置不符合项目需求时，可通过在根目录增加`brucerc.js`文件来修改默认配置，构建启动时就会使用此配置文件来覆盖默认构建配置

### 配置 <img src="https://img.shields.io/badge/Config-66f.svg">

- **alias**：模块导入快捷方式，配置详情请参考[webpack resolve alias](https://webpack.js.org/configuration/resolve/#resolve-alias)
- **browserList**：目标浏览器配置列表，配置详情请参考[browserslist](https://github.com/browserslist/browserslist)
- **eslintIgnores**：Eslint忽略路径列表，配置详情请参考[eslint ignores](https://eslint.org/docs/user-guide/configuring#using-eslintignore-in-packagejson)
- **eslintRules**：Eslint校验规则列表，配置详情请参考[eslint rules](https://eslint.org/docs/user-guide/configuring#configuring-rules)和[rules](https://eslint.org/docs/rules/)
- **openPath**：开发环境下浏览器打开后显示URL路径
- **proxy**：接口代理，配置详情请参考[webpack-dev-server props](https://webpack.js.org/configuration/dev-server/#devserver-proxy)
- **publicPathProd**：生产环境公共路径
- **publicPathTest**：测试环境公共路径
- **stylelintIgnores**：Stylelint忽略路径列表，配置详情请参考[stylelint ignores](https://stylelint.io/user-guide/configuration/#ignorefiles)
- **stylelintRules**：Stylelint校验规则列表，配置详情请参考[stylelint rules](https://stylelint.io/user-guide/configuration/#rules)和[rules](https://stylelint.io/user-guide/rules/)
- **successCb**：构建成功回调函数(配置后`uploadOpts`会失效)，可自定义上传文件操作或其他操作
- **uploadOpts**：上传配置函数(必须返回一个Object)，包含`host服务器IP`、`password密码`、`path目标文件路径`、`privateKey秘钥`、`username账号`

> 默认配置

```js
module.exports = {
	alias: {},
	browserList: [
		"last 20 Chrome versions",
		"last 20 Firefox versions",
		"last 20 Opera versions",
		"Explorer >= 11",
		"Safari >= 8",
		"Android >= 4.4",
		"iOS >= 8"
	],
	eslintIgnores: [],
	eslintRules: {
		"eol-last": ["error", "never"],
		"handle-callback-err": ["error", "error"],
		"indent": ["error", "tab"],
		"jsx-quotes": ["error", "prefer-double"],
		"no-console": ["off"],
		"no-new": ["off"],
		"no-tabs": ["off"],
		"no-unreachable": ["off"],
		"object-curly-spacing": ["error", "always"],
		"operator-linebreak": ["error", "before"],
		"quotes": ["error", "double"],
		"semi": ["error", "always"],
		"sort-keys": ["error", "asc", { "caseSensitive": false, "natural": true }],
		"space-before-function-paren": ["error", "never"]
	},
	openPath: "",
	proxy: {},
	publicPathProd: "",
	publicPathTest: "",
	stylelintIgnores: [],
	stylelintRules: {
		"at-rule-empty-line-before": "never",
		"at-rule-no-unknown": [true, { "ignoreAtRules": ["content", "extend", "include", "mixin"] }],
		"color-hex-case": "lower",
		"comment-empty-line-before": "never",
		"declaration-empty-line-before": "never",
		"indentation": "tab",
		"no-descending-specificity": null,
		"no-missing-end-of-source-newline": null,
		"number-leading-zero": "never",
		"rule-empty-line-before": "never"
	},
	successCb: null,
	uploadOpts: null
};
```

> 覆盖配置

如果不需要默认配置或想自定义配置，直接覆盖配置属性即可

```js
module.exports = {
	alias: {
		swiper: "swiper/dist/js/swiper.js"
	},
	browserList: [
		"> 0.5%",
		"last 2 versions"
	],
	eslintIgnores: [
		"src/components/*"
	],
	eslintRules: {
		"space-before-function-paren": ["error", "always"]
	},
	openPath: "?abc=123",
	proxy: [{
		"changeOrigin": true,
		"context": [
			"/cain/article/detail",
			"/cain/vote/result",
			"/cain/vote/post"
		],
		"secure": false,
		"target": "https://cain-dev.gameyw.netease.com"
	}],
	publicPathProd: "https://www.baidu.com",
	publicPathTest: "https://www.baidu.com",
	stylelintIgnores: [
		"src/assets/css/*"
	],
	stylelintRules: {
		"color-hex-case": "upper"
	},
	successCb(mode, dir) {
		console.log("运行环境: " + { 2: "测试环境", 3: "生产环境" }[mode]);
		console.log("输出文件路径: " + dir);
	},
	uploadOpts(mode) {
		return {
			host: "your server ip",
			password: "your server password",
			path: "/root/www",
			username: "root"
		};
	}
};
```

### 对比 <img src="https://img.shields.io/badge/Compare-66f.svg">

- 传统构建方案
- 本构建方案

> 传统构建方案

基于`Gulp`和`Webpack`构建的`React项目`，项目代码分为**构建代码**和**业务代码**，项目目录和文件配置是比较传统和多人使用的项目搭建方案。整个项目中除去业务代码后，构建代码的文件比较多，配置比较分散，比较难集中管理，无法做到开箱即用，通用性比较低，前期搭建项目构建方案可能花费的时间比较多，项目构建时需依赖本项目存在的依赖模块才能驱动。对于增删改构建功能和新同事入门，可能需要花比较多的时间去查找代码和熟悉构建逻辑
<br><img src="http://yangzw.vip/static/complex.png">

> 本构建方案

基于`Webpack`构建的`React项目`，代码只有**业务代码**，构建代码集中在一起做成一个npm模块并安装到全局环境中，通过命令调用本方案来驱动此项目，实现构建代码和业务代码完全分离。开发时无需关注如何写好构建代码和使用何种工具扩展构建功能，只需专注于业务代码的编写，整个项目只存在业务代码，可通过配置文件修改默认构建配置，大大节省项目前期准备时间，保证项目的**简洁性**、**独立性**、**高效性**、**维护性**。省去项目前期搭建准备，直接开箱即用，使开发者集中精力写好业务代码
<br><img src="http://yangzw.vip/static/simple.png">

> 方案对比

~|传统构建方案|本构建方案
:-:|-|-
构建文件|`build文件夹` `config文件夹` `tools文件夹`<br>`.babelrc` `.eslintignore` `.eslintrc`<br>`.stylelintignore` `stylelintrc`|无
业务文件|`src文件夹`|`src文件夹`
配置文件|无(已集成在构建文件中)|`brucerc.js`
基础文件|`package.json` `readme.md`|`package.json` `readme.md`
依赖模块|`Webpack技术栈`(构建) `React技术栈`(业务)|`React技术栈`(业务)
安装时间|较慢<br>安装构建和业务代码依赖的模块|较快<br>只安装业务代码依赖的模块
开发准备|编写webpack和多种工具搭配的构建代码|开箱即用
全局使用|不可以|可以
构建复用|新建文件夹，复制粘贴构建代码，修改配置文件等|执行命令行初始项目和构建项目
新手构建|需了解构建代码逻辑和配置文件|执行命令行
后期扩展|在原有构建代码中进行增删改构建功能|通过配置文件`brucerc.js`进行增删改构建功能
配置管理|分散到不同的构建配置文件中|集成构建的基础配置<br>可通过配置文件`brucerc.js`进行覆盖

### 语言 <img src="https://img.shields.io/badge/Language-66f.svg">

- [x] zh-chs 中文简体
- [x] zh-cht 中文繁体
- [x] en English

### 备注 <img src="https://img.shields.io/badge/Backup-66f.svg">

- IDE相关
	- 推荐使用[VSCode](https://code.visualstudio.com/)进行项目开发
	- 如果启用`Stylelint`或`Eslint`，需要在IDE上安装[Stylelint插件](https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint)或[Eslint插件](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)才能配合本项目代码校验高亮显示警告和错误
- TypeScript相关
	- 当使用TS时，会在根目录下自动生成`tsconfig.json`的配置文件
	- 如需修改TS配置，只需修改`tsconfig.json`
	- 如需修改Tslint配置，在根目录下创建`tslint.json`的配置文件，手动编写配置覆盖默认Tslint配置
- 文件相关
	- 项目类型为SPA时，入口文件必须为`src/index.js|ts|jsx|tsx`
	- 项目类型为MPA时，入口文件必须为`src/pages/pageName/index.js|ts|jsx|tsx`
	- 当`src/pages`目录存在且包含子文件夹，则自动识别为`MPA项目`
- 垫片相关
	- 如无特殊兼容入口文件无需增加`import "@babel/polyfill";`
	- 如需兼容低版本浏览器，在入口文件最顶部加入`import "@babel/polyfill";`

### 版权 <img src="https://img.shields.io/badge/License-66f.svg">

MIT © [Joway Young](https://github.com/JowayYoung)

### 例子 <img src="https://img.shields.io/badge/Example-09f.svg">

- 进入文件夹
	> `cd myProject`
- 创建项目(根据交互式问答选择的选项生成项目初始文件)
	> `bruce i`
- 进入项目根目录
	> `cd myDemo`
- 构建动态链接库(根据交互式问答选择的选项生成动态链接库)
	> `bruce d`
- 构建项目(根据交互式问答选择的选项来调试项目和打包项目)
	> `bruce b`
- 创建组件(第一个参数为相对`src文件夹`下的路径，第二个参数为是否使用`prop-types`校验参数)
	> `bruce c components/hello`
	> `bruce c components/hello props` 或 `bruce c components/hello props=true`
- 切换语言
	> `bruce l`

### 待做 <img src="https://img.shields.io/badge/Todo-f90.svg">

- [ ] 增加Jest测试框架

### 后记 <img src="https://img.shields.io/badge/Postscript-f66.svg">

本项目源于我2017年3月份一个Angular项目里的构建代码，从最开始的`Webpack2`一直迭代到今天的`Webpack4`，话说`Webpack5`过段时间就要出了。最初我的构思是写一份构建代码模板存放在Github上，然后通过脚本把构建代码拉下来。可是这样构建代码和业务代码还是同时存放在一个文件夹里，不容易管理，文件又多又杂。下次新开项目时又要把构建代码复制过去，有时升级构建功能，为了保持构建功能的统一，需要同时修改几个项目里的构建代码，妈的真烦。既然这样，为什么不把那些通用的构建代码抽出来做成一个npm模块呢，这样一次安装全局运行，多爽呀！2018年3月我就开始对这个项目进行升级改造，做成一个npm模块，只不过一直在自己的电脑里跑。因为还没怎样应用到项目里，所以也不敢开源。经过差不多1年大大小小20多个项目的应用，终于稳定了这个项目的功能，所以我也决定对`bruce-cli`进行开源。对于所有通过`bruce-cli`创建的项目都可以开箱即用所有构建功能，如无特殊需求甚至是零配置即可运行项目。开发这个项目经历了很多，挖的坑很多，填的坑也很多，很苦很累，有段时间还经常熬夜就是为了把它做得更好。不过收获也很大，学习了很多新知识新技能，把常用的Node知识都用上了，也为自己后期做Node服务端开发打下了巩固的基础。有付出就有收获，我还是一直相信这句话的，因为自己确实进步了很多。本项目是基于`Node10`和`Node11`进行开发的，为了兼容`Node8+`，所以使用了`babel`对源码进行了编译，生成现在线上版本的代码，待更多的项目测试完成和应用起来后会开放源码供大家一起学习和完善。如果在后续使用本项目发现Bug或者产生疑问，可以随时Issues或通过WeChat联系我。

<center><img src="http://yangzw.vip/static/wechat.jpg" width="200"></center>
