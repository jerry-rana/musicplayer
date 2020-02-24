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
        drawer: false
    }

    toggleDrawer = () => {
        console.log('toggle')
        this.setState(ps=> ({drawer: !ps.drawer}))
    }
    render() {
        const { drawer } = this.state;
        const { songsLibrary } = this.props;
        const allSongs = songsLibrary.map((song, e) => {
            return <div className="d-flex mb-3 justify-content-between" key={e}>
                    <div>
                    <div className="align-self-center text-left">
                        <img src={song.cover} className="align-top" alt="" style={{ width: "50px", borderRadius: "8px" }} />
                        <div className="d-inline-block ml-3">
                        <h6 className="font-weight-bold mb-0">{song.name}</h6><Text>{song.singer}</Text>
                        </div>
                    </div>
                    </div>
                    <div className="align-self-center pr-3">
                        <input type="checkbox" /><MdAddCircleOutline className="d-none" color={"#ff6d6a"} size={"1.2em"}/>
                    </div>
                </div>
            });
        return (<>
            <div>
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
            </div>

            <PlaylistDrawer className={drawer?'': 'closed'}>
                <div className="d-flex justify-content-between">
                    <Text onClick={this.toggleDrawer}>Cancel</Text>
                    
                    <Text>Done</Text>
                </div>
                <div className="d-flex text-left mt-3 mb-3">
                    <div className="d-flex justify-content-center" style={{ width: "80px", height: "80px", borderRadius: "8px", background: "#efefef" }}>
                        <FaMusic color={"#ff6d6a"} size={"1.8em"}  className="align-self-center" />
                    </div>
                    <div className="ml-3 align-self-center">
                        <h6 className="font-weight-bold mb-0">{"Playlist Name"}</h6>
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
        changeTrack: (index) => {dispatch({type: "CHANGE_TRACK", payload: index})}
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(Playlists);