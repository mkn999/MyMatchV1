import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Loader(){
    return (
    <View>
        <Text style={styles.txt}>loading....</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    txt:{
        fontSize:24,
    }
})