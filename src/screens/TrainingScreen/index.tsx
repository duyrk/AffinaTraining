import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, { useRef } from 'react';
import {colors, font, fontFamily, normalize} from '../../themes';
import FastImage from 'react-native-fast-image';
import MusicItem from './components/MusicItem';
import ArtistItem from './components/ArtistItem';
import CategoryComponent from './components/CategoryComponent';
import ColumnChart from './components/ColumnChart';
import PieChart from './components/PieChart';
import MovableItem from './components/MovableItem';

const data = [
  {label: 'Mon', x: 0, y: 0},
  {label: 'Tues', x: 1, y: 4},
  {label: 'Wed', x: 2, y: 30},
  {label: 'Thur', x: 3, y: 15},
  {label: 'Fri', x: 4, y: 40},
  {label: 'Sat', x: 5, y: 50},
  {label: 'Sun', x: 6, y: 40},
];
const musicData = [
  {
    id: 1,
    title: "We don't talk anymore",
    artist: 'Charlie Puth',
    image:
      'https://cdns-images.dzcdn.net/images/cover/948200588c813c1afd10f29b56e0ce50/500x500.jpg',
  },
  {
    id: 2,
    title: 'SKYLIGHT',
    artist: 'Aimer',
    image:
      'https://www.tokyohive.com/upload/2023/09/content/121916/1694560579-20230912-aimer.jpg',
  },
  {
    id: 3,
    title: 'Cold Rain',
    artist: 'Aimer',
    image:
      'https://images.genius.com/09a412c13c78f61ebf095eb4e9d2bd31.1000x1000x1.jpg',
  },
  {
    id: 4,
    title: 'Peaches',
    artist: 'Justin Bieber',
    image:
      'https://upload.wikimedia.org/wikipedia/vi/0/0a/Justin_Bieber_-_Peaches.png',
  },
  {
    id: 5,
    title: 'Monster',
    artist: 'Shawn Mendes & Justin Bieber',
    image:
      'https://i.discogs.com/r6_EUb040F63nQKx-D6yD-gZQhr9H6-HCfb267GTYzk/rs:fit/g:sm/q:90/h:597/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE2Mjg2/MDAxLTE2MDY1ODYw/MzItMTEzNS5qcGVn.jpeg',
  },
  {
    id: 6,
    title: 'Crossing Field',
    artist: 'LiSA',
    image:
      'https://avatar-ex-swe.nixcdn.com/song/2019/10/31/9/b/0/0/1572504262813_640.jpg',
  },
  {
    id: 7,
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    image:
      'https://upload.wikimedia.org/wikipedia/en/e/e6/The_Weeknd_-_Blinding_Lights.png',
  },
  {
    id: 8,
    title: 'Save your tears',
    artist: 'The Weeknd',
    image:
      'https://i1.sndcdn.com/artworks-y9poIzN0X5nza2Mb-HZXfzA-t500x500.jpg',
  },
  {
    id: 9,
    title: 'Lying',
    artist: 'Thrillchaser',
    image:
      'https://pbs.twimg.com/media/Fb8a13uX0AQyjn5?format=jpg&name=4096x4096',
  },
  {
    id: 10,
    title: 'The Tempest',
    artist: 'pedulum band',
    image: 'https://i1.sndcdn.com/artworks-000159642286-330ycs-t500x500.jpg',
  },
];
const categoryData = [
  {
    id: 1,
    name: 'Rock',
  },
  {
    id: 2,
    name: 'Lo-fi',
  },
  {
    id: 3,
    name: 'Rap',
  },
  {
    id: 4,
    name: 'EDM',
  },
  {
    id: 5,
    name: 'Drum n Bass',
  },
  {
    id: 6,
    name: 'Retro',
  },
];
const pieSlicesData = [
  {percent: 40, id: 1, color: '#2196F3', categoryName: 'Drum and Bass'},
  {percent: 30, id: 2, color: '#FE44AD', categoryName: 'Rock'},
  {percent: 20, id: 3, color: '#F4E372', categoryName: 'Rap'},
  {percent: 10, id: 4, color: '#B5CAEA', categoryName: 'Lo-fi'},
];
type Props = {};
const {width} = Dimensions.get('screen');
const ITEM_HEIGHT = normalize.h(60);

const positions = useRef()
export const TrainingScreen = (props: Props) => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false} >
      <View style={styles.toolbar}>
        <View style={styles.iconBackContainer}>
          <FastImage
            source={require('../../assets/icons/ic_back.png')}
            style={{width: normalize.h(20), height: normalize.h(20)}}
            resizeMode={FastImage.resizeMode.contain}
          />
        </View>
        <Text style={styles.toolbarTitle}>Thống kê nhạc hay trong tuần</Text>
        <View style={{width: normalize.h(24), height: normalize.h(24)}} />
      </View>
      <CategoryComponent data={categoryData} />
      <View style={styles.chartWrapper}>
        <ColumnChart
          width={width}
          height={300}
          data={data}
          horizontalGuides={5}
        />
      </View>
      <View style={styles.chartWrapper}>
        <PieChart data={pieSlicesData} />
      </View>
      <View>
        {pieSlicesData.map(item => {
          return (
            <View key={item.id} style={styles.sliceInfoContainer}>
              <View style={styles.sliceLeftInfo}>
                <View
                  style={{
                    width: normalize.h(10),
                    height: normalize.h(10),
                    backgroundColor: item.color,
                    borderRadius: 5,
                  }}
                />
                <Text
                  style={[styles.sliceText, {marginStart: normalize.h(10)}]}>
                  {item.categoryName}
                </Text>
              </View>
              <Text style={[styles.sliceText]}>{item.percent}%</Text>
            </View>
          );
        })}
      </View>
      <View style={{paddingHorizontal: 10}}>
        <Text style={styles.label}>Top 10 bài nhạc hay nhất tháng</Text>
        {musicData.map((item, index) => {
          return (
            <MusicItem
              key={item.id}
              id={item.id}
              title={item.title}
              artist={item.artist}
              image={item.image}
            />
          );
        })}
      </View>
      <View style={{paddingHorizontal: 10}}>
        <Text style={styles.label}>Top 10 ca sĩ hay nhất tháng</Text>
        {musicData.map((item, index) => {
          return (
            <ArtistItem
              key={item.id}
              id={item.id}
              name={item.artist}
              image={item.image}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark.backgroundColor,
    position:'relative',
  },
  toolbar: {
    backgroundColor: colors.dark.toolbar,
    height: normalize.h(45),
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingStart: normalize.h(20),
  },
  toolbarTitle: {
    fontFamily: fontFamily.bold,
    fontSize: font.size.h2,
    color: colors.dark.primaryText,
  },
  chartWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconBackContainer: {
    width: normalize.h(20),
    height: '100%',
    justifyContent: 'center',
  },
  sliceInfoContainer: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  sliceLeftInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliceText: {color: colors.dark.primaryText, fontSize: font.size.h2},
  label: {
    fontSize: font.size.h1,
    color: colors.dark.primaryText,
    textAlign: 'center',
    marginTop: 20,
  },
});
