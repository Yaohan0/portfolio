export const base = import.meta.env.BASE_URL

export const withBase = (path?: string) => {
  if (!path) return ''

  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('mailto:') ||
    path.startsWith('tel:') ||
    path.startsWith('#')
  ) {
    return path
  }

  const cleanBase = base.endsWith('/') ? base : `${base}/`
  const normalizedPath = path.replace(/^\/portfolio(?=\/|$)/, '')
  const cleanPath = normalizedPath.replace(/^\/+/, '')

  if (normalizedPath.startsWith(cleanBase)) {
    return normalizedPath
  }

  return `${cleanBase}${cleanPath}`
}
