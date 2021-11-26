import { StyleSheet } from 'react-native';

const estiloDetalhe = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#CD5C5C',
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    borda: {
        backgroundColor: '#8fbc8f',
        width: '80%',
        height: '100%',
        borderRadius: 10,
    },

    textotitulo: {
        fontSize: 25,
        color: '#FFFFFF',
        fontWeight: 'bold',
        textAlign: "center",
        padding: 10
    },

    textoum: {
        fontSize: 20,
        color: '#FFFFFF',
        fontWeight: 'bold',
        padding: 10,
        width: '90%',
        height: '90%',
        textAlign: "justify",
    },
    textodois: {
        fontSize: 20,
        color: '#FFFFFF',
        fontWeight: 'bold',
        padding: 10,
        width: '90%',
        height: '90%',
        textAlign: "justify",
    },
    textotres: {
        fontSize: 20,
        color: '#FFFFFF',
        fontWeight: 'bold',
        padding: 10,
        width: '90%',
        height: '90%',
        textAlign: "justify",
    },
    textoquatro: {
        fontSize: 20,
        color: '#FFFFFF',
        fontWeight: 'bold',
        padding: 10,
        width: '90%',
        height: '90%',
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
        borderColor: '#FFFFFF',
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
export default estiloDetalhe;