import * as React from 'react';
import { View, Text } from 'react-native';
import Camera from "./Camera";

export default function DetailsScreen({navigation}) {
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.navigate('Home')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Camera Screen</Text>
            <Camera/>
        </View>
    )
}