import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <div style={{display: 'flex',
          justifyContent: 'flex-end',
          right: 0,
          position: 'absolute'
}}>
          <span className="badge rounded-pill bg-danger">
            {source}
          </span>
        </div>
        <img src={!imageUrl ? "https://akm-img-a-in.tosshub.com/indiatoday/images/story/media_bank/202310/google-pixel-8-024621957-16x9_0.png?VersionId=pjeEONy1fFXCFlT5W22Ke0DZ6d7.jKh4" : imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}
          </h5>
          <p className="card-text">{description}...</p>
          <p className="card-text"><small className="text-body-secondary">By {!author ? "unknown" : author} on {new Date(date).toGMTString()} </small></p>
          <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read more</a>
        </div>
      </div>
      </div >
    )
  }
}

export default NewsItem
