import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Box from './components/Box';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.statusBar}>
        <Text style={styles.status}>LISTAS</Text>
        <StatusBar style='auto' />
      </View>
      <View>
        <Box texto='Animais' corDeFundo='#FFA4A4' corDoTexto='#C62222' />
      </View>
      <View>
        <Box texto='Carros' corDeFundo='#EDA4FF' corDoTexto='#7422C6' />
      </View>
      <View>
        <Box texto='Peixes' corDeFundo='#A4D4FF' corDoTexto='#2277C6' />
      </View>

      <View>
        <Box texto='Times' corDeFundo='#A4FFC3' corDoTexto='#22C646' />
      </View>
      <View>
        <Box texto='Filmes' corDeFundo='#D1D6D3' corDoTexto='#434A44' />
      </View>
      <View>
        <Box texto='Linguagens' corDeFundo='#E8EFBD' corDoTexto='#747D10' />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusBar: {
    backgroundColor: '#2A9F91',
    alignItems: 'center',
    marginTop: -60,
    marginBottom: 20,
    width: '100%',
    height: 150,
    justifyContent: 'center',
  },
  status: {
    fontSize: 25,
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 50,
  },
});
export default App;
