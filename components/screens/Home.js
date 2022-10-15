import { Button, Text, View } from "react-native";

export default function Home({navigation}) {
    return (
        <View>
            <Text>Hello this is Home!</Text>

            <Button
                        title="Go to Profile"
                        onPress={() => navigation.navigate('Profile')}
                    />
        </View>
    );
};