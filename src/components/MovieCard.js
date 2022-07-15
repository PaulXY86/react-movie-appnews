import PropTypes  from 'prop-types';
import './MovieCard.css';

function MovieCard(props){
    return(
        <article className="MovieCard">
            <img
            className='MovieCard-poster'
            src={props.poster}
            alt={props.title} 
            />
            <div>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
        </article>
    )   
   }
   
   MovieCard.defaultProps = {
    poster:"https://s3-ap-southeast-1.amazonaws.com/popcornsg/placeholder-movieimage.png",
    title: "insert title",
    description:"insert description",
   }

   MovieCard.prototype = {
    title: PropTypes.string,
    poster: PropTypes.string,
    description: PropTypes.string,
   };

   export default MovieCard;
