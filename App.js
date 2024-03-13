import { StyleSheet, Text, View } from "react-native";
import Txt1 from "./src/Components/Txt1Component";
import Txt2 from "./src/Components/Txt2Component";
import BtnComponent from "./src/Components/BtnComponent";
import Btn2Component from "./src/Components/Btn2Component";
import Btn3Component from "./src/Components/Btn3Component";
import ImgComponent from "./src/Components/ImgComponent";

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <BtnComponent>
        <Txt1 />
      </BtnComponent>

      <Btn2Component>
        <Txt2 />
      </Btn2Component>

      <Btn3Component>
        <ImgComponent />
      </Btn3Component>
    </View>
  );
}
