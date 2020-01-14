import React, { Component } from 'react';
import { View, Button, Text, Image, StyleSheet, ScrollView, StatusBar, TouchableHighlight, Linking } from 'react-native';
import { Stitch, AnonymousCredential, RemoteMongoClient } from 'mongodb-stitch-react-native-sdk';




class HomeScreen extends React.Component {
    render() {
        return (
            <ScrollView>
                <StatusBar barStyle="dark-content" barAnimation="fade"></StatusBar>
                <View>
                    <View style={{ alignItems: "center" }}>
                        <TouchableHighlight onPress={() => Linking.openURL('https://www.thequadguy.com/dailypump#today')}>
                        <Image
                            style={styles.logo}
                            source={require('../assets/images/dailypumplogo.png')}
                        />
                        </TouchableHighlight>
                    </View>


                    <View style={styles.boxContainer}>
                        <View style={{ flexDirection: "row", justifyContent: "center" }}>
                            <Button
                                title="New Workout"
                                onPress={() => this.props.navigation.navigate('NewWorkout')}
                                color='black'
                            />
                            <Button
                                title="Today's Workout"
                                onPress={() => this.props.navigation.navigate('TodaysWorkout')}
                                color='black'
                            />
                        </View>
                        <View style={styles.secondBoxRow}>
                            <View style={{ flexDirection: "row", justifyContent: "center" }}>
                                <Button
                                    title="Current Split"
                                    onPress={() => this.props.navigation.navigate('Split')}
                                    color='black'
                                />
                                <Button
                                    title="Pick a Workout"
                                    onPress={() => this.props.navigation.navigate('Pick')}
                                />
                            </View>
                        </View>
                    </View>


                </View>
            </ScrollView>
        )
    }
}




////////////////////////////////////    STYLESHEET   ///////////////////////////////////////////

const styles = StyleSheet.create({
    logo: {
        height: 200,
        width: 250,
        marginTop: 70
    },
    newWorkoutBox: {
        height: 100,
        width: 130,
        marginRight: 20
    },
    newWorkoutButton: {
        color: 'black'
    },
    todaysWorkoutBox: {
        height: 100,
        width: 130,
        marginLeft: 20
    },
    splitBox: {
        height: 100,
        width: 130,
        marginRight: 20
    },
    pickBox: {
        height: 100,
        width: 130,
        marginLeft: 20
    },
    boxContainer: {
        marginTop: 150
    },
    secondBoxRow: {
        marginTop: 20
    },

});


export default HomeScreen;