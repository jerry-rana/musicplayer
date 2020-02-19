import React from 'react';
import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';

import Library from '../library';
import Playlists from '../playlists';

const Text = styled.div`
    font-weight: 600;
    color: #cecece;
`;
const PlayerWrapper = styled.div`
    max-width:350px;
    margin:10px auto;
    background:url("https://cdn.dribbble.com/users/1014698/screenshots/4754799/dribbble_music_player.png") no-repeat;
    background-position: -128px center;
    background-size: 1000px;
    background: transparent;
`;
const PlayerHeader = styled.div`
    height: 80px;
    background: linear-gradient(90deg,rgba(252, 180, 79,1) 0%,rgba(255, 107, 107,1) 100%);
    box-shadow: 0 5px 11px 0px rgba(253, 176, 81, 0.52);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    padding: 20px 20px 0;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  ul{
    li.active{
      &:after{
        content:'';
        border-bottom: 2px solid #fff;
        width: 65px;
        display: block;
        padding-bottom: 2px;
        margin-left: -8px;
      }
      ${Text}{
        color:white;
      }
    }
  }
    `;



class Player extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            ...props,
            activeIndex: 1
        }

    }

    activateTab = (e) => {
      this.setState({activeIndex: e})
    }

    render() {
      const { audioList } = this.props.audioList;
      const allSongs = audioList.map((song, e) => {
        return <>
            <div className="d-flex mb-3 justify-content-between" key={e}>
              <div>
                  <div className="align-self-center text-left" onClick={() => this.props.changeTrack(e)}>
                    <img src={song.cover} className="align-top" alt="" style={{width: "50px", borderRadius: "8px"}} />
                    <div className="d-inline-block ml-3">
                      <h6 className="font-weight-bold mb-0">{song.name}</h6><Text>{song.singer}</Text>
                    </div>
                  </div>
             </div>
             <div className="align-self-end pr-3 pb-2">
               <Text>
                 {(parseInt(this.props.duration / 60) % 60) + ':' + (parseInt(this.props.duration % 60))}
               </Text>
              </div>
            </div>
            </>;
        })
      const tabList = [
        {
            tabLink: [
                {link: "Library"},
                {link: "Playlist"},
                {link: "Songs"}
            ],
            tabContent: [
                {content: <Library audioList={this.props.audioList} allSongs={allSongs} />},
                {content: <Playlists audioList={this.props.audioList} />},
                {content: <div className="mt-3 mb-4">{allSongs}</div>},
              ]
        } 
      ]
      const [{ tabLink, tabContent }] = tabList;
        return (<>
          <PlayerWrapper>
            <PlayerHeader>
              <div className="d-flex">
                <GiHamburgerMenu color={"#fff"} size={"1.4em"} /> <Text className="text-white ml-3">Music Player</Text>
              </div>
              <ul className="mt-2 mb-0 nav nav-pills defaultPills" role="tablist">
                {tabLink.map((res, i) =>
                  <li key={i} className={`list-inline-item mr-4 ${(this.state.activeIndex === i) ? "active" : ""}`}>
                    <Text onClick={() => this.activateTab(i)}>{res.link}</Text>
                  </li>
                )}
              </ul>
            </PlayerHeader>

            <div className="mt-5 pt-4">
              <div className="tab-content">
                {tabContent[this.state.activeIndex].content}
              </div>
            </div>
          </PlayerWrapper>
        </>);
    }
}
export default Player;