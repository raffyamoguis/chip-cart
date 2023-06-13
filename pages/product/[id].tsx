import React from "react";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
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
  Box,
} from "@mantine/core";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { ParsedUrlQuery } from "querystring";
import "react-photo-view/dist/react-photo-view.css";
import Layout from "../../components/Layout";
import Footer from "../../components/Footer";
import QuantityInput from "../../components/QuantityInput";
import { getDummyData } from "../../util/data";

const productImages = [
  {
    src: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  },
  {
    src: "https://images.unsplash.com/photo-1591799265444-d66432b91588?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  },
  {
    src: "https://images.unsplash.com/photo-1590858078095-24c472408dfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    src: "https://images.unsplash.com/photo-1585143042060-77fd3b53905a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
];

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export async function getStaticPaths() {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
}

export async function getStaticProps({ params }: any) {
  console.log(params.id);
  const message = getDummyData();
  return {
    props: {
      message,
    },
  };
}

const Product: NextPage<{ message: string }> = ({ message }) => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout title={`ChipCart | ${id}`}>
      <>
        <Container size="xl">
          <Group mt="xl" align="start">
            <PhotoProvider>
              <SimpleGrid cols={2} spacing={8}>
                {productImages.map((product, index) => (
                  <PhotoView key={index} src={product.src}>
                    <Image
                      src={product.src}
                      fit="fill"
                      width={400}
                      height={300}
                      alt="Product Images"
                    />
                  </PhotoView>
                ))}
              </SimpleGrid>
            </PhotoProvider>
            <Stack spacing={4}>
              <Title>AMD Ryzen 9 | {message}</Title>
              <Text fw={500}>$900 - $1200</Text>

              <Text>Select Variant:</Text>
              <Flex gap={5}>
                <Button variant="default" color="gray" radius="xs">
                  IGPU
                </Button>
                <Button variant="default" color="gray" radius="xs">
                  RDNA
                </Button>
              </Flex>

              <Text>Quantity:</Text>
              <QuantityInput />

              {/*  */}
              <Group spacing={5} mt={20}>
                <Button radius="xs" color="red">
                  Checkout
                </Button>
                <Button radius="xs" color="dark">
                  Buy now
                </Button>
              </Group>

              <Group>
                <Text fz={40}>4.5</Text>
                <Rating value={4.5} fractions={3} />
              </Group>
            </Stack>
          </Group>

          <Accordion defaultValue="details" mt="lg" mb={60}>
            <Accordion.Item value="details">
              <Accordion.Control>Details</Accordion.Control>
              <Accordion.Panel>
                <Text>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Velit delectus consequatur doloremque corrupti optio totam eos
                  nulla hic ut, sequi odit voluptates voluptatibus blanditiis
                  dicta quos deserunt voluptate reiciendis quam!
                </Text>
                <Text mt="xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur, dolorem repellat vero maiores fugit
                  reprehenderit reiciendis amet laboriosam laudantium illum
                  voluptatem officiis, sint recusandae. Ab nulla et odio
                  reprehenderit exercitationem, aspernatur animi architecto
                  nostrum? Vero eveniet ex at magni aut, corrupti, odit
                  doloremque doloribus, accusantium quisquam saepe odio? Quia
                  rerum sequi sapiente assumenda eius, odio hic error ipsum
                  illum maxime?
                </Text>
                <Text mt="xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur, dolorem repellat vero maiores fugit
                  reprehenderit reiciendis amet laboriosam laudantium illum
                  voluptatem officiis, sint recusandae. Ab nulla et odio
                  reprehenderit exercitationem, aspernatur animi architecto
                  nostrum? Vero eveniet ex at magni aut, corrupti, odit
                  doloremque doloribus, accusantium quisquam saepe odio? Quia
                  rerum sequi sapiente assumenda eius, odio hic error ipsum
                  illum maxime?
                </Text>
                <Text mt="xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident tempore veritatis at qui nesciunt consequatur
                  laboriosam, maiores quia unde vel rem blanditiis quaerat velit
                  ex porro? Tempora excepturi autem ut deserunt aliquid sed, vel
                  alias nulla unde error dignissimos sapiente quaerat quibusdam
                  quo iure? Quibusdam maiores et tempore repellendus magnam
                  atque ducimus eius corporis at. Beatae, repellendus ad! Iste
                  temporibus veniam, voluptate modi debitis harum, error in
                  quibusdam quasi, nulla consequuntur facere nesciunt aperiam
                  magni labore a? Animi voluptatum fugiat illo vero cupiditate
                  assumenda recusandae. Sunt similique tenetur cupiditate aut
                  harum ea placeat exercitationem, illo adipisci vitae eius
                  officiis? Veritatis.
                </Text>
                <Text mt="xs">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Velit delectus consequatur doloremque corrupti optio totam eos
                  nulla hic ut, sequi odit voluptates voluptatibus blanditiis
                  dicta quos deserunt voluptate reiciendis quam!
                </Text>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="review">
              <Accordion.Control>Reviews</Accordion.Control>
              <Accordion.Panel>
                <Box
                  sx={(theme) => ({
                    backgroundColor: theme.colors.yellow[0],
                    textAlign: "center",
                    padding: theme.spacing.xl,
                    cursor: "pointer",
                  })}
                >
                  <Stack spacing={5} align="center">
                    <Text fz={40}>
                      4.5{" "}
                      <Text component="span" fz="lg">
                        out of 5
                      </Text>
                    </Text>
                    <Rating value={4.5} fractions={5} size="md" />
                  </Stack>
                </Box>
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
