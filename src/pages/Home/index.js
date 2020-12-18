import React, { Component } from 'react'
import { Text, StyleSheet, View, Alert } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import FIREBASE from '../../config/FIREBASE'
import CardKontak from '../../component/CardKontak'

export default class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            kontaks: {},
            kontaksKey: []
        }
    }

    componentDidMount() {
        FIREBASE.database()
            .ref("users")
            .on("value", (querySnapShot) => {
                let data = querySnapShot.val() ? querySnapShot.val() : {}
                let kontakItem = { ...data }

                this.setState({
                    kontaks: kontakItem,
                    kontaksKey: Object.keys(kontakItem)
                })
            })
    }

    removeData = (id) => {
        Alert.alert(
            "Info",
            "Apakah yakin hapus data users?",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => console.log("OK Pressed", { key }) }
            ],
            { cancelable: false }
        );

    }




    render() {
        console.log(this.state.kontaks);
        console.log(this.state.kontaksKey);
        return (
            <ScrollView>
                <View style={styles.page}>
                    <View style={styles.header}>
                        <Text style={styles.title}>{this.state.kontaksKey.length} Users</Text>
                    </View>

                    <View style={styles.listKontak}>
                        {this.state.kontaksKey.length > 0 ? (
                            this.state.kontaksKey.map((key) => (
                                <CardKontak
                                    // key={this.state.kontaks[key].key}
                                    nama={this.state.kontaks[key].nama}
                                    gender={this.state.kontaks[key].gender}
                                    id={key}
                                    umur={this.state.kontaks[key].umur}
                                    status={this.state.kontaks[key].status}
                                    removeData={this.removeData}
                                />






                            ))
                        ) : (
                                <CardKontak>Daftar Kosong</CardKontak>
                            )}
                    </View>





                    <View style={styles.wrapperButton}>
                        <TouchableOpacity style={styles.ButtonTambah} onPress={() => this.props.navigation.navigate('TambahKontak')}>
                            <Text>Add Users</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    page: {
        flex: 1
    },

    header: {
        paddingTop: 20,
        paddingHorizontal: 20,
        paddingBottom: 20,
        backgroundColor: 'skyblue'
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    listKontak: {

    },
    listKontak: {
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20
    },



    // ===style button add kontak====
    wrapperButton: {
        position: 'absolute',
        flex: 1,
        top: 0,
        right: 0,
        margin: 30

    },
    ButtonTambah: {

        padding: 20,
        backgroundColor: 'skyblue',
        borderRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
})
