import React from "react";
import { Card, Image, Badge, Text, Group, Divider } from "@mantine/core";

interface Props {
  name: string;
  badgeText?: string;
  imagesource: string;
  text?: string;
  price: string;
  centeredPrice?: boolean;
  withBorder?: boolean;
}

const AppCard: React.FC<Props> = ({
  name,
  badgeText = "",
  imagesource,
  text = "",
  price,
  centeredPrice = false,
  withBorder = true,
}) => {
  return (
    <Card shadow="sm" padding="lg" withBorder={withBorder}>
      <Card.Section>
        <Image src={imagesource} height={160} alt={name} />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{name}</Text>
        {badgeText !== "" ? (
          <Badge color="pink" variant="light">
            On Sale
          </Badge>
        ) : null}
      </Group>

      {text !== "" ? (
        <Text size="sm" color="dimmed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
          assumenda.
        </Text>
      ) : null}

      <Divider my="sm" />
      <Text weight={500} ta={`${centeredPrice ? "center" : "left"}`}>
        {price}
      </Text>
    </Card>
  );
};

export default AppCard;
