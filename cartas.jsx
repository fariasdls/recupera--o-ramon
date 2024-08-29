import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, Button, StyleSheet } from 'react-native';

// Dados das cartas
const cartas = [
  {
    id: '1',
    nome: 'Mago Negro',
    pontos: 2500,
    imagem: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgElLgD1x-P5lUVOs6DGGLwOg2g5TEJ_jkyYMhPgCYuogexhoodm0wrfXK9M_JFb95mB9FHj_5oaFy90w5H_Mz6u8YMxARHMGYvUIEuM1r5p4fkCa6XQTPMcSxyGcjA78y_URdaSZO9TqTDsHTWIER_9VCkfz3xq8RbXSjXOMFsTTv2x5PXmuydquG7kQ/w440-h640/Mago%20Negro.png'
  },
  {
    id: '2',
    nome: 'Exódia',
    pontos: 8000,
    imagem: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhuQOeRhdyHWYbQHMVoXiA82v9ecwVC9f-hhdrlkU7WfdLz2zT9ODNHMgObmTUhNArBLbaIVgDbIXSZrWHMhlUrIsNVxHyUMggWTUR1YPpZJJ5P_HyMvR8WoQrBwcJqqJFrSWWz6tiNNAt5NzMJYPh14moJtJUzxTLBI0vE9JAx18eWNDV9_a0_SA5raQ/w440-h640/1.png'
  },
  {
    id: '3',
    nome: 'Rei Caveira',
    pontos: 3500,
    imagem: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgBH55gRcknhfXRseqKRPHstsZtrSSw6iO_2t391HAAjBHIQBWZjSllABMGDtg69BsFSa09VmgFuMj5spmIe5T2tFCm5CXPz-oa5XWr0N6F8_6UngjN8QOM-oSwzHljw66P8t0y__IxiFj6ynt4JVX37pT8_zJb5vv-fPVy4VQtAViNJRtXzgRxAZxtVQ/w440-h640/Rei%20Caveira.png'
  },
  {
    id: '4',
    nome: 'Dragão Bebê',
    pontos: 1000,
    imagem: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj_KPxiY4waZHV0nmdm-iVE9IVCfQIANuLcufOI8-t6Ju9ymw_0ZuqYFF83f5_HtUDJ3jEH72QLyi1r9mNTJS-PuhdtrDttQ86DIKtb6HfIKpQJ2GRSzDYL7laQANi1rDavkjDh9RePobPg/w440-h640/BEBEDRAS.png'
  }
];

const App = () => {
  const [selectedCard1, setSelectedCard1] = useState(null);
  const [selectedCard2, setSelectedCard2] = useState(null);
  const [result, setResult] = useState('');

  const duel = () => {
    if (!selectedCard1 || !selectedCard2) {
      setResult('Selecione duas cartas para duelar.');
      return;
    }
    if (selectedCard1.pontos > selectedCard2.pontos) {
      setResult(`${selectedCard1.nome} vence com ${selectedCard1.pontos} pontos!`);
    } else if (selectedCard1.pontos < selectedCard2.pontos) {
      setResult(`${selectedCard2.nome} vence com ${selectedCard2.pontos} pontos!`);
    } else {
      setResult('Empate!');
    }
  };

  const renderCard = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => {
        if (!selectedCard1) {
          setSelectedCard1(item);
        } else if (!selectedCard2) {
          setSelectedCard2(item);
        }
      }}
    >
      <Image source={{ uri: item.imagem }} style={styles.image} />
      <Text style={styles.cardText}>{item.nome}</Text>
      <Text style={styles.cardText}>{item.pontos} pontos</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={cartas}
        renderItem={renderCard}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <Button title="Duelar" onPress={duel} />
      <Text style={styles.result}>{result}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  card: {
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 150,
    borderRadius: 10,
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  result: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default App;
