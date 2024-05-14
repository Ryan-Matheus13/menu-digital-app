import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import Constants from "expo-constants";
import SearchInput from "../components/SearchInput";
import Categorys from "../components/Categorys";
import { useAppSelector } from "../store/hooks/useAppSelector";
import { useAppDispatch } from "../store/hooks/useAppDispatch";

import { handleSetCategorys, handleSetProducts } from "../store/root/actions";
import Header from "../components/Header";
import Products from "../components/Products";

const windowHeight = Dimensions.get("window").height;
const navbarHeight = windowHeight - (windowHeight + Constants.statusBarHeight);

export default function Home({ navigation }) {
  const [search, setSearch] = useState("");

  const dispatch = useAppDispatch();
  const rootStore = useAppSelector((store) => store.root);

  useEffect(() => {
    handleLoadCategorys();
    handleLoadProducts();
  }, []);

  const handleLoadCategorys = () => {
    dispatch(
      handleSetCategorys([
        {
          id: 0,
          name: "Todos",
          image: "all.png",
          active: true,
        },
        {
          id: 1,
          name: "Tradicionais",
          image: "tradictionals.png",
          active: false,
        },
        {
          id: 2,
          name: "Hots",
          image: "hots.png",
          active: false,
        },
        {
          id: 3,
          name: "Temakis",
          image: "temakis.png",
          active: false,
        },
        {
          id: 4,
          name: "Bebidas",
          image: "drinks.png",
          active: false,
        },
      ])
    );
  };

  const handleLoadProducts = () => {
    dispatch(
      handleSetProducts([
        {
          id: 0,
          name: "Hossomaki de salmao",
          image: "sushi1.jpeg",
          price: 24.0,
          rating: 4.5,
          quantityRating: 40,
          time: "25 min",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          adictionals: [
            {
              id: 0,
              name: "Shoyo",
              image: "adictional1.png",
              active: true,
              price: 0.0,
            },
            {
              id: 1,
              name: "Salada",
              image: "adictional2.png",
              active: false,
              price: 0.0,
            },
            {
              id: 2,
              name: "Hashi",
              image: "adictional3.png",
              active: false,
              price: 0.0,
            },
          ],
        },
        {
          id: 1,
          name: "Hossomaki de kani",
          image: "sushi2.jpeg",
          price: 24.0,
          rating: 4.5,
          quantityRating: 40,
          time: "25 min",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          adictionals: [
            {
              id: 0,
              name: "Shoyo",
              image: "adictional1.png",
              active: true,
              price: 0.0,
            },
            {
              id: 1,
              name: "Salada",
              image: "adictional2.png",
              active: false,
              price: 0.0,
            },
            {
              id: 2,
              name: "Hashi",
              image: "adictional3.png",
              active: false,
              price: 0.0,
            },
          ],
        },
        {
          id: 2,
          name: "Uramaki de salmao",
          image: "sushi3.jpeg",
          price: 24.0,
          rating: 4.5,
          quantityRating: 40,
          time: "25 min",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          adictionals: [
            {
              id: 0,
              name: "Shoyo",
              image: "adictional1.png",
              active: true,
              price: 0.0,
            },
            {
              id: 1,
              name: "Salada",
              image: "adictional2.png",
              active: false,
              price: 0.0,
            },
            {
              id: 2,
              name: "Hashi",
              image: "adictional3.png",
              active: false,
              price: 0.0,
            },
          ],
        },
        {
          id: 3,
          name: "Uramaki de atum",
          image: "sushi4.jpeg",
          price: 24.0,
          rating: 4.5,
          quantityRating: 40,
          time: "25 min",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          adictionals: [
            {
              id: 0,
              name: "Shoyo",
              image: "adictional1.png",
              active: true,
              price: 0.0,
            },
            {
              id: 1,
              name: "Salada",
              image: "adictional2.png",
              active: false,
              price: 0.0,
            },
            {
              id: 2,
              name: "Hashi",
              image: "adictional3.png",
              active: false,
              price: 0.0,
            },
          ],
        },
        {
          id: 4,
          name: "Sashimi de salmao",
          image: "sushi5.jpeg",
          price: 24.0,
          rating: 4.5,
          quantityRating: 40,
          time: "25 min",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          adictionals: [
            {
              id: 0,
              name: "Shoyo",
              image: "adictional1.png",
              active: true,
              price: 0.0,
            },
            {
              id: 1,
              name: "Salada",
              image: "adictional2.png",
              active: false,
              price: 0.0,
            },
            {
              id: 2,
              name: "Hashi",
              image: "adictional3.png",
              active: false,
              price: 0.0,
            },
          ],
        },
        {
          id: 5,
          name: "Sashimi de atum",
          image: "sushi6.jpeg",
          price: 24.0,
          rating: 4.5,
          quantityRating: 40,
          time: "25 min",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          adictionals: [
            {
              id: 0,
              name: "Shoyo",
              image: "adictional1.png",
              active: true,
              price: 0.0,
            },
            {
              id: 1,
              name: "Salada",
              image: "adictional2.png",
              active: false,
              price: 0.0,
            },
            {
              id: 2,
              name: "Hashi",
              image: "adictional3.png",
              active: false,
              price: 0.0,
            },
          ],
        },
        {
          id: 6,
          name: "Sashimi de tilápia ",
          image: "sushi7.jpeg",
          price: 24.0,
          rating: 4.5,
          quantityRating: 40,
          time: "25 min",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          adictionals: [
            {
              id: 0,
              name: "Shoyo",
              image: "adictional1.png",
              active: true,
              price: 0.0,
            },
            {
              id: 1,
              name: "Salada",
              image: "adictional2.png",
              active: false,
              price: 0.0,
            },
            {
              id: 2,
              name: "Hashi",
              image: "adictional3.png",
              active: false,
              price: 0.0,
            },
          ],
        },
        {
          id: 7,
          name: "Niguiri de salmao",
          image: "sushi8.jpeg",
          price: 24.0,
          rating: 4.5,
          quantityRating: 40,
          time: "25 min",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          adictionals: [
            {
              id: 0,
              name: "Shoyo",
              image: "adictional1.png",
              active: true,
              price: 0.0,
            },
            {
              id: 1,
              name: "Salada",
              image: "adictional2.png",
              active: false,
              price: 0.0,
            },
            {
              id: 2,
              name: "Hashi",
              image: "adictional3.png",
              active: false,
              price: 0.0,
            },
          ],
        },
        {
          id: 8,
          name: "Niguiri de atum",
          image: "sushi9.jpeg",
          price: 24.0,
          rating: 4.5,
          quantityRating: 40,
          time: "25 min",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          adictionals: [
            {
              id: 0,
              name: "Shoyo",
              image: "adictional1.png",
              active: true,
              price: 0.0,
            },
            {
              id: 1,
              name: "Salada",
              image: "adictional2.png",
              active: false,
              price: 0.0,
            },
            {
              id: 2,
              name: "Hashi",
              image: "adictional3.png",
              active: false,
              price: 0.0,
            },
          ],
        },
        {
          id: 9,
          name: "Gunkan de salmao",
          image: "sushi10.jpeg",
          price: 24.0,
          rating: 4.5,
          quantityRating: 40,
          time: "25 min",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          adictionals: [
            {
              id: 0,
              name: "Shoyo",
              image: "adictional1.png",
              active: true,
              price: 0.0,
            },
            {
              id: 1,
              name: "Salada",
              image: "adictional2.png",
              active: false,
              price: 0.0,
            },
            {
              id: 2,
              name: "Hashi",
              image: "adictional3.png",
              active: false,
              price: 0.0,
            },
          ],
        },
      ])
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView
        style={styles.content}
        contentContainerStyle={{ gap: 20, padding: 20 }}
      >
        <Header mode={"home"} navigation={navigation} />
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionTitle}>
            Bem vindo ao cardápio online
          </Text>
          <Text style={styles.description}>
            Escolha sua refeição favorita e APROVEITE
          </Text>
        </View>
        <SearchInput
          type={"default"}
          placeholder={"Buscar refeição"}
          onChange={(value) => setSearch(value)}
        />
        <Categorys categorys={rootStore.categorys} />
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionTitle}>Peça já</Text>
          <Text style={styles.description}>
            20% de desconto no primeiro pedido
          </Text>
        </View>
        <Products navigation={navigation} products={rootStore.products} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  loading: {
    maxWidth: 80,
    maxHeight: 80,
  },
  loadingContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  loadingLayer: {
    position: "absolute",
    backgroundColor: "#555",
    opacity: 0.3,
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  },
  content: {
    width: "100%",
    marginTop: Constants.statusBarHeight + 10,
    marginBottom: navbarHeight + 70,
  },
  descriptionContainer: {
    paddingVertical: 10,
  },
  descriptionTitle: {
    fontFamily: "Poppins-Medium",
    fontSize: 18,
    color: "#555",
  },
  description: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    color: "#555",
  },
});
