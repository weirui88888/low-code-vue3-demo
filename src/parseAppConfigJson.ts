const shouldParseUrlKeys = ['headerImageUrl', 'backImageUrl']

export const parseAppConfig = (config: Record<string, any>) => {
  const appConfig = { ...config }
  for (const key in appConfig) {
    if (shouldParseUrlKeys.includes(key)) {
      appConfig[key] = `url(${appConfig[key]})`
    }
  }
  return appConfig
}
