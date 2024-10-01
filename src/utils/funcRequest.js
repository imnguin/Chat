import { getTokens, saveTokens } from "./funcKeychain";
import { HOST_LIST } from "../utils/Constants/SystemVar";

const headerDefautl = {
    'user-agent': 'Mozilla/4.0 MDN Example',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
}

export const _fetchAPILogin = async (hostName, apiPath, data = {}, _header = headerDefautl, method = 'POST') => {
    try {
        let requestData = {
            cache: 'no-cache',
            credentials: 'same-origin',
            withCredentials: true,
            headers: _header,
            method: method,
            mode: 'cors',
            redirect: 'follow',
            referrer: 'no-referrer',
        }

        if (method == 'POST') {
            requestData = {
                ...requestData,
                body: typeof data === 'object' ? JSON.stringify(data) : JSON.stringify({ data })
            }
        }

        let response = await fetch(`${HOST_LIST[hostName].hostBaseURL}${apiPath}`, requestData);
        return await response.json();
    } catch (error) {
        return {
            iserror: true,
            message: "Lỗi hệ thống, vui lòng liên hệ quản trị viên!",
            messagedetail: error.stack,
            resultObject: null
        }
    }
};

export const _fetchAPI = async (hostName, apiPath, data = {}, _header = headerDefautl, method = 'POST') => {
    try {
        let tokens = await getTokens();
        let token = tokens ? tokens.accessToken : null;
        if (!token) {
            //Thông báo và đá ra màn hình đăng nhập
        }

        let requestData = {
            cache: 'no-cache',
            credentials: 'same-origin',
            withCredentials: true,
            headers: {
                ..._header,
                Authorization: `Bearer ${token}`
            },
            method: method,
            mode: 'cors',
            redirect: 'follow',
            referrer: 'no-referrer',
        }

        if (method == 'POST') {
            requestData = {
                ...requestData,
                body: typeof data === 'object' ? JSON.stringify(data) : JSON.stringify({ data })
            }
        }

        let response = await fetch(`${HOST_LIST[hostName].hostBaseURL}${apiPath}`, requestData);
        if (response.status === 401) {
            const refresh = await refreshToken();
            if (refresh.iserror) {
                // Thông báo và đá ra màn hình đăng nhập
                return
            }
            const newAccessToken = refresh.resultObject.accessToken;
            requestData.headers.Authorization = `Bearer ${newAccessToken}`
            const retryResponse = await fetch(`${HOST_LIST[hostName].hostBaseURL}${apiPath}`, requestData);
            return await retryResponse.json();
        }
        return await response.json();
    } catch (error) {
        return {
            iserror: true,
            message: "Lỗi hệ thống, vui lòng liên hệ quản trị viên!",
            messagedetail: error.stack,
            resultObject: null
        }
    }
};

const refreshToken = async (hostName, apiPath, data = {}, _header = headerDefautl, method = 'POST') => {
    try {
        const tokens = await getTokens();

        if (!tokens || !tokens.refreshToken) {
            return {
                iserror: true,
                message: "Lỗi làm mới token, Vui lòng đăng nhập lại!",
                messagedetail: "Lỗi làm mới token, Vui lòng đăng nhập lại!",
                resultObject: null
            }
        }

        let requestData = {
            cache: 'no-cache',
            credentials: 'same-origin',
            withCredentials: true,
            headers: {
                ..._header,
                Authorization: `Bearer ${tokens.refreshToken}`
            },
            method: method,
            mode: 'cors',
            redirect: 'follow',
            referrer: 'no-referrer',
        }

        if (method == 'POST') {
            requestData = {
                ...requestData,
                body: typeof data === 'object' ? JSON.stringify(data) : JSON.stringify({ data })
            }
        }

        const response = await fetch(`${HOST_LIST[hostName].hostBaseURL}${apiPath}`, requestData);

        if (!response.ok) {
            return {
                iserror: true,
                message: "Lỗi làm mới token, Vui lòng đăng nhập lại!",
                messagedetail: "Lỗi làm mới token, Vui lòng đăng nhập lại!",
                resultObject: null
            }
        }

        const result = await response.json();
        const { accessToken, refreshToken } = result.resultObject;
        await saveTokens(accessToken, refreshToken);
        return result;
    } catch (error) {
        return {
            iserror: true,
            message: "Lỗi làm mới token, Vui lòng đăng nhập lại!",
            messagedetail: error.stack,
            resultObject: null
        }
    }
}