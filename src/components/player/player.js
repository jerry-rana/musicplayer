import React from 'react';
import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
import TouchCarousel from 'react-touch-carousel';
import touchWithMouseHOC from 'react-touch-carousel/lib/touchWithMouseHOC'


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
const RecentlyAdded = styled.div`
    display:flex;
`;

const AllSongsWrapper = styled.div`
    height: 210px;
    overflow-y: scroll;
    margin-top: 20px;
    h6{
        color: #565656;
    }
`;


const data  = [
    {
      title: 'Card 1',
      background: '#0072bb',
      text: `react-touch-carousel only handles the trouble parts, i.e.
      - touch gestures parsing
      - scroll cursor rounding and modding
      - items padding and looping
      - auto playing`
    },
    {
      title: 'Card 2',
      background: '#ff4c3b',
      text: `It is left up to you to
      - decide the carousel structure
      - render each item in the carousel
      - style everything
      - add some fancy decorators like dots`
    },
];

const query = window.location.search.slice(1)
const enableLoop = /\bloop\b/.test(query)
const enableAutoplay = /\bautoplay\b/.test(query)
const cardSize = 300
const cardPadCount = enableLoop ? 3 : 0
const carouselWidth = 300;

function CarouselContainer (props) {
    const {cursor, carouselState: {active, dragging}, ...rest} = props
    let current = -Math.round(cursor) % data.length
    while (current < 0) {
      current += data.length
    }
    // Put current card at center
    const translateX = (cursor - cardPadCount) * cardSize + (carouselWidth - cardSize) / 2
    return (
      <div
        // className={cx(
        //   'carousel-container',
        //   {
        //     'is-active': active,
        //     'is-dragging': dragging
        //   }
        // )}
      >
        <div
          className='carousel-track'
          style={{transform: `translate3d(${translateX}px, 0, 0)`}}
          {...rest}
        />
  
        <div className='carousel-pagination-wrapper'>
          <ol className='carousel-pagination'>
            {data.map((_, index) => (
              <li
                key={index}
                className={current === index ? 'current' : ''}
              />
            ))}
          </ol>
        </div>
      </div>
    )
  }

class Player extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            ...props
        }

    }

    renderCard = (index, modIndex) => {
        const listOfData = this.props.playlist.audioList.map((song, i) =>{
            return <div key={i} className='carousel-card' onClick={() => this.props.changeTrack(i)}><div className='carousel-card-inner'><img className="mr-3" src={song.cover} style={{width: "100px", borderRadius: "12px"}} /> </div></div>      
        })
        return listOfData //(
        //   <div key={index} className='carousel-card' /*onClick={() => log(`clicked card ${1 + modIndex}`)}*/ >
        //     <div className='carousel-card-inner'>
        //         {listOfData}
        //       {/* <div className='carousel-title'>{item.title}</div>
        //       <div className='carousel-text'>{item.text}</div> */}
        //     </div>
        //   </div>
        // )
      }

      componentWillReceiveProps(newProps) {
        // if (this.state.showProgress !== newProps.showProgress) {
        //   this.setState({showProgress: newProps.progressBar});
        //   console.log(this.state.showProgress)
        // }
      }

    render() {
        const container = touchWithMouseHOC(CarouselContainer)
        const playList = this.props.playlist.audioList.map((song, e) => {
                return <>
                    <div className="d-flex mb-3" key={e}>
                        <div><img src={song.cover} style={{width: "50px", borderRadius: "8px"}} /></div>
                        <div className="ml-3 align-self-center text-left" onClick={() => this.props.changeTrack(e)}><h6 className="font-weight-bold mb-0">{song.name}</h6><Text>{song.singer}</Text></div>
                        <div><small></small></div>
                    </div>
                    </>;
                })
                
        return (
            <PlayerWrapper>
              <PlayerHeader>
                <div className="d-flex">
                  <GiHamburgerMenu color={"#fff"} size={"1.4em"} /> <Text className="text-white ml-3">Music Player</Text>
                </div>
                <ul className="list-inline text-left mt-2 mb-0">
                  <li className="list-inline-item mr-4 active"><Text>Playlist</Text></li>
                  <li className="list-inline-item"><Text>Songs</Text></li>
                </ul>
              </PlayerHeader>
                <div className="mt-5 pt-3"></div>
                    <Text className="text-left">Recently Added</Text>
                    <RecentlyAdded className="my-4 w-100" style={{overflow: "hidden"}}>
                            <TouchCarousel
                            component={container}
                            cardCount={data.length}
                            cardSize={375}
                            renderCard={this.renderCard}
                            loop
                            autoplay={false}
                            />

                    </RecentlyAdded>
                <Text className="text-left">All Songs</Text>
                <AllSongsWrapper>
                    {playList} 
                </AllSongsWrapper>
            </PlayerWrapper>
        );
    }
}
export default Player;