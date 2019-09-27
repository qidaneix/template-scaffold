# typescript-scaffold

_此项目为提供了 typescript 编译环境的工程脚手架，供大家试玩 typescript。项目使用@vue/cli3 生成，并做了部分修改与配置。项目内置了 webpack、typescript、babel、eslint、sass、stylelint、postcss、prettier、jest、nightwatch 等现代前端工具，提供了代码模块打包、开发环境服务、模块热更新、代码编译、代码检查、代码格式化、单元测试、端到端测试等诸多功能。项目尚处在完善阶段，仅供大家试玩，有任何问题或建议或改动欢迎提交 issue/MR 反馈。**enjoy it!**_

## 项目启动步骤

项目假定你已安装 git、node^10.x 以及 npm^6.x。

1. fork 该项目至自己账户名下；
2. clone 项目到本地；
3. 安装项目依赖，由于内网无法访问 npm，有两种方式安装依赖：

   - 运行 XXXXXXX 修改 npm 配置，使内网可以访问 npm，然后运行`npm install`；
   - 拷贝 node_modules.zip 到本地，解压到项目根目录。解压完成后删除 node_modules.zip；

4. 运行`npm run build`，可将项目编译为生产环境代码包；
5. 运行`npm run serve`，即可启动项目开发环境。

## 代码 Editor/IDE 配置

好马配好鞍，合理的 Editor/IDE 配置可以发挥项目脚手架的最大能力。下面将介绍 VSCode 的推荐配置，使用其他 Editor/IDE 的小伙伴请自行研究对应的配置，欢迎进行补充！

### VSCode

#### 推荐安装的插件

1. EditorConfig for VS Code。EditorConfig 插件，读取.editorconfig 文件，提供最基础的代码编辑配置，控制代码缩进、行尾符等等；
2. ESLint。eslint 插件，读取.eslint.js 配置，提供 javascript/typescript 代码 lint 的实时提示、fix 等；
3. stylelint。stylelint 插件，提供 css/scss 代码 lint 的实时提示、fix 等；
4. Prettier - Code formatter。Prettier 插件，读取 prettier.config.js 配置，对代码格式进行自动格式化；
5. Code Spell Checker。没别的，就检测你的英文单词拼写有没有问题（驼峰中划线下划线都能检测）。

#### 推荐的配置

1. 设置 eslint 插件检测 typescript 代码。eslint 插件默认只检测 javascript，需要添加配置使其检测 typscript：

   ```json
   "eslint.validate": [
       "javascript",
       "typescript"
   ],
   ```

2. 设置文件保存时格式化代码。prettier 默认在 git commit 代码时进行格式化，如果想在代码保存时就格式化代码，需要开启文件保存时格式化代码：

   ```json
   "editor.formatOnSave": true,
   ```

**Editor/IDE 配置好后，打开项目，运行`npm run serve`命令，编写./src 里的项目源码，即可开始享受快乐的 typescript 编写之旅！**
