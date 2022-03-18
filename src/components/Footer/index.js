
import { Image, View, TouchableOpacity } from 'react-native';

import { styles } from './style';

export default function Footer(){
    return(
        <View style={styles.container}>
            <TouchableOpacity>
                <Image style={styles.icons} source={require('../../assets/home.png')} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={styles.icons} source={require('../../assets/search.png')} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={styles.icons} source={require('../../assets/video.png')} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={styles.icons} source={require('../../assets/store.png')} />
            </TouchableOpacity>
            <Image style={styles.iconsPerfil} source={{uri: 'https://priyamada.files.wordpress.com/2011/05/deathnote_anime_cast_500.jpg'}} />
        </View>
    );
}