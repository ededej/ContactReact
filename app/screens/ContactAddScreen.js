
import React, { Component } from 'react';
import { Alert,ScrollView, StyleSheet, Text, View, Switch, TextInput } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';
import SimpleAsyncStorage from '../persitence/SimpleAsyncStorage'
import Contact from '../domain.model/Contact';
import ContactForm from '../components/ContactForm';

class ContactAddScreen extends Component {
    constructor(props) {
        super(props);
        this.state = Contact;
        this.createApplicant= this.createApplicant.bind(this);
        

      }

      createApplicant = (contact) => {
        SimpleAsyncStorage.storeData(contact.email,contact);
        this.setState(contact);
        this.props.navigation.navigate('Home')
      };
      
    render() {
       
        return (
            <View style={{ flex: 1 }}>
                <View style={{
                    flex: 1, justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Text style={{ fontSize: 20 }}>Add Contact Information</Text>
                </View>

                <View style={{ flex: 10, backgroundColor: 'powderblue', }} >
                <ContactForm contact={this.state} createApplicant={this.createApplicant} />

                </View>
            </View>
        );
    }
}

export default ContactAddScreen;
const styles = StyleSheet.create({
    statusStyle: {
        fontSize: 25
    }
});