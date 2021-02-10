import {Navbar} from './componets/Navbar/Navbar';
import {Home} from './componets/Home/Home';
import {About} from './componets/About/About';

import './index.scss'

export const MainApp = () => {
    return (
        <>
        <Navbar />
        <Home />
        <About />
        </>
    )
}