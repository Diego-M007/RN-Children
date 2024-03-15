import { ImageBackground } from "react-native";
import react from "react";

export default function ImgBack({ children }) {
  const ImgBackGround = {
    uri: "https://wallpapercave.com/wp/rtgOtlJ.jpg",
  };

  return (
    <ImageBackground
      style={{
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
      }}
      source={ImgBackGround}
    >
      {children}
    </ImageBackground>
  );
}
