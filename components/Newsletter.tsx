import React from 'react';
import { Box, Title, Text, Group, TextInput, Button } from '@mantine/core';

interface Props {
  title: string;
  text: string;
}

const Newsletter: React.FC<Props> = ({ title, text }) => {
  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.colors.gray[0],
        textAlign: 'center',
        padding: theme.spacing.xl,
        marginTop: theme.spacing.lg,
        cursor: 'pointer',
      })}
    >
      <Title mt='xl'>{title}</Title>
      <Text mt='md'>{text}</Text>
      <Group position='center' align='center' spacing={10} mt='xl'>
        <TextInput variant='filled' radius='xs' size='md' sx={{ width: 500 }} />
        <Button color='dark' size='md' radius='xs'>
          Subscribe
        </Button>
      </Group>
      <Text mt='md' c='dimmed' fz='sm'>
        Note: You can opt-out at any time.
      </Text>
    </Box>
  );
};

export default Newsletter;
