import { StyleSheet } from 'react-native';

import { cores } from '../theme';

const screenStyles = StyleSheet.create({
  titulo: {
    color: cores.branco,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  tituloClaro: {
    color: cores.textoEscuro,
  },
  texto: {
    color: cores.textoClaro,
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 8,
  },
  textoClaro: {
    color: cores.textoMedio,
  },
  rotulo: {
    color: cores.branco,
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 2,
  },
  rotuloClaro: {
    color: cores.textoEscuro,
  },
  aviso: {
    color: cores.textoClaro,
    fontSize: 13,
    textAlign: 'center',
    lineHeight: 19,
    marginTop: 12,
  },
  avisoClaro: {
    color: cores.textoMedio,
  },
  telaCalendario: {
    width: '100%',
    alignItems: 'center',
  },
  areaZoomCalendario: {
    width: '100%',
    alignItems: 'center',
    overflow: 'hidden',
    paddingVertical: 6,
  },
  imagemCalendario: {
    resizeMode: 'contain',
    borderRadius: 10,
  },
  botaoContato: {
    width: 190,
    height: 50,
    backgroundColor: cores.botao,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 12,
  },
  textoBotao: {
    color: cores.branco,
    fontSize: 15,
    fontWeight: 'bold',
  },
  botaoSecundario: {
    minWidth: 140,
    height: 38,
    backgroundColor: cores.botao,
    borderRadius: 19,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 8,
  },
  textoBotaoSecundario: {
    color: cores.branco,
    fontSize: 13,
    fontWeight: 'bold',
  },
});

export default screenStyles;
