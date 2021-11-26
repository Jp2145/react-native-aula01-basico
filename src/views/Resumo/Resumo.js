import React from 'react';
import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import estiloResumo from './estiloResumo';

function Resumo() {

    return(

        <View style={estiloResumo.container}>
            <View style={estiloResumo.borda}>
                 
            <Text style={estiloResumo.texto01}> Martin Luther King </Text>
             <Text style={estiloResumo.texto}>  O Martin Luther King (1929-1968) foi um ativista norte-americano, que lutou contra a discriminação racial e tornou-se um dos mais importantes líderes dos movimentos pelos direitos civis dos negros nos Estados Unidos. Recebendo o Prêmio Nobel da Paz em 1964. </Text>
<Text style={estiloResumo.texto02}> Aperte "Voltar" para retornar a tela inicial </Text>

                <TouchableOpacity style={estiloResumo.botaoContainer}>
                   <Text style={estiloResumo.botaoTexto}>Voltar</Text> 
                </TouchableOpacity>  
            </View>
        </View>
    )
}
export default Resumo;