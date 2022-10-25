import { Text, TextInput, View, StyleSheet, Button, FlatList, Alert, TouchableOpacity, ListItem, Pressable, Modal } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState, useEffect } from 'react';
import * as SQLite from 'expo-sqlite';


// const Item = ({ data, navigation}) => (
//     <TouchableOpacity style={styles.listItem}  onPress={() => navigation.navigate('Profile')}>
//         <MaterialCommunityIcons name='account-outline' style={styles.ionIcon} />
//         <View style={styles.listContainer}>
//             <Text style={styles.listTitle}>{data.title}</Text>
//             <Text style={styles.listAge}>{data.age}</Text>
//         </View>
//     </TouchableOpacity>
// );




function openDatabase() {
    if (Platform.OS === "web") {
        return {
            transaction: () => {
                return {
                    executeSql: () => { },
                };
            },
        };
    }

    const db = SQLite.openDatabase("mynewdb");
    return db;
}

const db = openDatabase();


export default function Accounts({ navigation }) {


    useEffect(() => {
        getData();
    }, []);

    const getData = () => {

        db.transaction(txn => {
            txn.executeSql(
                `SELECT id,name,holder_name,account_number,bank_name,bank_branch,balance FROM ACCOUNTS ORDER BY ID DESC`,
                [],
                (sqlTxn, res) => {
                    let len = res.rows.length;
                    if (len > 0) {
                        let results = [];
                        for (let i = 0; i < len; i++) {
                            let item = res.rows.item(i);
                            results.push({ id: item.id, name: item.name });
                            setAccounts(item)
                            //  console.log(item);
                        }
                        setAccounts(results);

                    }
                    console.log(Accounts);

                },
                error => {
                    console.log(error.message)
                }

            )

        })



    };
    //holds multiple accounts 
    const [Accounts, setAccounts] = useState([]);

    //holds single account data
    const [name, setName] = useState('');
    const [holderName, setHolderName] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [bankName, setBankName] = useState('');
    const [bankBranch, setBankBranch] = useState('');
    const [openingBalace, setOpeningBalance] = useState('');
    const [balance, setBalance] = useState('');





    // const renderItem = ({ item}) => (
    //     <Item data={item}/>
    // );

    const [modalVisible, setModalVisible] = useState(false);
    const [empty, setEmpty] = useState([]);

    const addNewAccount = () => {


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
                                <Text>Add Account!</Text>

                                <TextInput
                                    style={styles.input}
                                    placeholder='Enter your name'
                                    onChangeText={setName}
                                    placeholderTextColor="grey"
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder='Enter holder name'
                                    onChangeText={setHolderName}
                                    placeholderTextColor="grey"
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder='Enter account number '
                                    onChangeText={setAccountNumber}
                                    placeholderTextColor="grey"
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder='Enter bank name'
                                    onChangeText={setBankName}
                                    placeholderTextColor="grey"
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder='Enter bank branch'
                                    onChangeText={setBankBranch}
                                    placeholderTextColor="grey"
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder='Enter opening balance name'
                                    onChangeText={setOpeningBalance}
                                    placeholderTextColor="grey"
                                />
                                <View style={styles.modalButtonContainer}>
                                    <Pressable
                                        style={[styles.buttonInsideModal, styles.buttonAddAccount]}
                                        onPress={addNewAccount}
                                    >
                                        <Text style={styles.textStyleAdd}>Add</Text>
                                    </Pressable>

                                    <Pressable
                                        style={[styles.buttonInsideModal, styles.buttonCancel]}
                                        onPress={(addNewAccount) => setModalVisible(!modalVisible)}
                                    >
                                        <Text style={styles.textStyleCancel}>Cancel</Text>
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
    textStyleAdd: {
        textAlign: "center",

    },
    textStyleCancel: {
        textAlign: "center",
        color: 'white',
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
        // backgroundColor:'white',
    },
    modalView: {
        margin: 20,
        backgroundColor: "#ffffff",
        borderRadius: 20,
        padding: 35,
        paddingBottom:30,
        alignItems: "center",
        shadowColor: "grey",
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
        justifyContent: 'center',
        alignItems: "center"
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonCancel: {
        backgroundColor: "tomato",
        color: 'white',
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
        // color: 'black',
        backgroundColor: '#fcfcfc',
        fontSize: 18,
        margin: 10,
    },
    //for modal    
});