/* 模板获取相关请求 */
import ora from "ora"
import path from 'path'
import axios from 'axios'
import fs from 'fs-extra'
import compressing from 'compressing'
import { pathConfig } from '../../config.js'

// 请求拦截器
axios.interceptors.response.use(res => {
  return res.data;
})

// 获取模板列表
export async function getTemplateList() {
  // 下载动画
  const spinner = ora({ text: 'waiting for fetch template list...', color: 'blue' })
  spinner.start()

  return axios
      .get('https://api.github.com/repos/a1067111756/cyu-scaffold/contents/template')
      .then(data => data.map(item => item.name))
      .catch(() => {
        spinner.fail('fetch template failed, please check your network!')
        return null
      })
      .finally(() => spinner.stop())
}

// 下载模板文件
export async function downloadTemplate(templateName) {
    // 下载动画
    const spinner = ora({ text: 'waiting for download template...', color: 'blue' })
    spinner.start()

    // 下载模板文件
    return axios({
        url: 'https://api.github.com/repos/a1067111756/cyu-scaffold/zipball/main',
        method: 'GET',
        responseType: 'stream'
    })
    // 解压压缩包
    .then(resStream => {
        fs.emptyDirSync(pathConfig.dTemplatePath)
        return compressing.zip.uncompress(resStream, pathConfig.dTemplatePath)
    })
    // 处理模板文件
    .then(() => {
        // 读取一级目录
        const oneLevelDirPath = pathConfig.dTemplatePath
        const oneLevelFileList = fs.readdirSync(oneLevelDirPath)

        // 读取二级目录
        const twoLevelDirPath = path.join(pathConfig.dTemplatePath, oneLevelFileList[0])
        const twoLevelFileList = fs.readdirSync(twoLevelDirPath)
        if (!twoLevelFileList.includes('template')) {
            return Promise.reject('not find template')
        }

        // 读取三级目录
        const threeLevelDirPath = path.join(twoLevelDirPath, 'template')
        const threeLevelFileList = fs.readdirSync(threeLevelDirPath)
        if (!threeLevelFileList.includes(templateName)) {
            return Promise.reject('not find template')
        }

        // 复制文件
        const sourcePath = path.join(threeLevelDirPath, templateName)
        fs.copySync(sourcePath, pathConfig.basePath)

        // 移除下载目录
        fs.removeSync(pathConfig.dTemplatePath)
        return pathConfig.basePath
    })
    .catch(e => {
        spinner.fail('download template failed, please check your network!')
        return null
    })
    .finally(() => spinner.stop())
}
