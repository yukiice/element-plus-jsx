import type { Ref, Plugin } from 'vue'

export type Fn<T = any> = (...args: any[]) => T
export type FnAble<T> = T | ((...args: any[]) => T)
export type ArrayAble<T> = T | T[]
export type RefAble<T> = Ref<T> | T
export type FnRefAble<T> = T | Ref<T> | ((...args: any[]) => T)
export type LooseRequired<T> = { [P in keyof T & Required<T>]: T[P] }
export type LooseValueOf<T> = T extends ArrayAble<infer U> ? U : T
export type Options = {
  prefix?: string
  tablePlugins?: any[]
}
export type WithInstall<T> = T & Plugin
