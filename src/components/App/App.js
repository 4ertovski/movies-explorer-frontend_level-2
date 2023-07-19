import './App.css';
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import {Route, Routes} from "react-router-dom";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import {useState} from "react";



function App() {
    const [cards, setCards] = useState([]); //TODO use

  return (
      <div className='main-app'>
        <div className='main-app__content'>
            <Routes>
                <Route path='/' element={(
                    <>
                        <Header isLandingPage={true}/>
                        <Main/>
                        <Footer/>
                    </>
                )}/>
                <Route path='/signin' element={<Login/>}/>
                <Route path='/signup' element={<Register/>}/>
                <Route path='/profile' element={(
                    <>
                        <Header/>
                        <Profile/>
                    </>
                )}/>
                <Route path='/movies' element={
                    <Movies movies={cards}/>
                }/>
                <Route path='/saved-movies' element={<SavedMovies/>}/>

                <Route path='/*' element={<NotFound/>}/>
            </Routes>
        </div>
      </div>
  );
}

export default App;
