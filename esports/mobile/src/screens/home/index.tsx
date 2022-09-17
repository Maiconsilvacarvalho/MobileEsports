import { View, Image, FlatList } from 'react-native';
import {useEffect, useState} from 'react';
import logoImg from '../../assets/logo-nlw-esports.png';
import { GameCard, GameCardProps } from '../../components/GameCard/Index';
import { Heading } from '../../components/Heading';

import { styles } from './styles';



export function Home() {
//consumo da api via IP do computador
  const [games, setGames] = useState<GameCardProps[]>([]);

  useEffect(() =>{
    fetch('http://192.168.15.9:3333/games')
    .then(response => response.json())//converter resposta paa json
    .then(data => setGames(data))
  },[]);




  return (
    <View style={styles.container}>

      <Image
        source= {logoImg}
        style={styles.logo}
      />

      <Heading
        title="Encontre seu duo!"
        subtitle="Selecione o game que deseja jogar."
      />

        <FlatList
          data={games} //lista os games
          keyExtractor={item => item.id}// tras os itens respeitando o ID, 1,2,3 ETC..
          renderItem={({item}) =>(
            <GameCard 
            data={item} // RENDERIZA O CARD
          />
        )}
        showsHorizontalScrollIndicator = {false}// evitar scroll
        horizontal // deixa card horizontal
        contentContainerStyle={styles.contentList}
      />
        

        

    

    </View>
  );
}