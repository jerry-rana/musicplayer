import React from 'react';
import { connect } from 'react-redux';
import { FaPlus, FaMusic } from 'react-icons/fa';
import { MdAddCircleOutline } from 'react-icons/md';
import styled from 'styled-components';
import CustomScroll from 'react-custom-scroll';

const Text = styled.div`
    font-weight: 600;
    color: #cecece;
`;
const PlaylistDrawer = styled.div`
        background:#fff;
        position: absolute;
        bottom:0;
        width: 100%;
        height: calc(100% - 53px);
        left: 0;
        z-index: 1;
        padding: 12px 20px 0;
        box-shadow: 0 -10px 24px -2px rgba(0, 0, 0, 0.3);
        border-radius: 15px;
        transition:all ease-in-out 0.4s;
        overflow: hidden;
        &.closed{
            height:0;
            padding: 0;
        }
`;
const AllSongsWrapper = styled.div`
    height: 385px;
    margin-top: 20px;
    h6{
        color: #565656;
    }
`;

class Playlists extends React.Component {
    state = {
        drawer: false,
        songsDrawer: false,
        checked: false,
        selectedSongs: [],
        playlistName: 'New_Playlist'
    }

    toggleDrawer = () => {
        this.setState(ps=> ({drawer: !ps.drawer}))
    }

    toggleDrawerSongs = () => {
        this.setState(ps=> ({songsDrawer: !ps.songsDrawer}))
    }

    addTrackToPlaylist = (track) => {
        // this.setState(ps=> ({checked: !ps.checked}))
        this.props.addToPlaylist(this.state.playlistName, this.props.songsLibrary[track])
    }

    handlePlaylistName = (e) => {
        this.setState({playlistName: e.target.value});
    }
    handleCheckbox = (e, song) => {
        const selectedSongs = [...this.state.selectedSongs];
        if(e.target.checked) {
            selectedSongs.push(song);
        } else {
          const index = selectedSongs.findIndex((item) => item.name === song.name);
          selectedSongs.splice(index, 1);
        }
       this.setState({selectedSongs});
       this.props.addToPlaylist(this.state.playlistName, selectedSongs)
      }

    handleCancelBtn = () => {
        this.toggleDrawer();
        this.setState({selectedSongs: []});
        this.props.cancelPlaylist(this.state.playlistName);
      }

    render() {
        const { drawer, songsDrawer, playlistName, selectedSongs } = this.state;
        const { songsLibrary, addPlaylist } = this.props;
        
        console.log (this.state.selectedSongs)
        
        const allSongs = songsLibrary.map((song, key) => {
            return <div className="d-flex mb-3 justify-content-between" key={song.name}>
                    <div>
                    <div className="align-self-center text-left">
                        <img src={song.cover} className="align-top" alt="" style={{ width: "50px", borderRadius: "8px" }} />
                        <div className="d-inline-block ml-3">
                        <h6 className="font-weight-bold mb-0">{song.name}</h6><Text>{song.singer}</Text>
                        </div>
                    </div>
                    </div>
                    <div className="align-self-center pr-4">
                        <input type="checkbox"
                            defaultChecked={selectedSongs.find((item) => item.name === song.name )}
                            onChange={(e) => this.handleCheckbox(e, song)}
                            />
                            <MdAddCircleOutline className="d-none" color={"#ff6d6a"} size={"1.2em"}/>
                    </div>
                </div>
            });

            let playlistKey = Object.keys(addPlaylist);
            if(Object.keys(addPlaylist).length > 0){
               // console.log(addPlaylist)
                playlistKey.map(res => {
                       // console.log(res)
                    })
            }
           // console.log(this.state.checked)
        return (<>
            <div style={{height: "420px"}}>
            <CustomScroll heightRelativeToParent="calc(100% - 0px)">
                <div className="d-flex text-left mt-3 mb-3" onClick={this.toggleDrawer}>
                    <div className="d-flex justify-content-center" style={{ width: "80px", height: "80px", borderRadius: "8px", background: "#efefef" }}>
                        <FaPlus color={"#ff6d6a"} size={"1.8em"}  className="align-self-center" />
                    </div>
                    <div className="ml-3 align-self-center">
                        <h6 className="font-weight-bold mb-0">{"New Playlist..."}</h6>
                    </div>
                </div>
                <div className="d-flex text-left mt-3 mb-3">
                    <div className="d-flex justify-content-center" style={{ width: "80px", height: "80px", borderRadius: "8px", background: "#efefef" }}>
                        <FaMusic color={"#ff6d6a"} size={"1.8em"}  className="align-self-center" />
                    </div>
                    <div className="ml-3 align-self-center">
                        <h6 className="font-weight-bold mb-0">{"Puchased"}</h6>
                    </div>
                </div>
                {
                (Object.keys(addPlaylist).length > 0)?
                        playlistKey.map((res, i) => 
                            <div className="d-flex text-left mt-3 mb-3" key={i} onClick={this.toggleDrawerSongs}>
                            <div className="d-flex justify-content-center" style={{ width: "80px", height: "80px", borderRadius: "8px", background: "#efefef" }}>
                                <FaMusic color={"#ff6d6a"} size={"1.8em"}  className="align-self-center" />
                            </div>
                            <div className="ml-3 align-self-center">
                                <h6 className="font-weight-bold mb-0">{res}</h6>
                            </div>
                        </div>
                        )
                    : ''
                }
            </CustomScroll>
            </div>

            {/* <PlaylistDrawer className={songsDrawer?'': 'closed'}>
                <div className="d-flex justify-content-between">
                    <Text onClick={ this.handleCancelBtn }>Cancel</Text>
                    <Text>Done</Text>
                </div>
                <div className="d-flex text-left mt-3 mb-3">
                    <div className="d-flex justify-content-center" style={{ width: "80px", height: "80px", borderRadius: "8px", background: "#efefef" }}>
                        <FaMusic color={"#ff6d6a"} size={"1.8em"}  className="align-self-center" />
                    </div>
                    <div className="ml-3 align-self-center">
                        <h6 className="font-weight-bold mb-0">
                        <input type="text"
                            className="form-control"
                            placeholder={"Playlist Name"}
                            onChange={this.handlePlaylistName}
                            />
                        </h6>
                    </div>
                </div>
                <AllSongsWrapper>
                    <CustomScroll heightRelativeToParent="calc(100% - 0px)">
                        {allSongs}
                    </CustomScroll>
                </AllSongsWrapper>
            </PlaylistDrawer> */}

            <PlaylistDrawer className={drawer?'': 'closed'}>
                <div className="d-flex justify-content-between">
                    <Text onClick={this.handleCancelBtn }>Cancel</Text>
                    <Text>Done</Text>
                </div>
                <div className="d-flex text-left mt-3 mb-3">
                    <div className="d-flex justify-content-center" style={{ width: "80px", height: "80px", borderRadius: "8px", background: "#efefef" }}>
                        <FaMusic color={"#ff6d6a"} size={"1.8em"}  className="align-self-center" />
                    </div>
                    <div className="ml-3 align-self-center">
                        <h6 className="font-weight-bold mb-0">
                        <input type="text"
                            className="form-control"
                            placeholder={"Playlist Name"}
                            onChange={this.handlePlaylistName}
                            />
                        </h6>
                    </div>
                </div>
                <AllSongsWrapper>
                    <CustomScroll heightRelativeToParent="calc(100% - 0px)">
                        {allSongs}
                    </CustomScroll>
                </AllSongsWrapper>
            </PlaylistDrawer>
           
        </>);
    }
}

const mapStateToProps = (state) => {
    return state;
}
const mapDispatchToProps = (dispatch) => {
    return {
        addToPlaylist: (playlistName, track) => {dispatch({type: "ADD_TO_PLAYLIST", playlistName, payload: track})},
        cancelPlaylist: (playlistName) => {dispatch({type: "CANCEL_PLAYLIST", playlistName, payload: null})}
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(Playlists);