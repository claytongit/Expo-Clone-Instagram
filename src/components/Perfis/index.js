
import { View, FlatList } from 'react-native';

import { styles } from './style';

import CardPerfil from '../CardPerfil';

import { data } from '../../services/data';

export default function Perfis(){
    return(
        <View style={styles.container}>
            <FlatList 
                data={data}
                renderItem={CardPerfil}
                keyExtractor={item => item.id}
                horizontal={true}
            />
        </View>
    );
}