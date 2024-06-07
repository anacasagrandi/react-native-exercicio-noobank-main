import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Movements({ data, showValues }) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.date}>{data.date}</Text>
      <View style={styles.content}>
        <Text style={styles.label}>{data.label}</Text>
        {/* Bloco condicional para exibir ou não o valor */}
        {showValues ? (
          <Text style={data.type === 1 ? styles.revenues : styles.expenses}>
            R$ {data.type === 0 && '-'}{data.value}
          </Text>
        ) : (
          <View style={styles.hideValue} />
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 24,
    borderBottomWidth: 0.5,
    borderBottomColor: '#dadada',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 2,
    marginBottom: 8,
  },
  date: {
    color: '#c7c7c7',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  revenues: {
    fontSize: 16,
    color: '#2ecc71',
    fontWeight: 'bold',
  },
  expenses: {
    fontSize: 16,
    color: '#e74c3c',
    fontWeight: 'bold',
  },
  hideValue: {
    marginTop: 6,
    width: 80,
    height: 10,
    backgroundColor: '#DADADA',
    borderRadius: 8,
  }
});