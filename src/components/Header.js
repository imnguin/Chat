import { View, StatusBar, TextInput, StyleSheet } from 'react-native'
import React, { useRef, useState } from 'react'
import { COLORS } from '../constants'
import Icon from './Icon'

const Header = (props) => {
    let {
        onChangeText,
        value,
        hiddenStatusBar,
        barStyle,
        listIcon
    } = props;

    const [focus, setFocus] = useState(false);
    const inputRef = useRef(null);
    const handleButtonPress = () => {
        if (!!focus) {
            inputRef.current.blur();
            setFocus(false);
        } else {
            inputRef.current.focus();
            setFocus(true);
        }
    };

    const onScanQRCode = () => { }

    const onPlus = () => { }

    return (
        <>
            <StatusBar
                translucent
                backgroundColor="transparent"
                hidden={hiddenStatusBar}
                barStyle={barStyle || 'default'}
            />
            <View style={{ height: 60, backgroundColor: '#009bf8' }}>
                <View style={styles.searchBar}>
                    <Icon
                        onPress={handleButtonPress}
                        name={!focus ? "search-outline" : "chevron-back"}
                        type="Ionicons"
                    />
                    <TextInput
                        ref={inputRef}
                        style={[
                            styles.searchInput, {
                                backgroundColor: !focus ? '#009bf8' : COLORS.white,
                                width: !focus ? '75%' : '85%',
                            }]
                        }
                        placeholderTextColor={!focus ? COLORS.white : COLORS.gray}
                        placeholder="Tìm kiếm"
                        onFocus={() => setFocus(true)}
                        onBlur={() => setFocus(false)}
                        onChangeText={onChangeText}
                        value={value}
                    />
                    {
                        !!focus && <Icon
                            onPress={onScanQRCode}
                            name="qrcode-scan"
                            type="MaterialCommunityIcons"
                            size={18}
                        />
                    }
                    {
                        !focus && !!listIcon && listIcon.length > 0 && listIcon.map((icon, index) => {
                            return <React.Fragment key={index}>{icon}</React.Fragment>
                        })
                    }
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    searchBar: {
        flexDirection: "row",
        alignItems: "center",
        height: 30,
        marginVertical: 15,
        paddingHorizontal: 16,
        borderRadius: 12,
    },
    searchInput: {
        marginLeft: 10,
        borderRadius: 7,
        color: COLORS.black,
        marginRight: 10,
        fontSize: 14,
        flex: 1,
        height: "80%",
        paddingVertical: 0
    },
});

export default Header