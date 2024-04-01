import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import music_data from './src/musicData.json'
import SongCard from './src/components/SongCard/SongCard';
import SearchBar from './src/components/SearchBar/SearchBar';

export default function App() {
  const [list, setList] = useState(music_data);
  const renderSong = ({ item }) => <SongCard song={item} />
  const renderSeperator = () => <View style={styles.seperator} />
  const handleSearch = q => {
    const filteredList = music_data.filter(song => {
      const searchedText = q.toLowerCase();
      const currentTitle = song.title.toLowerCase();

      return currentTitle.indexOf(searchedText) > -1;
    });

    setList(filteredList);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.sarkilarim_txt}>Şarkılarım</Text>
      <SearchBar onSearch={handleSearch} />
      <FlatList
        style={styles.flatdata}
        data={list}
        renderItem={renderSong}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={renderSeperator}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  seperator: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  flatdata: {
    marginTop: 15,
  },
  sarkilarim_txt: {
    fontSize: 32,
    marginTop: 50,
    marginLeft: 20,
    fontWeight: 'bold',
  },
});
