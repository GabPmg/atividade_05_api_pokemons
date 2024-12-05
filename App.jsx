import { ImageBackground, StyleSheet, Text, View } from "react-native";
import Pokemons from "./components/Pokemons";

export default function App() {
  return (
    <ImageBackground
      source={{ uri: 'https://i.redd.it/k9qljzis5d6b1.gif' }}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.titulo}>Gerar Pokemon Aleatório</Text>
        <Pokemons />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover', 
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    borderRadius: 20,
    marginHorizontal: 20,
    padding: 30,
  },
  titulo: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#fff', 
    marginBottom: 20,
    textAlign: 'center',
    textShadowColor: '#000', 
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
});