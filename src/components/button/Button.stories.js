import React from "react";
import { View } from "react-native";
import Button from "./Button";
import { COLORS } from "../../constants/base";
import IC_SHARE from "../../assets/images/icons/ic_share.svg";

export default {
  title: "Components/Button",
  component: Button,
  args: {
    label: "Click Me",
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16, alignItems: "center" }}>
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

export const Loading = {
  args: {
    label: "Loading",
    loading: true,
  },
};

export const SolidColor = {
  args: {
    label: "Black Button",
    color: COLORS.black,
  },
};

export const Gradient = {
  args: {
    label: "Gradient",
    gradientColors: [COLORS.primary, COLORS.secondary],
  },
};

export const NovaSportGradient = {
  args: {
    label: "Nova Sport",
    gradientColors: [
      COLORS.nova_sport_gradient[0],
      COLORS.nova_sport_gradient[1],
    ],
  },
};

export const GrandGradient = {
  args: {
    label: "Grand",
    gradientColors: [
      COLORS.grand_gradient[0],
      COLORS.grand_gradient[1],
    ],
  },
};

export const Outline = {
  args: {
    label: "Outline",
    outline: true,
    labelColor: COLORS.black,
  },
};

export const WithIcon = {
  args: {
    label: "With Icon",
    icon: <IC_SHARE />,
  },
};

export const IconWithLoading = {
  args: {
    label: "Icon + Loading",
    icon: <IC_SHARE />,
    loading: true,
  },
};

export const SmallButton = {
  args: {
    label: "Small",
    height: 32,
  },
};

export const LargeLabel = {
  args: {
    label: "Larger Text",
    size: 20,
  },
};
