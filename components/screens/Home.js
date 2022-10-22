import { Button, Text, View, StyleSheet } from "react-native";

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Hello this is Home!</Text>
            <Button
                title="Go to Profile"
                onPress={() => navigation.navigate('Profile')}
            />
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
