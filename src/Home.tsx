import { View, Text, StatusBar , TextInput} from 'react-native'
import React from 'react'
import tw from 'twrnc';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Home = () => {
  return (
    <>
    <StatusBar backgroundColor="#FFFFFF" barStyle="light-content" />

        {/* logo */}
        <View style={tw`flex-row bg-white p-3 justify-between`}>
           
        
  <TextInput style={tw`bg-white w-10/12 h-10 rounded-lg bg-gray-100/80 `} placeholder="Search" />
  <Ionicons name="settings-outline" size={24} color="red" />
 
</View>
        

   
    <View style={tw`flex-1 justify-center items-center bg-gray-100`}>
      <Text style={tw`text-lg font-bold text-gray-800`}>Main Page N</Text>
    </View>
    </>
  )
}

export default Home