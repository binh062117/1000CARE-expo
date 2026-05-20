import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { Button } from '../../common'
import CheckBox from 'react-native-checkbox'
import TitleBar from '../../common/TitleBar/TitleBar'
import { ic_check_box_checked, ic_check_box_unchecked } from '../../assets/constants'
const data = [
  { key:'Họ và tên',value:'Trần Bình' },{ key:'Số CMT',value:'123456789' },{ key:'Số điện thoại',value:'0123456789' },
  { key:'Ngày sinh',value:'31/07/1992' },{ key:'Ngày cấp',value:'06/06/2015' },{ key:'Nơi cấp',value:'Nam Định' },
  { key:'Địa chủ thường trú',value:'Trần Bình' },
]

const AuthenticationTutorial = props => {
  const [checkBox, setCheckBox] = useState(false)

  const renderList = data.map((item,index) => {
    return(
      <View style={{ padding:8,marginHorizontal:10,borderBottomWidth:2,borderBottomColor:'#EAEBF0' }}>
        <Text style={{ color:'#ACAEB9' }}>{item.key}</Text>
        <Text>{item.value}</Text>
      </View>
    )
  })
  return(
    <View>
      <TitleBar
        isShowBtn={true}
        title={'Hướng dẫn xác thực'}
      />
      <View style={{ padding:5,paddingHorizontal:30,marginHorizontal:10,borderBottomWidth:2,borderBottomColor:'#EAEBF0' }}>
        <Text style={{ textAlign:'center',color:'#ACAEB9',fontSize:15 }}>Vui lòng kiểm tra thông tin cá nhân dùng để liên kết tài khoản điện tử</Text>
      </View>
      {renderList}
      <CheckBox
        checked={checkBox}
        onChange={() => setCheckBox(!checkBox)}
        checkedImage={ic_check_box_checked}
        uncheckedImage={ic_check_box_unchecked}
        label={'Tôi đã đọc, hiểu và đồng ý với các điều khoản'}
        containerStyle={{ marginTop:10,marginHorizontal:10 }}
        labelStyle={{ color:'black',fontSize:14 }}
      />
      <Button text={'Tiếp tục'} />
    </View>
  )
}
export default AuthenticationTutorial