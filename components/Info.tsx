import React from 'react';
import { Box } from '@mantine/core';

interface Props {
  message: string;
  spacing?: number;
  color?: string;
}

const Info: React.FC<Props> = ({ message, spacing = 1, color = 'dark' }) => {
  return (
    <Box
      sx={(theme) => ({
        backgroundColor:
          color === 'dark' ? theme.colors.dark[7] : theme.colors.orange[3],
        textAlign: 'center',
        padding: spacing === 1 ? theme.spacing.md : 0,
        cursor: 'pointer',
        color: theme.colors.gray[0],
      })}
    >
      {message}
    </Box>
  );
};

export default Info;
