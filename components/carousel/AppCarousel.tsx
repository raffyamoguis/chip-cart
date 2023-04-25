import React from 'react';
import { Carousel } from '@mantine/carousel';

interface Props {
  slides: JSX.Element;
}

const AppCarousel: React.FC<Props> = ({ slides }) => {
  return (
    <Carousel
      slideSize='33.333333%'
      slideGap='md'
      loop
      align='start'
      breakpoints={[
        { maxWidth: 'md', slideSize: '50%' },
        { maxWidth: 'sm', slideSize: '100%', slideGap: 0 },
      ]}
      slidesToScroll={3}
    >
      <Carousel.Slide>{slides}</Carousel.Slide>
    </Carousel>
  );
};

export default AppCarousel;
