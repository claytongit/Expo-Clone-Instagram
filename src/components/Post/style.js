
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    header:{
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    menu:{
        width: 20,
        height: 20
    },
    perfil:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    perfilPicture:{
        width: 40,
        height: 40,
        borderRadius: 100
    },
    title:{
        color: '#FFF',
        marginHorizontal: 10,
        fontWeight: 'bold'
    },
    picture:{
        width: '100%',
        height: 450,
        backgroundColor: 'blue'
    },
    imagePicture:{
        width: '100%',
        height: 450
    },
    actios:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    actionsContent:{
        flexDirection: 'row'
    },
    icones:{
        width: 25,
        marginHorizontal: 10
    },
    coments:{
        paddingHorizontal: 10
    },
    contentComents:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    textTitle:{
        color: '#FFF',
        marginRight: 5,
        fontSize: 14
    },
    comentsPerfil:{
        color: '#FFF',
        fontSize: 14,
        fontWeight: 'bold',
    },
    contentUse:{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 2
    },
    titleUser:{
        color: '#FFF',
        fontWeight: 'bold',
        marginRight: 5,
        fontSize: 14
    },
    textUser:{
        color: '#FFF',
        fontSize: 14
    },
    titleComents:{
        fontSize: 14,
        color: '#afafaf'
    }
});