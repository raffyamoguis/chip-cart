import React from 'react';
import Link from 'next/link';
import { useDisclosure } from '@mantine/hooks';
import {
  Group,
  Text,
  Flex,
  ActionIcon,
  MediaQuery,
  Burger,
  Image,
} from '@mantine/core';
import { RiShoppingCartLine } from 'react-icons/ri';
import Logo from '../public/chipcart-no-background.svg';

const Navbar = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const label = opened ? 'Close navigation' : 'Open navigation';
  return (
    <>
      <MediaQuery largerThan='sm' styles={{ display: 'none' }}>
        <Group sx={{ height: '100%' }} px={20} position='apart'>
          <Burger
            size='md'
            opened={opened}
            onClick={toggle}
            aria-label={label}
          />
          <Link href='/'>
            <Text fw={700}>Chip Cart</Text>
          </Link>
          <ActionIcon size='lg' variant='transparent' color='dark'>
            <RiShoppingCartLine size={25} />
          </ActionIcon>
        </Group>
      </MediaQuery>
      <MediaQuery smallerThan='sm' styles={{ display: 'none' }}>
        <Group sx={{ height: '100%' }} px={100} position='apart'>
          <Link href='/'>
            <Image src={Logo.src} maw={100} height={60} alt='Logo' />
          </Link>
          <Flex
            gap='md'
            justify='flex-start'
            align='flex-start'
            direction='row'
            sx={{ cursor: 'default' }}
          >
            <Text fw={500} fz='lg'>
              Builds
            </Text>
            <Text fw={500} fz='lg'>
              Parts
            </Text>
            <Text fw={500} fz='lg'>
              ShoppingCart
            </Text>
            <Text fw={500} fz='lg'>
              Profile
            </Text>
          </Flex>
        </Group>
      </MediaQuery>
    </>
  );
};

export default Navbar;
