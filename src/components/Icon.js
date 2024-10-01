import { TouchableOpacity } from 'react-native'
import React from 'react'
import { Icons } from '../constants/icons'
import { COLORS } from '../constants';

const Icon = (props) => {
    let {
        type,
        name,
        size,
        color,
        onPress,
        style
    } = props;

    const renderIcon = (type) => {
        switch (type) {
            case 'Ionicons':
                return (
                    <Icons.Ionicons name={name} size={size || 24} color={color || COLORS.white} />
                );
            case 'MaterialCommunityIcons':
                return (
                    <Icons.MaterialCommunityIcons name={name} size={size || 24} color={color || COLORS.white} />
                );
            case 'AntDesign':
                return (
                    <Icons.AntDesign name={name} size={size || 24} color={color || COLORS.white} />
                );
            case 'Feather':
                return (
                    <Icons.Feather name={name} size={size || 24} color={color || COLORS.white} />
                );
            case 'FontAwesome':
                return (
                    <Icons.FontAwesome name={name} size={size || 24} color={color || COLORS.white} />
                );
            case 'FontAwesome5':
                return (
                    <Icons.FontAwesome5 name={name} size={size || 24} color={color || COLORS.white} />
                );
            default:
                break;
        }
    }
    return (
        <TouchableOpacity disabled={!!onPress ? false : true} style={style} onPress={onPress}>{renderIcon(type)}</TouchableOpacity>
    );
}

export default Icon