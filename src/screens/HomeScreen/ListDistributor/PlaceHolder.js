import React from 'react';
import { ScrollView, View } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { DIMENS } from '~/constants/index';
import styles from './styles';

const PlaceHolder = () => {
  // Component để tạo hàng 3 media items
  const MediaRow = ({ marginTop = 0 }) => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop }}>
      {[0, 1, 2].map((index) => (
        <SkeletonPlaceholder.Item
          key={index}
          width={DIMENS.common.WINDOW_WIDTH / 3 - 8}
          height={DIMENS.common.WINDOW_WIDTH / 3 - 8}
          borderRadius={0}
          marginLeft={index === 1 ? 8 : 0}
        />
      ))}
    </View>
  );

  return (
    <ScrollView style={styles.mainContainer}>
      <SkeletonPlaceholder>
        {/* Swiper placeholder */}
        <SkeletonPlaceholder.Item
          width={DIMENS.common.WINDOW_WIDTH}
          height={styles.swiperItem?.height || 200}
          borderRadius={styles.swiperItem?.borderRadius || 0}
        />

        {/* Line placeholder */}
        <SkeletonPlaceholder.Item
          width="100%"
          height={24}
          marginTop={10}
        />

        {/* Media rows */}
        <MediaRow marginTop={10} />
        <MediaRow marginTop={8} />

        {/* Another line placeholder */}
        <SkeletonPlaceholder.Item
          width="100%"
          height={24}
          marginTop={8}
        />

        {/* More media rows */}
        <MediaRow marginTop={10} />
        <MediaRow marginTop={8} />
      </SkeletonPlaceholder>
    </ScrollView>
  );
};

export default PlaceHolder;
