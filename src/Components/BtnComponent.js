import { View, TouchableOpacity } from "react-native";

export default function BtnComponent({ children }) {
  return (
    <TouchableOpacity
      // função para aparecer a mensagem quando a imagem for pressionada
      onPress={() => {
        alert("Log In pressionado");
      }}
    >
      {children}
    </TouchableOpacity>
  );
}
