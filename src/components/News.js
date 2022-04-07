import { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Loader from './Loader';

const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    
    useEffect(() => {
        const apiCall = async () => {
        const apiOptions = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'current-news.p.rapidapi.com',
                'X-RapidAPI-Key': `${props.apiKey}`
            }
        };
        setLoading(true);  // initially set loading="true"
        fetch("https://current-news.p.rapidapi.com/news", apiOptions)
            .then(response => response.json()) //set loading="true" while fetching data
            // this is an ARROW FUNCTION -> same as .then((response) =>{response.json()}}
            .then(result => {       // the value of "response" is stored in "result"
                // console.log(result);
                setArticles(result.news); // "news" is property of "result" object, which contains main object values
                setLoading(false);
            })
            // catch will be executed if the fetch promise fails(means when there is error in fatching api url)
            .catch(err => console.error(err));
    }
        apiCall();
    },[props.apiKey])

    return (
        <div className='container my-3'>
            <h2 className="text-center" style={{marginTop:"68px"}}>Latest News</h2>
            <div style={{ position: "relative", top: "30vh" }}>
                {loading && <Loader />}             {/* show loader if loading state is true */}
            </div>
            <div className='row'>
                {!loading && articles.map((element) => {   // here, elements represents "articles" object
                    // map function will render(show) <div> tag times equal to number of objects inside "articles" object

                    return <div key={element.url} className='col-md-4 col-sm-12'>
                        <NewsItem title={element.title ? element.title?.slice(0, 68) : "No Title Available"}
                            description={element.description ? element.description?.slice(0, 90) : "No Description available for this news. Please click on Read More buttion to read full news"}  //slice method will set how many characters we want to display
                            imgUrl={element.urlToImage} newsUrl={element.url} />
                    </div>
                })}

            </div>
        </div>
    )
}
export default News;