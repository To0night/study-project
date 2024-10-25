import React from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';

const HorizontalScrollView = () => {
  return (
    <>    
      <ScrollView horizontal={true} style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.text}>Item 1</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.text}>Item 2</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.text}>Item 3</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.text}>Item 4</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.text}>Item 5</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.text}>Item 6</Text>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
  },
  box: {
    width: 150,
    height: 150,
    margin: 10,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});

export default HorizontalScrollView;
