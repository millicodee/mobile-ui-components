import React from "react";
import { TextInput, HelperText } from "react-native-paper";
import { COLORS, FONTS, SIZES } from "../../constants/base";

const Input = ({
  label = "",
  value = "",
  handleTextInput,
  secureTextEntry = false,
  keyboardType = "default",
  autoCapitalize = "none",
  rest = {},
  right = null,
  error = "",
  info = "",
  infoColor = COLORS.text_light,
  errorColor = "red",
  iconName = null,
  iconClick = () => console.log("Not implemented yet"),
  maxLength,
  infoRest,
  backgroundColor = backgroundColor ? backgroundColor : COLORS.input_bg,
  labelColor,
}) => {
  return (
    <>
      <TextInput
        theme={{
          colors: {
            onSurfaceVariant: labelColor ? labelColor : COLORS.text_light,
            error: COLORS.errorRed,
          },
        }}
        onChangeText={handleTextInput}
        label={label}
        value={value}
        error={!!error}
        secureTextEntry={secureTextEntry}
        underlineColor={"transparent"}
        underlineStyle={{ width: 0 }}
        autoComplete={"off"}
        autoCorrect={false}
        activeUnderlineColor={COLORS.text_light}
        textColor={COLORS.text_light}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        contentStyle={{ fontFamily: FONTS.semiBold }}
        maxLength={maxLength}
        right={
          iconName ? (
            <TextInput.Icon onPress={iconClick} icon={iconName} />
          ) : null
        }
        style={{
          ...rest,
          borderRadius: 12,
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
          width: "100%",
          backgroundColor: backgroundColor,
          color: COLORS.errorRed,
          ...SIZES.sm,
        }}
      />
      {error ? (
        <HelperText
          type={"error"}
          visible={!!error}
          style={{ color: errorColor }}>
          {error}
        </HelperText>
      ) : (
        <HelperText
          type={"info"}
          visible={!!info}
          style={{ color: infoColor, ...infoRest }}>
          {info}
        </HelperText>
      )}
    </>
  );
};

export default Input;
