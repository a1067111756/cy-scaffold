/* 项目创建命令相关 */
import path from 'path'
import fs from 'fs-extra'
import inquirer from 'inquirer'
import Generator from './generator.js'

export const create = async function (name, options) {
  // 判断目录是否存在
  const cwd  = process.cwd()
  const targetDir = path.join(cwd, name)
  const isExist = await fs.exists(targetDir)

  // 存在, 询问用户是否删除？
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
      console.log('已移除目录')
      await fs.remove(targetDir)
    }
  }

  // 创建项目
  const generator = new Generator(name, targetDir);
  await generator.create()
}

