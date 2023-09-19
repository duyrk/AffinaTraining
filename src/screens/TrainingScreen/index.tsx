import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, font, fontFamily, normalize } from '../../themes'
import FastImage from 'react-native-fast-image';
import MusicItem from './components/MusicItem';
type Props = {}
const { width, height }=  Dimensions.get('screen');
const DATA = [
    {
        id:1,
        title:"We don't talk anymore",
        artist: 'Charlie Puth',
    },
    {
        id:2,
        title:"We don't talk anymore",
        artist: 'Charlie Puth',
    },
    {
        id:3,
        title:"We don't talk anymore",
        artist: 'Charlie Puth',
    },
    {
        id:4,
        title:"We don't talk anymore",
        artist: 'Charlie Puth',
    },
    {
        id:5,
        title:"We don't talk anymore",
        artist: 'Charlie Puth',
    },
    {
        id:6,
        title:"We don't talk anymore",
        artist: 'Charlie Puth',
    },
    {
        id:7,
        title:"We don't talk anymore",
        artist: 'Charlie Puth',
    },
    {
        id:8,
        title:"We don't talk anymore",
        artist: 'Charlie Puth',
    },
    {
        id:9,
        title:"We don't talk anymore",
        artist: 'Charlie Puth',
    },
    {
        id:10,
        title:"We don't talk anymore",
        artist: 'Charlie Puth',
    }
]
export const TrainingScreen = (props: Props) => {
  
  return (
    <View style={styles.container}>
     <View style={styles.toolbar}>
        <View style={{ width:normalize.h(20),height:'100%',justifyContent:'center'}}>
        <FastImage source={require('../../assets/icons/ic_back.png')} style={{width:normalize.h(20), height: normalize.h(20)}} resizeMode={FastImage.resizeMode.contain}/>
        </View>
        <Text style={styles.toolbarTitle}>Thống kê nhạc hay trong tuần</Text>
        <View style={{width:normalize.h(24), height:normalize.h(24)}}/>
     </View>
        <MusicItem/>
    </View>
  )
}


const styles = StyleSheet.create({
container:{
    flex:1,
    backgroundColor: colors.dark.backgroundColor
},
toolbar:{
backgroundColor: colors.dark.toolbar,
height: normalize.h(45),
justifyContent:'space-between',
flexDirection:'row',
alignItems:'center',
paddingStart:normalize.h(20)
},
toolbarTitle:{
fontFamily: fontFamily.bold,
fontSize: font.size.h2,
color: colors.dark.primaryText,

}
})