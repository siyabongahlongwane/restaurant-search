import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native"
import { elevation } from "../common/styles";


export function CategoryItem({name, source, index, active, handlePress}){
    return (
        <TouchableOpacity onPress={handlePress}>
        <View style={[styles.container, styles.elevation, index === 0 ? {marginLeft: 25} : {marginLeft: 15}, active ? {backgroundColor: 'rgb(241, 186, 87)'} : {backgroundColor: 'rgb(255, 255, 255)'}]}>
            <View style={styles.imageContainer}>
                <Image style={[styles.image]} source={source} />
            </View>
        <Text style={styles.header}>{name}</Text>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 90,
        height: 100,
        borderRadius: 50,
        marginVertical: 15,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    elevation,
    imageContainer: {
        width: 50,
        height: 50,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        marginBottom: 5
    },
    image: {
        width: 35,
        height: 35
    },
    header: {
        fontWeight: 'bold'
    }
});