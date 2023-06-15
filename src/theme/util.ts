export function applyTheme(theme: any) {
    const root = document.documentElement;
    Object.keys(theme).forEach((cssVar) => {
      root.style.setProperty(cssVar, theme[cssVar]);
    });
  }

  export function createTheme({
    primary,
    primaryLight,
    secondary,
    secondaryLight,
    textBase,
  }: any) {
    return {
      "--theme-primary": primary,
      "--theme-primary-light": primaryLight,
      "--theme-secondary": secondary,
      "--theme-secondary-light": secondaryLight,
      "--theme-text-base": textBase,
    };
  }