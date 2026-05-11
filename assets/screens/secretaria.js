import { Alert, Linking, Pressable, Text, View } from 'react-native';

import styles from './screenStyles';

const whatsapp = '557531823356';

export default function Secretaria({ sistemaEscuro }) {
  async function abrirWhatsapp() {
    try {
      await Linking.openURL(`https://wa.me/${whatsapp}`);
    } catch {
      Alert.alert('Não foi possível abrir o WhatsApp.');
    }
  }

  return (
    <View>
      <Text style={[styles.titulo, !sistemaEscuro && styles.tituloClaro]}>Secretaria</Text>

      <Text style={[styles.rotulo, !sistemaEscuro && styles.rotuloClaro]}>Unidade</Text>
      <Text style={[styles.texto, !sistemaEscuro && styles.textoClaro]}>
        SENAI Alagoinhas
      </Text>

      <Text style={[styles.rotulo, !sistemaEscuro && styles.rotuloClaro]}>Endereço</Text>
      <Text style={[styles.texto, !sistemaEscuro && styles.textoClaro]}>
        Praça Barão do Rio Branco, 55 - Centro
      </Text>

      <Text style={[styles.rotulo, !sistemaEscuro && styles.rotuloClaro]}>Horário</Text>
      <Text style={[styles.texto, !sistemaEscuro && styles.textoClaro]}>
        Segunda a sexta, das 8h às 17h
      </Text>

      <Text style={[styles.rotulo, !sistemaEscuro && styles.rotuloClaro]}>WhatsApp</Text>
      <Text style={[styles.texto, !sistemaEscuro && styles.textoClaro]}>
        (75) 3182-3356
      </Text>

      <Text style={[styles.aviso, !sistemaEscuro && styles.avisoClaro]}>
        Atendimento por mensagens.
      </Text>

      <Pressable style={styles.botaoContato} onPress={abrirWhatsapp}>
        <Text style={styles.textoBotao}>Abrir WhatsApp</Text>
      </Pressable>
    </View>
  );
}
