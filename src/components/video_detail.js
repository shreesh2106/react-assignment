


import React from 'react';

// talk why this is a functional component.
const VideoDetail = (props) => {
    if(!props.video){
        return (
            <div> Loading...</div>
        );
    }

    const videoId = props.video.id.videoId;


    const url = `https://www.youtube.com/embed/${videoId}`;


    return (

        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe height={"500px"} width={"700px"}  src={url} allowFullScreen/>
            </div>

            <div className="details">
                <div className={"jumbotron"} ><h2>{props.video.snippet.title}</h2></div>
                <div  className={"jumbotron"}><h4>{props.video.snippet.description}</h4></div>
            </div>
        </div>

    );
};

export default VideoDetail;