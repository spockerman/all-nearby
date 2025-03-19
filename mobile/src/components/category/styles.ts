import {StyleSheet} from 'react-native'
import {colors, fontFamily} from '@/styles/theme'

export const sty = StyleSheet.create({
  container:{
    height:36,
    backgroundColor: colors.gray[100],
    borderWidth: 1,
    borderColor: colors.gray[300],
    borderRadius: 8,
    justifyContent: "center",
    flexDirection: "row",
    paddingHorizontal: 12,
    gap: 10, 
    paddingTop: 10
  },
  name:{
    fontFamily: fontFamily.regular,
    fontSize: 14,
    color: colors.gray[500]
  },
  containerSelected:{
    backgroundColor: colors.green.base,
    borderColor: colors.green.base
  },
  nameSelected:{
    color: colors.gray[100],
    
  }

  
})