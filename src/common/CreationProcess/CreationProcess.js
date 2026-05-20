import React from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'
import { Image } from '~/common/index'
import Colors from '../Colors/Colors'
const fullWidth = Dimensions.get('window').width

const CreationProcess = ({ imageStep1, imageStep2, imageStep3, imageStep4, imageSuccess, textStep1, textStep2, textStep3, textStep4, active1, active2, active3, active4, success1, success2, success3 }) => {
  return (
    <View>
      <View style={styles.viewConnect} />
      <View style={styles.viewIcon}>
        <View style={styles.viewImage}>
          {
            success1
              ? 
              <View style={styles.viewSuccess}>
                <Image
                  style={styles.imageSuccess}
                  source={imageSuccess}
                />
              </View>
              : 
              <Image
                resizeMode={'contain'}
                style={styles.image}
                tintColor={active1 ? Colors.systemColor2 : Colors.textColor3}
                source={imageStep1}
              />
          }
          <Text style={[styles.textImage, { color: active1 ? Colors.systemColor2 : Colors.textColor3 }]}>{textStep1}</Text>
        </View>
        {imageStep2 &&
          <View style={styles.viewImage}>
            {success2
              ? <View style={styles.viewSuccess}>
                <Image
                  style={styles.imageSuccess}
                  source={imageSuccess}
                />
              </View>
              : 
              <Image
                style={styles.image}
                source={imageStep2}
                resizeMode={'contain'}
                tintColor={active2 ? Colors.systemColor2 : Colors.textColor3}
              />
            }
            <Text style={[styles.textImage, { color: active2 ? Colors.systemColor2 : Colors.textColor3 }]}>{textStep2}</Text>
          </View>}
        {imageStep3 &&
          <View style={styles.viewImage}>
            {success3
              ? <View style={styles.viewSuccess}>
                <Image
                  style={styles.imageSuccess}
                  source={imageSuccess}
                />
              </View>
              : 
              <Image
                style={styles.image}
                source={imageStep3}
                resizeMode={'contain'}
                tintColor={active3 ? Colors.systemColor2 : Colors.textColor3}
              />
            }
            <Text style={[styles.textImage, { color: active3 ? Colors.systemColor2 : Colors.textColor3 }]}>{textStep3}</Text>
          </View>}
        {imageStep4 &&
          <View style={styles.viewImage}>
            <Image
              style={styles.image}
              source={imageStep4}
              resizeMode={'contain'}
              tintColor={active4 ? Colors.systemColor2 : Colors.textColor3}
            />
            <Text style={[styles.textImage, { color: active4 ? Colors.systemColor2 : Colors.textColor3 }]}>{textStep4}</Text>
          </View>}
      </View>
    </View>
  )
}
export default CreationProcess

const styles = StyleSheet.create({
  viewIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    height: 26,
    width: 26,
  },
  viewImage: {
    width: fullWidth / 4,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  textImage: {
    color: '#8C8C8C',
    fontSize: 12,
    textAlign: 'center',
  },
  viewConnect: {
    height: 2,
    backgroundColor: '#F5F5F5',
    marginTop: 30,
    marginBottom: -13,
    marginHorizontal: (fullWidth / 4) / 2,
  },
  viewSuccess: {
    height: 26,
    width: 26,
    backgroundColor: Colors.systemColor2,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageSuccess: {
    height: 9,
    width: 12,
  },
})