import React from 'react'
import { Text } from 'react-native'

export default function PlaceholderList(props) {
    return <Text style={ {textAlign: "center"} }>{ props.message }</Text>
}