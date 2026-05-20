import React, { useState } from 'react';
import { Dimensions, View, Text, useWindowDimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import TitleBar from '../../common/TitleBar/TitleBar';
import WaitGoods from './WaitGoods/WaitGoods';
import WaitForConfirm from './WaitForConfirm/WaitForConfirm';
import AreShipping from './AreShipping/AreShipping';
import Delivered from './Delivered/Delivered';

const TrackOrder = props => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'confirm', title: 'Chờ xác nhận' },
    { key: 'wait', title: 'Chờ lấy hàng' },
    { key: 'shipping', title: 'Đang giao' },
    { key: 'delivered', title: 'Đã giao hàng' },
  ]);

  const renderScene = SceneMap({
    confirm: WaitForConfirm,
    wait: WaitGoods,
    shipping: AreShipping,
    delivered: Delivered,
  });

  return (
    <View style={{ flex: 1 }}>
      <TitleBar title={'Theo dõi đơn hàng'} />
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={props => (
          <TabBar
            {...props}
            scrollEnabled
            indicatorStyle={{ backgroundColor: '#000' }}
            style={{ backgroundColor: '#fff' }}
            labelStyle={{ color: '#000', fontWeight: '600' }}
          />
        )}
      />
    </View>
  );
};

export default TrackOrder;
