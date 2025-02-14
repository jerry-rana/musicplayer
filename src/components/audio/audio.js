import React from 'react';
import { connect } from 'react-redux';
import { FaPlay, FaPause, FaForward, FaBackward, FaMinus, FaVolumeOff, FaVolumeUp} from 'react-icons/fa';
import {MdMoreVert } from 'react-icons/md';
import Slider from 'react-rangeslider';
import styled from 'styled-components';

import Player from '../player';

const ToggleArrow = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    text-align:center;
    margin: 0 auto;
    cursor:pointer;
    svg{
        vertical-align: top;
    }
`;
const AudioWrapper = styled.div`
    max-width: 350px;
    height:600px;
    margin: 5% auto;
    padding:20px;
    background: #fff;
    border-radius: 15px;
    box-shadow: 0 0 30px 2px rgba(0,0,0,0.2);
    position: relative;
`;
const AudioPlayer = styled.audio``;
const Text = styled.div`
    font-weight: 600;
    color: #cecece;
`;
const AudioCover = styled.div`
    width: 250px;
    height: 250px;
    border-radius: 50%;
    margin-left: 30px;
    border: 5px solid transparent;
    box-shadow: 0 0 30px 2px rgba(0, 0, 0, 0.2);
    transition: all ease-in-out 0.5s;
    transition-delay: 0.2s;
    img{
        width:100%;
        border-radius: 50%;
    }
`;
const AudioInfo = styled.div``;
const AudioControls =styled.div`margin:24px 0 20px;`;
const AudioProgress = styled.div``;
const PlayButton = styled.div`
    width:60px;
    height:60px;
    border-radius:50%;
    cursor:pointer;
    /*background: rgb(238,173,29);
    -webkit-background: linear-gradient(135deg, rgba(238,173,29,1) 0%, rgba(217,69,69,1) 100%);
    background: linear-gradient(135deg, rgba(238,173,29,1) 0%, rgba(217,69,69,1) 100%);
    box-shadow:0 0 9px 4px rgba(0,0,0,0.1);*/
    margin:0 18px;
    svg{
       margin: 15px 0 0 0;
    }
`;

const AudioMode = styled.div`
        background:#fff;
        position: absolute;
        bottom:0;
        width: 100%;
        height: calc(100% - 53px);
        left: 0;
        padding: 35px 20px 0;
        box-shadow: 0 -10px 24px -2px rgba(0, 0, 0, 0.3);
        border-radius: 15px;
        transition:all ease-in-out 0.4s;
        overflow: hidden;
        .FaMinus:nth-child(1){
            transform: skew(0deg, 15deg);
            margin-left: 5px;
        }
        .FaMinus{
            transform: skew(-0deg, -15deg);
            margin-left: -5px;
        }
     &.miniMode{
        text-align: left;
        height:90px;
        bottom:0;
        left:0;
        right:0;
        margin:auto;
        padding:0 20px;
        border-top: 1px solid #dcdcdc;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
        transition:all ease-in-out 0.4s;
        ${AudioCover}{
            width:60px;
            height:60px;
            display: inline-block;
            vertical-align: top;
            margin-left: 0;
            border: 3px solid transparent;
            transition: all linear 0.2s;
            transition-delay: 0s;
        }
        ${AudioInfo}{
            display: inline-block;
            vertical-align: top;
            margin: 25px 15px 0;
            width: 130px;
            h6{
               margin-bottom: 3px;
            }
        }
        ${AudioProgress}{
            display:none;
        }
        ${AudioControls}{
            display: inline-block !important;
            padding-top:8px;
            margin-top: 10px;
            button{
                vertical-align: text-top;
                margin-top: 8px;
                &:nth-child(1){
                    display:none;
                }
            }
            ${PlayButton}{
                background: transparent;
                box-shadow: none;
                width: 30px;
                height: auto;
                margin:0;
                display: inline-block;
                vertical-align: text-top;
                svg{
                    color: #212529 !important;
                    width: 1.4em;
                }
            }
        }
        .volume-control{
            display:none !important;
        }
        .FaMinus:nth-child(1){
            transform: skew(0deg, 0deg);
            margin-left: 8px;
        }
        .FaMinus{
            transform: skew(0deg, 0deg);
            margin-left: -8px;
        }

    }
`;

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


class Audio extends React.Component {
    constructor(){
        super()
        this.audio = {
            audioList
        }
        this.currTime = 0

        this.audioRef = React.createRef()
    }
    state = {
        isLoading: false,
        isPlaying: false,
        miniMode: true,
        currentTrack: 0,
        progress: 0,
        duration: 0,
        volume: 70
    }

    componentDidMount(){
        let currTime = this.audioRef;
        console.log(currTime)
       
    }
    togglePlayerMode = () => {
        this.setState(ps => ({miniMode: !ps.miniMode}));
    }
    playPreview = (e) => {
      this.setState({ ...this.state,
           progress: this.audioRef.current.currentTime, 
           duration: this.audioRef.current.duration
        })
    }
    playAudio = () => {
        let audRef = this.audioRef.current;
        this.state.isPlaying ? audRef.pause() : audRef.play();
        this.setState(ps => ({isPlaying: !ps.isPlaying}));
        (audRef.readyState>0 && audRef.readyState<4) ? console.log("loading...") : console.log("playing...");
        console.log('clicked...')
    }
    onTrackEnded = () => {
        let len = this.audio.audioList.length-1;
        let { currentTrack } = this.state;
        // this.setState(ps => ({isPlaying: false}))
        this.setState({currentTrack: (len > currentTrack) ? currentTrack+1 : currentTrack});
    }
    seekAudio = (e) => {
        let audRef = this.audioRef.current;
        (audRef.currentTime > 0) ? audRef.currentTime = e : console.log('Something went wrong.')
    }
    seekVolume = (e) => {
        let audRef = this.audioRef.current;
        audRef.volume = e / 100;
        this.setState({volume: e});
        console.log(e)
    }
    changeTrack = (index) => {
        this.setState({isPlaying: true, currentTrack: index});
    }
    nextTrack = () => {
        let len = this.audio.audioList.length-1;
        let { currentTrack } = this.state;
        this.setState({currentTrack: (len > currentTrack) ? currentTrack+1 : currentTrack});
    }
    getNextTrack = () => {
        let len = this.audio.audioList.length-1;
        let { currentTrack } = this.state;
        return (len > currentTrack) ? currentTrack+1 : currentTrack;
    }
    prevTrack = () => {
        let { currentTrack } = this.state;
        this.setState({currentTrack: (0 < currentTrack) ? currentTrack-1 : currentTrack});
    }

    render() {
        const { isPlaying, miniMode, currentTrack, progress, duration, volume } = this.state;
        const { name, singer, cover, musicSrc } = this.audio.audioList[currentTrack];
       // const nextTrack = this.audio.audioList[this.getNextTrack()];
       console.table(this.props)
        return (<>
        <div className="container">
           <div className="row">
               <div className="col-md-12">
            <AudioWrapper>
                <Player audioList={this.props} duration={duration} changeTrack={(track)=> this.changeTrack(track)} />
                    <div className="d-none justify-content-between">
                       <Text></Text>
                       <MdMoreVert color={"#868585"} size={"1.4em"} />
                   </div>
                <AudioMode className={miniMode ? 'miniMode' : ''}>
                    <ToggleArrow onClick={this.togglePlayerMode}>
                        <FaMinus className="FaMinus" color={"#ccc"} size={"1.4em"} />
                        <FaMinus className="FaMinus" color={"#ccc"} size={"1.4em"} />
                    </ToggleArrow>
                <AudioCover className="my-3">
                    <img src={cover} className="anim" style={{animationPlayState: isPlaying ? "running" : "paused" }} alt="" />
                </AudioCover>

                <AudioInfo>
                    <h6>{name}</h6>
                    <Text>{singer}</Text>
                </AudioInfo>

                <AudioPlayer onTimeUpdate={(e)=>this.playPreview(e)} onEnded={this.onTrackEnded} ref={this.audioRef} src={musicSrc} preload="none"></AudioPlayer>

                <AudioProgress>
                    <div className="d-flex justify-content-between">
                    <Text>{(parseInt(progress / 60) % 60) + ':' + (parseInt(progress % 60))}</Text><Text>{(parseInt(duration / 60) % 60) + ':' + (parseInt(duration % 60))}</Text>
                    </div>
                        <Slider
                        min={0}
                        max={parseFloat(duration)}
                        value={parseFloat(progress)}
                        tooltip={true}
                        //onChangeStart={this.handleChangeStart}
                        onChange={(e)=> this.seekAudio(e)}
                        //onChangeComplete={this.handleChangeComplete}
                        />
                </AudioProgress>

                <AudioControls className="d-flex justify-content-center">
                    <button className="btn" onClick={this.prevTrack}><FaBackward size={"1.4em"} /></button>
                    <PlayButton onClick={this.playAudio}>{isPlaying ? <FaPause size={"1.8em"} /> : <FaPlay size={"1.8em"} />}</PlayButton>
                    <button className="btn" onClick={this.nextTrack}><FaForward size={"1.4em"} /></button>
                </AudioControls>
                    <div className="d-flex justify-content-around align-items-center volume-control">
                        <FaVolumeOff color={"#909090"} size={"1em"}/>
                    <Slider
                        className="w-100 mx-3"
                        min={0}
                        max={100}
                        value={volume}
                        tooltip={true}
                        //onChangeStart={this.handleChangeStart}
                        onChange={(e)=> this.seekVolume(e)}
                        //onChangeComplete={this.handleChangeComplete}
                        />
                        <FaVolumeUp color={"#909090"} size={"1.2em"}/>
                    </div>
                {/* {(this.audio.audioList.length-1 > currentTrack) ? 
                    <div className="d-flex mt-4 pt-3">
                        <div><img src={nextTrack.cover} style={{width: "50px", borderRadius: "8px"}} /></div>
                        <div className="ml-3 align-self-center text-left" onClick={() => this.changeTrack(currentTrack+1)}><Text>Next Track</Text><h6 className="font-weight-bold mb-0">{nextTrack.name}</h6></div>
                        <div><small></small></div>
                    </div>
                    : ''} */}
                </AudioMode>
            </AudioWrapper>
                </div>
            </div> 
        </div>
        </>);
    }
}



const mapStateToProps = (state) => {
    return {
       ...state
    }
  }

export default connect(mapStateToProps)(Audio);