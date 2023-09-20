import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {colors, font, normalize} from '../../../themes';
import {CategoryDataInterface} from '../../type';
interface CategoryComponentProps {
  data: Array<CategoryDataInterface>;
}

interface CategoryItem {
  name: string;
  itemClickCallback: (name: string) => void;
}
const CategoryItem: React.FC<CategoryItem> = props => {
  const {name, itemClickCallback} = props;
  const [disabled, setdisabled] = React.useState(false);
  const handleDisabled = () => {
    itemClickCallback(name);
    let temp = disabled;
    setdisabled(!temp);
  };
  return (
    <Pressable
      onPress={handleDisabled}
      style={[
        styles.itemContainer,
        disabled ? {borderColor: colors.dark.borderColor} : {},
      ]}>
      <Text style={styles.categoryName}>{name}</Text>
    </Pressable>
  );
};
const CategoryComponent: React.FC<CategoryComponentProps> = ({data}) => {
  const [categories, setcategories] = React.useState<Array<string>>([]);
  const handleClickOnItemClicked = (itemName: string) => {
    if (categories.includes(itemName)) {
      setcategories(categories.filter(item => item !== itemName));
    } else {
      setcategories([...categories, itemName]);
    }
  };
  useEffect(() => {
    console.log(categories);
  }, [categories]);

  return (
    <View style={styles.container}>
      {data.map(item => (
        <CategoryItem
          key={item.id}
          name={item.name}
          itemClickCallback={handleClickOnItemClicked}
        />
      ))}
    </View>
  );
};

export default CategoryComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
  },
  itemContainer: {
    backgroundColor: colors.dark.toolbar,
    alignSelf: 'baseline',
    paddingVertical: normalize.v(10),
    paddingHorizontal: normalize.h(20),
    borderRadius: 25,
    marginHorizontal: normalize.h(5),
    marginTop: normalize.v(8),
    borderWidth: 1,
  },
  categoryName: {
    fontSize: font.size.h3,
    color: colors.dark.primaryText,
  },
});
