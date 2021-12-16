/* cy create <app-name> 命令action */
import path from 'path'
import fs from 'fs-extra'
import chalk from 'chalk'
import inquirer from 'inquirer'
import { pathConfig } from '../../config.js'
import { getTemplateList, downloadTemplate } from './http.js'

export default async function (name, options) {
  if (!options.copy) {
    console.log(chalk.red('create 命令暂时只支持--copy选项'))
    return
  }

  // 初始化基础路径
  pathConfig.basePath = path.join(process.cwd(), name)
  pathConfig.dTemplatePath = path.join(pathConfig.basePath, 'dist')
  const isExist = await fs.exists(pathConfig.basePath)

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
      fs.emptyDirSync(pathConfig.basePath)
    }
  }

  // 拉取代码模板列表
  const templateList = await getTemplateList()
  if (!templateList) {
    return
  }

  // 询问用户选择模板
  const { template } = await inquirer.prompt({
    name: 'template',
    type: 'list',
    choices: templateList,
    message: 'Please choose a template to create project'
  })

  // 下载模板
  const templateRes = await downloadTemplate(template)
  if (!templateRes) {
    return
  }

  // 成功提示
  console.log(`${chalk.green('Successfully')} created project ${chalk.cyan(name)}`)
  console.log(`  cd ${chalk.cyan(name)}`)
  console.log('  yarn install')
  console.log('  yarn run dev\r\n')
}


