const audioList = [
    {
        name: 'Despacito',
        singer: 'Luis Fonsi',
        duration: '4.41',
        cover: 'http://res.cloudinary.com/alick/image/upload/v1502689731/Despacito_uvolhp.jpg',
        // musicSrc: () => {
        //   return Promise.resolve(
        //     'http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3'
        //   )
        // },
        musicSrc: 'http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3'
      },
      {
        name: 'Kalla Sohna Nai',
        singer: 'Akhil',
        duration: '2.36',
        cover: 'https://desinode.com/storage/images/250/8390.jpg',
        musicSrc: 'https://files1.mp3slash.xyz/stream/42d5e5a9868bfc8ac3c5eda5e642bb7f'
      },
      {
        name: 'Puchda Hi Nahin',
        singer: 'Neha Kakkar',
        duration: '2.55',
        cover: 'https://desinode.com/storage/images/250/8338.jpg',
        musicSrc: 'https://files1.mp3slash.xyz/stream/da9a64cd827e1f97e7097989618b8d95',
      },
      {
        name: 'Relation',
        singer: 'Nikk',
        duration: '2.45',
        cover: 'https://desinode.com/storage/images/250/8411.jpg',
        musicSrc: 'https://files1.mp3slash.xyz/stream/cf39cc26aad34d5a5b98d55b26d32fe8',
      },
      {
        name: 'Ishq Tera',
        singer: 'Guru Randhawa',
        duration: '3.42',
        cover: 'https://desinode.com/storage/images/250/7861.jpg',
        musicSrc: 'https://files1.mp3slash.xyz/stream/8c4c10139507f208e886d42196d73d05',
      },
      {
        name: 'Impress',
        singer: 'Ranjit Bawa',
        duration: '3.30',
        cover: 'https://desinode.com/storage/images/250/8209.jpg',
        musicSrc: 'https://files1.mp3slash.xyz/stream/673c7b6cb2d98775b76a653cabeebc73',
      },
      {
        name: 'Tera Fitoor',
        singer: 'Arijit Singh',
        duration: '5.09',
        cover: 'https://desinode.com/storage/images/250/5400.jpg',
        musicSrc: 'https://files1.mp3slash.xyz/stream/32063b6c3e883e0349a6d01b0a0a3fba',
      },
      {
        name: 'Hawayein',
        singer: 'Arijit Singh',
        duration: '4.49',
        cover: 'https://desinode.com/storage/images/250/2711.jpg',
        musicSrc: 'https://files1.mp3slash.xyz/stream/45d3ffe619f0ad8c54854b5e272a395e',
      },
      {
        name: 'Tareefan',
        singer: 'Badshah',
        duration: '3.06',
        cover: 'https://desinode.com/storage/images/250/4937.jpg',
        musicSrc: 'https://files1.mp3slash.xyz/stream/a8810feaeca81062c24af02258aab310',
      }
]


const audio = {
    currentTrack: 1
}

// const playTrack = (name, duration) => {
//     return {
//       type: "ADD_SONG",
//       payload:{
//         name: name,
//         duration: duration
//       }
//     }
//   }


const songsLibrary = (library=audioList, action) => {
  return library;
}

const reducer = (state=audio, action) => {
    if(action.type === "CHANGE_TRACK"){
        return {
            currentTrack: action.payload
        }
    }
    return state;
}

// const audioProgress = (progress=audio.progress, action) => {
//   console.log(progress)
//   if(action.type == "PROGRESS"){
//     return {

//     }
//   }
// }

export { songsLibrary, reducer };