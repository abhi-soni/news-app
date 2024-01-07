import './NewsItem.css';

const NewsItem = (props) => {
    return (
        <div className="my-2">
            <div className="card-group">
                <div className="card w-100 h-100">
                    <img src={!props.imgUrl ? "https://st2.depositphotos.com/1560768/6162/i/450/depositphotos_61621057-stock-photo-no-image-available.jpg" : props.imgUrl} className="card-img-top" alt="..." loading="lazy" />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}...</h5>
                        <p className="card-text">{props.description}...</p>
                        <a href={props.newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsItem;