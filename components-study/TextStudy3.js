import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class TextStudy2 extends React.Component {
    render() {
        return (
            // 在RN中，父文本的样式可以传递给后代文本，也就是样式继承。
            // 但是除了Text与Text组件之间外，其它组件都无法实现样式继承。
            <Text style={ styles.container }>
                <Text>啦啦啦</Text>
                <Text>我是卖报的小画家</Text>
                <Text>我是行内元素，一行显示！！！</Text>
            </Text>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        fontSize: 30,
        lineHeight: 40,
        color: "red"
    }
});
