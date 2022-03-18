
import { View, Image, TouchableOpacity } from 'react-native';

import { styles } from './style';

export default function Header(){
    return(
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Image source={require('../../assets/logo.png')} style={styles.logo} resizeMode="contain" />
            </View>
            <View style={styles.containerIcons}>
                <TouchableOpacity>
                    <Image source={require('../../assets/add.png')}  style={styles.icons} resizeMode="contain" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../../assets/like.png')} style={styles.icons} resizeMode="contain" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../../assets/send.png')} style={styles.icons} resizeMode="contain" />
                </TouchableOpacity>
            </View>
        </View>
    );
}