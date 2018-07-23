
import React, { Component } from 'react';
import {createStackNavigator,} from 'react-navigation';
import ViewContactScreen from './screens/ViewContactScreen';
import ContactAddScreen from './screens/ContactAddScreen';
import HomeScreen from './screens/HomeScreen';



const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    AddContact: ContactAddScreen,
    ViewContact: ViewContactScreen,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'screen' ,
  },
  
);

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}
