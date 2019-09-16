import Typography from "typography"
import fairyGatesTheme from "typography-theme-fairy-gates"

fairyGatesTheme.overrideThemeStyles = ({ rhythm }, options) => ({
    'a': {
      textShadow: null,
      backgroundImage: null,
    }
  
  })

fairyGatesTheme.baseFontSize = "18px";

const typography = new Typography(fairyGatesTheme)



export default typography
