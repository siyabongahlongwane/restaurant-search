import { Text,View, StyleSheet } from "react-native";

// This is a custom component
export function Header(){
    return (
        <View style={styles.container}>
            <Text style={styles.lightHeader}>Grab your</Text>
            <Text style={styles.boldHeader}>Delicious Meal</Text>
        </View>
    )
}

const styles= StyleSheet.create({
    container: {
        marginHorizontal: 25,
        marginTop: 60
    },
    lightHeader: {
        fontSize: 35
    },
    boldHeader: {
        fontSize: 40,
        fontWeight: "bold"
    }
});