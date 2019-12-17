import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class ViewStudy extends React.Component {
    render() {
        return (
            // View就相当于DIV
            // 但是View里面不能写文本！！！
            <View style={styles.container}>
                <View style={styles.one}>
                    <Text>1</Text>
                </View>
                <View style={styles.two}>
                    <Text>2</Text>
                </View>
                <View style={styles.three}>
                    <Text>3</Text>
                </View>
            </View>
        )
    }
}

// 在RN中，很多复杂的样式简写是不可以的，比如font、border、background
const styles = StyleSheet.create({
    container: {
        borderWidth: 10,
        borderStyle: "dashed",
        borderColor: "yellow",
        padding: 20,
        width: 300,
        height: 200,
        marginTop: 20,
        backgroundColor: "blue",
    },
    one: {
        height: 30,
        backgroundColor: "green",
    },
    two: {
        height: 50,
        backgroundColor: "skyblue",
    },
    three: {
        height: 80,
        backgroundColor: "pink",
    }
});
