import {TouchableOpacity,TouchableOpacityProps,Text, ImageBackground, ImageSourcePropType } from 'react-native';
//@ts-ignore
import  {LinearGradient}  from "expo-linear-gradient";
import React from 'react';
import { styles } from './styles';
import { THEME } from '../../theme';

// mostrar o que vai trazer na interfe através da API
export interface GameCardProps{
    id: string,
    title: string,
    _count:{
      ads: number
    };
    bannerUrl: string;
}

interface Props  extends TouchableOpacityProps{
    data:GameCardProps 
}


export function GameCard({data, ...rest}: Props) {

  return (
    <TouchableOpacity style={styles.container}{...rest}>

    <ImageBackground
        style={styles.cover}
        source={{uri: data.bannerUrl}}// trazendo a URL da imagem 
    >


<LinearGradient
        // Background Linear Gradient
        colors={THEME.COLORS.FOOTER}
        style={styles.footer}
      >
      
        <Text style={styles.name}>
            {data.title} {/* trazendo title da API */}
        </Text>

        <Text style={styles.ads}>
            {data._count.ads} anúncios {/* trazendo anúncios da API */}
        </Text>
      </LinearGradient>


      </ImageBackground>
    </TouchableOpacity>
  );
}