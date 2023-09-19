import { Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useCallback} from 'react';
import {colors, font, fontFamily, normalize} from '../../../themes';
import FastImage from 'react-native-fast-image';
interface MusicItemProps {
  id: number;
  title: string;
  artist: string;
  image: string;
}
const MusicItem: React.FC<MusicItemProps> = ({id, title, artist, image}) => {
  const handleClickOnItem = useCallback(() => {
    console.log('clicked');
  }, []);
  return (
    <Pressable style={styles.container} onPress={handleClickOnItem}>
      <View style={styles.itemLeft}>
        <View
          style={styles.infoContainer}>
          <Text
            style={styles.musicNumber}>
            {id}
          </Text>
          <View style={{height: 1, backgroundColor: '#FFF', width: '100%'}} />
        </View>
        <View>
          <FastImage
            source={{
              uri: image,
            }}
            style={{
              width: normalize.h(50),
              height: normalize.h(50),
              borderRadius: 10,
            }}
          />
        </View>
        <View
          style={styles.itemRight}>
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.artistText}>{artist}</Text>
        </View>
      </View>

      <Pressable>
        <FastImage
          source={require('../../../assets/icons/ic_dots.png')}
          style={{width: 24, height: 24}}
          resizeMode={FastImage.resizeMode.contain}
        />
      </Pressable>
    </Pressable>
  );
};

export default MusicItem;

const styles = StyleSheet.create({
  container: {
    height: normalize.h(60),
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: normalize.v(10),
  },
  titleText: {
    fontSize: font.size.h3,
    color: colors.dark.primaryText,
    fontWeight: '600',
  },
  artistText: {
    fontSize: font.size.h4,
    color: colors.dark.primaryText,
    fontWeight: '500',
  },
  itemLeft:{flexDirection: 'row', alignItems: 'center'},
  infoContainer:{
    width: normalize.h(40),
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: normalize.v(10),
    paddingHorizontal: normalize.h(10),
    height: normalize.h(60),
  },
  musicNumber: {
    color: colors.dark.primaryText,
    fontFamily: fontFamily.regular,
    fontSize: font.size.h2,
  },
  itemRight:{
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginStart: 10,
    paddingVertical: 8,
  }
});
