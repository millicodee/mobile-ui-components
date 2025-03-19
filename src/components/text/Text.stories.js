import React from "react";
import { storiesOf } from "@storybook/react-native";
import { View } from "react-native";
import Text from "../components/Text";
import { COLORS, FONTS } from "../constants/base";

storiesOf("Text", module)
  .addDecorator((story) => <View style={{ padding: 16 }}>{story()}</View>)
  .add("Default", () => <Text text="Default Text" />)
  .add("Custom Color", () => (
    <Text text="Custom Color" color={COLORS.primary} />
  ))
  .add("Custom Font Size", () => (
    <Text text="Large Text" fontSize={24} />
  ))
  .add("Bold Font", () => (
    <Text text="Bold Text" fontFamily={FONTS.bold} />
  ))
  .add("With Margin Left", () => (
    <Text text="Indented Text" marginLeft={20} />
  ))
  .add("Multiline Text", () => (
    <Text
      text="This is a very long text that should wrap to multiple lines to demonstrate how multiline text works in Storybook."
      numberOfLines={5}
    />
  ))
  .add("Nested Text", () => (
    <Text text="Parent Text">
      <Text text=" - Child Text" color={COLORS.secondary} />
    </Text>
  ));
