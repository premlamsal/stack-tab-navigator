import { Text, View,StyleSheet } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function Transactions() {
  const AccountTransactions = [
    {
      id: '1',
      title: 'First Transactions',
      date: '2022/02/08',
      amount: '800000',
      type: 'deposit',


    },
    {
      id: '2',
      title: 'Second Transactions',
      date: '2022/02/08',
      amount: '800000',
      type: 'withdraw',


    },
    {
      id: '3',
      title: 'Third Transactions',
      date: '2022/02/08',
      amount: '800000',
      type: 'deposit',


    },
    {
      id: '4',
      title: 'Third Transactions',
      date: '2022/02/08',
      amount: '800000',
      type: 'deposit',


    },
    {
      id: '5',
      title: 'Third Transactions',
      date: '2022/02/08',
      amount: '800000',
      type: 'withdraw',


    },
    {
      id: '6',
      title: 'Third Transactions',
      date: '2022/02/08',
      amount: '800000',
      type: 'withdraw',


    },
    {
      id: '7',
      title: 'Third Transactions',
      date: '2022/02/08',
      amount: '800000',
      type: 'withdraw',


    },
    {
      id: '8',
      title: 'Third Transactions',
      date: '2022/02/08',
      amount: '800000',
      type: 'withdraw',


    },
    {
      id: '9',
      title: 'Third Transactions',
      date: '2022/02/08',
      amount: '800000',
      type: 'withdraw',


    },
    {
      id: '10',
      title: 'Third Transactions',
      date: '2022/02/08',
      amount: '800000',
      type: 'withdraw',


    },
    {
      id: '11',
      title: 'Third Transactions',
      date: '2022/02/08',
      amount: '800000',
      type: 'withdraw',


    },
  ];

    return (
        <View style={styles.container}>
              <View style={styles.botSection}>
        <View style={styles.botSectionTopHeader}><Text>Transactions History</Text></View>
        <View style={styles.botSectionTransactionlist}>

          <FlatList
            data={AccountTransactions}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity style={item.type == 'deposit' ? styles.listItemDeposit : styles.listItemWithDraw} onPress={() => {
                navigation.push('Dashboard', {
                  name: item.title
                })
              }}>
                <MaterialCommunityIcons name={item.type == 'deposit' ? 'bank-plus' : 'bank-minus'} style={styles.ionIcon} />

                <View style={styles.listContainer}>
                  <Text style={styles.listTitle}>{item.title}</Text>
                  <Text style={styles.dateText}>{item.date}</Text>

                </View>
                <View style={item.type=='deposit'?styles.amountTextViewDeposit:styles.amountTextViewWithDraw}>
                  <Text style={styles.amountText}>Rs. {item.amount}</Text>
                </View>
              </TouchableOpacity>
            )}
          />






        </View>
      </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   backgroundColor: '#fff',
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    
    botSection: {
      // backgroundColor:'green',
      borderColor: 'black',
      // borderWidth:1,
      borderRadius: 10,
      padding: 10,
      paddingBottom:0,
      // flex: 1,
      // margin: 10,
    },
    botSectionTopHeader: {
      justifyContent: 'center',
      alignItems: 'center',
      // backgroundColor:'#ec407a',
      // padding: 10,
    },
  
    rightPartTopSection: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    leftPartTopSection: {
  
    },
    listTitle: {
      // fontSize: 16,
      color: 'black',
      // backgroundColor: 'red',
      // width:'100%',
      margin:5,
    },
      listdate: {
  
    },
    listContainer:{
      // paddingBottom:10,
    },
    leftPartTopSectionText: {
      color: 'white',
    },
    rightPartTopSectionText: {
      color: 'white',
      fontSize: 20,
    },
    botSectionTransactionlist: {
      // paddingBottom:50,
    },
    listItem: {
      backgroundColor: '#ffffff',
      padding: 10,
      marginTop: 10,
      borderRadius: 15,
      flexDirection: 'row',
      // alignItems:"center"
    },
    ionIcon: {
      fontSize: 40,
      color: '#ec407a',
      marginTop:6,
    },
    dateText: {
      margin:5,
      flex: 3,
      // backgroundColor: 'blue',
      // fontSize: 18,
      color: 'black',
    },
    amountTextViewDeposit: {
      position: "absolute",
      right: 15,
      top:15,
      alignItems:'center',
      padding:6,
      borderRadius:10,
      backgroundColor:'#388e3c',
      justifyContent:'center',
      // flexDirection:'row',
      // marginLeft: 100,
    },
    amountTextViewWithDraw: {
      position: "absolute",
      right: 15,
      top:15,
      alignItems:'center',
      padding:6,
      borderRadius:10,
      backgroundColor:'#ec407a',
      justifyContent:'center',
      // flexDirection:'row',
      // marginLeft: 100,
    },
    amountText: {
      fontSize: 18,
      color: 'white'
    },
    listItemDeposit: {
      backgroundColor: 'white',
      padding: 10,
      marginTop: 10,
      borderRadius: 15,
      flexDirection: 'row',
      // alignItems:"center"
  
    },
    listItemWithDraw: {
      backgroundColor: 'white',
      padding: 10,
      marginTop: 10,
      borderRadius: 15,
      flexDirection: 'row',
      // alignItems:"center"
    },
  });