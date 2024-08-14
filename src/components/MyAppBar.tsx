import { AppBar, TitlePortal } from "react-admin"
import { CurrentOffer } from "./CurrentOffer"
import { Box } from '@mui/material';

export const MyAppBar: React.FC = () => {
  return (
    <AppBar color="primary">
      <TitlePortal/>      
      <Box> <CurrentOffer/></Box>
      <Box component="span" flex={1}/>
    </AppBar>
  )
}
