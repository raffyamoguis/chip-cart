import React from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import {
  Group,
  SimpleGrid,
  Title,
  Image,
  Container,
  Stack,
  Text,
  Button,
  Flex,
  Accordion,
  Rating,
} from '@mantine/core';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import Layout from '../../components/Layout';
import Footer from '../../components/Footer';
import QuantityInput from '../../components/QuantityInput';

const productImages = [
  {
    src: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
  },
  {
    src: 'https://images.unsplash.com/photo-1591799265444-d66432b91588?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
  },
  {
    src: 'https://images.unsplash.com/photo-1590858078095-24c472408dfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
  {
    src: 'https://images.unsplash.com/photo-1585143042060-77fd3b53905a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
  },
];

const Product: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout title={`ChipCart | ${id}`}>
      <>
        <Container size='xl'>
          <Group mt='xl' align='start'>
            <PhotoProvider>
              <SimpleGrid cols={2} spacing={8}>
                {productImages.map((product, index) => (
                  <PhotoView key={index} src={product.src}>
                    <Image
                      src={product.src}
                      fit='fill'
                      width={400}
                      height={300}
                      alt='Product Images'
                    />
                  </PhotoView>
                ))}
              </SimpleGrid>
            </PhotoProvider>
            <Stack spacing={4}>
              <Title>AMD Ryzen 9</Title>
              <Text fw={500}>$900 - $1200</Text>

              <Text>Select Variant:</Text>
              <Flex gap={5}>
                <Button variant='default' color='gray' radius='xs'>
                  IGPU
                </Button>
                <Button variant='default' color='gray' radius='xs'>
                  RDNA
                </Button>
              </Flex>

              <Text>Quantity:</Text>
              <QuantityInput />

              {/*  */}
              <Group spacing={5} mt={20}>
                <Button radius='xs' color='red'>
                  Checkout
                </Button>
                <Button radius='xs' color='dark'>
                  Buy now
                </Button>
              </Group>

              <Group>
                <Text fz={40}>4.5</Text>
                <Rating value={4.5} fractions={3} />
              </Group>
            </Stack>
          </Group>

          <Accordion defaultValue='details' mt='lg' mb={60}>
            <Accordion.Item value='details'>
              <Accordion.Control>Details</Accordion.Control>
              <Accordion.Panel>
                Colors, fonts, shadows and many other parts are customizable to
                fit your design needs
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value='review'>
              <Accordion.Control>Reviews</Accordion.Control>
              <Accordion.Panel>
                Configure components appearance and behavior with vast amount of
                settings or overwrite any part of component styles
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value='focus-ring'>
              <Accordion.Control>No annoying focus ring</Accordion.Control>
              <Accordion.Panel>
                With new :focus-visible pseudo-class focus ring appears only
                when user navigates with keyboard
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </Container>
        <Footer />
      </>
    </Layout>
  );
};

export default Product;
