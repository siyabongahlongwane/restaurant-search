import { FlatList } from "react-native";
import { CategoryItem } from "./CategoryItem";

export default function Categories({categories, setTerm, term}){
    return (
        <FlatList
        data={categories}
        renderItem={({ item, index }) => {
          return (
            <CategoryItem name={item.name} source={item.source} index={index} active={item.name === term} handlePress={() => setTerm(item.name)}/>
          );
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(category) => category.name}
      />
    );
} 