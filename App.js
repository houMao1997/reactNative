import React from 'react';
// 导入RN相关的组件
import { StyleSheet, Text, View } from 'react-native';

import ViewStudy from './components-study/ViewStudy';
import TextStudy from './components-study/TextStudy';
import TextStudy2 from './components-study/TextStudy2';
import TextStudy3 from './components-study/TextStudy3';
import ButtonStudy from './components-study/ButtonStudy';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ViewStudy></ViewStudy>
        <TextStudy></TextStudy>
        <TextStudy2></TextStudy2>
        <TextStudy3></TextStudy3>
        <ButtonStudy></ButtonStudy>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  font: {
    fontSize: 30,
    lineHeight: 50,
    color: "red"
  }
});
