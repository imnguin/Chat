import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { SIZES } from '../constants';

const Button = (props) => {
    let {
        onPress,
        style,
        title
    } = props;

    return (
        <TouchableOpacity
            style={[styles.container, { ...style }]}
            onPress={onPress}
        >
            <Text style={[styles.title, { ...style.titleStyle }]}>{title}</Text>
        </TouchableOpacity >
    );
}

const styles = StyleSheet.create({
    container: {
        width: SIZES.width - 32,
        height: 54,
        alignItems: "center",
        paddingHorizontal: 22,
        borderRadius: 16,
        borderColor: "gray",
        borderWidth: 1,
        flexDirection: "row",
        marginTop: 12,
        justifyContent: 'center'
    },
    icon: {
        height: 24,
        width: 24,
        marginRight: 32,
    },
    title: {
        fontSize: 17,
        fontFamily: "semiBold",
        color: 'black'
    }
});

export default Button