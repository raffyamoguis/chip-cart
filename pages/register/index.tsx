import Link from 'next/link';
import type { NextPage } from 'next';
import {
  Text,
  BackgroundImage,
  Space,
  Card,
  TextInput,
  PasswordInput,
  Center,
  Button,
  Group,
  Image,
  ActionIcon,
} from '@mantine/core';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';
import Layout from '../../components/Layout';
import Footer from '../../components/Footer';
import Logo from '../../public/chipcart-no-background.svg';

const Home: NextPage = () => {
  return (
    <Layout title='Register | ChipCart'>
      <>
        <BackgroundImage src='https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'>
          <Space h={200} />
          <Card
            padding='xl'
            sx={(theme) => ({
              width: 500,
              margin: 'auto',
              borderRadius: theme.radius.sm,
            })}
          >
            <Image src={Logo.src} maw={150} mx='auto' alt='Logo' />

            <Text mt='xl' fz='sm' ta='center'>
              Register using
            </Text>
            <Group position='center' spacing='xs'>
              <ActionIcon>
                <FcGoogle />
              </ActionIcon>
              <ActionIcon color='blue'>
                <BsFacebook />
              </ActionIcon>
            </Group>

            <TextInput
              mb='sm'
              label='Email'
              placeholder='Your email'
              withAsterisk
            />
            <PasswordInput mb='sm' label='Password' withAsterisk />
            <PasswordInput mb='sm' label='Confirm password' withAsterisk />
            <Center>
              <Button mt='md' color='dark'>
                Register
              </Button>
            </Center>

            <Text ta='center' fz='sm' mt='md'>
              Already have an account?{' '}
              <Text
                component={Link}
                href='/login'
                color='cyan'
                sx={{ cursor: 'pointer' }}
              >
                Login
              </Text>
            </Text>
          </Card>
          <Space h={200} />
        </BackgroundImage>
        <Footer />
      </>
    </Layout>
  );
};

export default Home;
