import './MoviesCard.css'

const MoviesCard = ({card, isSavedFilms}) =>{
    const cardSaveButtonClassName = `${ card.saved ? 'card__save-button card__save-button_active' : 'card__save-button'}`;

    return (
        <li className='card'>
            <div className='card__container'>
                <div className='card__info'>
                    <h2 className='card__text'>{card.title}</h2>
                    <span className='card__length'>{card.length}</span>
                </div>
                {isSavedFilms ? (
                    <button className='card__remove-button'></button>
                ) : (
                    <button className={cardSaveButtonClassName}></button>
                )
                    }
            </div>
            <img
                className='card__image'
                alt={card.title}
                src={card.image}
            />
        </li>
    )
}

export default MoviesCard