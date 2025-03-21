import React from "react";
import { View } from "react-native";
import Input from "./Input";
import { COLORS } from "../../constants/base";

export default {
  title: "Components/Input",
  component: Input,
  args: {
    label: "Enter Text",
    value: "",
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
};

export const Default = {};

export const WithPlaceholder = {
  args: {
    label: "Email Address",
    keyboardType: "email-address",
  },
};

export const WithErrorMessage = {
  args: {
    label: "Password",
    value: "123",
    error: "Password must be at least 6 characters",
    secureTextEntry: true,
  },
};

export const WithHelperText = {
  args: {
    label: "Username",
    info: "Choose a unique username",
  },
};

export const SecureTextEntry = {
  args: {
    label: "Password",
    secureTextEntry: true,
  },
};

export const WithCustomBackground = {
  args: {
    label: "Custom Background",
    backgroundColor: COLORS.primary,
  },
};
