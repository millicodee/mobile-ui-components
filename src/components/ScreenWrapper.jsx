import React from "react";
import {
  StyleSheet,
  Keyboard,
  StatusBar,
  View,
  TouchableOpacity,
} from "react-native";

const ScreenWrapper = ({ children }) => {
  return (
    <View style={styles.container}>
      <StatusBar animated={true} />
      <TouchableOpacity
        onPress={() => Keyboard.dismiss()}
        style={{ flex: 1 }}
        activeOpacity={1}>
        <View style={styles.container}>{children}</View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ScreenWrapper;
