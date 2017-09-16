declare const process: { env: { [key: string]: string } }

declare module '*.svg' {
  const value: string
  export default value
}
