const darkTheme = `
  --Blue50: #BDBDBD;
  --100: #9E9E9E;
  --300: #757575;
  --600: #616161;
`;

const setStyleTheme = (styles) => {
  document.documentElement.style.cssText = styles;
};

export { darkTheme, setStyleTheme };
