import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Balance from '../../components/Balance'; // Importando o componente Balance
import Header from '../../components/Header'; // Importando o componente Header
import Movements from '../../components/Movements'; // Importando o componente Movements
import Actions from '../../components/Actions'; // Importando o componente Actions

// Dados de exemplo para demonstração
const list = [
  { id: 1, label: 'Deposito Bancário', value: '4.395,90', date: '03/02/2024', type: 1 },
  { id: 2, label: 'Conta de luz', value: '300,90', date: '09/02/2024', type: 0 },
  { id: 3, label: 'Salário', value: '7.350,00', date: '05/03/2024', type: 1 },
  { id: 4, label: 'Supermercado', value: '2.350,00', date: '05/04/2024', type: 0 }
];

export default function Home({ route }) {
  const [showValues, setShowValues] = useState(false); // Estado para mostrar/ocultar os valores
  const [showBalance, setShowBalance] = useState(false); // Estado para mostrar/ocultar o saldo

  return (
    <View style={styles.container}>
      <Header name={route.params.name} showValues={showValues} setShowValues={setShowValues} setShowBalance={setShowBalance} />
      {showBalance && <Balance saldo="9.295,90" gastos="5.405,13" />}
      <Actions />
      <Text style={styles.title}>Últimas movimentações</Text>
      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Movements data={item} showValues={showValues} />}
      />
    </View>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  }
});