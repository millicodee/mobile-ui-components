import React from "react";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { View } from "react-native";
import Input from "./Input";
import { COLORS } from "../../constants/base";

storiesOf("Input", module)
  .addDecorator((story) => <View style={{ padding: 16 }}>{story()}</View>)
  .add("Default", () => (
    <Input
      label="Enter Text"
      value=""
      handleTextInput={action("text-input")}
    />
  ))
  .add("With Placeholder", () => (
    <Input
      label="Email Address"
      value=""
      handleTextInput={action("text-input")}
      keyboardType="email-address"
    />
  ))
  .add("With Error Message", () => (
    <Input
      label="Password"
      value="123"
      error="Password must be at least 6 characters"
      handleTextInput={action("text-input")}
      secureTextEntry
    />
  ))
  .add("With Helper Text", () => (
    <Input
      label="Username"
      value=""
      info="Choose a unique username"
      handleTextInput={action("text-input")}
    />
  ))
  .add("Secure Text Entry (Password)", () => (
    <Input
      label="Password"
      value=""
      handleTextInput={action("text-input")}
      secureTextEntry
    />
  ))
  .add("With Icon", () => (
    <Input
      label="Search"
      value=""
      handleTextInput={action("text-input")}
      iconName="magnify"
      iconClick={action("icon-clicked")}
    />
  ))
  .add("With Custom Background", () => (
    <Input
      label="Custom Background"
      value=""
      handleTextInput={action("text-input")}
      backgroundColor={COLORS.primary}
    />
  ));
