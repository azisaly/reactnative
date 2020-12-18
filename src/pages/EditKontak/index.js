import { text } from '@fortawesome/fontawesome-svg-core'
import React, { Component, useState } from 'react'
import { Text, StyleSheet, View, Alert, Picker } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import InputData from '../../component/InputData'
import FIREBASE from '../../config/FIREBASE'

export default class EditKontak extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nama: '',
            gender: '',
            umur: '',
            status: ''
        }
    }

    onChangeText = (namaState, value) => {
        this.setState({
            [namaState]: value
        })
    }


    onSubmit = () => {
        if (this.state.nama && this.state.gender && this.state.umur && this.state.status) {

            const kontakReferensi = FIREBASE.database().ref('users')
            const users = {
                nama: this.state.nama,
                gender: this.state.gender,
                umur: this.state.umur,
                status: this.state.status,

            }
            kontakReferensi
                .push(users)
                .then((data) => {
                    Alert.alert('Sukses, Data berhasi disimpan')
                    this.props.navigation.replace('Home')

                })
                .catch((error) => {
                    console.log("ERROR:", error)
                })


        } else {
            Alert.alert('Error, Harap diisi dengan lengkap')
        }

    }

    render() {
        return (

            <View style={styles.pages}>
                <InputData
                    nama="Nama"
                    placeholder="Masukan Nama"
                    onChangeText={this.onChangeText}
                    value={this.state.nama}
                    namaState="nama"
                />
                <InputData
                    nama="Gender"
                    placeholder="Masukan Gender"
                    onChangeText={this.onChangeText}
                    value={this.state.gender}
                    namaState="gender"
                />



                <InputData
                    nama="Umur"
                    placeholder="Masukan Umur"
                    keyboardType="number-pad"
                    onChangeText={this.onChangeText}
                    value={this.state.umur}
                    namaState="umur"
                />


                <InputData
                    nama="Status"
                    placeholder="Masukan Status"
                    onChangeText={this.onChangeText}
                    value={this.state.status}
                    namaState="status"
                />

                <TouchableOpacity style={styles.tombol} onPress={this.onSubmit} >
                    <Text style={styles.textTombol}>Send Data</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    pages: {
        flex: 1,
        padding: 20,
        flexDirection: 'column'
    },
    tombol: {
        backgroundColor: 'skyblue',
        padding: 10,
        marginTop: 8,
        borderRadius: 8,
        alignItems: 'center'

    },
    textTombol: {
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold'

    }


})
