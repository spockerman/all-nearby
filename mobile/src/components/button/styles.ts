import {StyleSheet} from 'react-native'
import {colors, fontFamily} from '@/styles/theme'

export const sty = StyleSheet.create({
  container: {
    flexDirection: 'row', // Para alinhar imagem e texto lado a lado
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    backgroundColor: colors.green.base,
    borderRadius: 12,
    marginBottom: 10,
    width:310,
    height: 56, 
    maxHeight: 56,
    gap: 14

  },
  title: {
    color: colors.gray[100],
    fontSize: 16,
    fontFamily: fontFamily.semiBold,
  }
  
})