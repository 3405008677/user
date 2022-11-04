export function wrapperEnv(envConf: Recordable): ViteEnv {
  const ret: any = {};
  for (const envName of Object.keys(envConf)) {
    let realName = envConf[envName].replace(/\\n/g, "\n");
    // 如果是boolean类型就转换
    realName = realName === "true" ? true : realName === "false" ? false : realName;
  }
}
