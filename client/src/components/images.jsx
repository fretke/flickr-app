import React, {Component} from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Image from "./Image"

export class Images extends Component {

    state = {
        key: 0,
        images: [],
        startPage: 1,
        search: this.props.search
    };

    componentDidMount (){
        const {startPage} = this.state;
        axios
        .get("http://localhost:5000/" + this.props.search + "/" + startPage)
        .then(res => this.setState({images : res.data}));
    }

    fetchImg = () => {
        const {startPage} = this.state;
        this.setState({startPage: (this.state.startPage +1)})
        axios
        .get("http://localhost:5000/" + this.props.search + "/" + startPage)
        .then(res => this.setState({images : this.state.images.concat(res.data)}));
    }

    getKey = () => {
        const id = this.state.key;
        this.state.key = id +1 ;
        return id;
    }

    render (){
        
        return (
            <div >
                <InfiniteScroll
                dataLength={this.state.images.length}
                next={this.fetchImg}
                hasMore={true}
                loader={<h5 className="alignment">loading ... </h5>}
                >
                <div className="container">
                    {this.state.images.map(image => (
                     <Image key={this.getKey()} image={image} />
                     ))}
                </div>
                
                </InfiniteScroll>
            </div>
        );
    }
}
export default Images