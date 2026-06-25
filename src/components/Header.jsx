import { Link, NavLink, } from 'react-router-dom'
import '../App.scss'

export const Header = () => {
    return (
        <>
            <header className='header'>
                <div className="container">
                    <div className="header__wrapper">
                        <h1><Link className="header__title" to={'/'}>Compare the product!</Link></h1>
                        <ul className='header__list'>
                            <li><NavLink to={'/phones'} className='header__item'>Phones</NavLink></li>
                            <li><NavLink to={'/football'} className='header__item'>Football</NavLink></li>
                            <li><NavLink to={'/pieces'} className='header__item'>Pieces</NavLink></li>
                            <li><NavLink to={'/cars'} className='header__item'>Cars</NavLink></li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}
