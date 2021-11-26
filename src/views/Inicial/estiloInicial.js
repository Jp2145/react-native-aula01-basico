import { StyleSheet } from 'react-native';

const estiloInicial = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#CD5C5C',
        justifyContent: 'center',
        alignItems: 'center',
    },   
    borda: {
        backgroundColor: '#8fbc8f',
        width: '80%',
        height: '40%',
        borderRadius: 10,
    },
    texto: {
        fontSize: 20,
        color: '#FFFFFF',
        fontWeight: 'bold',
        padding: 10,
        textAlign: "center",
    },
    botaoContainer: {
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 40,
        marginRight: 40,
        borderRadius: 5,
        height: 40,
        borderWidth: 2,
        borderColor: '#CD5C5C ',
        backgroundColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    botaoTexto: {
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight:'bold'
    },
});

export default estiloInicial;