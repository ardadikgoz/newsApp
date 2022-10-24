import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Card from './components/Card';

const App = () => {
  /*  const sayHello = label => {
    console.log('merhaba' + label);
  }; */
  /*  return (
    <SafeAreaView>
      <View style={{backgroundColor: 'white'}}>
        <Text style={{color: 'black'}}>hello World!</Text>
        <Text style={{color: 'black'}}>hello World2!</Text>
      </View>
      <Button
        title="BAAAAAS"
        onPress={() => sayHello(' Goca Daşşaklı Arda Abi')} //parametreli fonsiyonun butonda doğru kullanımı
        disabled={false} //true dersen işlevsiz olur btn
        color="lightcoral"
      />
    </SafeAreaView>
  ); */
  /*   return (
    <SafeAreaView style={styles.container}>
      {/* flex kullanacaksan eğer kesinlikle flex tanımlamak zorundasın */

  /* <View style={styles.box_1} />
      <View style={styles.box_2} />
      <View style={styles.box_3} />
      <View style={styles.box_4} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex kullanacaksan eğer kesinlikle flex tanımlamak zorundasın
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'pink',
    /*justifyContent: 'center',
    alignItems: 'center', */
  /* justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  box_1: {
    width: 75,
    height: 75,
    backgroundColor: 'red',
  },
  box_2: {
    width: 75,
    height: 75,
    backgroundColor: 'blue',
  },
  box_3: {
    width: 75,
    height: 75,
    backgroundColor: 'aqua',
  },
  box_4: {
    width: 75,
    height: 75,
    backgroundColor: 'orange',
  },
  textStyle: {
    color: 'black',
    fontSize: 45,
    textAlign: 'center',
  },
*/
  return (
    <SafeAreaView style={styles.container}>
      <Card title="Eddard Stark" text="Winter is coming..." />
      <Card title="Arif Işık" text="Halı kilim travel." />
      <Card title="Pala" text="Sadece ölüler görür." />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
  },
});

export default App;
