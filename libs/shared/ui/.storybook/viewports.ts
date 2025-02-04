export const viewports = {
  sm: 480,
  md: 768,
  lg: 992,
  xl: 1280,
  '2xl': 1536
}

export const breakpoints = {
  sm: `(min-width: ${viewports.sm}px)`,
  md: `(min-width: ${viewports.md}px)`,
  lg: `(min-width: ${viewports.lg}px)`,
  xl: `(min-width: ${viewports.xl}px)`,
  '2xl': `(min-width: ${viewports['2xl']}px)`
}
