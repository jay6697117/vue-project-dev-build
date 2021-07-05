/* 配置文件 index.js */
// 公共变量
const comDev = {
  IP: JSON.stringify('xxx-dev')
}

const comStage = {
  IP: JSON.stringify('xxx-stage')
}

const comProd = {
  IP: JSON.stringify('xxx-prod')
}

module.exports = {
  // 生产环境变量
  build: {
    env: {
      TYPE: JSON.stringify('prod'),
      // ...com
      ...comProd
    }
  },
  // 开发环境变量
  dev: {
    env: {
      TYPE: JSON.stringify('dev'),
      // ...com
      ...comDev
    }
  },

  // 开发环境变量
  stage: {
    env: {
      TYPE: JSON.stringify('stage'),
      // ...com
      ...comStage
    }
  }
}
