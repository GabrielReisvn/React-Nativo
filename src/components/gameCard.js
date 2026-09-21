//Etapa 4; dados  dos jogos!!;
// ==============================
// reutilizando o componente em 2 telas diferentes

import { View, Text, Image, Pressable, StyleSheet} from "react-native";

import { useRouter } from "expo-router";

import { cores } from "../data/tema";
import { jogo } from "../data/jogos";

export default function gamecard(jogos){
    const router = useRouter();
    return(
        <Pressable 
        style={styles.card}
        onPress={() => router.push(`/jogos/${jogo.id}`)}
        >
        
            <Image source={jogo.imagem} style={style.Image}/>
            <view style={styles.info}>
                <text style={Styles.nome} numberOfLines={1}>
                    {jogo.nome}
                </text>
                <text style={styles.genero}>{jogo.genero}</text>
                <text style={styles.nota}> ⭐{jogo.genero}</text>
            </view>
        
        </Pressable>
    )
}