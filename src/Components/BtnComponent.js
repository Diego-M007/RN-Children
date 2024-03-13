import { View, TouchableOpacity } from "react-native";

export default function BtnComponent({ children }) {
  return (
    <TouchableOpacity
      onPress={() => {
        alert("Log In pressionado");
      }}
    >
      {children}
    </TouchableOpacity>
  );
}
