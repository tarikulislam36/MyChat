import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import tw from 'twrnc';

const App = () => {
  return (
    <>
    <StatusBar backgroundColor="#1e90ff" barStyle="light-content" />
    <View style={tw`flex-1 justify-center items-center bg-gray-100`}>
      <Text style={tw`text-lg font-bold text-gray-800`}>Main Page</Text>
    </View>
    </>
  )
}

export default App