import {Text, Pressable, PressableProps, View} from 'react-native'
import {sty } from './styles'
import React from 'react'
import { categoriesIcons } from '@/utils/categories-icons'
import { colors } from '@/styles/colors'

type Props = PressableProps & {
  iconId: string,
  isSelected?: boolean,
  name: string
}

export function Category({name,iconId, isSelected=false, ...rest}: Props){
  const Icon = categoriesIcons[iconId]
  return (<Pressable style={[sty.container, isSelected && sty.containerSelected ]}
  {...rest}>
    <Icon size={16} color={colors.gray[isSelected ? 100 : 400]}/>
    <Text style={[sty.name, isSelected && sty.nameSelected]}>{name}</Text>
  </Pressable>)
}
