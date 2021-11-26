import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import estiloDetalhe from './estiloDetalhe';

function Detalhe() {
    return (
        
        <View style={estiloDetalhe.container}>
            <View style={estiloDetalhe.borda}>

            
            <Text style={estiloDetalhe.textotitulo}> História de Martin Luther King </Text>
            <Text style={estiloDetalhe.textoum}>  Martin Luther King (1929-1968) foi um ativista norte-americano, lutou contra a discriminação racial e tornou-se um dos mais importantes líderes dos movimentos pelos direitos civis dos negros nos Estados Unidos. Recebeu o Prêmio Nobel da Paz em 1964.

Martin Luther King nasceu em Atlanta, Geórgia, Estados Unidos, no dia 15 de janeiro de 1929. Filho e neto de pastores da Igreja Batista resolveu seguir pelo mesmo caminho.

Em 1951, formou-se em Teologia na Universidade de Boston. Convertido em pastor, em 1954, Martin Luther King assumiu a função de pastor em uma igreja na cidade de Montgomery, no Alabama.</Text>

            <Text style={estiloDetalhe.textodois}> Desde jovem, Martin Luther King tomou consciência da situação de segregação social e racial em que viviam os negros de seu país, em especial nos estados do Sul.

Em 1955, começou sua luta pelo reconhecimento dos direitos civis dos negros norte-americanos, com métodos pacíficos, inspirado na figura de Mahatma Gandhi e na teoria da desobediência civil de Henry David Thoreau, as mesmas fontes que inspiraram a luta de Nelson Mandela contra a Apartheid, na África do Sul. Em 1º de dezembro de 1955, a costureira negra Rosa Parks (Rosa Parks) foi presa e multada por ocupar assento branco, pois em um ônibus Montgomery o motorista deve ser branco e os negros só podem ocupar o último assento. O protesto silencioso de Rosa Parks se espalhou rapidamente. Como medida de protesto, o Comitê Político Feminino organizou um boicote aos ônibus urbanos. Martin Luther King apoiou essa ação.Pouca, milhares de negros começaram a caminhar quilômetros no caminho para o trabalho, causando danos à transportadora. O protesto durou 382 dias e terminou em 13 de novembro de 1956, quando a Suprema Corte dos EUA aboliu a segregação nos ônibus de Montgomery. Este é o primeiro sucesso de um movimento desse tipo registrado nos Estados Unidos. Em 21 de dezembro de 1956, Martin Luther King e o padre branco Glenn Smiley entraram juntos e se sentaram na primeira fila do ônibus.</Text>
                
            <Text style={estiloDetalhe.textotres}>  Em 1963, a sua luta atingiu um dos culminantes quando liderou um desfile em Washington que reuniu 250.000 pessoas e proferiu um importante discurso intitulado “Tenho um sonho (em português, tenho um sonho)”. Descreve uma sociedade onde negros e brancos podem viver em harmonia. No mesmo ano, representantes de Martin Luther King e outras organizações anti-racistas foram recebidos pelo presidente John Fitzgerald Kennedy, que prometeu agilizar sua política contra a segregação escolar e o desemprego, que afetou particularmente toda a comunidade negra. Em 22 de novembro de 1963, o presidente foi assassinado. A Lei dos Direitos Civis foi promulgada em 1964 para garantir a tão esperada igualdade entre negros e brancos. No mesmo ano, Martin Luther King ganhou o Prêmio Nobel da Paz. </Text>
             <Text style={estiloDetalhe.textoquatro}>Aperte "Voltar" para retornar a tela inicial</Text>

<TouchableOpacity style={estiloDetalhe.botaoContainer}>
   <Text style={estiloDetalhe.botaoTexto}>Voltar</Text>
</TouchableOpacity>

</View>
</View>
)
}
export default Detalhe;