import HeroCard from "@/components/HeroCard"
import { ScrollView, StyleSheet } from "react-native";

const HomePage = () => {
  return (
    <ScrollView horizontal contentContainerStyle={styles.horizontalContent} showsHorizontalScrollIndicator={false}>
      <HeroCard />
      <HeroCard />
      <HeroCard />

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  horizontalContent: {
    // flex: 1,
    flexGrow: 1,
    gap: 24,
    padding: 12,
    // flexBasis: 100,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

export default HomePage;
