import React from 'react';
import { ScrollView, Switch, View, StyleSheet ,Text} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';

const emailRegExp = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const nameRegExp = /^[A-Za-z]+$/;
const phoneReg = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.createContacts = this.createContacts.bind(this);
        this.editApplicants = this.editApplicants.bind(this);
        this.deleteApplicants = this.deleteApplicants.bind(this);
        this.validateFirstNames = this.validateFirstNames.bind(this);
        this.validateLastNames = this.validateLastNames.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
        this.validatePhoneNumber = this.validatePhoneNumber.bind(this);
        this.buttonDisabled = this.buttonDisabled.bind(this);
        this.createContactValue = this.createContactValue.bind(this);

        this.state = {
            firstNameError: false,
            lastNameError: false,
            emailError: false,
            phoneError: false,
            buttonDisabled: true,
            firstName: this.props.contact.firstName || "",
            lastName: this.props.contact.lastName || "",
            email: this.props.contact.email || "",
            phoneNumber: this.props.contact.phoneNumber || "",
            status: this.props.contact.status || false
        }
    }
    //Prop update to save, delete or edit contact
    createContacts() {
        this.props.createApplicant(this.createContactValue(this.state.contact));
    }
    editApplicants() {
        this.props.editApplicant(this.createContactValue(this.state.contact));
    }
    deleteApplicants() {
        this.props.deleteApplicant(this.createContactValue(this.state.contact));
    }

    createContactValue(value) {
        const contact = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            phoneNumber: this.state.phoneNumber,
            status: this.state.status
        };
        return contact;

    }
    //Validation code
    validateFirstNames(name) {
        this.setState({ firstNameError: (this.validateNames(name) || !name.length != 0) });
        this.setState({ firstName: name });
        this.buttonDisabled();

    }
    validateLastNames(name) {
        this.setState({ lastNameError: (this.validateNames(name) || !name.length != 0) });
        this.setState({ lastName: name });
        this.buttonDisabled();

    }
    validatePhoneNumber(number) {
        this.setState({ phoneError: !number.match(phoneReg) });
        this.setState({ phoneNumber: number });

        this.buttonDisabled();
    }
    validateEmail(emailValue) {
        this.setState({ emailError: ((!emailValue.match(emailRegExp)) || !emailValue.length != 0) });
        this.setState({ email: emailValue });
        this.buttonDisabled();

    }
    validateNames(nameValue) {
        if (nameValue.match(nameRegExp)) {
            return false;
        } else {
            return true;
        }
    }


    buttonDisabled() {
        if (!this.state.firstNameError && !this.state.lastNameError && !this.state.phoneError && !this.state.emailError) {
            this.setState({ buttonDisabled: false });

        } else {
            this.setState({ buttonDisabled: true });

        }
    }
    //Buttons for add or edit/delete
    renderButton = () => {
        if (this.props.contact.email === undefined) {
            return (
                <Button
                    title='SAVE'
                    onPress={this.createContacts}
                    backgroundColor="#008CBA"
                    style={styles.buttonContainer}
                    disabled={this.state.buttonDisabled}
                />
            );
        } else {
            return (
                <View style={styles.container}>
                    <Button
                        leftIcon={{ name: 'edit' }}
                        backgroundColor="#008CBA"
                        title='EDIT'
                        onPress={this.editApplicants}
                        style={styles.buttonGroup}
                    />

                    <Button
                        leftIcon={{ name: 'edit' }}
                        backgroundColor="#f44336"
                        title='DELETE'
                        onPress={this.deleteApplicants}
                        style={styles.buttonGroup}
                    />
                </View>
            );
        }
    };

    render() {
        return (
            <ScrollView >
                <FormInput labelStyle={styles.formStyle} >First Name</FormInput>
                <FormInput
                    returnKeyType='next'
                    placeholder="Please enter your First Name"
                    onChangeText={this.validateFirstNames}
                    value={this.state.firstName}
                />
                {
                    this.state.firstNameError ? <FormValidationMessage>Please insert a valid name</FormValidationMessage> : null
                }
                <FormLabel labelStyle={styles.formStyle}>Last Name</FormLabel>
                <FormInput
                    placeholder="Please enter your Last Name"
                    returnKeyType='next'
                    onChangeText={this.validateLastNames}
                    value={this.state.lastName}
                />
                {
                    this.state.lastNameError ? <FormValidationMessage>Please insert a valid name</FormValidationMessage> : null
                }
                <FormLabel labelStyle={styles.formStyle}>Email</FormLabel>
                <FormInput
                    placeholder="Please enter your email"
                    returnKeyType='next'
                    keyboardType={'email-address'}
                    onChangeText={this.validateEmail}

                    value={this.state.email}
                />
                {
                    this.state.emailError ? <FormValidationMessage>Please insert a valid email example@exp.com</FormValidationMessage> : null
                }
                <FormLabel labelStyle={styles.formStyle}>Phone Number</FormLabel>
                <FormInput
                    placeholder="Please enter your phone number"
                    returnKeyType='next'
                    keyboardType={'phone-pad'}
                    onChangeText={this.validatePhoneNumber}
                    value={this.state.phoneNumber}
                />
                {
                    this.state.phoneError ? <FormValidationMessage>Please insert a valid phone number</FormValidationMessage> : null
                }
                <View style={ {flex: 1,flexDirection: 'row'}}>
                <FormLabel labelStyle={styles.formStyle} >Status(Active/Inactive)</FormLabel>
                <Switch
                        onValueChange={(status) => this.setState({ status })}
                        value={this.state.status} />
                </View>
                {this.renderButton()}
            </ScrollView>
        );

    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },


    buttonContainer: {
        padding: 30,
    },
    buttonGroup: {
        width: 120,
        height: 50,
        paddingTop: 10
    },
    formStyle: {
        fontSize: 20
    }
});
export default ContactForm; 