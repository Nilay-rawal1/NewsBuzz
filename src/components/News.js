import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export default class News extends Component {
    static defaultProps={
      country:'in',
      pagesize:5,
      category:"general"
    }


    static propTypes={
      country: PropTypes.string,
      pagesize:PropTypes.number,
      category:PropTypes.string
    }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page:1,
      totalResults:0

    };
    document.title=`${this.props.category}-NewsBuzz`
  }
  async componentDidMount() {
    this.props.setProgress(10);
    let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7310a9f750e7489989d145ee2c1a00dc&page=1&pagesize=${this.props.pagesize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parseddata = await data.json();
    this.props.setProgress(60);
    this.setState({ articles: parseddata.articles, 
      totalResults:parseddata.totalResults,
    loading:false});
    this.props.setProgress(100);
    //eslint-disable-next-line
  }

  fetchMoreData = async() => {
    
    
    this.setState({page:this.state.page +1})
    let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7310a9f750e7489989d145ee2c1a00dc&page=1&pagesize=${this.props.pagesize}`;
   
    let data = await fetch(url);
    let parseddata = await data.json();
    this.setState({ articles: this.state.articles.concat(parseddata.articles), 
      totalResults:parseddata.totalResults});
      

  };

  render() 
  {
    return (
      <>
      <h1 style={{marginTop:"2.3em", marginBottom:"1rem", marginLeft:"10rem"}} className="text-center text-white">Top {this.props.category} Headlines</h1>

           {this.state.loading &&<Spinner/>} 
          <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!== this.state.totalResults}
          loader={<Spinner/>}
        >
         <div className="container">
          <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4 project-card" key={element.url}>
                <Newsitem
                  title={element.title ? element.title.slice(0, 34) : ""}
                  description={
                    element.description ? element.description.slice(0, 60) : ""
                  }
                  imageurl={element.urlToImage}
                  newsurl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
              
              
            );
          })}
          </div>
        </div> 

        
        </InfiniteScroll>
        
        
      </>
    );
  }
}
