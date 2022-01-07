/* 库对外的声明文件 */
declare function sum (a: number, b: number): void

declare module "ts-lib" {
  export = sum
}
