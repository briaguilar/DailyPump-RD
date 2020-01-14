import React, { Component } from 'react';
import { ScrollView, View, Text, StatusBar, StyleSheet, TextInput, Keyboard } from 'react-native';
import CustomMultiPicker from 'react-native-multiple-select-list';
import { Button } from 'react-native-elements';
import { library, icon } from '@fortawesome/fontawesome-svg-core';




class NewWorkout extends React.Component {
    

    render() {
        const userList = {
            "chest": "Chest",
            "triceps": "Triceps",
            "shoulders": "Shoulders",
            "lats": "Lats",
            "traps": "Traps",
            "biceps": "Biceps",
            "forearms": "Forearms",
            "neck": "Neck",
            "abs": "Abs",
            "calves": "Calves",
            "quads": "Quads",
            "hamstrings": "Hamstrings",
            "glutes": "Glutes"
        }


        return (
            <ScrollView>
                <StatusBar barStyle="dark-content" barAnimation="fade"></StatusBar>
                <View>
                    <View>
                        <Text style={styles.header}>New Workout</Text>
                    </View>
                    <View style={styles.bodypartyContainer}>
                        <CustomMultiPicker
                            options={userList}
                            search={true}
                            multiple={true}
                            placeholder={"Search"}
                            returnValue={"label"}
                            callback={(res) => { console.log(res) }}
                            rowHeight={40}
                            searchIconName="ios-checkmark"
                            searchIconColor="black"
                            searchIconSize={30}
                            iconColor={"#000"}
                            iconSize={30}
                            selectedIconName={"ios-checkmark-circle-outline"}
                            unselectedIconName={"ios-radio-button-off"}
                            scrollViewHeight={130}
                            rowBackgroundColor={"#ffcccc"}
                        />
                    </View>

                    {/* ROW ONE - EXERCISE ONE */}
                    <View style={styles.exercisesContainer}>
                        <View>
                            <View style={styles.exercises}>
                                <TextInput
                                    label="Exercise"
                                    placeholder="Exercise Name"
                                    placeholderTextColor="#4d4d4d"
                                    mode="outlined"
                                    borderColor="#000"
                                    style={styles.input}
                                    backgroundColor="#d9d9d9"
                                    keyboardAppearance="dark"
                                    clearButtonMode="while-editing"
                                    returnKeyType={'done'}
                                    returnKeyLabel="Done"
                                    onSubmitEditing={Keyboard.dismiss}
                                />
                                <TextInput
                                    label="notes"
                                    width='80%'
                                    textAlign="center"
                                    placeholder="(Notes)"
                                    style={styles.notesInput}
                                    rowBackgroundColor="#e6e6e6"
                                    clearButtonMode="while-editing"
                                    keyboardAppearance="dark"
                                    returnKeyType={'done'}
                                />
                            </View>
                            <View flexDirection="row" justifyContent="center" style={styles.setRow}>
                                <TextInput
                                    label="Sets"
                                    placeholder="Sets"
                                    mode="outlined"
                                    style={styles.setInput}
                                    onChangeText={text => onChangeText(text)}
                                    keyboardType="numeric"
                                    keyboardAppearance="dark"
                                    returnKeyType={'done'}
                                />
                                <Text style={styles.setsOf}>SETS OF</Text>
                                <TextInput
                                    label="Reps"
                                    placeholder="Reps"
                                    mode="outlined"
                                    style={styles.repInput}
                                    keyboardType="numeric"
                                    keyboardAppearance="dark"
                                    returnKeyType={'done'}
                                />
                            </View>
                            <View flexDirection="row" justifyContent="center" style={styles.tempoRow}>
                                <Text style={styles.tempoLabel}>Tempo:</Text>
                                <TextInput
                                    label="Tempo"
                                    placeholder="( ? : ? : ? : ? )"
                                    style={styles.tempoInput}
                                    keyboardType="numeric"
                                    keyboardAppearance="dark"
                                    returnKeyType={'done'}
                                />
                            </View>
                        </View>



                        {/* ROW TWO - EXERCISE TWO */}
                        <View>
                            <View style={styles.exercises}>
                                <TextInput
                                    label="Exercise"
                                    placeholder="Exercise Name"
                                    placeholderTextColor="#4d4d4d"
                                    mode="outlined"
                                    borderColor="#000"
                                    style={styles.input}
                                    backgroundColor="#d9d9d9"
                                    keyboardAppearance="dark"
                                    clearButtonMode="while-editing"
                                    returnKeyType={'done'}
                                    returnKeyLabel="Done"
                                    onSubmitEditing={Keyboard.dismiss}
                                />
                                <TextInput
                                    label="notes"
                                    width='80%'
                                    textAlign="center"
                                    placeholder="(Notes)"
                                    style={styles.notesInput}
                                    rowBackgroundColor="#e6e6e6"
                                    clearButtonMode="while-editing"
                                    keyboardAppearance="dark"
                                    returnKeyType={'done'}
                                />
                            </View>
                            <View flexDirection="row" justifyContent="center" style={styles.setRow}>
                                <TextInput
                                    label="Sets"
                                    placeholder="Sets"
                                    mode="outlined"
                                    style={styles.setInput}
                                    onChangeText={text => onChangeText(text)}
                                    keyboardType="numeric"
                                    keyboardAppearance="dark"
                                    returnKeyType={'done'}
                                />
                                <Text style={styles.setsOf}>SETS OF</Text>
                                <TextInput
                                    label="Reps"
                                    placeholder="Reps"
                                    mode="outlined"
                                    style={styles.repInput}
                                    keyboardType="numeric"
                                    keyboardAppearance="dark"
                                    returnKeyType={'done'}
                                />
                            </View>
                            <View flexDirection="row" justifyContent="center" style={styles.tempoRow}>
                                <Text style={styles.tempoLabel}>Tempo:</Text>
                                <TextInput
                                    label="Tempo"
                                    placeholder="( ? : ? : ? : ? )"
                                    style={styles.tempoInput}
                                    keyboardType="numeric"
                                    keyboardAppearance="dark"
                                    returnKeyType={'done'}
                                />
                            </View>
                        </View>


                        {/* ROW 3 - EXERCISE 3 */}
                        <View>
                            <View style={styles.exercises}>
                                <TextInput
                                    label="Exercise"
                                    placeholder="Exercise Name"
                                    placeholderTextColor="#4d4d4d"
                                    mode="outlined"
                                    borderColor="#000"
                                    style={styles.input}
                                    backgroundColor="#d9d9d9"
                                    keyboardAppearance="dark"
                                    clearButtonMode="while-editing"
                                    returnKeyType={'done'}
                                    returnKeyLabel="Done"
                                    onSubmitEditing={Keyboard.dismiss}
                                />
                                <TextInput
                                    label="notes"
                                    width='80%'
                                    textAlign="center"
                                    placeholder="(Notes)"
                                    style={styles.notesInput}
                                    rowBackgroundColor="#e6e6e6"
                                    clearButtonMode="while-editing"
                                    keyboardAppearance="dark"
                                    returnKeyType={'done'}
                                />
                            </View>
                            <View flexDirection="row" justifyContent="center" style={styles.setRow}>
                                <TextInput
                                    label="Sets"
                                    placeholder="Sets"
                                    mode="outlined"
                                    style={styles.setInput}
                                    onChangeText={text => onChangeText(text)}
                                    keyboardType="numeric"
                                    keyboardAppearance="dark"
                                    returnKeyType={'done'}
                                />
                                <Text style={styles.setsOf}>SETS OF</Text>
                                <TextInput
                                    label="Reps"
                                    placeholder="Reps"
                                    mode="outlined"
                                    style={styles.repInput}
                                    keyboardType="numeric"
                                    keyboardAppearance="dark"
                                    returnKeyType={'done'}
                                />
                            </View>
                            <View flexDirection="row" justifyContent="center" style={styles.tempoRow}>
                                <Text style={styles.tempoLabel}>Tempo:</Text>
                                <TextInput
                                    label="Tempo"
                                    placeholder="( ? : ? : ? : ? )"
                                    style={styles.tempoInput}
                                    keyboardType="numeric"
                                    keyboardAppearance="dark"
                                    returnKeyType={'done'}
                                />
                            </View>
                        </View>



                        {/* ROW 4 - EXERCISE 4 */}
                        <View>
                            <View style={styles.exercises}>
                                <TextInput
                                    label="Exercise"
                                    placeholder="Exercise Name"
                                    placeholderTextColor="#4d4d4d"
                                    mode="outlined"
                                    borderColor="#000"
                                    style={styles.input}
                                    backgroundColor="#d9d9d9"
                                    keyboardAppearance="dark"
                                    clearButtonMode="while-editing"
                                    returnKeyType={'done'}
                                    returnKeyLabel="Done"
                                    onSubmitEditing={Keyboard.dismiss}
                                />
                                <TextInput
                                    label="notes"
                                    width='80%'
                                    textAlign="center"
                                    placeholder="(Notes)"
                                    style={styles.notesInput}
                                    rowBackgroundColor="#e6e6e6"
                                    clearButtonMode="while-editing"
                                    keyboardAppearance="dark"
                                    returnKeyType={'done'}
                                />
                            </View>
                            <View flexDirection="row" justifyContent="center" style={styles.setRow}>
                                <TextInput
                                    label="Sets"
                                    placeholder="Sets"
                                    mode="outlined"
                                    style={styles.setInput}
                                    onChangeText={text => onChangeText(text)}
                                    keyboardType="numeric"
                                    keyboardAppearance="dark"
                                    returnKeyType={'done'}
                                />
                                <Text style={styles.setsOf}>SETS OF</Text>
                                <TextInput
                                    label="Reps"
                                    placeholder="Reps"
                                    mode="outlined"
                                    style={styles.repInput}
                                    keyboardType="numeric"
                                    keyboardAppearance="dark"
                                    returnKeyType={'done'}
                                />
                            </View>
                            <View flexDirection="row" justifyContent="center" style={styles.tempoRow}>
                                <Text style={styles.tempoLabel}>Tempo:</Text>
                                <TextInput
                                    label="Tempo"
                                    placeholder="( ? : ? : ? : ? )"
                                    style={styles.tempoInput}
                                    keyboardType="numeric"
                                    keyboardAppearance="dark"
                                    returnKeyType={'done'}
                                />
                            </View>
                        </View>

                        {/* ROW 5 - EXERCISE 5 */}
                        <View>
                            <View style={styles.exercises}>
                                <TextInput
                                    label="Exercise"
                                    placeholder="Exercise Name"
                                    placeholderTextColor="#4d4d4d"
                                    mode="outlined"
                                    borderColor="#000"
                                    style={styles.input}
                                    backgroundColor="#d9d9d9"
                                    keyboardAppearance="dark"
                                    clearButtonMode="while-editing"
                                    returnKeyType={'done'}
                                    returnKeyLabel="Done"
                                    onSubmitEditing={Keyboard.dismiss}
                                />
                                <TextInput
                                    label="notes"
                                    width='80%'
                                    textAlign="center"
                                    placeholder="(Notes)"
                                    style={styles.notesInput}
                                    rowBackgroundColor="#e6e6e6"
                                    clearButtonMode="while-editing"
                                    keyboardAppearance="dark"
                                    returnKeyType={'done'}
                                />
                            </View>
                            <View flexDirection="row" justifyContent="center" style={styles.setRow}>
                                <TextInput
                                    label="Sets"
                                    placeholder="Sets"
                                    mode="outlined"
                                    style={styles.setInput}
                                    onChangeText={text => onChangeText(text)}
                                    keyboardType="numeric"
                                    keyboardAppearance="dark"
                                    returnKeyType={'done'}
                                />
                                <Text style={styles.setsOf}>SETS OF</Text>
                                <TextInput
                                    label="Reps"
                                    placeholder="Reps"
                                    mode="outlined"
                                    style={styles.repInput}
                                    keyboardType="numeric"
                                    keyboardAppearance="dark"
                                    returnKeyType={'done'}
                                />
                            </View>
                            <View flexDirection="row" justifyContent="center" style={styles.tempoRow}>
                                <Text style={styles.tempoLabel}>Tempo:</Text>
                                <TextInput
                                    label="Tempo"
                                    placeholder="( ? : ? : ? : ? )"
                                    style={styles.tempoInput}
                                    keyboardType="numeric"
                                    keyboardAppearance="dark"
                                    returnKeyType={'done'}
                                />
                            </View>
                        </View>


                        {/* ROW 6 - EXERCISE 6 */}
                        <View>
                            <View style={styles.exercises}>
                                <TextInput
                                    label="Exercise"
                                    placeholder="Exercise Name"
                                    placeholderTextColor="#4d4d4d"
                                    mode="outlined"
                                    borderColor="#000"
                                    style={styles.input}
                                    backgroundColor="#d9d9d9"
                                    keyboardAppearance="dark"
                                    clearButtonMode="while-editing"
                                    returnKeyType={'done'}
                                    returnKeyLabel="Done"
                                    onSubmitEditing={Keyboard.dismiss}
                                />
                                <TextInput
                                    label="notes"
                                    width='80%'
                                    textAlign="center"
                                    placeholder="(Notes)"
                                    style={styles.notesInput}
                                    rowBackgroundColor="#e6e6e6"
                                    clearButtonMode="while-editing"
                                    keyboardAppearance="dark"
                                    returnKeyType={'done'}
                                />
                            </View>
                            <View flexDirection="row" justifyContent="center" style={styles.setRow}>
                                <TextInput
                                    label="Sets"
                                    placeholder="Sets"
                                    mode="outlined"
                                    style={styles.setInput}
                                    onChangeText={text => onChangeText(text)}
                                    keyboardType="numeric"
                                    keyboardAppearance="dark"
                                    returnKeyType={'done'}
                                />
                                <Text style={styles.setsOf}>SETS OF</Text>
                                <TextInput
                                    label="Reps"
                                    placeholder="Reps"
                                    mode="outlined"
                                    style={styles.repInput}
                                    keyboardType="numeric"
                                    keyboardAppearance="dark"
                                    returnKeyType={'done'}
                                />
                            </View>
                            <View flexDirection="row" justifyContent="center" style={styles.tempoRow}>
                                <Text style={styles.tempoLabel}>Tempo:</Text>
                                <TextInput
                                    label="Tempo"
                                    placeholder="( ? : ? : ? : ? )"
                                    style={styles.tempoInput}
                                    keyboardType="numeric"
                                    keyboardAppearance="dark"
                                    returnKeyType={'done'}
                                />
                            </View>
                        </View>
                        <View flexDirection="row" alignItems="center" justifyContent="center" style={styles.buttonContainer}>
                            <Button
                                icon={{
                                    name: "add",
                                    size: 25,
                                    color: "white"
                                }}
                                style={styles.addButton}
                                backgroundColor="#adebad"
                            />
                            <Button
                                icon={{
                                    name: "done",
                                    size: 25,
                                    color: "white"
                                }}
                                style={styles.doneButton}
                            />
                        </View>
                    </View>

                </View>
            </ScrollView >
        )
    }
}




////////////////////////////////////    STYLESHEET   ///////////////////////////////////////////
const styles = StyleSheet.create({
    header: {
        fontSize: 60,
        backgroundColor: "#000",
        color: "white",
        textAlign: 'center',
        padding: 30,
        width: '100%'
    },
    bodypartyContainer: {
        marginTop: 30
    },
    exercisesContainer: {
        marginBottom: 80
    },
    input: {
        height: 40,
        width: '80%',
        borderColor: '#000',
    },
    bodyPartPicker: {
        height: 50,
        width: 100
    },
    exercises: {
        marginTop: 70,
        alignItems: 'center',
        justifyContent: 'center'
    },
    notesInput: {
        borderColor: "white",
        marginTop: 10
    },
    setRow: {
        marginTop: 20
    },
    setInput: {
        height: 40,
        width: 50,
        textAlign: 'center',
        fontSize: 15
    },
    setsOf: {
        fontSize: 15,
        marginLeft: 10,
        marginRight: 10,
        alignSelf: 'center'
    },
    repInput: {
        width: 50,
        textAlign: 'center',
        fontSize: 15
    },
    tempoRow: {
        marginTop: 10
    },
    tempoLabel: {
        fontSize: 17,
        alignSelf: 'center'
    },
    tempoInput: {
        height: 40,
        textAlign: 'center',
        width: 150,
        fontSize: 18
    },
    addButton: {
        width: 50,
        height: 40,
        alignSelf: 'center',
        marginRight: 5
    },
    buttonContainer: {
        marginTop: 50
    },
    doneButton: {
        width: 50,
        height: 40,
        alignSelf: 'center',
        marginLeft: 5
    }
});



export default NewWorkout;