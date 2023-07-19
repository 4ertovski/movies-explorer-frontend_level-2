import './SearchForm.css'
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

const SearchForm = ({ onSearchMovies }) =>{
    return(
        <section className={'search'}>
            <form className='search__form'>
                <div className='search__bar'>
                    <input
                        className='search__input'
                        id='search-input'
                        type='text'
                        placeholder='Фильм'
                        required={true}
                    />
                    <button className='search__button' onClick={onSearchMovies} type='submit'></button>
                </div>
                <FilterCheckbox/>
            </form>
        </section>
    )
}

export default SearchForm