import { Text, View } from 'react-native';

import styles from './screenStyles';

export default function Info({ sistemaEscuro }) {
  return (
    <View>
      <Text style={[styles.titulo, !sistemaEscuro && styles.tituloClaro]}>Informações</Text>

      <Text style={[styles.rotulo, !sistemaEscuro && styles.rotuloClaro]}>Curso</Text>
      <Text style={[styles.texto, !sistemaEscuro && styles.textoClaro]}>
        Desenvolvimento de Sistemas
      </Text>

      <Text style={[styles.rotulo, !sistemaEscuro && styles.rotuloClaro]}>Turno</Text>
      <Text style={[styles.texto, !sistemaEscuro && styles.textoClaro]}>
        Noturno
      </Text>

      <Text style={[styles.rotulo, !sistemaEscuro && styles.rotuloClaro]}>Unidade</Text>
      <Text style={[styles.texto, !sistemaEscuro && styles.textoClaro]}>
        SENAI Alagoinhas
      </Text>

      <Text style={[styles.aviso, !sistemaEscuro && styles.avisoClaro]}>
        App criado para reunir informações importantes da turma em um só lugar.
      </Text>
    </View>
  );
}
