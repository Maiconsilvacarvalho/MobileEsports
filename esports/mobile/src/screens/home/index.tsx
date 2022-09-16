import { View, Image, FlatList } from 'react-native';

import logoImg from '../../assets/logo-nlw-esports.png';
import { GameCard } from '../../components/GameCard/Index';
import { Heading } from '../../components/Heading';
import { GAMES } from "../../utils/games";
import { styles } from './styles';



export function Home() {
  return (
    <View style={styles.container}>

      <Image
        source= {logoImg}
        style={styles.logo}
      />

      <Heading
        title="Encontre seu duo!"
        subtitle="Selecione o game que deseja jogar..."
      />

        <FlatList
          data={GAMES} //lista os games
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