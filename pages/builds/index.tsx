import React from 'react'
import type { NextPage } from 'next';
import { Title } from '@mantine/core';
import Layout from '../../components/Layout';
import ImageBG from '../../components/ImageBG';

const Home:NextPage = () => {
  return (
    <Layout title='Builds | ChipCart'>
      <ImageBG imgsource='https://images.unsplash.com/photo-1593640495253-23196b27a87f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80' space={300}>
        <Title ta='center' color='white'>PC Builds</Title>
      </ImageBG>
    </Layout>
  )
}

export default Home;