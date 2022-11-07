import type {
  ComponentRenderProxy,
  VNode,
  VNodeChild,
  ComponentPublicInstance,
  FunctionalComponent,
  PropType as VuePropType,
} from "vue";

// vue
// export {};
declare global {
  declare type Recordable<T = any> = Record<string, T>;

  // env list o(╥﹏╥)o
  declare interface ViteEnv {
    VITE_PORT: number;
    VITE_PROXY: [string, string][];
    VITE_PUBLIC_PATH: string;
    VITE_DROP_CONSOLE: boolean;
  }
}

declare module "vue" {
  export type JSXComponent<Props = any> =
    | { new (): ComponentPublicInstance<Props> }
    | FunctionalComponent<Props>;
}
