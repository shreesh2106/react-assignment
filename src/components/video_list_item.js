
import React from 'react';


const VideoListItem = ({V1, onVideoSelect}) => {
    // const video = props.video;
    // const onVideoSelect = props.onVideoSelect;

    return(
        <li  className="list-group-item card text-white bg-success mb-3" >
            <div onClick={()=>onVideoSelect(V1)} className="video-list media" >
                <div className="media-left" >
                    <img className="media-object"  src={V1.snippet.thumbnails.default.url} height={"150px"} width={"200px"}/>
                </div>

                <div className="media-body" >
                    <div className="media-heading" ><h5 color={"black"}>{V1.snippet.title}</h5></div>
                </div>

            </div>
        </li>
    );
}

export default VideoListItem;