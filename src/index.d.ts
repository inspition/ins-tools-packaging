declare namespace insToolsPackaging {
  export function random(min: number, max: number): number

  export function getValue(fn: () => any, defaultValue?: any): void

  export function chainAccess(result: AnyObject, path: string): void

  export function joinDebounce(): void

  export function genrateParallels(apis: Function[]): void

  export function $thenBack(res: AnyObject): void

  export function $catchBack(errPrefix: string): void

  export function $confirmReq(tip: string, thenBack: () => null): void

  export function apiReq(api: AxiosInstance): void

  export function $downloadFile(res: AnyObject): void

  export function itemFiledsMap(fieldsMap: AnyObject): void
}

declare module 'ins-tools-packaging' {
  export = insToolsPackaging
}

interface AnyObject {
  [key: string]: any
}

interface AxiosInstance {
  <T = any>(value: T): Promise<T>
}