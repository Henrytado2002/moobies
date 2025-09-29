import { View, Text } from 'react-native'
import React from 'react'
import { useSearchParams } from 'expo-router/build/hooks'

const MovieDetails = () => {
    const [id] = useSearchParams();
  return (
    <View>
      <Text>MovieDetails: {id}</Text>
    </View>
  )
}

export default MovieDetails