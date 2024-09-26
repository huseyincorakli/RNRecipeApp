import React, { FC } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { styles } from './button.style'

const Button: FC<{ text: any; onClick: Function }> = (props: any) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onClick}>
      <Text style={styles.text}> {props.text}</Text>
    </TouchableOpacity>
  )
}

export default Button
