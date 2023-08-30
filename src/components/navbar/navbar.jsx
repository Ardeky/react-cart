import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../cartWidget/cartWidget';

const Navbar = () => {
    return (
        <div>
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                <div className='container-lg'>
                {}
                <Link to ='/' className='navbar-brand'>Nanazon</Link>
                {}
                <ul className='navbar-nav me-auto'>
                    <li className='nav-item'>
                        <NavLink to ='/category/computer' className='nav-link'>Ordenadores</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to ='/category/tablet' className='nav-link'>Tablets</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to ='/category/laptop' className='nav-link'>Laptops</NavLink>
                    </li>
                </ul>
                    <CartWidget/>
                </div>
            </nav>
        </div>
    );
};
export default Navbar;