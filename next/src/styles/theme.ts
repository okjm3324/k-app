import { red } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#6c79a5',
    },
    secondary: {
      main: '#ed9f9f',
    },
    error: {
      main: red.A400,
    },
  },
})

export default theme