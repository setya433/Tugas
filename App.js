import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={[styles.frame, {
      flexDirection: "column",
      textAlign: 'center'
    }]}>
      
      <View
      style={{
        flex: 20,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
          <Text>Kosong Masih Belum ada Item</Text>       
    </View>

      <View style={{ flex: 1, backgroundColor: "grey"}} />
      

      <View style={styles.container}>
        <View style={[styles.square,{backgroundColor:'yellow'}]} />
        <View style={styles.square} />
        <View style={styles.square} />
        </View> 

    </View>
  );
};

const styles = StyleSheet.create({
  square: {
    backgroundColor: "white",
    width: 25,
    height: 25,
    margin: 15,
    padding: 14,
    
  },
  container: {
    backgroundColor: "#5b5b5b",
    alignItems: "flex-end", 
    justifyContent: "space-between", 
    flexDirection: "row",
    width: '100%',
  },

  frame: {
    backgroundColor: 'grey',
    flex: 1,
    alignItems: 'center',
    textAlign: 'center',
    
  },

  txt: {
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },

});

export default App;
