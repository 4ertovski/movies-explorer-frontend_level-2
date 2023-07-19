import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

import movieImage from '../../images/card-saved.png';

const movies123 = [
  { _id: 1, image: movieImage, title: '33 слова о дизайне', length: '1ч 42м', saved: true },
  { _id: 2, image: movieImage, title: '34 слова о дизайне', length: '1ч 42м', saved: false },
  { _id: 3, image: movieImage, title: '35 слов о дизайне', length: '1ч 42м', saved: true },
  { _id: 4, image: movieImage, title: '36 слов о дизайне', length: '1ч 42м', saved: false },
  { _id: 5, image: movieImage, title: '37 слов о дизайне', length: '1ч 42м', saved: false },
  { _id: 6, image: movieImage, title: '33 слова о дизайне', length: '1ч 42м', saved: false },
  { _id: 7, image: movieImage, title: '33 слова о дизайне', length: '1ч 42м', saved: false },
  { _id: 8, image: movieImage, title: '33 слова о дизайне', length: '1ч 42м', saved: false },
  { _id: 9, image: movieImage, title: '33 слова о дизайне', length: '1ч 42м', saved: false },
  { _id: 10, image: movieImage, title: '33 слова о дизайне', length: '1ч 42м', saved: false },
  { _id: 11, image: movieImage, title: '33 слова о дизайне', length: '1ч 42м', saved: false },
  { _id: 12, image: movieImage, title: '33 слова о дизайне', length: '1ч 42м', saved: false },
  { _id: 13, image: movieImage, title: '33 слова о дизайне', length: '1ч 42м', saved: false },
  { _id: 14, image: movieImage, title: '33 слова о дизайне', length: '1ч 42м', saved: false },
  { _id: 15, image: movieImage, title: '33 слова о дизайне', length: '1ч 42м', saved: false },
  { _id: 16, image: movieImage, title: '33 слова о дизайне', length: '1ч 42м', saved: false },
];

const Movies = ({onSearchMovies, movies}) => {
    return(
        <section className='movies'>
            <Header/>
            <SearchForm onSearchMovies={onSearchMovies}/>
            <MoviesCardList cards={movies123} isSavedFilms={false} />
            <Footer/>
        </section>
    )
}

export default Movies