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
  const cleanPath = path.replace(/^\/+/, '')

  if (path.startsWith(cleanBase)) {
    return path
  }

  return `${cleanBase}${cleanPath}`
}