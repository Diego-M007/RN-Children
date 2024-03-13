import { View, TouchableOpacity } from "react-native";

export default function Btn2Component({ children }) {
  return (
    <TouchableOpacity
      onPress={() => {
        alert("Sign In pressionado");
      }}
    >
      {children}
    </TouchableOpacity>
  );
}
