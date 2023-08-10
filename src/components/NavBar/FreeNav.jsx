import CartWidget from '../cartWidget/cartWidget';

const NavBar = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className='container-lg'>
                {}
                <a className='navbar-brand' href="#">Nanazon</a>
                {}
                <ul className='navbar-nav me-auto'>
                    <li className='nav-item'>
                        <a className='nav-link active' href="#">Home</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href="#">Slider</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href="#">Dropdown</a>
                    </li>
                </ul>
                {}
                <CartWidget/>
            </div>
        </nav>
    );
};

export default NavBar;