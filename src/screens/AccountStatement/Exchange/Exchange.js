import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

const tableHead = ['Thời gian', 'NPP', 'Tiền mặt', 'Điểm thưởng','Nội dung'];
const tableData = [
        ['12:00 pm\n10/01/2021', 'Đông Á', '+ 200.000đ','200.000đ', 'https://www.npmjs.com/package/react-native-table-component'],
        ['12:00 pm\n10/01/2021', 'Đông Á', '- 200.000đ','200.000đ', 'https://www.npmjs.com/package/react-native-table-component'],
        ['12:00 pm\n10/01/2021', 'Đông Á', '- 200.000đ','200.000đ', 'https://www.npmjs.com/package/react-native-table-component'],
        ['12:00 pm\n10/01/2021', 'Đông Á', '+ 200.000đ','200.000đ', 'https://www.npmjs.com/package/react-native-table-component'],
        ['12:00 pm\n10/01/2021', 'Đông Á', '+ 200.000đ','200.000đ', 'https://www.npmjs.com/package/react-native-table-component'],
      ];

const Exchange = props => {
    return(
        <View>
            <ScrollView horizontal={true}>
                <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
                    <Row data={tableHead} style={{height: 50,width:500, backgroundColor: '#E8E8E8'}} textStyle={{textAlign:'center'}}/>
                    <Rows data={tableData} style={{height: 50,width:500}} textStyle={{textAlign:'center',color:'gray'}} />
                </Table>
            </ScrollView>
        </View>
    );
}
export default Exchange;