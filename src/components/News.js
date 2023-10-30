import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
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

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page:1
    };
  }
  async componentDidMount() {
    let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f722eb14c7a4416ea26640e058592aa2&page=1&pagesize=${this.props.pagesize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parseddata = await data.json();
    this.setState({ articles: parseddata.articles, 
      totalResults:parseddata.totalResults,
    loading:false});
  }

  handleNextClick= async ()=>{
    if( !(this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pagesize))){
      let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f722eb14c7a4416ea26640e058592aa2&page=${this.state.page +1}&pagesize=${this.props.pagesize}`;   
      this.setState({loading:true});
      let data = await fetch(url);

      let parseddata = await data.json();
      
      this.setState({ 
        page: this.state.page +1,
        articles: parseddata.articles,
      loading:false  });
    }
    
            
    

   

  }
  handlePrevClick= async ()=>{
    
    let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f722eb14c7a4416ea26640e058592aa2&page=${this.state.page - 1}&pagesize=${this.props.pagesize}`;   
    this.setState({loading:true});
    let data = await fetch(url);
    let parseddata = await data.json();
    this.setState({ 
      page: this.state.page - 1,
      articles: parseddata.articles,
    loading:false
    });

  }

  render() 
  {
    return (
      <div className="container my-5">
        <h1 style={{margin:"20px 0px"}} className="text-center text-white">NewsBuss- Top Headlines</h1>
       {this.state.loading && <Spinner/>}
          {this.state.loading &&<Spinner/>}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <Newsitem
                  title={element.title ? element.title.slice(0, 40) : ""}
                  description={
                    element.description ? element.description.slice(0, 60) : ""
                  }
                  imageurl={element.urlToImage}
                  newsurl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Prev </button>
        
        <button disabled={this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pagesize)} type="button" className="btn btn-dark" onClick={this.handleNextClick} >Next &rarr; </button>
        </div>
        {this.state.loading &&<Spinner/>}
      </div>
    );
  }
}
