import React, { Component } from 'react';
import { ScrollView, View, Text, StatusBar, StyleSheet } from 'react-native';


class Split extends React.Component {
    render() {

        return (
            <ScrollView>
                <StatusBar barStyle="dark-content" barAnimation="fade"></StatusBar>
                <View>
                    <Text style={styles.header}>CURRENT SPLIT</Text>
                </View>
                <View style={styles.updated}>
                    <Text style={styles.updatedText}>Updated: November 13th 2019</Text>
                </View>
                <View style={styles.notes}>
                    <Text>There are no full rest days on this current split.</Text>
                    <Text>After the last day on the split it simply starts over.</Text>
                </View>
                <View style={styles.splitText}>
                    <Text>Quads/Adductors/Abductors</Text>
                    <Text style={{marginTop: 10}}>Chest/Triceps</Text>
                    <Text style={{marginTop: 10}}>Lats/Traps</Text>
                    <Text style={{marginTop: 10}}>Shoulders/Biceps</Text>
                    <Text style={{marginTop: 10}}>Hamstrings/Glutes</Text>
                    <Text style={{marginTop: 10}}>Abs/Calves/Neck/Forearms</Text>
                    <Text style={{marginTop: 10}}>Push (Chest, Shoulders, Triceps)</Text>
                    <Text style={{marginTop: 10}}>Pull (Lats, Traps, Biceps)</Text>
                    <Text style={{marginTop: 10}}>Abs/Calves/Neck/Forearms</Text>
                </View>
            </ScrollView>
        )
    }
};


const styles = StyleSheet.create({
    header: {
        fontSize: 50,
        backgroundColor: "#000",
        textAlign: 'center',
        color: "white",
        padding: 30
    },
    updated: {
        alignItems: 'center',
        marginTop: 20,
        fontSize: 20
    },
    notes: {
        alignItems: 'center',
        marginTop: 10,
        fontWeight: 'bold'

    },
    splitText: {
        alignItems: 'center',
        marginTop: 40
    }
})


export default Split;