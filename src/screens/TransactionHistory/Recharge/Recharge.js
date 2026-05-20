import React from 'react';
import { Text, View, FlatList } from 'react-native';
import Item from '~/common/InfoPay/InfoPay';
import strings from '~/i18n';

const Recharge = props => {
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
                            textMethod={strings.transactionHistory.rechargeIntoNeo}
                            textInfo={strings.transactionHistory.day}
                            textMoney={strings.transactionHistory.money}
                        />
                    );
                }}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
}
export default Recharge;