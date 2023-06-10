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
} from "@mantine/core";
import Layout from "../../components/Layout";
import ImageBG from "../../components/ImageBG";

const Home: NextPage = () => {
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

      <Container mt={100} size="xl">
        <Group position="apart">
          <Flex gap="md">
            <Select
              placeholder="Category"
              variant="unstyled"
              data={[
                { value: "react", label: "React" },
                { value: "ng", label: "Angular" },
                { value: "svelte", label: "Svelte" },
                { value: "vue", label: "Vue" },
              ]}
            />
            <Select
              placeholder="Rating"
              variant="unstyled"
              data={[
                { value: "react", label: "React" },
                { value: "ng", label: "Angular" },
                { value: "svelte", label: "Svelte" },
                { value: "vue", label: "Vue" },
              ]}
            />
          </Flex>
          <Text>600+ PC Builds</Text>
        </Group>
        <Divider my="sm" />
      </Container>
    </Layout>
  );
};

export default Home;
