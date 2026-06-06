import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Image } from '~/common/index'
import TitleBar from '../../common/TitleBar/TitleBar';
import Icon from 'react-native-vector-icons/Ionicons';
import { Point, logoGiftPoint } from '../../assets/constants';
const data = [
    {image:logoGiftPoint},{image:logoGiftPoint},{image:logoGiftPoint},{image:logoGiftPoint},
    {image:logoGiftPoint},{image:logoGiftPoint},{image:logoGiftPoint},{image:logoGiftPoint},
];

const RechargeOnline = props => {
    const renderList = data.map((item,index) => {
        return(
            <TouchableOpacity style={{marginBottom:10,justifyContent:'center',alignItems:'center'}}>
                <Image source={logoGiftPoint} />
            </TouchableOpacity>
        );
    });
    return(
        <View style={{flex:1,backgroundColor:'#EAEBF0'}}>
            <TitleBar title={'Nạp tiền online'} />
            <View style={{padding:10,backgroundColor:'white'}}>
                <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:10}}>
                    <Text style={{fontSize:16}}>Thông tin tài khoản</Text>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{color:'#0B7B8A',marginRight:5}}>123.568đ</Text>
                        <Icon name={'eye'} size={20} color={'#0B7B8A'} />
                    </View>
                </View>
                <Text style={{marginLeft:10,color:'#0B7B8A',fontSize:16}}>9686262868682826</Text>
                <View style={{flexDirection:'row',justifyContent:'space-between',margin:20}}>
                    <TouchableOpacity style={{alignItems:'center'}}>
                        <Image resizeMode={'contain'} source={Point} style={{height:35,width:35}} />
                        <Text>Nạp tiền</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{alignItems:'center'}}>
                        <Image resizeMode={'contain'} source={Point} style={{height:35,width:35}} />
                        <Text>Rút tiền</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{alignItems:'center'}}>
                        <Image resizeMode={'contain'} source={Point} style={{height:35,width:35}} />
                        <Text>Giao dịch</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{marginTop:15,flex:1,padding:10,backgroundColor:'white'}}>
                <ScrollView contentContainerStyle={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    {renderList}
                </ScrollView>
            </View>
        </View>
    );
}
export default RechargeOnline;