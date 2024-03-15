import { View } from "react-native";
import Txt1 from "./src/Components/Txt1Component";
import Txt2 from "./src/Components/Txt2Component";
import BtnComponent from "./src/Components/BtnComponent";
import Btn2Component from "./src/Components/Btn2Component";
import Btn3Component from "./src/Components/Btn3Component";
import ImgComponent from "./src/Components/ImgComponent";
import ImgBack from "./src/Components/ImgBackComponent";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ImgBack>
        {/* Componente pai 1 */}
        <BtnComponent>
          {/* Componente filho 1 Log In */}
          <Txt1 />
        </BtnComponent>
        {/* Componente pai 2 */}
        <Btn2Component>
          {/* Componente filho 2 Sign In */}
          <Txt2 />
        </Btn2Component>
        {/* Componente pai 3 */}
        <Btn3Component>
          {/* Componente filho 3 imagem de exit  */}
          <ImgComponent />
        </Btn3Component>
      </ImgBack>
    </View>
  );
}
