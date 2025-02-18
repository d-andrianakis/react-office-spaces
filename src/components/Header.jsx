import logo from '../assets/logos/logo.png';
import Search from './Search';

export default function Header() {
    return <header>
        <Search term="term"/>
        <img src={logo} ></img>
        <h1>Office spaces app</h1>
    </header>
}