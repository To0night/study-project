/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { Component } from 'react';
import {useState, useEffect, createRef} from 'react';

import {} from 'react-native';

import {
  View,
  Text,
  ActivityIndicator,
  Button,
  FlatList,
  StyleSheet,
  Dimensions,
} from 'react-native';

// function App(): JSX.Element {
//   const {width: windowWidth} = Dimensions.get('window').width;

//   useEffect(() => {
//     console.log('组件挂载了');
//     return () => {
//       console.log('组件卸载了');
//     };
//   }, [aaa]);

//   const [listData] = useState<Array<listItem>>([
//     {
//       id: 1,
//       title: '这是第一行',
//     },
//     {
//       id: 2,
//       name: '这是第二行',
//     },
//     {
//       id: 3,
//       name: '这是第三行',
//     },
//   ]);

//   const [aaa, setaaa] = useState(123);

//   const styles = StyleSheet.create({
//     loadingContainer: {
//       height: 100,
//       width: windowWidth,
//       position: 'absolute',
//       backgroundColor: 'pink',
//     },
//   });

//   const onClick = () => {
//     setaaa('2213313');
//     console.log(11111);
//   };

//   return (
//     <>
//       <View>
//         <Text>这是一个普通的文字</Text>
//         <ActivityIndicator style={styles.loadingContainer} />
//         <Button title="一个按钮" onPress={onClick} />
//         <FlatList
//           data={listData}
//           renderItem={renderItem}
//           keyExtractor={item => item.id}
//         />
//         <Text>{aaa}</Text>
//       </View>
//     </>
//   );
// }

function renderItem({title}) {
  return <Text>{title}</Text>;
}


import Son from './pages/test/son.js'

class App extends Component{
  constructor(props){
    super(props)
    this.sonComp = createRef()
  }
 

  sonMethods = (type) => {
    this.sonComp.current[type]()
  }

  render(): React.ReactNode {
    return (<>
      <Text>12312</Text>
      <Button title={`点击我调用子组件方法`} onPress={() => this.sonMethods('add')}></Button>
      <Son ref={this.sonComp}></Son>
    </>)
  }
}

export default App;
