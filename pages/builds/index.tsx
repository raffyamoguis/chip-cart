import React from "react";
import type { NextPage } from "next";
import {
  Title,
  Group,
  Flex,
  Text,
  Container,
  Select,
  Divider,
  SimpleGrid,
} from "@mantine/core";
// Components
import Layout from "../../components/Layout";
import ImageBG from "../../components/ImageBG";
import AppCard from "../../components/card/AppCard";
import Info from "../../components/Info";
// Lib
import { getBuildData } from "../../lib/builds";
import Footer from "../../components/Footer";

const Home: NextPage = () => {
  const buildData = getBuildData();
  return (
    <Layout title="Builds | ChipCart">
      <ImageBG
        imgsource="https://images.unsplash.com/photo-1624705002806-5d72df19c3ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
        space={300}
      >
        <Title ta="center" color="white" fw={500}>
          PC Builds
        </Title>
      </ImageBG>

      <Info message="Try our own PC Builds tailored on customer's budget and preferences." />

      <Container mt={100} size="xl">
        <Group position="apart">
          <Flex gap="md">
            <Select
              placeholder="Category"
              variant="unstyled"
              data={[
                { value: "react", label: "Budget Build" },
                { value: "ng", label: "Mid-range Build" },
                { value: "svelte", label: "Flagship Build" },
              ]}
            />
            <Select
              placeholder="Rating"
              variant="unstyled"
              data={[
                { value: "react", label: "Reviews" },
                { value: "ng", label: "Recommendation" },
                { value: "svelte", label: "Price" },
              ]}
            />
          </Flex>
          <Text>600+ PC Builds</Text>
        </Group>

        <Divider my="sm" />

        <SimpleGrid cols={4} mb={100}>
          {buildData.map((item, index) => (
            <AppCard
              key={index}
              name={item.name}
              badgeText={item.badge}
              imagesource={item.image.src}
              text={item.text}
              price={item.price}
              centeredPrice
              withBorder={false}
            />
          ))}
        </SimpleGrid>
      </Container>

      <Footer />
    </Layout>
  );
};

export default Home;
