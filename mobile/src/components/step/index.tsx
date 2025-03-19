import {View, Text} from 'react-native'
import {sty } from './styles'
import { colors } from '@/styles/colors'
import { IconProps } from '@tabler/icons-react-native'


type Props ={
  title:string,
  description: string,
  icon: React.ComponentType<IconProps>
}

export function Step({title, description, icon: Icon}: Props) {
  return (
    <View style={sty.container}>
      {Icon && <Icon size={32} color={colors.red.base}/>}
      <View style={sty.details}>
        <Text style={sty.title}>{title}</Text>
        <Text style={sty.description}>{description}</Text>
      </View>
    </View>
  )
}
