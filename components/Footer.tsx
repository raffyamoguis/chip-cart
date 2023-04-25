import React from 'react';
import { Box, Group, Stack, Text } from '@mantine/core';
import { useMediaPredicate } from 'react-media-hook';

const Footer = () => {
  const bigPhones = useMediaPredicate('(max-width: 600px)');

  function check() {
    return bigPhones ? 'center' : 'start';
  }
  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.colors.gray[7],
        paddingTop: bigPhones ? 20 : 100,
        paddingLeft: bigPhones ? 20 : 100,
        cursor: 'pointer',
      })}
    >
      <Group spacing={`${bigPhones ? 30 : 100}`} align='start'>
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

      <Text ta='center' color='white' mt={100}>
        © 2022 Allbirds, Inc. All Rights Reserved. Terms, Privacy &
        Accessibility
      </Text>
      <Text ta='center' color='white'>
        We do not sell any user data.
      </Text>
    </Box>
  );
};

export default Footer;
