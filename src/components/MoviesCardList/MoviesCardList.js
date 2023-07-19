import Preloader from "../Preloader/Preloader";
import {Fragment} from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import './MoviesCardList.css'

const MoviesCardList = ({cards, isSavedFilms}) => {
    const isLoading = false;

    return(
        <section className='cards'>
            {isLoading ? (
                <Preloader/>
            ) : (
                <Fragment>
                <ul className= 'cards__list'>
                    {cards.map((card)=>(
                        <MoviesCard key={card._id} card={card} isSavedFilms={isSavedFilms}/>
                    ))}
                </ul>
                <div className='cards__button-container'>
                    {isSavedFilms? '' : <button className='cards__button-more'>Ещё</button> }
                </div>
                </Fragment>
            )}
        </section>
    )
}

export default MoviesCardList