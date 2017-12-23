import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';



import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';


const API_KEY = "AIzaSyAsRBcZd1ec1ie0lutskCjb5ue_0ZB48cc";

class App extends Component {
    constructor(props){
        super(props)

        this.state = {
            videos:[],
            selectedVideo:""
        };

        this.videoSearch("")
    }

    videoSearch(term){
        // Takes in configuration object and a callback function.
        YTSearch({key: API_KEY, term: term}, (VF) => {
            //console.log(VF);
            this.setState({
                videos:VF,
                selectedVideo:VF[0]
            });
        });
    }

    render(){



       const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

        return(
            // <SearchBar onSearchTermChange={(term) => this.videoSearch(term)}/>
            <div className={"container"}>

                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={(selectedVideo)  => this.setState({selectedVideo})}
                    VVV={this.state.videos}
                />
            </div>
        );
    }
}


ReactDOM.render(<App />, document.querySelector('.container'));