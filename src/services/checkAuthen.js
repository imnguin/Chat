import { getDataStore } from "../utils/funtions"

export const checkAuthen = async () => {
    const loginInfo = await getDataStore('logininfo');

    if (!loginInfo) {
        return false
    } else {
        return true
    }
}