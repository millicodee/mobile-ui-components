import React from "react";
import { View } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import Button from "./Button";
import { COLORS } from "../constants/base";

storiesOf("Button", module)
  .addDecorator((story) => <View style={{ padding: 16 }}>{story()}</View>)
  .add("Default", () => (
    <Button label="Click Me" onPress={action("button-clicked")} />
  ))
  .add("Disabled", () => (
    <Button label="Disabled" disabled onPress={action("button-disabled")} />
  ))
  .add("With Custom Color", () => (
    <Button label="Custom Color" color={COLORS.success} />
  ))
  .add("With Gradient Colors", () => (
    <Button
      label="Gradient"
      gradientColors={[COLORS.primary, COLORS.secondary]}
    />
  ))
  .add("With Icon", () => (
    <Button
      label="With Icon"
      icon={<View style={{ width: 10, height: 10, backgroundColor: "white" }} />}
    />
  ))
  .add("Loading State", () => <Button label="Loading" loading />);
