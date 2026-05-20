import React, { useEffect, useState } from 'react'
import { SafeAreaView, View, StyleSheet, NativeModules, Text } from 'react-native'
import Colors from '~/common/Colors/Colors'
import { back } from '~/assets/constants'
import { TextInput, Button } from '~/common/index'
import Header from '~/common/Header/index'
import Status from '~/common/Status/Status'

import { useDispatch, useSelector } from 'react-redux'
import { updateProfile, resetUpdateProfile, updateIdentity, resetUpdateIdentity } from '~/store/actions'
import { getUpdateProfileStatus, getUser, getUpdateIdentityStatus, getUpdateIdentityError, getUpdateProfileError } from '~/store/selector'
import { isEmailValid } from '~/utils/validations'
import strings from '~/i18n'
import DialogInfo from '~/common/DialogInfo/index'

const { eKYCModule } = NativeModules

const UpdateProfile = ({ navigation, route }) => {
  const onBack = route?.params?.onBack

  const dispatch = useDispatch()
  const user = useSelector(state => getUser(state))
  const [email, setEmail] = useState('')
  const [emailValiErr, setEmailValErr] = useState('')
  const [ekycErr, setEkycError] = useState('')
  const [openDialog, setOpenDialog] = useState(false)
  const [isDialogError, setIsDialogError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const updateProfileStatus = useSelector(state => getUpdateProfileStatus(state))
  const updateProfileError = useSelector(state => getUpdateProfileError(state))
  const updateIdentityStatus = useSelector(state => getUpdateIdentityStatus(state))
  const updateIdentityError = useSelector(state => getUpdateIdentityError(state))

  useEffect(() => {
    if (updateProfileStatus === Status.SUCCESS) {
      setIsLoading(false)
      goEKYC()
    } else if (updateProfileStatus === Status.ERROR) {
      setEkycError(updateProfileError)
      setIsDialogError(true)
      setOpenDialog(true)
    }
  }, [updateProfileStatus])

  useEffect(() => {
    if (updateIdentityStatus === Status.SUCCESS) {
      console.log("updateIdentityStatus == SUCCESS");
      setOpenDialog(false)
      setIsLoading(false)
      if (onBack) {
        onBack()
      }
      navigation.pop()
    } else if (updateIdentityStatus === Status.ERROR) {
      setIsLoading(false)
      setEkycError(updateIdentityError)
      setIsDialogError(true)
      setOpenDialog(true)
    }
  }, [updateIdentityStatus])

  useEffect(() => {
    if (user) {
      setEmail(user.email)
    }
  }, [user])

  useEffect(() => {
    return () => {
      setOpenDialog(false)
      dispatch(resetUpdateProfile())
      dispatch(resetUpdateIdentity())
      setEkycError('')
    }
  }, [])

  const goEKYC = async () => {
    try {
      const data = await eKYCModule.calleKYC()
      console.log("kyc data", data);
      if (data.dataInfo != null) {
        const info = JSON.parse(data.dataInfo)

        if (data.dataCompare) {
          const dataCompare = JSON.parse(data.dataCompare)

          const compareValid = dataCompare.object.msg === 'MATCH'

          if (!compareValid) {
            setEkycError(strings.updateProfile.identityFaceInvalid)
            setIsDialogError(true)
            setOpenDialog(true)
            return
          }
        }

        const isInfoValid = info.statusCode === 200 && info.object.tampering.is_legal === 'yes'

        if (!isInfoValid) {
          setEkycError(strings.updateProfile.identityInvalid)
          setIsDialogError(true)
          setOpenDialog(true)
          return
        }

        const id = info.object.id
        const dob = info.object.birth_day
        const dateIssue = info.object.issue_date
        const fullName = info.object.name
        const placeIssue = info.object.issue_place
        const residenceAddress = info.object.recent_location
        setIsDialogError(false)
        setOpenDialog(true)
        dispatch(updateIdentity(dob, dateIssue, fullName, id, placeIssue, residenceAddress))
      } else {
        setEkycError('Định danh không thành công.')
        setIsDialogError(true)
        setOpenDialog(true)
      }
    } catch (e) {
      // ekyc error
      setEkycError(strings.updateProfile.unknownError)
      setIsDialogError(true)
      setOpenDialog(true)
      console.log('kyc err', e)
    }
  }

  const onUpdatePress = () => {
    if (isLoading)
      return
    setIsLoading(true)
    if (isEmailValid(email)) {
      setEmailValErr('')
      setIsDialogError(false)
      setIsLoading(true)
      dispatch(updateProfile(email))
    } else {
      setEmailValErr(strings.updateProfile.emailInvalid)
      setIsLoading(false)
    }
  }

  const onSkipPress = () => {
    if (user && user.email) {
      goEKYC()
    } else {
      setEmailValErr(strings.updateProfile.emailEmpty)
    }
  }

  const onErrorClose = () => {
    setOpenDialog(false)
    if (isDialogError) {
      dispatch(resetUpdateProfile())
      dispatch(resetUpdateIdentity())
      setEkycError('')
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header
        title={strings.updateProfile.title}
        leftAction={() => {
          if (onBack) {
            onBack()
          }
          navigation.pop()
        }}
        iconLeft={back}
      />

      <View style={styles.container}>
        <Text style={styles.textHeader}>{strings.updateProfile.label}</Text>
        <TextInput
          inputContainerStyle={styles.inputContainerStyle}
          labelStyle={styles.labelStyle}
          value={email}
          onChangeText={(value) => {
            setEmail(value)
          }}
          label={'Email'}
          errorMessage={emailValiErr}
        />

        <Button
          styleView={styles.loginBtnContainer}
          onPressEvent={onUpdatePress}
          styleButton={[styles.loginBtn, isLoading ? { backgroundColor: Colors.textColor3 } : {}]}
          text={strings.updateProfile.update}
        />
        <Button
          styleView={styles.loginBtnContainer}
          styleButton={styles.loginBtn}
          onPressEvent={onSkipPress}
          text={strings.updateProfile.skip}
        />
        <DialogInfo
          isOpen={openDialog}
          isError={isDialogError}
          isOrder={false}
          isLoading={true}
          message={ekycErr}
          closeModal={() => {
            onErrorClose()
          }}
        />

      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: Colors.backgroundColor,
  },
  textHeader: {
    margin: 4,
    fontSize: 16,
  },
  inputContainerStyle: {
    borderWidth: 0,
    borderColor: Colors.borderColor,
    borderBottomWidth: 1,
    margin: 6,
    marginBottom: 16,
  },

  labelStyle: {
    color: Colors.textColor3,
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 20,
  },
  loginBtnContainer: {
    flexDirection: 'row',
    margin: 2,
    padding: 0,
    alignItems: 'center',
    paddingHorizontal: 18,
  },
  loginBtn: {
    height: 50,
    width: '100%',
    padding: 0,
    paddingHorizontal: 0,
    borderRadius: 50,
    backgroundColor: Colors.systemColor2,
  },
})

export default UpdateProfile