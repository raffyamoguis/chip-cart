import React from 'react';
import { Group, Text, Flex, ActionIcon } from '@mantine/core';
import { IconShoppingCart } from '@tabler/icons-react';

const Navbar = () => {
  return (
    <Group sx={{ height: '100%' }} px={100} position='apart'>
      <Text fw={700} fz='xl'>
        E-commerce
      </Text>
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
  );
};

export default Navbar;
