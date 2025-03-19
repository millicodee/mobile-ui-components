import React from "react";
import { View, TouchableOpacity, ActivityIndicator } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants/base";
import AppText from "../text/Text";
import GradientWrapper from "../GradientWrapper";

const Button = ({
  label = "Placeholder",
  labelColor = COLORS.white,
  color = null,
  gradientColors = [COLORS.primary, COLORS.secondary],
  disabled = false,
  onPress = () => console.log("Not implemented yet!"),
  height = 42,
  size = SIZES.lg,
  icon = null,
  loading = false,
  outline = false,
  ...rest
}) => {
  const useGradient = !color && !outline;

  return (
    <View
      style={{
        height,
        width: "100%",
        borderRadius: 4,
        overflow: "hidden",
        opacity: disabled ? 0.7 : 1,
        borderWidth: outline ? 2 : 0,
        borderColor: outline ? color || gradientColors[0] : "transparent",
        backgroundColor: outline
          ? "transparent"
          : useGradient
          ? "transparent"
          : color,
        ...rest,
      }}>
      <TouchableOpacity
        disabled={disabled || loading}
        onPress={onPress}
        activeOpacity={0.8}
        style={{ width: "100%", height }}>
        {useGradient ? (
          <GradientWrapper
            gradientColors={[gradientColors[0], gradientColors[1]]}
            style={{
              width: "100%",
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              gap: 8,
            }}>
            <AppText
              text={label}
              color={labelColor}
              size={size}
              fontFamily={FONTS.semiBold}
            />
            {icon && !loading && icon}
            {loading && <ActivityIndicator size="small" color={labelColor} />}
          </GradientWrapper>
        ) : (
          <View
            style={{
              width: "100%",
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              gap: 8,
            }}>
            <AppText
              text={label}
              color={labelColor}
              size={size}
              fontFamily={FONTS.semiBold}
            />
            {icon && !loading && icon}
            {loading && <ActivityIndicator size="small" color={labelColor} />}
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Button;