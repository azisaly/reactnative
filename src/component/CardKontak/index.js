import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { faEdit, faTimes, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { navigation } from '@react-navigation/native'

const CardKontak = (props) => {
    return (
        <TouchableOpacity style={styles.container} id={props.id} >

            <View>
                <Text>ini id : {props.id}</Text>
                <Text style={styles.nama}>{props.nama}</Text>
                <Text style={styles.kontak}>{props.gender} / {props.umur} tahun</Text>
                <Text>{props.status}</Text>

            </View>
            <View style={styles.icons}>
                <FontAwesomeIcon icon={faEdit} color={'orange'} size={20} marginRight={5} onPress={() => navigation.navigate('EditKontak')} />
                <FontAwesomeIcon icon={faTrashAlt} color={'red'} size={20} onPress={() => props.removeData(id)} />
            </View>
        </TouchableOpacity>
    )
}

export default CardKontak

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15,
        backgroundColor: 'white',
        marginBottom: 20,
        borderRadius: 5
    },
    nama: {
        fontWeight: 'bold',
        fontSize: 16
    },
    icons: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
})
