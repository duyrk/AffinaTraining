import {Dimensions, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useCallback} from 'react';
import {colors, font, fontFamily, normalize} from '../../../themes';
import FastImage from 'react-native-fast-image';
interface ArtistItemProps {
  id: number;
  name: string;
  image: string;
}
const {width, height} = Dimensions.get('screen');
const ArtistItem: React.FC<ArtistItemProps> = ({id, name, image}) => {
  const handleClickOnItem = useCallback(() => {
    console.log('clicked');
  }, []);
  return (
    <Pressable style={styles.container} onPress={handleClickOnItem}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{marginStart: 5}}>
          <FastImage
            source={{
              uri: image,
            }}
            style={{
              width: normalize.h(60),
              height: normalize.h(60),
              borderRadius: normalize.h(30),
            }}
          />
        </View>

        <Text style={styles.titleText}>{name}</Text>
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

export default ArtistItem;

const styles = StyleSheet.create({
  container: {
    height: normalize.h(60),
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: normalize.h(15),
  },
  titleText: {
    fontSize: font.size.h4,
    color: colors.dark.primaryText,
    fontWeight: '600',
    marginStart: 10,
  },
  artistText: {
    fontSize: font.size.h3,
    color: colors.dark.primaryText,
    fontWeight: '500',
  },
});
