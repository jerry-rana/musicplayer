import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Carousel from '../carousel';
import CustomScroll from 'react-custom-scroll';

const Text = styled.div`
    font-weight: 600;
    color: #cecece;
`;
const RecentlyAdded = styled.div`
    display:flex;
    width: calc(100% + 20px) !important;
    overflow:hidden;
`;
const AllSongsWrapper = styled.div`
    height: 210px;
    margin-top: 20px;
    h6{
        color: #565656;
    }
`;

class Library extends React.Component {
    
    render() {
        const { songsLibrary, allSongs } = this.props;
        const setting = {
              dragSpeed: 1.25,
              itemWidth: 100,
              itemHeight: 100,
              itemSideOffsets: 5,
            }
        const itemStyle = {
              width: `${setting.itemWidth}px`,
              height: `${setting.itemHeight}px`,
              margin: `0px ${setting.itemSideOffsets}px`
            }
        return(<>
            <Text className="text-left">Recently Added</Text>
            <RecentlyAdded className="mt-3 mb-4">
                <Carousel _data={songsLibrary} {...setting}>
                    {
                        songsLibrary.map((i, _i) => (
                            <div
                                key={_i}
                                className='item'
                                style={{ ...itemStyle }}
                                onClick={() => this.props.changeTrack(_i)}>
                                <img alt="" width={itemStyle.width} src={i.cover} />
                            </div>
                        ))
                    }
                </Carousel>
            </RecentlyAdded>
            <Text className="text-left">All Songs</Text>
            <AllSongsWrapper>
                <CustomScroll heightRelativeToParent="calc(100% - 0px)">
                   { allSongs }
                </CustomScroll>
            </AllSongsWrapper>
        </>);
    }
}

const mapStateToProps = (library) => {
    return library;
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeTrack: (index) => {dispatch({type: "CHANGE_TRACK", payload: index})}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Library);