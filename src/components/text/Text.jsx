import React from "react";
import { Text as RNText } from "react-native";
import { COLORS, FONTS } from "../../constants/base";

const Text = ({
  text = "",
  style = {},
  color = COLORS.text_dark,
  fontFamily = FONTS.regular,
  fontSize = 14,
  marginLeft = 0,
  children,
  childrenStyle = {},
  size,
  numberOfLines,
}) => {
  return (
    <RNText
      ellipsizeMode={"tail"}
      numberOfLines={numberOfLines ? numberOfLines : 1000}
      allowFontScaling={false}
      style={{
        fontFamily,
        color: color.includes("#") ? color : COLORS[color], // Hex or Color name from COLORS palette
        fontSize,
        marginLeft,
        ...size,
        ...style,
      }}>
      {text}
      {children && <Text style={childrenStyle}>{children}</Text>}
    </RNText>
  );
};

export default Text;
