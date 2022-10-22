import { Text, View,StyleSheet } from "react-native";

export default function Profile({route,navigation}){
  const {name}=route.params;
    return (

        <View style={styles.container}>
            <Text>Hello This is {JSON.stringify(name)} !!!</Text>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });