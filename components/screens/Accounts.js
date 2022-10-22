import { Text, TextInput, View, StyleSheet, Button, FlatList, Alert, TouchableOpacity, ListItem, Pressable, Modal } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState, useEffect } from 'react';


// const Item = ({ data, navigation}) => (
//     <TouchableOpacity style={styles.listItem}  onPress={() => navigation.navigate('Profile')}>
//         <MaterialCommunityIcons name='account-outline' style={styles.ionIcon} />
//         <View style={styles.listContainer}>
//             <Text style={styles.listTitle}>{data.title}</Text>
//             <Text style={styles.listAge}>{data.age}</Text>
//         </View>
//     </TouchableOpacity>
// );

export default function Accounts({ navigation }) {
    const Accounts = [
        {
            id: '1',
            title: 'First Account',
            age: '10',

        },
        {
            id: '2',
            title: 'Second Account',
            age: '10',

        },
        {
            id: '3',
            title: 'Third Account',
            age: '10',

        },
        {
            id: '4',
            title: 'Third Account',
            age: '10',

        },
        {
            id: '5',
            title: 'Third Account',
            age: '10',

        },
    ];


    // const renderItem = ({ item}) => (
    //     <Item data={item}/>
    // );

    const [modalVisible, setModalVisible] = useState(false);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const [customers, setCustomers] = useState([]);
    const [empty, setEmpty] = useState([]);

    const setData = () => {


    };
    return (
        <View style={styles.container}>
            <View style={{ alignItems: 'space-around', flexDirection: "row" }}>
                <Text style={{ marginTop: 1, color: 'grey', flex: 1 }}>List of Accounts</Text>
                <Pressable
                    onPress={() => setModalVisible(true)}
                    style={[styles.buttonAddAccount]} >

                    <MaterialCommunityIcons name='plus' style={styles.iconPlus} />
                    <Text style={styles.textAddAccounts}>
                        New Account
                    </Text>
                </Pressable>



                <View style={styles.centeredView}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                            setModalVisible(!modalVisible);
                        }}
                    >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text>Add Customer!</Text>

                                <TextInput
                                    style={styles.input}
                                    placeholder='Enter your name'
                                    onChangeText={setName}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder='Enter your age'
                                    onChangeText={setAge}
                                />
                                <View style={styles.modalButtonContainer}>
                                    <Pressable
                                        style={[styles.buttonInsideModal, styles.buttonAddCustomer]}
                                        onPress={setData}
                                    >
                                        <Text style={styles.textStyle}>Add</Text>
                                    </Pressable>

                                    <Pressable
                                        style={[styles.buttonInsideModal, styles.buttonCancel]}
                                        onPress={() => setModalVisible(!modalVisible)}
                                    >
                                        <Text style={styles.textStyle}>Cancel</Text>
                                    </Pressable>
                                </View>
                            </View>
                        </View>
                    </Modal>

                </View>

            </View>
            <View style={styles.accountsContainer}>
                <FlatList
                    data={Accounts}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.listItem} onPress={() => {
                            navigation.push('AccountProfile', {
                                name: item.title
                            })
                        }}>
                            <MaterialCommunityIcons name='account-outline' style={styles.ionIcon} />
                            <View style={styles.listContainer}>
                                <Text style={styles.listTitle}>{item.title}</Text>
                                <Text style={styles.listAge}>{item.age}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />



            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'purple',
        padding: 10,
    },
    accountsContainer: {
        // backgroundColor:'black',
    },
    listItem: {
        backgroundColor: '#fafafa',
        padding: 10,
        marginTop: 10,
        borderRadius: 15,
        flexDirection: 'row',
        // alignItems:"center"
    },
    listTitle: {
        fontSize: 25,
        color: '#101010',
        // backgroundColor: 'red',
        // width:'100%',
    },
    listAge: {
        flex: 3,
        // backgroundColor: 'blue',
        fontSize: 18,
        color: 'grey',
    },
    ionIcon: {
        fontSize: 60,
        color: 'tomato',
    },
    buttonAddAccount: {
        borderColor: 'tomato',
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
        flexDirection: "row",
        alignItems: "center"
    },

    textAddAccounts: {
        color: 'tomato'
    },
    iconPlus: {
        color: 'tomato',
        fontSize: 25,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        borderRadius: 20,

    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 10,
        padding: 10,
        elevation: 2,
    },
    buttonInsideModal: {
        borderRadius: 8,
        padding: 10,
        elevation: 2,
        width: 100,
        margin: 10,
        alignItems: "center"
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonCancel: {
        backgroundColor: "tomato",
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    //for modal
    modalButtonContainer: {
        flexDirection: "row",
        margin: 10,
    },
    input: {
        width: 300,
        borderWidth: 1,
        borderColor: '#555',
        borderRadius: 10,
        padding: 15,
        backgroundColor: '#ffffff',
        fontSize: 18,
        margin: 10,
    },
    //for modal    
});