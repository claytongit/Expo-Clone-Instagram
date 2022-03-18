
import React, { useEffect, useRef } from 'react';
import { View, Text, Image, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './style';

export default function CardPerfil(props){
    return(
        <View style={styles.containerCard}>
            <LinearGradient colors={['#cc0f0f', '#edba2c']} style={ styles.background }>
                <View style={styles.content}>
                <Image 
                    resizeMode='contain'
                    style={styles.photo} 
                    source={{
                        uri: props.item.photo
                    }} 
                /> 
                </View>
            </LinearGradient>
            <Text style={styles.cardTitle}>{props.item.usuario}</Text>
        </View>
    );
}