import './FilterCheckbox.css'

const FilterCheckbox = () =>{
    return(
        <div className={'filter'}> {/*TODO мб изменить на форму*/}
            <span className='filter__text'>Короткометражки</span>
            <input className='filter__checkbox' type='checkbox'></input>
        </div>
    )
}

export default FilterCheckbox;