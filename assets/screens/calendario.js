import { useRef, useState } from 'react';
import { Image, Pressable, Text, useWindowDimensions, View } from 'react-native';

import styles from './screenStyles';

function calcularDistancia(toques) {
  const primeiroToque = toques[0];
  const segundoToque = toques[1];
  const distanciaX = primeiroToque.pageX - segundoToque.pageX;
  const distanciaY = primeiroToque.pageY - segundoToque.pageY;

  return Math.sqrt(distanciaX * distanciaX + distanciaY * distanciaY);
}

export default function Calendario({ sistemaEscuro }) {
  const { width } = useWindowDimensions();
  const [zoom, setZoom] = useState(1);
  const [posicao, setPosicao] = useState({ x: 0, y: 0 });
  const distanciaInicial = useRef(0);
  const zoomInicial = useRef(1);
  const toqueInicial = useRef({ x: 0, y: 0 });
  const posicaoInicial = useRef({ x: 0, y: 0 });
  const larguraCalendario = Math.min(width - 92, 300);
  const alturaCalendario = larguraCalendario * 0.75;

  function limitar(valor, minimo, maximo) {
    return Math.min(Math.max(valor, minimo), maximo);
  }

  function limitarPosicao(novaPosicao, zoomAtual) {
    const limiteX = (larguraCalendario * (zoomAtual - 1)) / 2;
    const limiteY = (alturaCalendario * (zoomAtual - 1)) / 2;

    return {
      x: limitar(novaPosicao.x, -limiteX, limiteX),
      y: limitar(novaPosicao.y, -limiteY, limiteY),
    };
  }

  function iniciarZoom(evento) {
    const toques = evento.nativeEvent.touches;

    if (toques.length === 2) {
      distanciaInicial.current = calcularDistancia(toques);
      zoomInicial.current = zoom;
      return;
    }

    if (toques.length === 1 && zoom > 1) {
      toqueInicial.current = {
        x: toques[0].pageX,
        y: toques[0].pageY,
      };

      posicaoInicial.current = posicao;
    }
  }

  function alterarZoom(evento) {
    const toques = evento.nativeEvent.touches;

    if (toques.length === 2 && distanciaInicial.current > 0) {
      const distanciaAtual = calcularDistancia(toques);
      const novoZoom = zoomInicial.current * (distanciaAtual / distanciaInicial.current);
      const zoomLimitado = Math.min(Math.max(novoZoom, 1), 3);

      setZoom(zoomLimitado);
      setPosicao((posicaoAtual) => limitarPosicao(posicaoAtual, zoomLimitado));
      return;
    }

    if (toques.length === 1 && zoom > 1) {
      const movimentoX = toques[0].pageX - toqueInicial.current.x;
      const movimentoY = toques[0].pageY - toqueInicial.current.y;
      const novaPosicao = {
        x: posicaoInicial.current.x + movimentoX,
        y: posicaoInicial.current.y + movimentoY,
      };

      setPosicao(limitarPosicao(novaPosicao, zoom));
    }
  }

  function redefinirZoom() {
    setZoom(1);
    setPosicao({ x: 0, y: 0 });
  }

  return (
    <View style={styles.telaCalendario}>
      <Text style={[styles.titulo, !sistemaEscuro && styles.tituloClaro]}>Calendário</Text>
      <View
        style={styles.areaZoomCalendario}
        onStartShouldSetResponder={() => true}
        onMoveShouldSetResponder={() => true}
        onTouchStart={iniciarZoom}
        onTouchMove={alterarZoom}
      >
        <Image
          source={require('../calendario_2026.png')}
          style={[
            styles.imagemCalendario,
            {
              width: larguraCalendario,
              height: alturaCalendario,
              transform: [
                { translateX: posicao.x },
                { translateY: posicao.y },
                { scale: zoom },
              ],
            },
          ]}
        />
      </View>

      <Pressable style={styles.botaoSecundario} onPress={redefinirZoom}>
        <Text style={styles.textoBotaoSecundario}>Redefinir zoom</Text>
      </Pressable>
    </View>
  );
}
