import React, {useCallback} from 'react';
import { FlatList, Text, View } from 'react-native';
import ItemWaitForConfirm from "./ItemWaitForConfirm";

const data = [{code:'686868',date:'2020/6/8',money:'400,000',company:'Đông Á'},{code:'686868',date:'2020/6/8',money:'400,000',company:'Đông Á'},{code:'686868',date:'2020/6/8',money:'400,000',company:'Đông Á'},]

const WaitForConfirm = props => {
    const renderItem = useCallback((item) => <ItemWaitForConfirm product={item.item} /> );
    const keyExtractor = useCallback((item,index) => index.toString());
    return(
        <View style={{alignItems:'center',flex:1}}>
            <FlatList
                data={data}
                style={{flex:1,width:'100%'}}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
            />
        </View>
    );
}
export default WaitForConfirm;