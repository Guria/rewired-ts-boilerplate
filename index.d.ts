declare const process: { env: { [key: string]: string } }

declare module '*.css' {
  const value: string
  export default value
}

declare module '*.svg' {
  const value: string
  export default value
}
