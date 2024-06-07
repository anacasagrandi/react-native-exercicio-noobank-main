import React, { startTransition } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Componente de balanço
export default function Balance({saldo, gastos}) {
    return (
      <View style={styles.container}>
       {/* Item de saldo */}
       <View style={styles.item}>
           <Text style={styles.itemTitle}>Saldo</Text>
           <View style={styles.content}>
               <Text style={styles.currencySymbol}>R$</Text>
               <Text style={styles.balance}>{saldo}</Text>
           </View>
       </View>
   
       {/* Item de gastos */}
       <View style={styles.item}>
           <Text style={styles.itemTitle}>Gastos</Text>
           <View style={styles.content}>
               <Text style={styles.currencySymbol}>R$</Text>
               <Text style={styles.expenses}>-{gastos}</Text>
           </View>
       </View>
      </View>
     );
   }
   
   // Estilos CSS

const styles = StyleSheet.create ({
    container:{
        backgroundColor: '#FFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: 18,
        paddingEnd:18,
        marginTop: -24,
        marginHorizontal: 14,
        borderRadius: 4,
        paddingVertical:22,
        zIndex:99,
    },
    itemTitle:{
        fontSize:20,
        color: '#DADADA',
    },
    content:{
        flexDirection: 'row',
        alignItems:'center',
    },
    currencySymbol:{
        color: '#dadada',
        marginRight:6,
    },
    balance:{
        fontSize:22,
        color: '#2ecc71',
    },
    expenses:{
        fontSize:22,
        color:'#e74c3c' 
    }
})