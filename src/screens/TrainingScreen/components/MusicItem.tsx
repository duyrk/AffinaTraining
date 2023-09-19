import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, font, fontFamily, normalize } from '../../../themes';
import FastImage from 'react-native-fast-image'
type Props = {}
const {width, height} = Dimensions.get("screen");
const MusicItem = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row'}}>
        <View style={{backgroundColor:'black', height:'100%', width:20, alignItems:'center', justifyContent:'space-between', paddingHorizontal:normalize.h(5), paddingVertical:10}}>
            <Text style={{color:colors.dark.primaryText, fontFamily:fontFamily.regular, fontSize: font.size.h2}}>1</Text>
            <View style={{height:1, backgroundColor:'#FFF', width:'100%'}}/>
        </View>
        <View style={{marginStart:5}}>
        <FastImage source={{uri:"https://cdns-images.dzcdn.net/images/cover/948200588c813c1afd10f29b56e0ce50/500x500.jpg"}} style={{width:normalize.h(60), height:normalize.h(60), borderRadius:10}}/>
        </View>
        <View style={{flexDirection:'column', justifyContent:'space-between'}}>
            <Text>We don't talk anymore</Text>
            <Text>Charlie Puth</Text>
        </View>
      </View>
   

      <View></View>
    </View>
  )
}

export default MusicItem

const styles = StyleSheet.create({
    container: {
        width:width,
        height: normalize.h(60),
        justifyContent:'space-between',
        backgroundColor: 'red',
        flexDirection:'row'
    },
    titleText:{

    },
    artistText:{
        
    }
})