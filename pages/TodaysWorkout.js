import React, { Compnoent } from 'react';
import { ScrollView, View, Text, StatusBar, StyleSheet } from 'react-native';

class TodaysWorkout extends React.Component {
    render() {
        return (
            <ScrollView>
                <StatusBar barStyle="dark-content" barAnimation="fade"></StatusBar>
                <View>
                    <Text style={styles.header}>TODAY'S ROUTINE</Text>
                </View>
                <View style={styles.bodypart}>
                    <Text style={{fontSize: 30}}>CHEST/TRICEPS</Text>
                </View>
                <View style={styles.exerciseBox}>
                    <View style={styles.exerciseContainer}>
                        <Text style={styles.exerciseName}>Incline Cable Fly</Text>
                        <Text style={styles.notes}>(Pronated grip)</Text>
                        <Text style={styles.reps}>15,12,10</Text>
                    </View>
                    <View style={styles.exerciseContainer}>
                        <Text style={styles.exerciseName}>Decline Cable Fly</Text>
                        <Text style={styles.notes}>(Pronated grip)</Text>
                        <Text style={styles.reps}>15,12,10</Text>
                    </View>
                    <View style={styles.exerciseContainer}>
                        <Text style={styles.exerciseName}>Flat Barbell Press</Text>
                        <Text style={styles.notes}>(Inside shoulder width stance)</Text>
                        <Text style={styles.reps}>6 sets of 6</Text>
                        <Text style={styles.tempo}>(1:2:1:0)</Text>
                    </View>
                    <View style={styles.exerciseContainer}>
                        <Text style={styles.exerciseName}>Decline Machine Press</Text>
                        <Text style={styles.reps}>12,10,8,8 drop 10 drop 12</Text>
                    </View>
                    <View style={styles.exerciseContainer}>
                        <Text style={styles.exerciseName}>Body Weight Chest Dips/Body Weight Push Up</Text>
                        <Text style={styles.notes}>3 sets of F/F</Text>
                        <Text style={styles.tempo}>(1:2:1:0)</Text>
                    </View>
                    <View style={styles.exerciseContainer}>
                        <Text style={styles.exerciseName}>Tricep Cable Press Down</Text>
                        <Text style={styles.notes}>(V grip attachment)</Text>
                        <Text style={styles.reps}>15,12,10,10,10 drop 15</Text>
                    </View>
                    <View style={styles.exerciseContainer}>
                        <Text style={styles.exerciseName}>Seated Double Arm Overhead Dumbbell Extension</Text>
                        <Text style={styles.reps}>6 sets of 6</Text>
                        <Text style={styles.tempo}>(1:2:1:0)</Text>
                    </View>
                    <View style={styles.exerciseContainer}>
                        <Text style={styles.exerciseName}>Tricep Dip Machine</Text>
                        <Text style={styles.reps}>12,10,8,8 drop 10</Text>
                    </View>
                    <View style={styles.exerciseContainer}>
                        <Text style={styles.exerciseName}>Tricep Cable Press Down</Text>
                        <Text style={styles.notes}>(Single arm, reverse grip)</Text>
                        <Text style={styles.reps}>12,10,8,8 drop 12</Text>
                    </View>
                </View>
            </ScrollView>
        )
    }
};


const styles = StyleSheet.create({
    header: {
        fontSize: 45,
        backgroundColor: "#000",
        textAlign: 'center',
        color: "white",
        padding: 30
    },
    bodypart: {
        alignItems: 'center',
        marginTop: 50
    },
    exerciseContainer: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    exerciseName: {
        fontSize: 17,
        fontWeight: 'bold'
    },
    notes: {
        fontSize: 17
    },
    reps: {
        fontSize: 17
    },
    tempo: {
        fontSize: 17
    },
    exerciseBox: {
        marginBottom: 100,
        width: '90%',
        alignSelf: 'center'
    }
})


export default TodaysWorkout;