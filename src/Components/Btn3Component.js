import { View, TouchableOpacity } from "react-native";

export default function Btn3Component({ children }) {
  return (
    <TouchableOpacity
      // função para aparecer a mensagem quando botão for pressionado
      onPress={() => {
        alert("Image Exit pressionado");
      }}
    >
      {children}
    </TouchableOpacity>
  );
}
