import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'


const InputData = (props) => {
    return (
        <>
            <Text style={styles.label}>{props.nama} :</Text>
            <TextInput placeholder={props.placeholder} style={styles.textInput} keyboardType={props.keyboardType} value={props.value}
                onChangeText={(text) => props.onChangeText(props.namaState, text)}
            />
        </>
    )
}

export default InputData

const styles = StyleSheet.create({
    label: { fontSize: 16, marginBottom: 5 },
    textInput: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        borderRadius: 7
    }
})
