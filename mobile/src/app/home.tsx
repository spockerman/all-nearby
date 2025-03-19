import {View, Text, Alert} from 'react-native'
import MapView, {Callout, Marker} from 'react-native-maps'
import { router } from 'expo-router'
import { api } from '@/services/api'
import { Places } from '@/components/places'
import { PlaceProps } from '@/components/place'
import { useEffect, useState } from 'react'
import { Categories, CategoriesProps } from '@/components/categories'
import {fontFamily, colors} from "@/styles/theme"



type marketsProps = PlaceProps & {
  latitude: number,
  longitude: number
}

const currentLocation = {
  latitude: -23.561720275845456, 
  longitude: -46.6564205644078
}

export default function Home() {
  const [categories, setCategories] = useState<CategoriesProps>([])
  const [category, setCategory] = useState("")
  const [markets, setMarkets] = useState<marketsProps[]>([])

  async function fetchCategories(){
    try {
      const { data } = await api.get("/categories")
      setCategories(data)
      setCategory(data[0].id)
    } catch (error) {
      console.log(error)
      Alert.alert("Categories", "Nao foi possivel carregar as categorias.")
    }
  }
  
  async function fetchMarkets() {
    try{
      if(!category){
        return;
      }
      const {data} = await api.get("/markets/category/" + category)
      setMarkets(data)
   
    }
    catch(error){
      console.log(error)
      Alert.alert("Locais", "Não foi possível carregar os locais.")
    }
  }

  useEffect(()=>{
    fetchCategories()
  }, [])

  useEffect(()=>{
    fetchMarkets()
  }, [category])

  return (
    <View style={{flex: 1, backgroundColor:'#CECECE'}}>
      <Categories 
        data={categories} 
        onSelect={setCategory} 
        selected={category}
      />
      <MapView
        style={{flex:1}}
        initialRegion={{
          latitude: currentLocation.latitude,
          longitude: currentLocation.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01
        }}
      >
        <Marker
          identifier="current"
          coordinate={{
            latitude: currentLocation.latitude,
            longitude: currentLocation.longitude
          }}
          image={require("@/assets/location.png")}
        />
        {
          markets.map((item) =>(
            <Marker
              key={item.id}
              identifier={item.id}
              coordinate={{
                latitude: item.latitude, 
                longitude: item.longitude
              }}
              image={require("@/assets/pin.png")}
            >
              <Callout onPress={()=> router.navigate(`/market/${item.id}`)}>
                <View>
                  <Text style={{fontSize: 14, color: colors.gray[600], fontFamily: fontFamily.medium}}>{item.name}</Text>
                  <Text style={{fontSize: 12, color: colors.gray[600], fontFamily: fontFamily.regular}}>{item.address}</Text>
                </View>
              </Callout>
            </Marker>
          ))
        }
      </MapView>
      <Places data={markets}/>
    </View>
  )
}
