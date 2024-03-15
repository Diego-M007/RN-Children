import { Image } from "react-native";

export default function ImgComponent() {
  // criando a const da uri da imagem
  const Img = {
    uri: "https://cdn.icon-icons.com/icons2/2367/PNG/512/exit_icon_143601.png",
  };

  return (
    <Image
      // adicionando a const da uri da imagem no source
      source={Img}
      //   estilizando imagem com tamanho
      style={{ width: 80, height: 80, tintColor: "white" }}
    ></Image>
  );
}
