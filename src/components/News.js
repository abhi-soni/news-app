import { useState, useEffect, useMemo } from "react";
import NewsItem from "./NewsItem";
import Loader from './Loader';

const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const apiOptions = useMemo(() => ({
        method: 'GET',
    }), []);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        setLoading(true);  // initially set loading="true" while fetching data
        fetch(`https://gnews.io/api/v4/top-headlines?token=${props.apiKey}&lang=en`, apiOptions)
            .then(result => {
                if (!result.ok) {
                    throw new Error('API request failed with status code ' + result.status);
                }
                return result.json()
            })
            .then(result => {
                setArticles(result.articles); // "articles" is property of "result" object, which contains main object values
                setLoading(false);
                setError('');
            })
            .catch(err => {
                console.error(err);
                // If api is configured correctly, but having some error in request, set apiError to true
                setLoading(false);
                setError('Error fetching data. Please try again later.');
            });
    }, [props.apiKey, apiOptions])

    return (
        <div className='container my-3'>
            <h2 className="text-center" style={{ marginTop: "68px" }}>Latest News</h2>
            <div style={{ position: "relative", top: "30vh" }}>
                {loading && <Loader />}
            </div>
            {error ? (
                <p style={errorCss}>{error}</p>
            ) : (
                <div className='row'>
                    {(!loading && articles !== undefined) && articles.map((element) => {   // here, elements represents "articles" object
                        // map function will render(show) <div> tag times equal to number of objects inside "articles" object
                        return <div key={element.url} className='col-md-4 col-sm-12'>
                            <NewsItem title={element.title ? element.title?.slice(0, 68) : "No Title Available"}
                                description={element.description ? element.description?.slice(0, 90) : "No Description available for this news. Please click on Read More buttion to read full news"}  //slice method will set how many characters we want to display
                                imgUrl={element.image} newsUrl={element.url} />
                        </div>
                    })}
                </div>
            )}
        </div>
    )
}
export default News;

const errorCss = {
    color: "red",
    textAlign: "center",
    marginTop: "35vh",
    fontSize: "30px",
    fontWeight: "bold",
}