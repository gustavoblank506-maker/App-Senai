import { useState } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, useColorScheme, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { cores } from './assets/theme';
import Info from './assets/screens/Info';
import Professores from './assets/screens/professores';
import Calendario from './assets/screens/calendario';
import Secretaria from './assets/screens/secretaria';

export default function App() {
  const [tela, setTela] = useState('inicio');
  const sistemaEscuro = useColorScheme() === 'dark';

  function abrirTela() {
    if (tela === 'informacoes') {
      return <Info sistemaEscuro={sistemaEscuro} />;
    }

    if (tela === 'professores') {
      return <Professores sistemaEscuro={sistemaEscuro} />;
    }

    if (tela === 'calendario') {
      return <Calendario sistemaEscuro={sistemaEscuro} />;
    }

    return <Secretaria sistemaEscuro={sistemaEscuro} />;
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={[styles.fundo, sistemaEscuro ? styles.fundoNoite : styles.fundoDia]}
      >
        <ScrollView
          style={styles.fundo}
          contentContainerStyle={styles.container}
        >
          <StatusBar style={sistemaEscuro ? 'light' : 'dark'} />

          <View style={styles.topo}>
            <Image source={require('./assets/senai_logo.png')} style={styles.logo} />
          </View>

          {tela === 'inicio' ? (
            <View style={[styles.card, sistemaEscuro ? styles.cardNoite : styles.cardDia]}>
              <Text style={[styles.titulo, !sistemaEscuro && styles.tituloClaro]}>App Senai</Text>

              <Pressable style={styles.botao} onPress={() => setTela('informacoes')}>
                <Text style={styles.textoBotao}>Informações</Text>
              </Pressable>

              <Pressable style={styles.botao} onPress={() => setTela('professores')}>
                <Text style={styles.textoBotao}>Professores</Text>
              </Pressable>

              <Pressable style={styles.botao} onPress={() => setTela('calendario')}>
                <Text style={styles.textoBotao}>Calendário</Text>
              </Pressable>

              <Pressable style={styles.botao} onPress={() => setTela('secretaria')}>
                <Text style={styles.textoBotao}>Secretaria</Text>
              </Pressable>
            </View>
          ) : (
            <View
              style={[
                styles.card,
                sistemaEscuro ? styles.cardNoite : styles.cardDia,
                tela === 'calendario' && styles.cardCalendario,
              ]}
            >
              {abrirTela()}

              <Pressable
                style={[
                  styles.botaoVoltar,
                  tela === 'calendario' && styles.botaoVoltarCalendario,
                ]}
                onPress={() => setTela('inicio')}
              >
                <Text style={styles.textoBotao}>Voltar</Text>
              </Pressable>
            </View>
          )}

          <Text style={[styles.rodape, !sistemaEscuro && styles.rodapeClaro]}>
            Projeto de Aplicativo SENAI.
          </Text>
          <Text style={[styles.rodape, !sistemaEscuro && styles.rodapeClaro]}>
            Desenvolvido por Gustavo Rocha de Jesus
          </Text>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  fundo: {
    flex: 1,
  },
  fundoNoite: {
    backgroundColor: cores.fundoNoite,
  },
  fundoDia: {
    backgroundColor: cores.fundoDia,
  },
  container: {
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 30,
    paddingHorizontal: 24,
  },
  topo: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 36,
  },
  logo: {
    width: 220,
    height: 78,
    resizeMode: 'contain',
  },
  card: {
    width: '100%',
    borderWidth: 2,
    borderRadius: 24,
    alignItems: 'center',
    paddingTop: 26,
    paddingBottom: 24,
    paddingHorizontal: 18,
    marginBottom: 22,
  },
  cardNoite: {
    backgroundColor: cores.cardNoite,
    borderColor: cores.bordaNoite,
  },
  cardDia: {
    backgroundColor: cores.cardDia,
    borderColor: cores.bordaDia,
  },
  cardCalendario: {
    paddingTop: 18,
    paddingBottom: 18,
    paddingHorizontal: 12,
    overflow: 'hidden',
  },
  titulo: {
    color: cores.branco,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 22,
  },
  tituloClaro: {
    color: cores.textoEscuro,
  },
  botao: {
    width: 190,
    height: 50,
    backgroundColor: cores.botao,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 18,
  },
  botaoVoltar: {
    width: 150,
    height: 46,
    backgroundColor: cores.botao,
    borderRadius: 23,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 22,
  },
  botaoVoltarCalendario: {
    height: 42,
    marginTop: 14,
  },
  textoBotao: {
    color: cores.branco,
    fontSize: 15,
    fontWeight: 'bold',
  },
  rodape: {
    color: cores.rodapeNoite,
    fontSize: 13,
    textAlign: 'center',
    marginTop: 10,
  },
  rodapeClaro: {
    color: cores.textoMedio,
  },
});
