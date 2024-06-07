import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

// Biblioteca de ícones
import { AntDesign } from '@expo/vector-icons'

// Componente de ações
export default function Actions() {
 return (
   <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
    {/* Botão de entrada */}
    <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
            <AntDesign name="addfolder" size={26} color='#000'></AntDesign>
        </View>
        <Text style={styles.labelButton}>Entradas</Text>
    </TouchableOpacity>

    {/* Botão de compras */}
    <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
            <AntDesign name="tagso" size={26} color='#000'></AntDesign>
        </View>
        <Text style={styles.labelButton}>Compras</Text>
    </TouchableOpacity>

    {/* Botão de cartões */}
    <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
            <AntDesign name="creditcard" size={26} color='#000'></AntDesign>
        </View>
        <Text style={styles.labelButton}>Cartões</Text>
    </TouchableOpacity>
    
    {/* Botão de boletos */}
    <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
            <AntDesign name="barcode" size={26} color='#000'></AntDesign>
        </View>
        <Text style={styles.labelButton}>Boletos</Text>
    </TouchableOpacity>

    {/* Botão de configurações */}
    <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
            <AntDesign name="setting" size={26} color='#000'></AntDesign>
        </View>
        <Text style={styles.labelButton}>Configurações</Text>
    </TouchableOpacity>
   </ScrollView>
  );
}

// Estilos CSS
const styles = StyleSheet.create({
    container:{
        maxHeight:84,
        marginBottom: 14,
        marginTop:18,
        paddingStart:14,
        paddingEnd:14,
    },
    actionButton:{
        alignItems:'center',
        marginRight:32,
    },
    areaButton:{
        backgroundColor: '#ecf0f1',
        height:60,
        width:60,
        borderRadius:30,
        justifyContent:'center',
        alignItems: 'center',
    },
    labelButton:{
        marginTop:4,
        textAlign: 'center',
        fontWeight: 'bold',
    }
})
