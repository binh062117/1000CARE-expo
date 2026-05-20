import React from 'react'
import { Text, View } from 'react-native'
import TextInput from '~/common/Input/Input'
import styles from './styles'

const InvoiceInformation = ({ setInvoiceName, invoiceName, setInvoiceAddress, invoiceAddress, taxCode, setTaxCode }) => {
  return (
    <View style={styles.section}>
      <Text style={styles.titleSection}>Thông tin xuất hóa đơn</Text>
      <View style={styles.content}>
        <Text style={styles.label}>Tên trên hóa đơn</Text>
        <TextInput
          style={styles.textInput}
          placeholder={'Tên'}
          onChangeText={(text) => setInvoiceName(text)}
          value={invoiceName}
        />
        <Text style={styles.label}>Địa chỉ (số nhà, đường phố...)</Text>
        <TextInput
          placeholder={'Địa chỉ'}
          onChangeText={(text) => setInvoiceAddress(text)}
          style={styles.textInput}
          value={invoiceAddress}
        />
        <Text style={styles.label}>Mã số thuế</Text>
        <TextInput
          placeholder={'MST'}
          // keyboardType='numeric'
          onChangeText={(text) => setTaxCode(text)}
          style={styles.textInput}
          value={taxCode}
        />
      </View>
    </View>
  )
}

export default InvoiceInformation