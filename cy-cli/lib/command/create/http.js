/* 模板获取相关请求 */
import ora from "ora"
import axios from 'axios'

// 请求拦截器
axios.interceptors.response.use(res => {
  return res.data;
})


// 获取模板列表
export async function getTemplateList() {
  // 下载动画
  const spinner = ora('waiting fetch template')
  spinner.start()

  return axios
      .get('https://api.github.com/repos/a1067111756/cy-scaffold/contents/template')
      .then(data => data.map(item => item.name))
      .catch(() => {
        spinner.fail('fetch template failed, please check your network!')
        return null
      })
}
