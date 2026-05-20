import React from 'react';
import { View, Text, FlatList } from 'react-native';
import Item from '~/common/InfoPay/InfoPay';
import strings from '~/i18n';

const Pay = props => {
    const { data } = props;
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                style={{ flex: 1 }}
                data={data}
                renderItem={(item, index) => {
                    return (
                        <Item
                            code={item.item.code}
                            money={item.item.money}
                            textMethod={strings.transactionHistory.paymentOrders}
                            textInfo={strings.transactionHistory.code}
                            textMoney={strings.transactionHistory.money}
                        />
                    );
                }}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
}
export default Pay;