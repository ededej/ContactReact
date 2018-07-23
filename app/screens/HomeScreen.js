import React, { Component } from 'react';
import { FlatList, Button, StyleSheet, Text, View, ScrollView } from 'react-native';
import SimpleAsyncStorage from '../persitence/SimpleAsyncStorage'
import { List, ListItem } from 'react-native-elements';


class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Contacts',
    headerStyle: {
      backgroundColor: 'skyblue',
    }
  }
  constructor(props) {
    super(props)
    this.state = {
      isMounted: false,
      data: [],
      loading: false,
      error: null,

    }

  }
  componentDidMount() {
    this.setState({ isMounted: true })
    this.getContactList();
    this.props.navigation.addListener('willFocus', (playload) => {
      this.getContactList();
    });
  }
  componentWillUnmount() {
    this.setState({ isMounted: false })
    this.props.navigation.removeEventListener('willFocus', (playload) => {
      this.getContactList();
    });
  }
  getContactList = () => {
    this.setState({ loading: true });
    SimpleAsyncStorage.retrieveAllData()
      .then((response) => {

        let tempArray = [];

        if (response != null) {
          console.log('returned response:', response);
          response.map(contact =>
            tempArray.push({
              key: contact[0],
              value: JSON.parse(contact[1])
            }));
          if (this.state.isMounted) {

            this.setState({
              data: tempArray,
              loading: false,
              error: response.error || null
            });
          }

        } else {
          this.setState({ error, loading: false });
        }
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 3,
          backgroundColor: "#CED0CE",
        }}
      />
    );
  };

  viewContact = (contact) => {
    console.log('Contact select', contact);
    this.props.navigation.navigate('ViewContact', { contact });

  }

  _renderItem = ({ item }) => (
    <ListItem
      title={`${item.value.firstName} ${item.value.lastName}`}
      subtitle={item.value.email}
      containerStyle={{ borderBottomWidth: 0 }}
      onPress={() => this.viewContact(item.value)}
    />
  );

  render() {

    return (
      <View style={{ flex: 1 }}>
        <View style={{
          flex: 1,
          backgroundColor: 'skyblue',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }} >
          <Text style={styles.welcome}>Your Contacts</Text>

          <View style={styles.buttonContainer}>

            <Button
              onPress={() => this.props.navigation.navigate('AddContact')}
              title="Add"
            />
          </View>
        </View>

        <View style={{ flex: 11, backgroundColor: 'powderblue' }} >
          <ScrollView >

            <List
              containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
              <FlatList
                data={this.state.data}
                ItemSeparatorComponent={this.renderSeparator}
                renderItem={this._renderItem}
              />
            </List>
          </ScrollView >

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    padding: 10,
  },

  buttonContainer: {
  },
  formStyle: {
    fontSize: 25
  }
});
export default HomeScreen;
