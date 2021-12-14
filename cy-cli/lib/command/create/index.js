/* cy create <app-name> 命令action */
import path from 'path'
import fs from 'fs-extra'
import inquirer from 'inquirer'
import { getTemplateList } from './http.js'
import ora from "ora";

export default async function (name, options) {
  // 判断目录是否存在
  const cwd  = process.cwd()
  const targetDir = path.join(cwd, name)
  const isExist = await fs.exists(targetDir)

  // 存在, 询问用户是否进行覆盖？
  if (isExist) {
    let { action } = await inquirer.prompt([
      {
        name: 'action',
        type: 'list',
        message: 'Target directory already exists Pick a action',
        choices: [
          {
            name: 'Overwrite',
            value: 'overwrite'
          },
          {
            name: 'Cancel',
            value: 'cancel'
          }
        ]
      }
    ])

    if (action === 'cancel') {
      console.log('welcome to use again!')
      return
    }

    if (action === 'overwrite') {
      await fs.remove(targetDir)
    }
  }

  // 创建项目
  // const generator = new Generator(name, targetDir);
  // await generator.create()


  // 拉取代码模板列表
  const templateList = await getTemplateList()
  if (!templateList) {
    return
  }

  // 询问用户选择模板
  console.log('请选择模板')

  // 下载模板
}


// 拉取模板列表
// async function getRepo () {
//   // 1）从远程拉取模板数据
//   const repoList = await wrapLoading(getRepoList, 'waiting fetch template');
//   if (!repoList) return;
//
//   // 过滤我们需要的模板名称
//   const repos = repoList.map(item => item.name);
//
//   // 2）用户选择自己新下载的模板名称
//   const { repo } = await inquirer.prompt({
//     name: 'repo',
//     type: 'list',
//     choices: repos,
//     message: 'Please choose a template to create project'
//   })
//
//   // 3）return 用户选择的名称
//   return repo;
// }

