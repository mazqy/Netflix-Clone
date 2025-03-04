import netflixLogo from './assets/logos/netflix-3.svg'
import searchIcon from './assets/icons/search.svg'
import bellIcon from './assets/icons/bell.svg'
import accountIcon from './assets/icons/user-circle.svg'

function Header(){
    return(
        <header>
            <nav className = "NavBar">
            <img className="netflixLogo" src={netflixLogo} alt="" />
                <ul className="NavList">
                    <li className="NavElement"><a className="Nava" href="">Home</a></li>
                    <li className="NavElement"><a className="Nava" href="">TV Shows</a></li>
                    <li className="NavElement"><a className="Nava" href="">Movies</a></li>
                    <li className="NavElement"><a className="Nava" href="">New & Popular</a></li>
                    <li className="NavElement"><a className="Nava" href="">My List</a></li>
                    <li className="NavElement"><a className="Nava" href="">Browse by Languages</a></li>
                </ul>
                <ul className="secondNavList">
                    <li className="secondNavListElement" ><img src={searchIcon} alt="" /></li>
                    <li className="secondNavListElement" ><img src={bellIcon} alt="" /></li>
                    <li className="secondNavListElement" ><img src={accountIcon} alt="" /></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header