// Etapa 1: Inicio do projeto - Tela inicial

//tela inicial e {rota/}
import { StyleSheet, Text, View, ScrollView, FlatList, Pressable } from "react-native";

// View: componente de contêiner para layout
// Text: componente para exibir texto
// StyleSheet: para criar estilos
// ScrollView: para criar uma área rolável
// FlatList: para renderizar listas de dados
// Pressable: para criar botões interativos

import { useState } from "expo-router";
// useState: hook para gerenciar estado no componente

import {GameCard} from "../components/GameCard";
// Reutilizar componentes, isso evita duplicação de código e facilita a manutenção do aplicativo

import { jogos } from "../data/jogos";
// Importando um array de objetos que contém informações sobre jogos, como título, descrição e imagem.

import { cores } from "../data/tema";
import { Background } from "expo-router/build/react-navigation";
// Importando um objeto que contém cores usadas no aplicativo, como cores de fundo, texto e botões.

// =====================================
export default function inicio() {
  //obteos o objeto de navegação
  const router = useRouter();

  //=====================================
  //BLOCO 1 - PREPARAÇÃO DE DADOS
  //=====================================


  // Filtra os jogos que são destaques, criando um novo array chamado "destaques" que contém apenas os jogos com a propriedade "destaque" definida como true.
  const destaques = jogos.filter((jogo) => jogo.destaque);

  const populares = [...jogos].sort((a, b) => b.popularidade - a.popularidade).slice(0, 5);
  // ...jogos cria uma copia do array originaç
  // sort((a, b) => b.popularidade - a.popularidade) ordena os jogos em ordem decrescente de popularidade
  // slice(0, 5) seleciona os cinco primeiros jogos do array ordenado, que são os mais populares.

  //=====================================
  //BLOCO 2 - ESTRUTURA DE LAYOUT
  //=====================================

  return (
    //inicio do jsx retornado pelo componente: defie oque sera renderizado na tela
    <ScrollView 
      style={styles.container} 
      contentContainerStyle={styles.conteudo}
      >
     {/* ScrollView : container com conteúdo rolável */}
     <Text style={styles.title}>Bem-vindo ao App de Jogos!</Text>
     {/* ScrollView : container com conteúdo rolável */}
     
     <Text style={styles.subtitle}>Explore os destaques e os jogos mais populares.</Text>

  //=====================================
  //BLOCO 2 - Seção jogos em destaque
  //=====================================
  <Text style={styles.sectionTitle}>Jogos em Destaque</Text>
  {/* FlatList: componente para renderizar listas de dados de forma eficiente */}
  
  <FlatList
    data={destaques}
    //define o array de dados que será renderizado na lista

    keyExtractor={(item) => item.id.toString()}

    //define a função que extrai a chave única de cada item da lista, usando o id do jogo
    horizontal

    //define que a lista será renderizada horizontalmente
    showsHorizontalScrollIndicator={false}
    //define que o indicador de rolagem horizontal não será exibido

    renderItem={({ item }) => <GameCard jogo={item}/>}
    //define a função que renderiza cada item da lista, usando o componente GameCard e passando o objeto do jogo como prop
    />

  //=====================================
  //BLOCO 2.2 - Seção jogos populares 
  //=====================================
    {/* mesma estrutura, mudando os dados */}
  <Text style={styles.sectionTitle}>Jogos Populares</Text>
  {/* tituloDA SEGUNDA SEÇÃO, REAPROVEITANDO O MESMO ESTILO */}
  <FlatList
    data={populares}
    //define o array de dados que será renderizado na lista
    keyExtractor={(item) => item.id}
    //define a função que extrai a chave única de cada item da lista, usando o id do jogo
    horizontal
    //define que a lista será renderizada horizontalmente
    showsHorizontalScrollIndicator={false}
    //define que o indicador de rolagem horizontal não será exibido
    renderItem={({ item }) => <GameCard jogo={item}/>}
    //define a função que renderiza cada item da lista, usando o componente GameCard e passando o objeto do jogo como prop
  />
  //=====================================
  //BLOCO 2.3 - Seção 'Ver todos os jogos'
  //=====================================
    {/* pressable oferece mais controle sobre estilo e feedback */}
  <Pressable 
  style={styles.button}
  //aplica estilo visual
  onPress={() => router.push('./jogos')}
  //onPresss; função executada quando botão é pressionado
  //router.push('./jogos') navega para a rota /jogos, que exibe a lista completa de jogos
  >

    <Text style={styles.buttonText}>Ver todos os jogos</Text>
    {/* texto do botão */}
  </Pressable>


      </ScrollView>
  );
  
}
//=====================================
//Bloco 3; estilos
//=====================================
const styles = Stylesheet.create({
  container: {
    flex :1,
    BackgroundColor: cores.fundo,
  },
  conteudo: {
    padding: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: cores.textoPrincipal
  }, 
  subtitle: {
    fontSize: 15,
    color: cores.textoSecundario,
    marginTop: 4,
    marginBottom: 24,

  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: cores.textoPrincipal,
    marginTop: 8,
    marginBottom: 12,
  },
  button: {
    BackgroundColor: cores.roxo,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop:24,
  },
  buttonText: {
    color: cores.textoPrincipal,
    fontSize: 16,
    fontWeight: 'bold'
  }
})