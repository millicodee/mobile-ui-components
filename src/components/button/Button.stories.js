import React from "react";
import { View } from "react-native";
import Button from "./Button";
import { COLORS } from "../../constants/base";

export default {
  title: "Components/Button",
  component: Button,
  args: {
    label: "Click Me",
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

export const Disabled = {
  args: {
    label: "Disabled",
    disabled: true,
  },
};

export const WithCustomColor = {
  args: {
    label: "Custom Color",
    color: COLORS.success,
  },
};

export const WithGradientColors = {
  args: {
    label: "Gradient",
    gradientColors: [COLORS.primary, COLORS.secondary],
  },
};

export const WithIcon = {
  args: {
    label: "With Icon",
    icon: <View style={{ width: 10, height: 10, backgroundColor: "white" }} />,
  },
};

export const LoadingState = {
  args: {
    label: "Loading",
    loading: true,
  },
};
