import React from 'react';
import {Text, View } from 'react-native';
import ContactForm from '../components/ContactForm';
import SimpleAsyncStorage from '../persitence/SimpleAsyncStorage'

class ViewContactScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.navigation.state.params.contact;
    this.editApplicant= this.editApplicant.bind(this);
    this.deleteApplicant= this.deleteApplicant.bind(this);

  }

  editApplicant= (contact) =>{
    SimpleAsyncStorage.updateData(contact.email, contact);
    this.props.navigation.navigate('Home')

  }

  deleteApplicant= (contact) =>{
    SimpleAsyncStorage.deleteData(contact.email);
    this.props.navigation.navigate('Home')

  }
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 20 }}>Contact Details </Text>
              <View style={{ flex: 10, backgroundColor: 'powderblue', }} >
              <ContactForm contact={this.state} 
              editApplicant={this.editApplicant}
              deleteApplicant={this.deleteApplicant}
              />
                </View>
        </View>
      );
    }
  }

  export default ViewContactScreen; 
