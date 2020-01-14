import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './pages/HomeScreen';
import NewWorkout from './pages/NewWorkout';
import TodaysWorkout from './pages/TodaysWorkout';
import Split from './pages/Split';
// import Pick from './pages/Pick';


const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  NewWorkout: {screen: NewWorkout},
  TodaysWorkout: {screen: TodaysWorkout},
  Split: {screen: Split},
  // Pick: {screen: Pick}
});

// const {
//   Stitch,
//   RemoteMongoClient,
//   AnonymousCredential
// } = require('mongodb-stitch-browser-sdk');

// const client = Stitch.initializeDefaultAppClient('dailypump-nnrag');

// const db = client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('dailypump');

// client.auth.loginWithCredential(new AnonymousCredential()).then(user =>
//   db.collection('workouts').updateOne({ owner_id: client.auth.user.id }, { $set: { number: 42 } }, { upsert: true })
// ).then(() =>
//   db.collection('workouts').find({ owner_id: client.auth.user.id }, { limit: 100 }).asArray()
// ).then(docs => {
//   console.log("Found docs", docs)
//   console.log("[MongoDB Stitch] Connected to Stitch")
// }).catch(err => {
//   console.error(err)
// });

const App = createAppContainer(MainNavigator);


export default App;

