import { CardStyleInterpolators } from '@react-navigation/stack';
import React, { useState } from 'react';
import { View, Text, TextInput, KeyboardAvoidingView, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function SettingsScreen({ navigation }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        //     <Text
        //         onPress={() => navigation.navigate('Home')}
        //         style={{ fontSize: 26, fontWeight: 'bold' }}>Settings Screen</Text>
        // </View>
        <KeyboardAvoidingView
            behavior="padding"
            style={styles.container}
        >

            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.input}>

                </TextInput>
                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={styles.input}
                    secureTextEntry
                >
                </TextInput>

            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={() => { }}
                    style={styles.button}
                >
                    <Text style={[styles.buttonText]}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => { }}
                    style={[styles.button, styles.buttonOutline]}
                >
                    <Text style={styles.buttonOutlineText}>Register</Text>
                </TouchableOpacity>

            </View>

        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: '80%'
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonOutline:{
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#0782F9',
        borderWidth: 2,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutlineText: {
        color: '#0782F9',
        fontWeight: '700',
        fontSize: 16,
    },
})