import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Logo from '../components/Logo';

export default class Form extends Component {

    render() {
        console.log(this.props);
        return (
            <ScrollView  showsVerticalScrollIndicator={ false } Style={styles.container}>
                <Logo />
                <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Email"
                    placeholderTextColor="#ffffff"
                    selectionColor="#fff"
                    keyboardType="email-address"
                    onSubmitEditing={() => this.password.focus()}
                />
                <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Password"
                    secureTextEntry={true}
                    placeholderTextColor="#ffffff"
                    ref={(input) => this.password = input}
                
                />
                {this.props.type === "Sign Up" ? (
                    <View Style={styles.container}>
                        <TextInput id='UserName' style={styles.inputBox}
                            underlineColorAndroid='rgba(0,0,0,0)'
                            placeholder="User Name"
                            placeholderTextColor="#ffffff"
                            selectionColor="#fff"
                            keyboardType="default"
                            ref={(input) => this.UserName = input}
                            onSubmitEditing={() => this.FirstName.focus()}
                        />

                        <TextInput id='FirstName' style={styles.inputBox}
                            underlineColorAndroid='rgba(0,0,0,0)'
                            placeholder="First Name"
                            placeholderTextColor="#ffffff"
                            selectionColor="#fff"
                            keyboardType="default"
                            ref={(input) => this.FirstName = input}
                            onSubmitEditing={() => this.LastName.focus()}
                        />
                        <TextInput id='LastName' style={styles.inputBox}
                            underlineColorAndroid='rgba(0,0,0,0)'
                            placeholder="Last Name"
                            placeholderTextColor="#ffffff"
                            selectionColor="#fff"
                            keyboardType="default"
                            ref={(input) => this.LastName = input}
                            onSubmitEditing={() => this.PhoneNumber.focus()}
                        />

                        <TextInput id='PhoneNumber' style={styles.inputBox}
                            underlineColorAndroid='rgba(0,0,0,0)'
                            placeholder="Phone Number"
                            placeholderTextColor="#ffffff"
                            selectionColor="#fff"
                            keyboardType="number-pad"
                            ref={(input) => this.PhoneNumber = input}
                            
                        /> 

                        {/* <TextInput id='ProfilePicture' style={styles.profilePicture}
                            underlineColorAndroid='rgba(0,0,0,0)'
                            placeholder="Profile Picture"
                            placeholderTextColor="#ffffff"
                            selectionColor="#fff"
                            keyboardType="url"
                            ref={(input) => this.ProfilePicture = input}
                            
            
                        /> */}

                        
                    </View>
                ) : null}

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>{this.props.type}</Text>
                </TouchableOpacity>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {

        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    inputBox: {
        width: 300,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#ffffff',
        marginVertical: 10
    },

    profilePicture: {
        width: 300,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 50,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#ffffff',
        marginVertical: 10
        
    },

    button: {
        width: 300,
        backgroundColor: '#005662',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 12

    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center',

    }



});