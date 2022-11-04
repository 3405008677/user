export function wrapperEnv(envConf: Recordable): ViteEnv {
  const ret: any = {};
  for (const envName of Object.keys(envConf)) {
    // 如果是boolean类型就转换
    realName = realName === "true" ? true : realName === "false" ? false : realName;
  }
}
