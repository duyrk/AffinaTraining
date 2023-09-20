import {StyleSheet, View} from 'react-native';
import React from 'react';
import {normalize} from '../../../themes';
import ArtistItem from './ArtistItem';

interface ArtistItemProps {
  id: number;
  name: string;
  image: string;
  positions: Array<number>;
}
const ITEM_HEIGHT = normalize.h(60);
const MovableItem: React.FC<ArtistItemProps> = ({id, name, image, positions}) => {

  return (
    <View style={[styles.container,{top: positions[id] * ITEM_HEIGHT}]}>
        <ArtistItem id={id} name={name} image={image} />
    </View>
  );
};

export default MovableItem;

const styles = StyleSheet.create({
  container: {
    position:'absolute',
    left:0,
    right:0,
  },

});
