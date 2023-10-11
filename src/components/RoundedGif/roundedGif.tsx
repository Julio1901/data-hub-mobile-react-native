import { View, Image } from "react-native";
import { FLAnimatedImageProps } from "react-native-gif/dist/typedefs";


const RoundedGif = (props: FLAnimatedImageProps) => {
  return (
    <View
      style={{
        width: 200,
        height: 150,
        borderRadius: 100, 
        overflow: "hidden",
      }}
    >
      <Image
        source={props.source}
        style={{ width: 200, height: 200 }}
        resizeMode={props.resizeMode || "cover"}
      />
    </View>
  );
};

export default RoundedGif;