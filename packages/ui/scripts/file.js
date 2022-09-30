import fs from 'fs'

/**
 * 删除文件/文件夹
 * @param {*} url
 */
export function remove(url) {
  // 读取原路径
  const STATUS = fs.statSync(url)
  // 如果原路径是文件
  if (STATUS.isFile()) {
    //删除原文件
    fs.unlinkSync(url)

    //如果原路径是目录
  } else if (STATUS.isDirectory()) {
    //如果原路径是非空目录,遍历原路径
    //空目录时无法使用forEach
    fs.readdirSync(url).forEach((item) => {
      //递归调用函数，以子文件路径为新参数
      remove(`${url}/${item}`)
    })
    //删除空文件夹
    fs.rmdirSync(url)
  }
}

/**
 * 定义移动函数(由复制函数与删除函数组成)
 * @param {*} originalUrl
 * @param {*} targetUrl
 */
export function move(originalUrl, targetUrl, isDelete = false) {
  //复制原路径中所有
  copy(originalUrl, targetUrl)
  //删除原路径中所有
  isDelete && remove(originalUrl)
}

/**
 * @param {*} originalUrl
 * @param {*} targetUrl
 */
export function copy(originalUrl, targetUrl) {
  try {
    // 读取原路径
    const STATUS = fs.statSync(originalUrl)
    // 获得原路径的末尾部分
    // 此部分亦可通过path模块中的basename()方法提取
    const fileName = originalUrl.split('/')[originalUrl.split('/').length - 1]
    // 如果原路径是文件
    if (STATUS.isFile()) {
      // 在新目录中创建同名文件，并将原文件内容追加到新文件中
      fs.writeFileSync(`${targetUrl}/${fileName}`, fs.readFileSync(originalUrl))

      //如果原路径是目录
    } else if (STATUS.isDirectory()) {
      if (!fs.existsSync(`${targetUrl}/${fileName}`)) {
        //在新路径中创建新文件夹
        fs.mkdirSync(`${targetUrl}/${fileName}`, { recursive: true })
      }
      //如果原路径是非空目录,遍历原路径
      //空目录时无法使用forEach
      fs.readdirSync(originalUrl).forEach((item) => {
        //更新参数，递归调用
        move(`${originalUrl}/${item}`, `${targetUrl}/${fileName}`)
      })
    }
  } catch (error) {
    console.log('路径' + '有误')
  }
}
