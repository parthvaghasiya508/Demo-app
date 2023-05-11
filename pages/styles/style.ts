import styled from "@emotion/styled";
import { makeStyles } from '@material-ui/core/styles';

export const StyledDiv = styled('div')({
    marginTop: '10px',
    color: 'white',
    width: '100%',
    maxWidth: '568px',
    display: 'flex',
    backgroundColor: '#00210B',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '14px 24px',
    borderRadius: '10px',
  });


  export const ActionItem = styled('div')({
    marginTop: '10px',
    color: '#1B1B1B',
    width: '100%',
    maxWidth: '568px',
    display: 'flex',
    backgroundColor: '#FFEAE3',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '14px 24px',
    borderRadius: '10px'
    
  });
  
  export const GetData = styled('div')({
    marginTop: '10px',
    color: '#1B1B1B',
    width: '100%',
    maxWidth: '568px',
    display: 'flex',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '14px 24px',
    borderRadius: '16px',
    border: "1px solid #ccc"
  });

  export const Slider = styled('div')({
    maxWidth: '568px',
    width:"100%",
    overflow: 'hidden',
    position: 'relative',
  });
  
  export const SliderTexts = styled('div')({
    display: 'flex',
    width: '100%',
    height: '100px',
    color: '#ffffff',
    backgroundColor: '#00210B',
    textAlign: 'center',
    marginBottom: '20px',
    alignItems: 'center',
    justifyContent: 'space-between',
    
  });
  
  export const Heading = styled('div')({
    marginTop: '80px',
    marginBottom: '20px'
    
  });

  export const MainHeading = styled('div')({
    marginTop: '40px',
  });

  export const Navbar = styled('div')({
    backgroundColor: '#ffffff',
    color: 'black',
    padding: '32px 56px'
  });


 export const useStyles = makeStyles((theme) => ({
    navbar: {
        backgroundColor: '#ffffff',
        color: 'black'
    },
    iconButton: {
      '&:hover': {
        backgroundColor: 'transparent',
      },
      '&:hover > span > svg': {
        color: theme.palette.primary.main,
      },
    },
    icon: {
      color: 'black',
    },
    Navicon: {
        color: 'black',
      },
    Slidertext: {
        backgroundColor: '#00210B',
        color: '#FFFFFF',
        width: '100%'
    },
    mainBox: {
        padding: '10px',
    }, 
    headingFontsize: {
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'Inter',
        fontStyle: 'normal',
    },
    paragrapgFontsize: {
        fontSize: '14px',
        marginTop: '5px',
        fontFamily: 'Inter',
        fontStyle: 'normal',
    },
    mainDiv: {
        display: 'flex',
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    Mainicon: {
        color: '#ffffff',
      },

  }));