import * as Keychain from 'react-native-keychain';

const saveTokens = async (accessToken, refreshToken) => {
    try { await Keychain.setGenericPassword(accessToken, refreshToken); } catch (error) { }
};

const getTokens = async () => {
    try {
        const credentials = await Keychain.getGenericPassword();
        if (credentials) {
            return {
                accessToken: credentials.username,
                refreshToken: credentials.password,
            };
        } else {
            return null;
        }
    } catch (error) {
        return null;
    }
};

const deleteTokens = async () => {
    try { await Keychain.resetGenericPassword(); } catch (error) { }
};

export { saveTokens, getTokens, deleteTokens }