import {ActivityIndicator, Text, TouchableOpacity, TouchableOpacityProps, TextProps} from 'react-native'
import {sty } from './styles'
import { colors } from '@/styles/colors'
import { IconProps as TablerIconProps } from '@tabler/icons-react-native'

type ButtonProps = TouchableOpacityProps & {
  isLoading?: boolean
}

function Button({children, style, isLoading=false, ...rest}: ButtonProps ){
  return <TouchableOpacity style={[sty.container, style]} activeOpacity={0.8} disabled={isLoading} {...rest}>
    {isLoading ? <ActivityIndicator size="small" color={colors.gray[100]}/> : children}
    
  </TouchableOpacity>
}
function Title({children}: TextProps){
  return <Text style={sty.title}>{children}</Text>
}
type IconProps = {
  icon: React.ComponentType<TablerIconProps>
}
function Icon({icon: Icon}: IconProps){
  return <Icon size={24} color={colors.gray[100]}/>
}
Button.Title = Title
Button.Icon = Icon
export {Button}

