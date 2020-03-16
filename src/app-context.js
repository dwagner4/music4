import React from 'react';

export const SongContext = React.createContext({
  song: {
    id: "bef8a1ca-6db1-4f44-b47c-8da14c12b508",
    title: "A Way Home",
    artist: "Memorex Memories",
    thumbnail: "http://img.youtube.com/vi/KbC46oJmLh4/0.jpg",
    url: "https://www.youtube.com/watch?v=KbC46oJmLh4",
    duration: 239
  },
  isPlaying: false
});