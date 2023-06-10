import { useRef } from 'react';
import type { NextPage } from 'next';
import Autoplay from 'embla-carousel-autoplay';
import {
  BackgroundImage,
  Title,
  Group,
  Button,
  Space,
  Container,
  SimpleGrid,
} from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import Layout from '../components/Layout';
import AppCard from '../components/card/AppCard';
import Info from '../components/Info';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import ImageBG from '../components/ImageBG';

const Home: NextPage = () => {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  return (
    <Layout title='Chip Cart - Home'>
        <ImageBG imgsource='https://images.unsplash.com/photo-1593640495253-23196b27a87f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80' 
            space={300}>
          <Title ta='center' color='white'>
              Looking to build your own gaming PC?
            </Title>
          <Group position='center' mt='md'>
            <Button variant='white' color='dark' size='md' radius='xs'>
              PC BUILDS
            </Button>
            <Button variant='white' color='dark' size='md' radius='xs'>
              PC PARTS
            </Button>
          </Group>
        </ImageBG>

        <Info message='Or you want to build your own? We can help you build your dream pc.' />

        <Title ta='center' mt='lg' mb='md'>
          Our Top PC Builds
        </Title>
        <Container size='lg'>
          <SimpleGrid
            cols={3}
            breakpoints={[
              { maxWidth: '62rem', cols: 3, spacing: 'md' },
              { maxWidth: '48rem', cols: 2, spacing: 'sm' },
              { maxWidth: '36rem', cols: 1, spacing: 'sm' },
            ]}
          >
            <AppCard
              name='Alienware'
              badgeText='On sale'
              imagesource='https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1442&q=80'
              text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
              assumenda.'
              price='$4500'
            />
            <AppCard
              name='$1000 PC Build'
              badgeText='On sale'
              imagesource='https://images.unsplash.com/photo-1578091879915-33ee869e2cd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2004&q=80'
              text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
              assumenda.'
              price='$1000'
            />
            <AppCard
              name='Alienware'
              badgeText='On sale'
              imagesource='https://images.unsplash.com/photo-1552831388-6a0b3575b32a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80'
              text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            assumenda.'
              price='$2000'
            />
          </SimpleGrid>
        </Container>

        <ImageBG mt={100} imgsource='https://images.unsplash.com/photo-1621364525332-f9c381f3bfe8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80' space={150}>
          <Title ta='center' color='white'>
            Level up your gaming experience.
          </Title>
        </ImageBG>

        <Container size='lg'>
          <Title ta='start' mt='xl' mb='md'>
            New Arrival
          </Title>

          <Carousel
            slideSize='33.333333%'
            slideGap='md'
            loop
            align='start'
            plugins={[autoplay.current]}
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={autoplay.current.reset}
            breakpoints={[
              { maxWidth: 'md', slideSize: '50%' },
              { maxWidth: 'sm', slideSize: '100%', slideGap: 0 },
            ]}
            slidesToScroll={3}
          >
            <Carousel.Slide>
              <AppCard
                name='RTX 3090'
                imagesource='https://images.unsplash.com/photo-1629672530716-f76299742b8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
                price='$4500'
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <AppCard
                name='MSI Katana Gaming Laptop'
                imagesource='https://images.unsplash.com/photo-1623040522601-18ef4bf3ddc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
                price='$1200'
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <AppCard
                name='Asus Rog'
                imagesource='https://images.unsplash.com/photo-1617294864705-eaf3c911259f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
                price='$2000'
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <AppCard
                name='$1000 PC Build'
                imagesource='https://images.unsplash.com/photo-1578091879915-33ee869e2cd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2004&q=80'
                price='$1000'
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <AppCard
                name='Alienware'
                imagesource='https://images.unsplash.com/photo-1552831388-6a0b3575b32a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80'
                price='$2000'
              />
            </Carousel.Slide>
          </Carousel>
        </Container>

        <Newsletter
          title='Subscribe to our newsletter.'
          text='Join our email list and be the first to know about new limited edition products, material innovations, and lots of other fun updates.'
        />

        <Footer />
      
    </Layout>
  );
};

export default Home;
