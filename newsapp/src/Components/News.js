import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
  articles = [
    {
      "source": {
        "id": "bbc-sport",
        "name": "BBC Sport"
      },
      "author": null,
      "title": "'Cricket's carbon footprint brings opportunity'",
      "description": "Australia captain Pat Cummins discusses his foundation, and the sport's opportunity to lead the way on tackling climate change.",
      "url": "http://www.bbc.co.uk/sport/cricket/66961332",
      "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/A454/production/_131286024_p0ghgmh1.jpg",
      "publishedAt": "2023-10-03T05:37:17.9515451Z",
      "content": "Cummins wins BBC Green Sport Athlete of the Year\r\nCricket can use its platform to make a difference in combatting climate change despite its \"huge\" carbon footprint, says Australia captain Pat Cummin… [+3865 chars]"
    },
    {
      "source": {
        "id": "al-jazeera-english",
        "name": "Al Jazeera English"
      },
      "author": "Al Jazeera Staff",
      "title": "Five big names missing out on the 2023 ICC Cricket World Cup",
      "description": "Some of the world’s leading cricketers are set to miss the tournament due to injury, drama and in some cases, both.",
      "url": "http://www.aljazeera.com/sports/2023/10/3/five-big-names-missing-out-2023-icc-cricket-world-cup",
      "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/09/AP18023402304587-1695799826.jpg?resize=1920%2C1440",
      "publishedAt": "2023-10-03T05:12:23Z",
      "content": "For professional athletes, representing their country in a global sporting event is usually their driving ambition and winning it is the crowning glory of their careers.\r\nFor most cricketers, the one… [+5360 chars]"
    },
    {
      "source": {
        "id": "bbc-sport",
        "name": "BBC Sport"
      },
      "author": null,
      "title": "Beaumont & Brook named PCA players of the year",
      "description": "England batters Tammy Beaumont and Harry Brook are named the Professional Cricketers' Association women's and men's players of the year.",
      "url": "http://www.bbc.co.uk/sport/cricket/66987161",
      "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/972D/production/_131310783_bbc-sport-index-imagery-2-split-images-gradient-dc0ca7c2-ffb0-445b-9720-17ed38ffab11.png",
      "publishedAt": "2023-10-02T22:22:19.1851076Z",
      "content": "England batters Tammy Beaumont and Harry Brook have been named the Professional Cricketers' Association women's and men's players of the year. \r\nIn the Ashes Test against Australia in June, opener Be… [+2559 chars]"
    },
    {
      "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      "publishedAt": "2020-04-27T11:41:47Z",
      "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
      "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      "publishedAt": "2020-03-30T15:26:05Z",
      "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    }
  ]

  static defaultProps = {
    country: 'in',
    pageSize: 6,
    category: 'general'
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults:0
    }
    document.title = `${this.capitalize(this.props.category)} - NewsMonkey`;
    // console.log("Constructor");
  }


  async updateNews() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=faa99b70cc0a49bfb9d33b15c8e704d8&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(70);
    console.log(parsedData);
    this.setState(
      {
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        loading: false
      });
      this.props.setProgress(100);
  }


  async componentDidMount() {
    // console.log("cdn");
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=faa99b70cc0a49bfb9d33b15c8e704d8&page=1&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true});
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData);
    // this.setState(
    //   { articles: parsedData.articles, 
    //     totalResults: parsedData.totalResults,
    //   loading:false});

    this.updateNews();
  }

  handlePrevClick = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=faa99b70cc0a49bfb9d33b15c8e704d8&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true});
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parsedData.articles,
    //   loading:false
    // })

    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  }

  handleNextClick = async () => {
    // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
    //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=faa99b70cc0a49bfb9d33b15c8e704d8&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    //   this.setState({loading:true});
    //   let data = await fetch(url);
    //   let parsedData = await data.json();
    //   this.setState({
    //     page: this.state.page + 1,
    //     articles: parsedData.articles,
    //     loading:false
    //   })
    // }

    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  }

  fetchMoreData = async () => {
   this.setState({page:this.state.page+1});
   const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=faa99b70cc0a49bfb9d33b15c8e704d8&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState(
      {
        articles: this.state.articles.concat(parsedData.articles),
        totalResults: parsedData.totalResults,
      });
  };


  render() {
    console.log("render");
    return (
      <>
        <h1 className="text-center" style={{ margin: '35px 0px' }}>NewsMonkey - Top {this.capitalize(this.props.category)} Headlines</h1>
        {this.state.loading && <Spinner/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          // loader={<Spinner/>}
        >
          <div className="container">
          <div className="row">
            {/* !this.state.loading &&   remove from next line */}
            {this.state.articles.map((element) => {
              return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 45) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
              </div>
            })}
          </div>
          </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr;Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div> */}
      </>
    )
  }
}

export default News
