import { Image, FlatList } from 'react-native';
import {useEffect, useState} from 'react';
import logoImg from '../../assets/logo-nlw-esports.png';
import { GameCard, GameCardProps } from '../../components/GameCard/Index';
import { Heading } from '../../components/Heading';
import {SafeAreaView} from 'react-native-safe-area-context';
import { styles } from './styles';
import React from 'react';
import { Background } from '../../components/Background';
import {useNavigation} from '@react-navigation/native';


export function Home() {
//consumo da api via IP do computador
  const [games, setGames] = useState<GameCardProps[]>([]);
//função para ir para rota de game
  const navigation = useNavigation();

  function handleOpenGame({id, title, bannerUrl}: GameCardProps){
    navigation.navigate('game',{id, title, bannerUrl});//rota ao clica no card
  }

  useEffect(() =>{
    fetch('http://192.168.15.9:3333/games')
    .then(response => response.json())//converter resposta paa json
    .then(data => setGames(data))
  },[]);

  return (

    <Background>
    <SafeAreaView style={styles.container}>

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
            onPress={() =>handleOpenGame(item)}// propriedde para navegação e chamr a função assim pois tem parametro
          />
        )}
        showsHorizontalScrollIndicator = {false}// evitar scroll
        horizontal // deixa card horizontal
        contentContainerStyle={styles.contentList}
      />
        

        

    

    </SafeAreaView>
    </Background>
  );
}