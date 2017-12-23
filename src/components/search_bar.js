import React, {Component} from 'react';
//import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'

const API_KEY = 'AIzaSyAsRBcZd1ec1ie0lutskCjb5ue_0ZB48cc';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ""
        }
          //console.log(props);


        YTSearch({key: API_KEY, term:this.state.term}, (VV) => {
          //  console.log(VV);
            this.setState(
                {videos: VV,selectedVideo: VV[0]});
        });
    }



    onInputChange(term) {
        console.log(term);
        this.setState({term: term});
        this.props.onSearchTermChange(term);
    }

    render() {
        return (
            <div>
                <input className={"form-control mr-sm-2 search-bar"} type="search" value={this.state.term} onChange={(event)=>
                this.onInputChange(event.target.value)}/>
            </div>

        );
    }
}

export default SearchBar;