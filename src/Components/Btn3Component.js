import { View, TouchableOpacity } from "react-native";

export default function Btn3Component({ children }) {
  return (
    <TouchableOpacity
      onPress={() => {
        alert("Image Exit pressionado");
      }}
    >
      {children}
    </TouchableOpacity>
  );
}
