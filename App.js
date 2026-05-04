import { useState } from 'react';
import { View, Text, Image, StyleSheet, Pressable, ScrollView } from 'react-native';

export default function App() {
  
  const [dark, setDark] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>

     
      <View style={styles.header}>
        <View style={styles.profile}>
          <View style={styles.avatar} />
          <Text style={styles.profileText}>Perfil</Text>
        </View>

        <Image
          source={require('./assets/senai_logo.png')}
          style={styles.logo}
        />
      </View>

     
      <Text style={styles.title}>Bem-vindo Aluno!</Text>

     
      <View style={styles.card}>

        <View style={styles.row}>
          <Pressable style={styles.item}>
            <Text style={styles.icon}>🎓</Text>
            <Text style={styles.label}>Informações</Text>
          </Pressable>

          <Pressable style={styles.item}>
            <Text style={styles.icon}>👨‍🏫</Text>
            <Text style={styles.label}>Professores</Text>
          </Pressable>
        </View>

        <View style={styles.row}>
          <Pressable style={styles.item}>
            <Text style={styles.icon}>📅</Text>
            <Text style={styles.label}>Calendário</Text>
          </Pressable>

          <Pressable style={styles.item}>
            <Text style={styles.icon}>🕒</Text>
            <Text style={styles.label}>Secretaria</Text>
          </Pressable>
        </View>

      </View>

    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87B6E0',
    paddingTop: 60,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  header: {
    width: '90%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
  },

  profile: {
    alignItems: 'center',
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#fff',
  },

  profileText: {
    fontSize: 12,
    marginTop: 5,
  },

  logo: {
    width: 120,
    height: 50,
    resizeMode: 'contain',
    position:  'absolute',
    resizeMode: 'contain',
    left:'50%',
    transform: [{ translateX: -60 }],
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },

  card: {
    marginTop: 30,
    width: '90%',
    backgroundColor: '#DCE9F6',
    borderRadius: 25,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.15,
    shadowRadius: 15,
    elevation: 10,
    transform: [{ translateY: -10 }],
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },

  item: {
    alignItems: 'center',
    width: 120,
  },

  icon: {
    fontSize: 40,
    marginBottom: 5,
  },

  label: {
    textAlign: 'center',
    fontSize: 12,
  },
});