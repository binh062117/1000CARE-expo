import React from "react";
import Colors from "../../common/Colors/Colors";
import {
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Text,
  ActivityIndicator,
  View
} from "react-native";
import { BG_btn } from "../../assets/constants";

const Buttons = props => {
  const {text, onPressEvent, styleView, styleButton, styleText } = props;
  return (
    <View style={[styles.container,styleView]}>
      <TouchableOpacity
        style={[styles.btn_container,styleButton]}
        onPress={onPressEvent}
      >
          <Text style={[styles.text,styleText]}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btn_container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    paddingHorizontal:25,
    backgroundColor: Colors.colorMain,
    borderRadius: 5
  },
  container: {
    alignItems: 'center',
    marginTop: 10
  },
  loading: { position: "absolute", left: 20 },
  text: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center"
  }
});

export default Buttons;
