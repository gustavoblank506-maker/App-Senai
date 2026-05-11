import { Text, View } from 'react-native';

import styles from './screenStyles';

export default function Professores({ sistemaEscuro }) {
  return (
    <View>
      <Text style={[styles.titulo, !sistemaEscuro && styles.tituloClaro]}>Professores</Text>

      <Text style={[styles.rotulo, !sistemaEscuro && styles.rotuloClaro]}>Docente</Text>
      <Text style={[styles.texto, !sistemaEscuro && styles.textoClaro]}>
        Marcos Vinicius
      </Text>

      <Text style={[styles.rotulo, !sistemaEscuro && styles.rotuloClaro]}>Docente</Text>
      <Text style={[styles.texto, !sistemaEscuro && styles.textoClaro]}>
        Gizelle Karine
      </Text>

      <Text style={[styles.aviso, !sistemaEscuro && styles.avisoClaro]}>
        Professores responsáveis pelo acompanhamento da turma.
      </Text>
    </View>
  );
}
