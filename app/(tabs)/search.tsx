import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import { Image } from 'react-native'
import { images } from '@/constants/images'
import MovieCard from '@/components/MovieCard'
import { useState } from 'react'

import useFetch from '@/services/useFetch'
import { fetchMovies } from '@/services/api'
import { icons } from '@/constants/icons'
import Searchbar from '@/components/Searchbar'

const search = () => {

  const [searchQuery, setSearchQuery] = useState('');

  const { data: movies, loading, error, refetch: loadMovies, reset } = useFetch(() => fetchMovies({ query: searchQuery, }), false);

  useEffect(() => {
    const timeoutId = setTimeout( async () => {
      if (searchQuery.trim()) {
        await loadMovies();
      } else {
        reset();
      }
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

return (
  <View className='flex-1 bg-primary'>
    <Image source={images.bg} className="flex-1 absolute w-full z-0" resizeMode='cover' />
    <FlatList 
    data={movies}
      renderItem={({ item }) => (<MovieCard {...item} />)}
      keyExtractor={(item) => item.id.toString()}
      className='px-5'
      numColumns={3}
      columnWrapperStyle={{
        justifyContent: 'center',
        gap: 16,
        marginVertical: 16
      }}
      contentContainerStyle={{ paddingBottom: 100 }}
      ListEmptyComponent={
        !loading && !error ? (
          <View className='mt-10 px-5'>
            <Text className='text-center text-gray-500'>
              {searchQuery ? 'No results found' : 'Start typing to search for movies'}
            </Text>
          </View>
        ) : null
      }
      ListHeaderComponent={
        <>
          <View className='w-full flex-row justify-center mt-20 items-center'>
            <Image source={icons.logo} className='w-12 h-10' />
          </View>
          <View className='my-5'>
            <Searchbar
              placeholder='Search Movies...'
              value={searchQuery}
              onChangeText={(text: string) => setSearchQuery(text)}
            />
          </View>
          {loading && (
            <ActivityIndicator size="large" color="#0000ff" className='my-3' />
          )}
          {error && (
            <Text className='text-red-500 px-5 my-3'>Error: {error?.message}</Text>
          )}
          {!loading && !error && searchQuery && (
            <Text className='text-xl text-white font-bold'>Showing results for {' '}
              <Text className='text-accent font-bold text-lg'>{searchQuery}</Text>
            </Text>

          )}
        </>
      }
    />

  </View>
)
}

export default search