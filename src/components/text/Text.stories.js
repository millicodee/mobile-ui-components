import React from "react";
import { View } from "react-native";
import Text from "./Text";
import { COLORS, FONTS } from "../../constants/base";

export default {
  title: "Components/Text",
  component: Text,
  args: {
    text: "Default Text",
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

export const CustomColor = {
  args: {
    text: "Custom Color",
    color: COLORS.primary,
  },
};

export const CustomFontSize = {
  args: {
    text: "Large Text",
    fontSize: 24,
  },
};

export const BoldFont = {
  args: {
    text: "Bold Text",
    fontFamily: FONTS.bold,
  },
};

export const WithMarginLeft = {
  args: {
    text: "Indented Text",
    marginLeft: 20,
  },
};

export const MultilineText = {
  args: {
    text: "This is a very long text that should wrap to multiple lines to demonstrate how multiline text works in Storybook.",
    numberOfLines: 5,
  },
};

export const NestedText = {
  args: {
    text: "Parent Text",
    children: <Text text=" - Child Text" color={COLORS.secondary} />,
  },
};
