import React from 'react';

import VideoListItem from './video_list_item';



const VideoList = (props) => {


    const videoItems = props.VVV.map((XYZ)=>{
        return (
            <VideoListItem
                // passing prop down
                onVideoSelect={props.onVideoSelect}
                key={XYZ.etag}
                V1={XYZ}
            />
        );
    });


    return (


        <div>
            <ul className="col-md-4 list-group">
                {videoItems}
            </ul>
        </div>
    );
}

export default VideoList;


