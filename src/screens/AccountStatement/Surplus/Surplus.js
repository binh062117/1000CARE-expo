import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

const tableHead = ['Thời gian', 'NPP', 'Tiền mặt', 'Điểm thưởng','Nội dung'];

const Surplus = props => {
    return(
        <View>
            <ScrollView horizontal={true}>
                <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
                    <Row data={tableHead} style={{height: 50,width:500, backgroundColor: '#E8E8E8'}} textStyle={{textAlign:'center'}}/>
                </Table>
            </ScrollView>
        </View>
    );
}
export default Surplus;