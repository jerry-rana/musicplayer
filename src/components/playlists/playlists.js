import React from 'react';
import { FaPlus, FaMusic } from 'react-icons/fa';
import styled from 'styled-components'

export default class Playlists extends React.Component {

    render() {
        return (<>
            <div>
                <div className="d-flex text-left mt-3 mb-3" onClick={(e) => console.log(e)}>
                    <div className="d-flex justify-content-center" style={{ width: "80px", height: "80px", borderRadius: "8px", background: "#efefef" }}>
                        <FaPlus color={"#ff6d6a"} size={"1.8em"}  className="align-self-center" />
                    </div>
                    <div className="ml-3 align-self-center">
                        <h6 className="font-weight-bold mb-0">{"New Playlist..."}</h6>
                    </div>
                </div>
                <div className="d-flex text-left mt-3 mb-3" onClick={(e) => console.log(e)}>
                    <div className="d-flex justify-content-center" style={{ width: "80px", height: "80px", borderRadius: "8px", background: "#efefef" }}>
                        <FaMusic color={"#ff6d6a"} size={"1.8em"}  className="align-self-center" />
                    </div>
                    <div className="ml-3 align-self-center">
                        <h6 className="font-weight-bold mb-0">{"Puchased"}</h6>
                    </div>
                </div>
            </div>
        </>);
    }
}