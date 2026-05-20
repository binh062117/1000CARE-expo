import React, {useCallback} from 'react';
import { FlatList, Text, View } from 'react-native';
import ItemAreShipping from "./ItemAreShipping";

const data = [{code:'686868',date:'2020/6/8',money:'400,000',company:'Đông Á'},{code:'686868',date:'2020/6/8',money:'400,000',company:'Đông Á'},{code:'686868',date:'2020/6/8',money:'400,000',company:'Đông Á'},]

const AreShipping = props => {
    const renderItem = useCallback((item) => <ItemAreShipping product={item.item} />)
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
export default AreShipping;