import React from 'react'
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";
// import swal from 'sweetalert'
// import FaHeadphones from 'react-icons/lib/fa/headphones'
import Switch from 'rc-switch'
//import { createRandomNum, formatTime } from '../src/utils'
import styled from 'styled-components';
import Player from './components/player';

const PlayerWrapper = styled.div`
    max-width:350px;
    height:600px;
    margin:10px auto;
    border:1px solid #ccc;
    background:url("https://cdn.dribbble.com/users/1014698/screenshots/4754799/dribbble_music_player.png") no-repeat;
    background-position: -128px center;
    background-size: 1000px;
    background: transparent;
`;

const Text = styled.div`
    font-weight: 600;
    color: #cecece;
`;


const createRandomNum = 0;
const lyric = [
  '[ti:高尚]',
  '[ar:薛之谦]',
  '[al:高尚]',
  '[by:]',
  '[offset:0]',
  '[00:01.35]高尚 - 薛之谦',
  '[00:03.11]词：薛之谦',
  '[00:04.34]曲：周以力',
  '[00:07.55]',
  '[00:09.18]在阴郁的地方 积攒能量',
  '[00:15.77]',
  '[00:18.71]人交出了什么 能变个样',
  '[00:25.37]',
  '[00:28.67]奇形怪状 的人在生长',
  '[00:35.37]',
  '[00:38.63]我躲在人群中 头在晃',
  '[00:44.78]',
  '[00:48.73]刺破我的心脏 样本不算肮脏',
  '[00:54.45]别恐慌',
  '[00:57.09]',
  '[00:58.63]你看我虚荣模样 你该怎么补偿',
  '[01:04.53]',
  '[01:07.40]我多高尚 向自尊开了枪',
  '[01:16.00]',
  '[01:17.26]你同情的眼光 我特别的欣赏',
  '[01:22.49]',
  '[01:23.15]哀而不伤',
  '[01:26.42]',
  '[01:27.17]我多慌张 怕人闯入我围墙',
  '[01:35.62]',
  '[01:36.88]窥探五官不详 见我原本模样',
  '[01:42.01]',
  '[01:42.53]还能 模仿 任何形状',
  '[01:49.15]',
  '[02:00.55]越恶劣的情况 越要想象',
  '[02:07.31]',
  '[02:10.24]狼藏起反犬旁 像从了良',
  '[02:17.47]',
  '[02:20.72]张牙舞爪 的人在散谎',
  '[02:27.20]',
  '[02:29.92]愿形容我的词 别太荒唐',
  '[02:36.26]',
  '[02:40.88]贪念表现恰当 就像索要嫁妆',
  '[02:45.90]在情理上',
  '[02:48.80]',
  '[02:49.79]请当我孤芳自赏 还规矩条条框框',
  '[02:57.32]',
  '[02:59.28]我多高尚 向自尊开了枪',
  '[03:07.35]',
  '[03:08.86]你异样的眼光 我特别的欣赏',
  '[03:14.08]',
  '[03:14.71]让人难忘',
  '[03:18.63]我多风光 你别闯入我围墙',
  '[03:27.12]',
  '[03:28.33]你要什么真相 不就图个皮囊',
  '[03:33.42]',
  '[03:34.07]不如 让我 留在橱窗',
  '[03:40.09]',
  '[03:52.49]我多难忘 像秀色可餐的模样',
  '[04:00.91]',
  '[04:01.97]感谢你又打赏 你用词越恰当',
  '[04:07.87]我越膨胀',
  '[04:11.44]',
  '[04:11.99]我的疯狂 连我自己都看不上',
  '[04:20.44]',
  '[04:21.35]阴里怪气的愿望 那屈辱的轻伤',
  '[04:27.15]谁能给我 发个奖章',
  '[04:34.85]',
  '[04:43.45]我多向往 有个美丽的地方',
  '[04:52.21]',
  '[04:53.41]我最初的模样 没痛也不会痒',
  '[04:59.88]',
  '[05:00.96]能把赏赐 都烧光',
  '[05:10.86]制作人：周以力',
  '[05:11.93]编曲：周以力',
  '[05:12.73]大提琴：郎莹',
  '[05:13.53]鼓：尹森',
  '[05:14.43]贝斯：陈然然',
  '[05:14.63]吉他：张凇',
  '[05:14.80]Vocal录音室：江苏广电总台录音室',
  '[05:15.26]乐器录音室：北京录顶技录音室',
  '[05:15.72]乐器录音师：王晓海/鲍锐（鼓）',
  '[05:16.22]混音工程师：鲍锐@录顶技Studio',
  '[05:16.65]母带工程师：Friedemann Tishmeyer@Hambug Studio',
].join('\n')
/*eslint-disable no-console*/

const audioList1 = [
  {
    name: 'song',
    singer: 'singer',
    cover: '//cdn.lijinke.cn/nande.jpg',
    musicSrc: '//cdn.lijinke.cn/gaoshang.mp3',
    lyric,
  },
  {
    name: 'Despacito',
    singer: 'Luis Fonsi',
    cover:
      'http://res.cloudinary.com/alick/image/upload/v1502689731/Despacito_uvolhp.jpg',
    musicSrc: () => {
      return Promise.resolve(
        'http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3'
      )
    },
  },
]

const audioList2 = [
  {
    name: 'Despacito',
    singer: 'Luis Fonsi',
    cover:
      'http://res.cloudinary.com/alick/image/upload/v1502689731/Despacito_uvolhp.jpg',
    musicSrc: () => {
      return Promise.resolve(
        'http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3'
      )
    },
  },
  {
    name: 'Kalla Sohna Nai',
    singer: 'Akhil',
    cover:
      'https://desinode.com/storage/images/250/8390.jpg',
    musicSrc: () => {
      return Promise.resolve(
        'https://files1.mp3slash.xyz/stream/42d5e5a9868bfc8ac3c5eda5e642bb7f'
      )
    },
  },
  {
    name: 'Puchda Hi Nahin',
    singer: 'Neha Kakkar',
    cover:
      'https://desinode.com/storage/images/250/8338.jpg',
    musicSrc:
      'https://files1.mp3slash.xyz/stream/da9a64cd827e1f97e7097989618b8d95',
  },
  {
    name: 'Relation',
    singer: 'Nikk',
    cover:
      'https://desinode.com/storage/images/250/8411.jpg',
    musicSrc:
      'https://files1.mp3slash.xyz/stream/cf39cc26aad34d5a5b98d55b26d32fe8',
  },
  {
    name: 'Ishq Tera',
    singer: 'Guru Randhawa',
    cover:
      'https://desinode.com/storage/images/250/7861.jpg',
    musicSrc:
      'https://files1.mp3slash.xyz/stream/8c4c10139507f208e886d42196d73d05',
  },
  {
    name: 'Impress',
    singer: 'Ranjit Bawa',
    cover:
      'https://desinode.com/storage/images/250/8209.jpg',
    musicSrc:
      'https://files1.mp3slash.xyz/stream/673c7b6cb2d98775b76a653cabeebc73',
  }
]

let currentTrackData ='';
let progressBar = 0;
const options = {
  //audio lists model
  audioLists: audioList2,

  //default play index of the audio player  [type `number` default `0`]
  defaultPlayIndex: 1,

  //if you want dynamic change current play audio you can change it [type `number` default `0`]
  // playIndex: 0,

  //color of the music player theme    [ type `string: 'light' or 'dark'  ` default 'dark' ]
  theme: 'light',

  // Specifies movement boundaries. Accepted values:
  // - `parent` restricts movement within the node's offsetParent
  //    (nearest node with position relative or absolute), or
  // - a selector, restricts movement within the targeted node
  // - An object with `left, top, right, and bottom` properties.
  //   These indicate how far in each direction the draggable
  //   can be moved.
  bounds: 'body',

  // Replace a new playlist with the first loaded playlist
  // instead of adding it at the end of it.
  // [type `boolean`, default `false`]
  clearPriorAudioLists: false,

  // Play your new play list right after your new play list is loaded turn false.
  // [type `boolean`, default `false`]
  autoPlayInitLoadPlayList: false,

  //Whether to load audio immediately after the page loads.  [type `Boolean | String`, default `false`]
  //"auto|metadata|none" "true| false"
  preload: false,

  //Whether the player's background displays frosted glass effect  [type `Boolean`, default `false`]
  glassBg: false,

  //The next time you access the player, do you keep the last state  [type `Boolean` default `false`]
  remember: false,

  //The Audio Can be deleted  [type `Boolean`, default `true`]
  remove: true,

  //audio controller initial position    [ type `Object` default '{top:0,left:0}' ]
  defaultPosition: {
    top: 300,
    left: 120,
  },

  // play mode text config of the audio player
  playModeText: {
    order: 'order',
    orderLoop: 'orderLoop',
    orderLoop: 'orderLoop',
    shufflePlay: 'shufflePlay',
  },

  //audio controller open text  [ type `String | ReactNode` default 'open']
  openText: 'open',

  //audio controller close text  [ type `String | ReactNode` default 'close']
  closeText: 'close',

  //audio theme switch checkedText  [ type `String | ReactNode` default '-']
  checkedText: '-',

  //audio theme switch unCheckedText [ type `String | ReactNode` default '-']
  unCheckedText: '-',

  // audio list panel show text of the playlist has no songs [ type `String` | ReactNode  default 'no music']
  notContentText: 'no music',

  panelTitle: 'panelTitle',

  defaultPlayMode: 'order',

  //audio mode        mini | full          [type `String`  default `mini`]
  mode: 'full',

  /**
   * [ type `Boolean` default 'false' ]
   * The default audioPlay handle function will be played again after each pause, If you only want to trigger it once, you can set 'true'
   */
  once: false,

  //Whether the audio is played after loading is completed. [type `Boolean` default 'true']
  autoPlay: true,

  //Whether you can switch between two modes, full => mini  or mini => full   [type 'Boolean' default 'true']
  toggleMode: false,

  //audio cover is show of the "mini" mode [type `Boolean` default 'true']
  showMiniModeCover: true,

  //audio playing progress is show of the "mini"  mode
  showMiniProcessBar: false,

  //audio controller is can be drag of the "mini" mode     [type `Boolean` default `true`]
  drag: true,

  //drag the audio progress bar [type `Boolean` default `true`]
  seeked: true,

  //audio controller title [type `String | ReactNode`  default <FaHeadphones/>]
  // controllerTitle: <FaHeadphones />,

  //Displays the audio load progress bar.  [type `Boolean` default `true`]
  showProgressLoadBar: true,

  //play button display of the audio player panel   [type `Boolean` default `true`]
  showPlay: true,

  //reload button display of the audio player panel   [type `Boolean` default `true`]
  showReload: true,

  //download button display of the audio player panel   [type `Boolean` default `true`]
  showDownload: true,

  //loop button display of the audio player panel   [type `Boolean` default `true`]
  showPlayMode: true,

  //theme toggle switch  display of the audio player panel   [type `Boolean` default `true`]
  showThemeSwitch: false,

  //lyric display of the audio player panel   [type `Boolean` default `false`]
  showLyric: false,

  //destroy player button display  [type `Boolean` default `false`]
  showDestroy: false,

  //Extensible custom content       [type 'Array' default '[]' ]
  extendsContent: [],

  //default volume of the audio player [type `Number` default `100` range `0-100`]
  defaultVolume: 100,

  //playModeText show time [type `Number(ms)` default `700`]
  playModeShowTime: 600,

  //Whether to try playing the next audio when the current audio playback fails [type `Boolean` default `true`]
  loadAudioErrorPlayNext: true,

  // Auto hide the cover photo if no cover photo is available [type `Boolean` default `false`]
  autoHiddenCover: false,

  // Play and pause audio through blank space [type `Boolean` default `false`]
  spaceBar: true,

  //Music is downloaded handle
  onAudioDownload(audioInfo) {
    console.log('audio download', audioInfo)
  },

  //audio play handle
  onAudioPlay(audioInfo) {
    console.log('audio playing', audioInfo)
    currentTrackData = audioInfo;
  },

  //audio pause handle
  onAudioPause(audioInfo) {
    console.log('audio pause', audioInfo)
  },

  //When the user has moved/jumped to a new location in audio
  onAudioSeeked(audioInfo) {
    console.log('audio seeked', audioInfo)
  },

  //When the volume has changed  min = 0.0  max = 1.0
  onAudioVolumeChange(currentVolume) {
    console.log('audio volume change', currentVolume)
  },

  //The single song is ended handle
  onAudioEnded(audioInfo) {
    // swal('Audio is ended!', '', 'success')
    console.log('audio ended', audioInfo)
  },

  //audio load abort The target event like {...,audioName:xx,audioSrc:xx,playMode:xx}
  onAudioAbort(e) {
    console.log('audio abort', e)
  },

  //audio play progress handle
  onAudioProgress(audioInfo) {
    // console.log('audio progress',audioInfo);
    progressBar = audioInfo;
  },

  //audio reload handle
  onAudioReload(audioInfo) {
    console.log('audio reload:', audioInfo)
  },

  //audio load failed error handle
  onAudioLoadError(e) {
    console.error('audio load err', e)
  },

  //theme change handle
  onThemeChange(theme) {
    console.log('theme change:', theme)
  },

  onAudioListsChange(currentPlayId, audioLists, audioInfo) {
    console.log('[currentPlayId] audio lists change:', currentPlayId)
    console.log('[audioLists] audio lists change:', audioLists)
    console.log('[audioInfo] audio lists change:', audioInfo)
  },

  onAudioPlayTrackChange(currentPlayId, audioLists, audioInfo) {
    console.log(
      'audio play track change:',
      currentPlayId,
      audioLists,
      audioInfo
    )
  },

  onPlayModeChange(playMode) {
    console.log('play mode change:', playMode)
  },

  onModeChange(mode) {
    console.log('mode change:', mode)
  },

  onAudioListsPanelChange(panelVisible) {
    console.log('audio lists panel visible:', panelVisible)
  },

  onAudioListsDragEnd(fromIndex, endIndex) {
    console.log('audio lists drag end:', fromIndex, endIndex)
  },

  onAudioLyricChange(lineNum, currentLyric) {
    console.log('audio lyric change:', lineNum, currentLyric)
  },

  // custom music player root node
  getContainer() {
    return document.body
    // return document.querySelector('#playerWrapper');
  },

  /**
   * @description get origin audio element instance , you can use it do everything
   * @example
   * audio.playbackRate = 1.5  // set play back rate
   * audio.crossOrigin = 'xxx' // config cross origin
   */
  getAudioInstance(audio) {
    console.log('audio instance', audio)
  },

  onBeforeDestroy(currentPlayId, audioLists, audioInfo) {
    console.log('currentPlayId: ', currentPlayId)
    console.log('audioLists: ', audioLists)
    console.log('audioInfo: ', audioInfo)
    return new Promise((resolve, reject) => {
      // your custom validate
      if (window.confirm('Are you confirm destroy the player?')) {
        // if resolve, player destroyed
        resolve()
      } else {
        // if reject, skip.
        reject()
      }
    })
  },

  onDestroyed(currentPlayId, audioLists, audioInfo) {
    console.log('onDestroyed:', currentPlayId, audioLists, audioInfo)
  },

  // transform audio info like return a Promise

  /**
   * @return
   *  {
   *    src: 'xxx',
   *    filename: 'xxx',
   *    mimeType: 'xxx'
   *  }
   */
  // onBeforeAudioDownload() {
  //   return Promise.resolve({
  //     src: '1.mp3',
  //   })
  // },

  /**
   * customer download handler
   * eg. a link , or https://www.npmjs.com/package/file-saver
   * @param {*} downloadInfo
   * @example
   *
       customDownloader(downloadInfo) {
        const link = document.createElement('a')
        link.href = downloadInfo.src
        link.download = downloadInfo.filename || 'test'
        document.body.appendChild(link)
        link.click()
      },
   */
  // customDownloader(downloadInfo) {
  //   console.log(downloadInfo.src)
  //   console.log(downloadInfo.filename)
  //   console.log(downloadInfo.mimeType)
  // },
}

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props)
    this.audio = {}
  }
  state = {
    params: {
      ...options,
      getAudioInstance: (audio) => {
        this.audio = audio
      },
    },
  }
  onAddAudio = () => {
    const data = {
      ...this.state.params,
      audioLists: [
        ...this.state.params.audioLists,
        {
          name: "I'm new here",
          singer: 'jack',
          cover: 'http://www.lijinke.cn/music/1387583682387727.jpg',
          musicSrc: `http://www.lijinke.cn/music/${Date.now()}.mp3`,
        },
      ],
    }
    this.setState({
      params: data,
    })
  }
  extendsContent = () => {
    const data = {
      ...this.state.params,
      extendsContent: (
        <>
          {/* <button onClick={() => swal("I'm extends content")}>button1</button>
          <button onClick={() => swal("I'm extends content")}>button2</button> */}
        </>
      ),
    }
    this.setState({
      params: data,
    })
  }

  onChangeToFirstAudioList = () => {
    const data = {
      ...this.state.params,
      clearPriorAudioLists: true,
      audioLists: audioList1,
    }
    this.setState({
      params: data,
    })
  }

  onChangeToSecondAudioList = () => {
    const data = {
      ...this.state.params,
      clearPriorAudioLists: true,
      audioLists: audioList2,
    }
    this.setState({
      params: data,
    })
  }
  onAutoPlayMode = () => {
    const data = {
      ...this.state.params,
      autoPlay: !this.state.params.autoPlay,
    }
    this.setState({
      params: data,
    })
  }

  onAutoPlayInitLoadPlayList = () => {
    const data = {
      ...this.state.params,
      autoPlayInitLoadPlayList: !this.state.params.autoPlayInitLoadPlayList,
    }
    this.setState({
      params: data,
    })
  }

  onShowGlassBg = () => {
    this.onChangeKey('glassBg')
  }
  onDrag = () => {
    this.onChangeKey('drag')
  }
  onToggleMode = () => {
    this.onChangeKey('toggleMode')
  }
  onSeeked = () => {
    this.onChangeKey('seeked')
  }
  onChangeKey = (key) => {
    const data = {
      ...this.state.params,
      [key]: !this.state.params[key],
    }
    if (key === 'light' || key === 'dark') {
      data.theme = key
    }
    if (key === 'full' || key === 'mini') {
      data.mode = key
    }
    this.setState({ params: data })
  }
  showMiniProcessBar = () => {
    this.onChangeKey('showMiniProcessBar')
  }
  showMiniModeCover = () => {
    this.onChangeKey('showMiniModeCover')
  }
  playModeShowTime = () => {
    const data = {
      ...this.state.params,
      playModeShowTime: createRandomNum(200, 2000),
    }
    this.setState({
      params: data,
    })
  }
  changePlayIndex = (i) => {
    const data = {
      ...this.state.params,
      playIndex: i //createRandomNum(0, this.state.params.audioLists.length),
    }
    this.setState({
      params: data,
    })
  }
  renderCustomUI = () => {
    return (
      <>
        <button onClick={() => this.audio.play()}>play</button>
        <button onClick={() => this.audio.pause()}>pause</button>
        <button onClick={() => this.audio.load()}>reload</button>
        <button onClick={() => (this.audio.currentTime = 40)}>
          change current play time
        </button>
        <button onClick={() => (this.audio.playbackRate = 2)}>
          change play back rate
        </button>
        <button onClick={() => (this.audio.volume = 0.2)}>change volume</button>
        <button onClick={() => this.audio.destroy()}>destroy player</button>
      </>
    )
  }
  render() {
    const { params } = this.state
    console.log('params: ', params)

    return (
      <>
        <section className="settings">
        <div>
          {/* <button onClick={this.onChangeToFirstAudioList}>
            change to first audio list ({audioList1.length})
          </button>
          <button onClick={this.onChangeToSecondAudioList}>
            change to second audio list ({audioList2.length})
          </button>
          <button onClick={this.onAddAudio}>
            + add audio ({params.audioLists.length})
          </button>
          <button onClick={this.extendsContent}>+ add extends content</button>
          <button onClick={this.playModeShowTime}>
            change play mode show time ({params.playModeShowTime} ms)
          </button>
          <button onClick={() => this.changePlayIndex(0)}>
            change playIndex ({params.playIndex || 0})
          </button>
          <label htmlFor="glass">
            <input type="checkbox" id="glass" onChange={this.onShowGlassBg} />
            show glass background
          </label>
          <label htmlFor="drag">
            <input
              type="checkbox"
              id="drag"
              checked={params.drag}
              onChange={this.onDrag}
            />
            drag
          </label>
          <label htmlFor="seeked">
            <input
              type="checkbox"
              id="seeked"
              checked={params.seeked}
              onChange={this.onSeeked}
            />
            seeked
          </label>
          <label htmlFor="toggle">
            <input
              type="checkbox"
              id="toggle"
              checked={params.toggleMode}
              onChange={this.onToggleMode}
            />
            toggle mode
          </label>
          <label htmlFor="autoPlay">
            <input
              type="checkbox"
              id="autoPlay"
              checked={params.autoPlay}
              onChange={this.onAutoPlayMode}
            />
            autoplay
          </label>
          <label htmlFor="onAutoPlayInitLoadPlayList">
            <input
              type="checkbox"
              id="onAutoPlayInitLoadPlayList"
              checked={params.autoPlayInitLoadPlayList}
              onChange={this.onAutoPlayInitLoadPlayList}
            />
            autoplayInitLoadPlayList
          </label>
          <label htmlFor="showMiniProcessBar">
            <input
              type="checkbox"
              id="showMiniProcessBar"
              checked={params.showMiniProcessBar}
              onChange={this.showMiniProcessBar}
            />
            show mini process bar
          </label>
          <label htmlFor="showMiniModeCover">
            <input
              type="checkbox"
              id="showMiniModeCover"
              checked={params.showMiniModeCover}
              onChange={this.showMiniModeCover}
            />
            show cover of mini mode
          </label>
          <label htmlFor="showProgressLoadBar">
            <input
              type="checkbox"
              id="showProgressLoadBar"
              checked={params.showProgressLoadBar}
              onChange={() => this.onChangeKey('showProgressLoadBar')}
            />
            showProgressLoadBar
          </label>
          <label htmlFor="showPlay">
            <input
              type="checkbox"
              id="showPlay"
              checked={params.showPlay}
              onChange={() => this.onChangeKey('showPlay')}
            />
            showPlay
          </label>
          <label htmlFor="showReload">
            <input
              type="checkbox"
              id="showReload"
              checked={params.showReload}
              onChange={() => this.onChangeKey('showReload')}
            />
            showReload
          </label>
          <label htmlFor="showDownload">
            <input
              type="checkbox"
              id="showDownload"
              checked={params.showDownload}
              onChange={() => this.onChangeKey('showDownload')}
            />
            showDownload
          </label>
          <label htmlFor="showPlayMode">
            <input
              type="checkbox"
              id="showPlayMode"
              checked={params.showPlayMode}
              onChange={() => this.onChangeKey('showPlayMode')}
            />
            showPlayMode
          </label>
          <label htmlFor="showThemeSwitch">
            <input
              type="checkbox"
              id="showThemeSwitch"
              checked={params.showThemeSwitch}
              onChange={() => this.onChangeKey('showThemeSwitch')}
            />
            showThemeSwitch
          </label>
          <label htmlFor="showLyric">
            <input
              type="checkbox"
              id="showLyric"
              checked={params.showLyric}
              onChange={() => this.onChangeKey('showLyric')}
            />
            showLyric
          </label>
          <label htmlFor="showDestroy">
            <input
              type="checkbox"
              id="showDestroy"
              checked={params.showDestroy}
              onChange={() => this.onChangeKey('showDestroy')}
            />
            showDestroy
          </label>
          <label htmlFor="preload">
            <input
              type="checkbox"
              id="preload"
              checked={params.preload}
              onChange={() => this.onChangeKey('preload')}
            />
            preload
          </label>
          <label htmlFor="remove">
            <input
              type="checkbox"
              id="remove"
              checked={params.remove}
              onChange={() => this.onChangeKey('remove')}
            />
            remove
          </label>
          <label htmlFor="remember">
            <input
              type="checkbox"
              id="remember"
              checked={params.remember}
              onChange={() => this.onChangeKey('remember')}
            />
            remember
          </label>
          <label htmlFor="spaceBar">
            <input
              type="checkbox"
              id="spaceBar"
              checked={params.spaceBar}
              onChange={() => this.onChangeKey('spaceBar')}
            />
            spaceBar
          </label>
          <div style={{ padding: 20 }}>
            theme :{params.theme}
            <Switch
              checkedChildren={'D'}
              unCheckedChildren={'L'}
              checked={params.theme === 'light'}
              onChange={(checked) =>
                this.onChangeKey(checked ? 'light' : 'dark')
              }
            /> 
            mode :{params.mode}
            <Switch
              checkedChildren={'M'}
              unCheckedChildren={'F'}
              checked={params.mode === 'mini'}
              onChange={(checked) =>
                this.onChangeKey(checked ? 'mini' : 'full')
              }
            />
          </div> */}
          </div>
          <div>{this.renderCustomUI()}</div>
        </section>
        {/* <ReactJkMusicPlayer {...params} />
        <Player playlist={audioList2} currenttrack={currentTrackData} progressBar={progressBar} changePlayIndex={(e) => this.changePlayIndex(e)} /> */}

        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <PlayerWrapper id="playerWrapper">
                <ReactJkMusicPlayer {...params} />
              </PlayerWrapper>
            </div>
            <div className="col-md-6">
              <Player playlist={audioList2} currenttrack={currentTrackData} changePlayIndex={(e) => this.changePlayIndex(e)} />
            </div>
          </div>
        </div>
       
      </>
    )
  }
}
