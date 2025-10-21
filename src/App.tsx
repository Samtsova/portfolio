import './App.css'
import { Footer } from './layout/footer/Footer';
import { Header } from './layout/header/Header';
import { Contact } from './layout/sections/contacts/Contacts';
import { Experience } from './layout/sections/experience/Experience';
import { Main } from './layout/sections/main/Main';
import { Skills } from './layout/sections/skills/Skills';
import { Works } from './layout/sections/works/Works';

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Experience/>
            <Skills/>
            <Works/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default App