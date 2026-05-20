import React, { useCallback, useState, useEffect, useRef } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    Keyboard,
    ActivityIndicator,
    TouchableOpacity,
    FlatList,
} from "react-native";
import { Image } from '~/common/index'
import { useSelector, useDispatch } from "react-redux";
import Icon from "react-native-vector-icons/Entypo";

import stylesUser from "./stylesUser";
import strings from "localization";
import Colors from "../../common/Colors/Colors";

import { formatDateMessage as formatDate } from "assets/globalFunc";
import { mail, newmail } from "assets/constants";

import Modal from "components/common/MyModal";

export const MessageUser = props => {
   
    const cust_id = user.custid;

    const dispatch = useDispatch();

    const input = {
        typemsg: 1,
    };
    const getDataUser = useCallback(() => {
        dispatch(loadMessageRequest(input));
    }, []);

    const dataUser = data.dataMessageUser;

    const openDetailModal = props.openDetailModal;

    const [idUser, setIdUser] = useState("");
    const [isEditAble, setEditAble] = useState(true);

    const inputUserId = useRef(null);
    const inputUserMsg = useRef(null);

    const idUserChange = useCallback(
        value => {
            setIdUser(value);
        },
        [idUser]
    );

    return (
        <View style={stylesUser.container}>
            <View style={stylesUser.top_content}>
                <TouchableOpacity style={stylesUser.button_new_msg}>
                    <View>
                        <Icon name={"new-message"} size={30} color={Colors.btn_update_pass} />
                    </View>
                    <View style={stylesUser.view_new_message}>
                        <Text style={stylesUser.text_button_new}>{strings.new_message}</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={stylesUser.center_content}>
                {(isLoading || isLoadingSend) && dataUser.status && (
                    <View style={stylesUser.view_indicator1}>
                        <View style={stylesUser.view_indicator2}>
                            <ActivityIndicator color="#3479b9" size="large" style={{ flex: 1 }} />
                        </View>
                    </View>
                )}
                {!isLoading && !dataUser.status && (
                    <View style={stylesUser.view_isLoading}>
                        <Text>{dataUser.msg}</Text>
                    </View>
                )}
                {success == true && dataUser?.status == true && Array.isArray(dataUser?.data) && dataUser.data.length > 0 && (
                    <FlatList
                        refreshing={false}
                        data={dataUser.data}
                        style={
                            (stylesUser.view_flatList,
                            {
                                opacity: isLoading == true ? 0.65 : 1,
                            })
                        }
                        renderItem={({ item, index }) => {
                            let isReadMsg = item.msg_status;
                            let username = "";
                            let to_name = item.to_name != null ? item.to_name : "";
                            let from_name = item.from_name != null ? item.from_name : "";

                            if (cust_id == item.from_id.toString()) {
                                isReadMsg = 1;
                                username = strings.to + " : " + to_name + "(" + item.to_id + ")";
                            } else {
                                username = strings.from + " : " + item.from_name + "(" + item.from_id + ")";
                            }

                            // TODO: tach component item thanh 1 file js rieng
                            return (
                                <TouchableOpacity
                                    style={{ height: 70 }}
                                    style={{
                                        marginRight: 2,
                                        backgroundColor: isReadMsg == 1 ? "#f3f4f5" : "",
                                    }}
                                >
                                    <View style={stylesUser.itemMsg}>
                                        <View style={stylesUser.itemMsgLeft}>
                                            <Image
                                                style={stylesUser.icon_mail}
                                                source={isReadMsg == 1 ? mail : newmail}
                                            />
                                        </View>
                                        <View style={stylesUser.itemMsgContent}>
                                            <Text
                                                style={[stylesUser.username, isReadMsg == 0 ? stylesUser.noRead : {}]}
                                            >
                                                {username}
                                            </Text>
                                            <Text
                                                style={[stylesUser.contentMsg, isReadMsg == 0 ? stylesUser.noRead : {}]}
                                            >
                                                {item.msg}
                                            </Text>
                                        </View>
                                        <View style={stylesUser.rowTime}>
                                            <Text style={[stylesUser.timeMsg, isReadMsg == 0 ? stylesUser.noRead : {}]}>
                                                {formatDate(item.create_date)}
                                            </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            );
                        }}
                        keyExtractor={(item, index) => item.id.toString()}
                    />
                )}
                {success == true && Array.isArray(dataUser?.data) && dataUser.data.length == 0 && (
                    <TouchableOpacity style={stylesUser.touch_no_message}>
                        <View style={{ justifyContent: "center", alignItems: "center" }}>
                            <Text style={(stylesUser.username, { textAlign: "center" })}>
                                {strings.no_message}
                            </Text>
                        </View>
                    </TouchableOpacity>
                )}
            </View>
            {openDetailModal === true && (
                <Modal
                    isOpen={true}
                    onClose={() => {
                        console.log('aaa')
                    }}
                    isShowTitle={false}
                    isShowClose={true}
                    isClosableOutside={true}
                >
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={stylesUser.containerModal}>
                            <View style={stylesUser.userReceive}>
                                <TextInput
                                    underlineColorAndroid="transparent"
                                    style={stylesUser.inputUserReceive}
                                    value={idUser}
                                    editable={isEditAble}
                                    keyboardType="numeric"
                                    ref={inputUserId}
                                    controlled={true}
                                    placeholder={strings.placeholder_input_id}
                                    placeholderTextColor="rgba(0,0,0,0.4)"
                                    returnKeyType={"next"}
                                    returnKeyLabel={"next"}
                                    blurOnSubmit={false}
                                />
                            </View>
                            <View style={stylesUser.rowInput}>
                                <TextInput
                                    underlineColorAndroid="transparent"
                                    style={stylesUser.inputMessage}
                                    ref={inputUserMsg}
                                    maxLength={300}
                                    multiline={true}
                                    numberOfLines={8}
                                    placeholder={strings.placeholder_input}
                                    placeholderTextColor="rgba(0,0,0,0.4)"
                                    returnKeyType={"done"}
                                    returnKeyLabel={"done"}
                                    onSubmitEditing={Keyboard.dismiss}
                                />
                            </View>
                            <View style={stylesUser.rowButton}>
                                <TouchableOpacity
                                    style={stylesUser.button}
                                >
                                    <Text style={stylesUser.textButton}>{strings.btn_sent}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>
            )}
        </View>
    );
};
