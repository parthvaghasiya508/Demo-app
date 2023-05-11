import { useState, useEffect } from "react";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Data } from "../../db";
import { Box } from "@mui/material";
import { ActionItem, GetData, Heading, MainHeading, Slider, StyledDiv } from "../styles/style";
import SliderImage from "./Slider";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@mui/material/Typography';
import { useStyles } from "../styles/style";

interface Product {
  id: number;
  title: string;
  price: number;
}


const AppData = () => {
  const classes = useStyles();

  let userData = Data;
  return (
    <Box className={classes.mainBox}>
      <MainHeading>
        <Typography variant="h5">Hi[Kyle!]</Typography>
      </MainHeading>

      {Data?.Kyle?.map((product) => (
         <StyledDiv  key={product.id}>
         <Stack direction="row" spacing={2} alignItems="center">
           <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
           <Box>
            <Typography className={classes.headingFontsize}>{product.heading}</Typography>
            <Typography className={classes.paragrapgFontsize}>{product.text}</Typography>
           </Box>
         </Stack>
         <ArrowRightAltIcon className={classes.Mainicon} />
       </StyledDiv>
      ))}

      <Heading>
        <Typography variant="h5">Action Item</Typography>
      </Heading>

      {Data?.ActionData?.map((product) => (
      <ActionItem key={product.id}>
       <Stack direction="row" spacing={2} alignItems="center">
           <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
           <Box>
            <Typography  sx={{fontWeight:"bold", fontSize: '16px'}} className={classes.headingFontsize}>{product.heading}</Typography>
            <Typography   sx={{ fontSize: '14px'}} className={classes.paragrapgFontsize}>{product.text}</Typography>
           </Box>
         </Stack>
         <ArrowRightAltIcon className={classes.icon} />
      </ActionItem>
      ))}

     
      <Heading>
        <Typography variant="h5">Get the care you need</Typography>
      </Heading>


        
      {Data?.getData?.map((product) => (
      <GetData key={product.id}>
        <Stack direction="row" spacing={2} alignItems="center">
           <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
           <Box>
            <Typography sx={{fontWeight:"bold", fontSize: '16px'}} className={classes.headingFontsize} >{product.heading}</Typography>
            <Typography   sx={{ fontSize: '14px'}} className={classes.paragrapgFontsize}>{product.text}</Typography>
           </Box>
         </Stack>
        <ArrowRightAltIcon className={classes.icon} />
      </GetData>
      ))}

    
      <Heading>
        <Typography variant="h5">Explore out offerings</Typography>
      </Heading>

      <Slider>
        <SliderImage />
      </Slider>
    


    </Box>
  );
};

export default AppData;




