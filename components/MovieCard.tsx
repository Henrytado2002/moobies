import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { Image } from 'react-native'
import { icons } from '@/constants/icons'

const MovieCard = ({ id, poster_path, title, vote_average, release_date }: Movie) => {
    return (
        <Link href={`/movies/${id}`} asChild className='mb-5' >
            <TouchableOpacity className='w-[30%]' >
                <Image
                    source={{
                        uri: poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : 'https://placehold.co/600x400/1a1a1a/ffffff.png'
                    }}

                    className='w-full h-52 rounded-lg'
                    resizeMode='cover'
                />

                <Text className='text-sm font-bold text-white mt-2' numberOfLines={1} >{title}</Text>

                <View className='flex-row justify-between items-center 1' >
                    <Text className='text-xs text-light-300 font-medium '>
                        {release_date?.split('-')[0]}
                    </Text>
                    <View className='flex-row gap-x-1'>
                        <Text className='text-white text-xs font-bold uppercase'>{Math.round(vote_average / 2)}</Text>
                        <Image source={icons.star} className='size-4'></Image>

                    </View>
                </View>

                <View className='flex-row justify-between items-center' >

                    {/*<Text className='text-xs font-medium text-light-300 uppercase'>movie</Text>*/}
                </View>

            </TouchableOpacity>
        </Link>
    )
}

export default MovieCard