import SimpleImageSlider from "react-simple-image-slider";
import { Box, Stack, Typography } from "@mui/material";
import { Slider, SliderTexts, useStyles } from "../styles/style";
import { useState } from "react";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

type Image = {
  url: string;
  text: string;
}

const images: Image[] = [
  { url: "./images/image1.svg",
    text: "Get birth control for your use and book your set for better exprencies, all fron the confort for you"
  },
  { url: "./images/image2.svg", 
    text: "Get birth control for your use 22"
  },
  { url: "./images/image3.svg",
    text: "Get birth control for your use 33"
  },
  { url: "./images/image4.svg",
    text: "Get birth control for your use 44"
  },
];

const SliderImage = (): JSX.Element => {
    const classes = useStyles();
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleSlideChange = (index: number): void => {
    setCurrentIndex(index);
  };

  return (
    <>
    <Slider>
      <SimpleImageSlider
        width={"100%"}
        height={286}
        images={images}
        showNavs={true}
        slideDuration={1}
        loop={true}
        autoPlay={true}
        showBullets={true}
      />
    </Slider>
    <SliderTexts >
        <Typography variant="h6" className={classes.Slidertext} >{images[currentIndex].text}</Typography>
        <ArrowRightAltIcon className={classes.Mainicon}/>
    </SliderTexts>

       </>
  );
}

export default SliderImage;
