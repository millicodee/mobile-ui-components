import React from "react";
import LinearGradient from "react-native-linear-gradient";
import { COLORS } from "../constants/base";

const GradientWrapper = ({
  children,
  gradientColors = [COLORS.novars_gradient[0], COLORS.novars_gradient[1]],
  style = {},
}) => {
  return (
    <LinearGradient
      colors={gradientColors}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={style}>
      {children}
    </LinearGradient>
  );
};

export default GradientWrapper;
