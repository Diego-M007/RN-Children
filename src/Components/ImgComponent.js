import { Image } from "react-native";

export default function ImgComponent() {
  const Img = {
    uri: "https://cdn.icon-icons.com/icons2/2367/PNG/512/exit_icon_143601.png",
  };

  return (
    <Image
      source={Img}
      style={{ width: 80, height: 80, resizeMode: "cover" }}
    ></Image>
  );
}
