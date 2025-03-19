import { ActivityIndicator} from 'react-native'
import {sty} from './styles'
import {colors} from '@/styles/theme'

export function Loading() {
  return <ActivityIndicator color={colors.green.base} style={sty.container} />
}
