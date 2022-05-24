import { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { elevation } from '../common/styles';

export function Search({setTerm}){
    // Set state for the input
    const [input, setInput]= useState("");

    //  Check if input field isn't empty
    const handleEndEditing = () => {
        if(!input) return;
        setTerm(input);
        setInput("");
    }
    return (
        <View style={[styles.container, styles.elevation]}>
            <FontAwesome name="search" size={25} />
            {/* Value used two way binding */}
            <TextInput value={input} style={styles.input} placeholder="Restaurants, food" onChangeText={(text)=> {
                setInput(text)
            }} onEndEditing={handleEndEditing } />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 15,
        marginHorizontal: 25,
        backgroundColor: '#fff',
    },
    input: {
        marginLeft: 10,
        fontSize: 20
    },
    elevation
})