import React from 'react';
import { Box, Group, Stack, Text, MediaQuery } from '@mantine/core';

const Footer = () => {
  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.colors.gray[7],
        padding: theme.spacing.xl,
        cursor: 'pointer',
      })}
    >
      <MediaQuery largerThan='sm' styles={{ display: 'none' }}>
        <Group spacing={50} align='start' position='center' mt='xl'>
          <Stack spacing={1} sx={(theme) => ({ color: theme.colors.gray[0] })}>
            <Text fz='sm'>1-888-963-8944</Text>
            <Text fz='sm'>1-814-251-9966 (Text)</Text>
            <Text fz='sm'>help@gmail.com</Text>
            <Text fz='sm'>FAQ/Contact Us</Text>
            <Text fz='sm'>Afterpay</Text>
          </Stack>
          <Stack spacing={1} sx={(theme) => ({ color: theme.colors.gray[0] })}>
            <Text fz='sm'>Enter Code</Text>
            <Text fz='sm'>Refer a friend</Text>
            <Text fz='sm'>Gift Cards</Text>
          </Stack>
          <Stack spacing={1} sx={(theme) => ({ color: theme.colors.gray[0] })}>
            <Text fz='sm'>Our Stores</Text>
            <Text fz='sm'>Our Story</Text>
            <Text fz='sm'>Investors</Text>
            <Text fz='sm'>Partnership</Text>
            <Text fz='sm'>Affliates</Text>
            <Text fz='sm'>Careers</Text>
          </Stack>
        </Group>
      </MediaQuery>

      <MediaQuery smallerThan='sm' styles={{ display: 'none' }}>
        <Group spacing={200} align='start' position='center' mt='xl'>
          <Stack spacing={1} sx={(theme) => ({ color: theme.colors.gray[0] })}>
            <Text fz='sm'>1-888-963-8944</Text>
            <Text fz='sm'>1-814-251-9966 (Text)</Text>
            <Text fz='sm'>help@gmail.com</Text>
            <Text fz='sm'>FAQ/Contact Us</Text>
            <Text fz='sm'>Afterpay</Text>
          </Stack>
          <Stack spacing={1} sx={(theme) => ({ color: theme.colors.gray[0] })}>
            <Text fz='sm'>Enter Code</Text>
            <Text fz='sm'>Refer a friend</Text>
            <Text fz='sm'>Gift Cards</Text>
          </Stack>
          <Stack spacing={1} sx={(theme) => ({ color: theme.colors.gray[0] })}>
            <Text fz='sm'>Our Stores</Text>
            <Text fz='sm'>Our Story</Text>
            <Text fz='sm'>Investors</Text>
            <Text fz='sm'>Partnership</Text>
            <Text fz='sm'>Affliates</Text>
            <Text fz='sm'>Careers</Text>
          </Stack>
        </Group>
      </MediaQuery>

      <Text ta='center' fz='sm' color='white' mt={50}>
        © 2022 M5, Inc. All Rights Reserved.
      </Text>
      <Text ta='center' fz='sm' color='white'>
        We do not sell any user data.
      </Text>
    </Box>
  );
};

export default Footer;
