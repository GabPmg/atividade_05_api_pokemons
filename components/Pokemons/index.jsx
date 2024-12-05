import { Image, Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import axios from "axios";

const Pokemons = () => {
  const [pokemonData, setPokemonData] = useState({
    nome: "",
    number: 0,
    sprite: "",
  });

  const URL = "https://pokeapi.co/api/v2/pokemon/";
  const orderNumber = () => {
    return Math.floor(Math.random() * 1025);
  };

  const fetchData = () => {
    axios
      .get(`${URL}${orderNumber()}`)
      .then((response) => {
        setPokemonData({
          nome: response.data.name,
          number: response.data.id,
          sprite: response.data.sprites.front_default,
        });
      })
      .catch((err) => console.log(`Erro na requisição: ${err}`));
  };

  return (
    <View style={styles.container}>
      <Button
        title="Gerar Pokémon"
        onPress={fetchData}
        color="#ff6347"
        style={styles.button}
      />
      <View style={styles.display}>
        <View style={styles.containerInfos}>
          <Text style={styles.nomePokemon}>Nome: {pokemonData.nome}</Text>
          <Text style={styles.orderPokemon}>Número: {pokemonData.number}</Text>
          {pokemonData.sprite ? (
            <Image
              style={styles.spritePokemon}
              source={{ uri: pokemonData.sprite }}
            />
          ) : (
            <Text style={styles.text}>Pressione o botão para gerar.</Text>
          )}
        </View>
      </View>
    </View>
  );
};

export default Pokemons;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  button: {
    width: "80%",
    marginBottom: 30,
    borderRadius: 5,
  },
  display: {
    width: "80%",
    padding: 20,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", 
  },
  containerInfos: {
    alignItems: "center",
  },
  nomePokemon: {
    color: "#4caf50",
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  orderPokemon: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "300",
    marginBottom: 20,
  },
  spritePokemon: {
    width: 150,
    height: 150,
    borderRadius: 10, 
    marginTop: 20,
  },
  text: {
    textAlign: "center",
    fontSize: 16,
    color: "#666",
  },
});
