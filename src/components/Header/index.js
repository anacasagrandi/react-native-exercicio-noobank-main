import { View, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

// Calcula a altura da StatusBar
const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

// Define o componente funcional Header
export default function Header({ name, showValues, setShowValues, setShowBalance }) {
 return (
   // View que representa o container do cabeçalho
   <View style={styles.container}>
     {/* View que contém o conteúdo do cabeçalho */}
     <View style={styles.content}>
       {/* Exibe o nome do usuário */}
       <Text style={styles.username}>Olá, {name}!</Text>
       
       {/* View que contém os ícones */}
       <View style={styles.icons}>
         {/* TouchableOpacity para alternar a exibição dos valores */}
         <TouchableOpacity
           activeOpacity={0.4}
           style={styles.buttonShowValues}
           onPress={() => {
             setShowValues(!showValues);
             setShowBalance(!showValues);
           }}
         >
           {/* Ícone de olho */}
           <Feather name="eye" size={20} color="#FFF" />
         </TouchableOpacity>
         
         {/* TouchableOpacity para exibir o perfil do usuário */}
         <TouchableOpacity activeOpacity={0.4} style={styles.buttonUser}>
           {/* Ícone de usuário */}
           <Feather name="user" size={27} color="#FFF" />
         </TouchableOpacity>
       </View>
     </View>
   </View>
 );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#8000ff',
    paddingTop: statusBarHeight,
    flexDirection: 'row',
    paddingStart: 16,
    paddingEnd: 16,
    paddingBottom: 44,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  username: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  icons: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  buttonUser: {
    width: 44,
    height: 44,
    backgroundColor: 'rgba(255,255,255,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 44 / 2,
  },
  buttonShowValues: {
    width: 33,
    height: 33,
    backgroundColor: 'rgba(255,255,255,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 44 / 2,
    marginRight: 12,
  }
});