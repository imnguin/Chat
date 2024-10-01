import { HOST_LIST } from "../utils/Constants/SystemVar";
import { _fetchAPI, _fetchAPILogin } from "../utils/funcRequest"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setDataStore } from "../utils/funtions";
import { saveTokens } from "../utils/funcKeychain";

const _fetchLogin = (hostName, apiPath, data) => async (dispatch, state) => {
    try {
        const apiResult = await _fetchAPILogin(hostName, apiPath, data);
        if (!apiResult.iserror) {
            const { accessToken, refreshToken } = apiResult.resultObject;
            await saveTokens(accessToken, refreshToken);
            delete apiResult.resultObject.accessToken;
            delete apiResult.resultObject.refreshToken;
            await setDataStore('logininfo', JSON.stringify(apiResult.resultObject));
            return {
                ...apiResult,
                messaege: 'Đăng nhập thành công!',
            }
        }
        else {
            return apiResult;
        }
    } catch (error) {
        return {
            iserror: true,
            message: error.messaege,
            messagedetail: error,
            resultObject: null
        }
    }
}

const _fetchData = (hostName, apiPath, data, method = 'POST') => async (dispatch, state) => {
    try {
        const logininfo = JSON.parse(AsyncStorage.getItem('logininfo'));
        const _header = {
            'user-agent': 'Mozilla/4.0 MDN Example',
            'Access-Control-Allow-Origin': '*',
            "token": `Bearer ${logininfo.accessToken}`,
            'Content-Type': 'application/json'
        };
        const apiResult = await _fetchAPI(hostName, apiPath, data, _header);
        return apiResult

    } catch (error) {
        return {
            iserror: true,
            message: error.message,
            messagedetail: error,
            resultObject: null
        }
    }
}

export {
    _fetchLogin,
    _fetchData
}