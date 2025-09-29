import { Text, View, Image } from "react-native";
import { images } from "@/constants/images";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      className="flex-1 bg-primary"
    >
      <Image source={images.bg} className="absolute w-full z-0"/>
      
    </View>
  );
}
