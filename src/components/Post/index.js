
import { Text, View, Image, TouchableOpacity } from 'react-native';

import { styles } from './style';

export default function Post(props){
    return(
        <View style={styles.content}>
            <View style={styles.header}>
                <View style={styles.perfil}>
                    <Image style={styles.perfilPicture} source={{ uri: 'https://priyamada.files.wordpress.com/2011/05/deathnote_anime_cast_500.jpg' }} />
                    <Text style={styles.title}>{props.item.usuario}</Text>
                </View>
                <TouchableOpacity>
                    <Image style={styles.menu} source={require('../../assets/menu.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.picture}>
                <Image style={styles.imagePicture} source={{ uri: 'https://priyamada.files.wordpress.com/2011/05/deathnote_anime_cast_500.jpg' }} />
            </View>
            <View style={styles.actios}>
                <View style={styles.actionsContent}>
                    <TouchableOpacity>
                        <Image style={styles.icones} source={require('../../assets/like.png')}    resizeMode="contain" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={styles.icones} source={require('../../assets/coments.png')} resizeMode="contain" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={styles.icones} source={require('../../assets/send.png')}    resizeMode="contain" />
                    </TouchableOpacity>
                </View>
                <View style={styles.actionsContent} >
                    <TouchableOpacity>
                        <Image style={styles.icones} source={require('../../assets/add.png')}     resizeMode="contain" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.coments}>
                <View style={styles.contentComents}>
                    <Text style={styles.textTitle}>Curtido por</Text>
                    <Text style={styles.comentsPerfil}>m_jskaj e outras pessoas</Text>
                </View>
                <View style={styles.contentUse}>
                    <Text style={styles.titleUser}>{props.item.usuario}</Text>
                    <Text style={styles.textUser}>Titulo da foto da publicação de exemplo</Text>
                </View>
                <Text style={styles.titleComents}>Ver todos os 5 comentários</Text>
            </View>
        </View> 
    );
}