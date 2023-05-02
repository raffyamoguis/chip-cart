import { useState, useRef } from 'react';
import {
  NumberInput,
  Group,
  ActionIcon,
  NumberInputHandlers,
  rem,
} from '@mantine/core';

const QuantityInput = () => {
  const [value, setValue] = useState<number | ''>(0);
  const handlers = useRef<NumberInputHandlers>();
  return (
    <Group spacing={5}>
      <ActionIcon
        variant='default'
        radius='xs'
        onClick={() => handlers.current?.decrement()}
      >
        –
      </ActionIcon>

      <NumberInput
        hideControls
        radius='xs'
        value={value}
        onChange={(val) => setValue(val)}
        handlersRef={handlers}
        max={10}
        min={0}
        step={1}
        styles={{ input: { width: rem(54), textAlign: 'center' } }}
      />

      <ActionIcon
        variant='default'
        radius='xs'
        onClick={() => handlers.current?.increment()}
      >
        +
      </ActionIcon>
    </Group>
  );
};

export default QuantityInput;
