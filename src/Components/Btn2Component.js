import { View, TouchableOpacity } from "react-native";

export default function Btn2Component({ children }) {
  return (
    <TouchableOpacity
      // função para aparecer a mensagem quando botão for pressionado
      onPress={() => {
        alert("Sign In pressionado");
      }}
    >
      {children}
    </TouchableOpacity>
  );
}
