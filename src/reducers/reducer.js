const audioList = [
    {
        name: 'Despacito',
        singer: 'Luis Fonsi',
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
        cover: 'https://desinode.com/storage/images/250/8390.jpg',
        musicSrc: 'https://files1.mp3slash.xyz/stream/42d5e5a9868bfc8ac3c5eda5e642bb7f'
      },
      {
        name: 'Puchda Hi Nahin',
        singer: 'Neha Kakkar',
        cover: 'https://desinode.com/storage/images/250/8338.jpg',
        musicSrc: 'https://files1.mp3slash.xyz/stream/da9a64cd827e1f97e7097989618b8d95',
      },
      {
        name: 'Relation',
        singer: 'Nikk',
        cover: 'https://desinode.com/storage/images/250/8411.jpg',
        musicSrc: 'https://files1.mp3slash.xyz/stream/cf39cc26aad34d5a5b98d55b26d32fe8',
      },
      {
        name: 'Ishq Tera',
        singer: 'Guru Randhawa',
        cover: 'https://desinode.com/storage/images/250/7861.jpg',
        musicSrc: 'https://files1.mp3slash.xyz/stream/8c4c10139507f208e886d42196d73d05',
      },
      {
        name: 'Impress',
        singer: 'Ranjit Bawa',
        cover: 'https://desinode.com/storage/images/250/8209.jpg',
        musicSrc: 'https://files1.mp3slash.xyz/stream/673c7b6cb2d98775b76a653cabeebc73',
      }
]
const reducer = (state=audioList, action) => {
    return state;
}

export default reducer;