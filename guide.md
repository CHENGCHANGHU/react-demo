React Demo 项目文件夹
# 1、配置环境
   - npm init -y：初始化文件夹
   - npm install create-react-app --save：安装create-react-app
   - npm install antd-mobile --save：安装antd移动端（https://mobile.ant.design/docs/react/use-with-create-react-app-cn）
   - npm install --save styled-components：安装样式库
   - npm install json-server --save：安装mock数据服务器
      > 添加mock脚本：`"mock-server": "json-server ./src/mock/mock.js -r ./src/mock/mockRouter.js -p 9000 --watch"`（npm run mock-server运行mock数据服务器）  
      > 修改代理：`D:\react\react-demo-project\mobile-takeaway-app\node_modules\react-scripts\config\webpackDevServer.config.js`中的proxy为：
      ```js
      proxy:{
         "/api":{
            target:"http://localhost:9000",
            changeOrigin:true,
            "pathRewrite":{
               "^/api":"/"
            }
         }
      },
      ```
   - npm install --save redux react-redux redux-saga：配置redux
   - 