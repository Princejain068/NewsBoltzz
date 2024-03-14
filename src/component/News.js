import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Spinner";

const dummy =
  "https://imgs.search.brave.com/uVe-AD1Pqc-kRp4-_M95wcoNnq8BbrL_GXtetZ-Xo3o/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS53aXJlZC5jb20v/cGhvdG9zLzY1YzY5/NDQ5NzEyN2ZjNTcz/ZDEwZWUyMS8zOjIv/d18xMjgwLGNfbGlt/aXQvR09PRFktMi1X/b3JsZHMtU2FmZXN0/LUNoYXRib3QtU2l0/ZS1CdXNpbmVzcy0x/MDA0NDA4NC5qcGc";
export default function News(props) {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [totalResults, setTotalResults] = useState(0);

  const updateNews = async () => {
    // const url =  `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&sortBy=popularity&apiKey=173c2f4424f0444ba961f7c06e95cc16&page=${page}&pageSize=${props.pageSize}`;
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&from=2024-03-24&sortBy=publishedAt&apiKey=173c2f4424f0444ba961f7c06e95cc16&page=${page}&pageSize=${props.pageSize}`;
    // setState({ loading: true });
    let data = await fetch(url);
    // props.setProgress(30);
    let parsedData = await data.json();
    // props.setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    // props.setProgress(100);
  };
  // Fetch news data on component mount
  useEffect(() => {
    updateNews();
  }, []);

  const fetchMoreData = async () => {
    setPage(page + 1);
    setLoading(true);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&from=2024-03-24&sortBy=publishedAt&apiKey=173c2f4424f0444ba961f7c06e95cc16&page=${page}&pageSize=${props.pageSize}`;

    // const url =  `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}sortBy=popularity&apiKey=173c2f4424f0444ba961f7c06e95cc16&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setLoading(false)
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  return (
    <>
      <h1 className="text-center" style={{ margin: "65px 0px" }}>
        NewsBoltzz
      </h1>
      {loading &&<Spinner/>}
      <InfiniteScroll
        dataLength={articles.length? articles.length : 0}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={ loading &&<Spinner/>}
      >
        <div className="container ">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4 my-4" key={element.url}>
                  <Newsitem
                    title={element.title ? element.title: ""}
                    description={
                      element.description
                        ? element.description
                        : ""
                    }
                    imageUrl={element.urlToImage ? element.urlToImage : dummy}
                    newsurl={element.url}
                    author = {element.author}
                    source = {element.source.name}
                    date ={element.publishedAt}
                    // source={element.source}
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

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "sports",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
