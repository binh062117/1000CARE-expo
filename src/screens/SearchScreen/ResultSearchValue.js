import React, {useCallback} from 'react';
import {View, FlatList, Dimensions, StyleSheet} from 'react-native';
import SearchValueItem from './SearchValueItem';

const listResult = [
  {
    id: '1',
    text: 'Đau đầu',
  },
  {
    id: '2',
    text: 'Đau vai',
  },
  {
    id: '3',
    text: 'Đau lưng',
  },
  {
    id: '4',
    text: 'Đau cơ',
  },
];

const ResultSearchValue = () => {
  const keyExtractor = useCallback((item) => {
    return item.id.toString();
  });

  return (
    <View style={styles.wrap}>
      <FlatList
        data={listResult}
        horizontal={false}
        renderItem={({item}) => {
          return <SearchValueItem data={item} />;
        }}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    width: '100%',
    height: Dimensions.get('window').height - 140,
    backgroundColor: '#FFF',

    position: 'absolute',
    top: 140,
    left: 0,

    zIndex: 10,
  },
});

export default ResultSearchValue;
