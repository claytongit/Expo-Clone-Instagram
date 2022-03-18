
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    containerLogo:{},
    logo:{
        width: 120,
        height: 50
    },
    containerIcons: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    icons: {
        marginHorizontal: 10,
        width: 25,
        opacity: .7
    }
});