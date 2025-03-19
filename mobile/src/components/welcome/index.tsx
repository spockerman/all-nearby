import {View, Text, Image} from 'react-native'
import {sty } from './styles'

export function Welcome() {
  return (
    <View>
      <Image source={require('@/assets/logo.png')} style={sty.logo} />
      <Text style={sty.title}>Boas vindas ao Nearby!</Text>
      <Text style={sty.subtitle}>Tenha cupons de vantagem para usar em {"\n"} seus estabelecimentos favoritos.</Text>
    </View>
  )
}
