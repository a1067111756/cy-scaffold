#! /usr/bin/env node
import program from 'commander'
import { create } from '../lib/create.js'

program
  // 定义命令和参数
  .command('create <app-name>')
  .description('create a new project')
  // -f or --force 为强制创建，如果创建的目录存在则直接覆盖
  .option('-f, --force', 'overwrite target directory if it exist')
  .action((name, options) => {
    create(name, options)
  })

program
  // 配置版本号信息
  .version(`v0.0.1`)
  // 配置帮助信息命令使用描述
  .usage('<command> [option]')

// 解析用户执行命令传入参数
program.parse(process.argv);

