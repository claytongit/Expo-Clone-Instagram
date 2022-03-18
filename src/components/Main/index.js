import { View, FlatList, ScrollView } from 'react-native';

import { styles } from './style';

import Perfis from '../Perfis';

import Post from '../Post';

import { data } from '../../services/data';

export default function Main(){
    return(
        <ScrollView>
            <Perfis />
            <View style={styles.container}>
                <FlatList 
                    data={data}
                    renderItem={Post}
                    keyExtractor={item => item.id}
                />                
            </View>
        </ScrollView>
    );
}