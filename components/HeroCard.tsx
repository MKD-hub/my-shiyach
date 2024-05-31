import { Image, Text, View } from "react-native";

const HeroCard = () => {
    return (
        <View className="px-4 pb-[26px] pt-[24px] flex-1 flex-row gap-1 bg-blue-400 rounded-xl bg-gradient-to-l from-[#7b78c6] to-[#6b46ff] max-w-[300px] overflow-hidden">
            <View className="flex flex-col gap-2 w-3/5">
                <Text className="text-white text-xs">
                    ELECTRONIC DAY
                </Text>
                <Text className="text-lg font-bold text-white">
                    GET YOUR DREAM DEVICE
                </Text>
                <Text className="text-lg text-white font-bold">
                    40% OFF
                </Text>
            </View>
            <Image source={require('../assets/images/sample-laptop.png')} className="max-w-[110px]" />
        </View>
    )
}

export default HeroCard;