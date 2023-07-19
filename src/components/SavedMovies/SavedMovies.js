import './SavedMovies.css'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

//TODO del
import movieImage from '../../images/card-saved.png';


const SavedMovies = () => {
    //TODO del
    const movies = [
        { _id: 1, image: movieImage, title: '33 слова о дизайне', length: '1ч 42м', saved: true },
        { _id: 2, image: movieImage, title: '34 слова о дизайне', length: '1ч 42м', saved: false },
        { _id: 3, image: movieImage, title: '35 слов о дизайне', length: '1ч 42м', saved: false },
    ];

    return(
        <section className='movies'>
            <Header/>
            <SearchForm/>
            <MoviesCardList cards={movies} isSavedFilms={true}/>
            <Footer/>
        </section>
    )
}

export default SavedMovies