import React from 'react';
import styled from 'styled-components';

const PlayerWrapper = styled.div`
    max-width:350px;
    height:600px;
    margin:10px auto;
    border:1px solid #ccc;
    background:url("https://cdn.dribbble.com/users/1014698/screenshots/4754799/dribbble_music_player.png") no-repeat;
    background-position: -128px center;
    background-size: 1000px;
`;
const RecentlyAdded =styled.div`
    display:flex;
    padding-bottom: 20px;
`;

class Player extends React.Component{
    constructor(props){
        super(props);

    }

    render() {

        const playList = this.props.playlist.map((song, e) => {
                return <>
                    <div className="d-flex mb-3">
                        <div><img src={song.cover} style={{width: "50px", borderRadius: "8px"}} /></div>
                        <div className="ml-3 align-self-center text-left" onClick={() => this.props.changePlayIndex(e)}><h6 className="font-weight-bold mb-0">{song.name}</h6><small className="font-weight-bold">{song.singer}</small></div>
                        <div><small></small></div>
                    </div>
                    </>;
                })

        return (
            <PlayerWrapper className="pt-5 px-4">
                <div className="mt-5 pt-3"></div>
                    <RecentlyAdded className="my-5">
                        <img src={this.props.playlist[0].cover} style={{width: "100px", borderRadius: "12px"}} />
                        <img src={this.props.playlist[1].cover} style={{width: "100px", borderRadius: "12px", marginLeft: "13px"}} />
                    </RecentlyAdded>
                {playList} 
            </PlayerWrapper>
        );
    }
}
export default Player;