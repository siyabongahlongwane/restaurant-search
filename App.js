import { Text, View, StyleSheet, FlatList } from "react-native";
import React, { useState } from 'react';
import { StatusBar } from "expo-status-bar";
import { Header } from "./src/components/Header";
import { Search } from "./src/components/Search";
import { CategoryItem } from "./src/components/CategoryItem";
import Categories from "./src/components/Categories";


export default function App() {
  const commonCategories = [
    {
      name: "Burger",
      source: require("./src/assets/images/burger.png"),
    },
    {
      name: "Pizza",
      source: require("./src/assets/images/pizza.png"),
    },
    {
      name: "Dessert",
      source: require("./src/assets/images/cake.png"),
    },
    {
      name: "Drinks",
      source: require("./src/assets/images/smoothies.png"),
    },
    {
      name: "Steak",
      source: require("./src/assets/images/steak.png"),
    },
    {
      name: "Pasta",
      source: require("./src/assets/images/pasta.png"),
    },
  ];
const [term, setTerm] = useState("Burger");
  return (
    <View>
      <Header />
      <Search setTerm={setTerm}/>
      <Categories categories={commonCategories} setTerm={setTerm}  term={term}/>
      <StatusBar />
    </View>
  );
}


