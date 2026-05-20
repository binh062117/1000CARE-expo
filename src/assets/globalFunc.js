import { ORDER_TYPE } from "./constants";
import { Alert } from "react-native";
import { provider } from "./constants";

export function numberWithCommas(x) {
    return x && x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function formatDate(str_date) {
    try {
        if (!str_date) return "";
        let d = str_date.split(" ");
        let d0 = d[0].split("-");
        let d1 = d[1].split(":");

        let year = d0[0];
        let month = d0[1];
        let day = d0[2];
        let hour = d1[0];
        let minute = d1[1];

        //return hour + ':' + minute + ' ' + day + '-' + month + '-' + year;
        return year + "-" + month + "-" + day + " " + hour + ":" + minute;
    } catch (error) {
        return "";
    }
}

export function formatDateStatement(str_date) {
    if (!str_date) return "";
    let d = str_date.split(" ");
    let d0 = d[0].split("-");
    let d1 = d[1].split(":");

    let year = d0[0];
    let month = d0[1];
    let day = d0[2];
    let hour = d1[0];
    let minute = d1[1];

    return hour + ":" + minute + " " + day + "/" + month + "/" + year;
}

export function formatDateMessage(str_date) {
    if (!str_date) return "";
    let d = str_date.split(" ");
    let d0 = d[0].split("-");
    let d1 = d[1].split(":");

    let year = d0[0];
    let year1 = year.substring(2, 4);
    let month = d0[1];
    let day = d0[2];
    let hour = d1[0];
    let minute = d1[1];

    return day + "/" + month + "/" + year1 + " " + hour + ":" + minute;
}

export function distance(lat1, lon1, lat2, lon2, unit) {
    var radlat1 = (Math.PI * lat1) / 180;
    var radlat2 = (Math.PI * lat2) / 180;
    var theta = lon1 - lon2;
    var radtheta = (Math.PI * theta) / 180;
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist);
    dist = (dist * 180) / Math.PI;
    dist = dist * 60 * 1.1515;
    if (unit == "K") {
        dist = dist * 1.609344;
    }
    if (unit == "N") {
        dist = dist * 0.8684;
    }
    return dist;
}

export function getDateFormatLog(date) {
    // Creating variables to hold time.
    var year, month, day, hour, minutes, seconds, fullTime;
    year = date.getFullYear();
    month = date.getMonth() + 1;
    day = date.getDate();

    if (month < 10) month = "0" + month.toString();
    if (day < 10) day = "0" + day.toString();

    // Getting current hour from Date object.
    hour = date.getHours();

    if (hour < 10) hour = "0" + hour.toString();

    minutes = date.getMinutes();

    if (minutes < 10) minutes = "0" + minutes.toString();

    //Getting current seconds from date object.
    seconds = date.getSeconds();

    // If seconds value is less than 10 then add 0 before seconds.
    if (seconds < 10) seconds = "0" + seconds.toString();

    // Adding all the variables in fullTime variable.
    fullTime = year + "-" + month + "-" + day + " " + hour + ":" + minutes + ":" + seconds;

    // Setting up fullTime variable in State.
    return fullTime;
}

//convert date
export function convertDate(str_date) {
    if (!str_date) return "";
    let date = str_date.split(" ");
    let d = date[0].split("-");
    if (d && d.length >= 3) return d[2] + "/" + d[1] + "/" + d[0];
    else return "";
}

export const getIDFromProd = (orderType, product) => {
    if (orderType == ORDER_TYPE.NORMAL) {
        return product.product_id;
    } else {
        return product.gift_id;
    }
};

export const checkOverQuantityGift = (productsBuy, item, quantity, isChangeGift) => {
    if (typeof productsBuy != "undefined" && productsBuy != null) {
        let giftsBuy = productsBuy.filter(p => {
            return p.gift_id == item.gift_id;
        });
        if (!isChangeGift) {
            return (
                (giftsBuy.length > 0 && giftsBuy[0].quantity + quantity > item.gift_quantity) ||
                quantity > item.gift_quantity
            );
        } else {
            return giftsBuy.length > 0 && quantity > item.gift_quantity;
        }
    }

    return false;
};

export const productHasMoreThan2Opt = product => {
    // return product.options !== false && product.options.length > 2;
    return false;
};

export const alertOverGift = quantity => {
    Alert.alert(provider, "Vượt quá số lượng quà tặng cho phép là " + quantity + ". Vui lòng giảm số lượng mua hàng.");
};

export const isEmpty = value => {
    if(typeof value == "undefined" || value == null || value.length == 0 || value == ""){
        return true;
    }
    return false;
}
