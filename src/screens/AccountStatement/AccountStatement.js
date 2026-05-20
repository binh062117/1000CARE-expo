import React, { useState } from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import TitleBar from '../../common/TitleBar/TitleBar';
import Exchange from './Exchange/Exchange';
import Surplus from './Surplus/Surplus';

const AccountStatement = props => {
    const layout = useWindowDimensions();
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'exchange', title: 'Giao dịch' },
        { key: 'surplus', title: 'Số dư' },
    ]);

    const renderScene = SceneMap({
        exchange: Exchange,
        surplus: Surplus,
    });

    return (
        <View style={{ flex: 1 }}>
            <TitleBar title={'Sao Kê Tài Khoản'} />
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
                renderTabBar={props => (
                    <TabBar
                        {...props}
                        indicatorStyle={{ backgroundColor: '#000' }}
                        style={{ backgroundColor: '#fff' }}
                        labelStyle={{ color: '#000', fontWeight: '600' }}
                    />
                )}
            />
        </View>
    );
};

export default AccountStatement;
