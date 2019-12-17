import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class TextStudy2 extends React.Component {
    render() {
        return (
            // View的子元素默认是纵向排列的，即便放置的是Text内行元素也是这样
            // 那么因为RN对块级元素默认采用的是flex布局，而且是纵向排列的
            <View>
                <Text>啦啦啦</Text>
                <Text>我是卖报的小画家</Text>
                <Text>我是行内元素，一行显示！！！</Text>
            </View>
        )
    }
}
