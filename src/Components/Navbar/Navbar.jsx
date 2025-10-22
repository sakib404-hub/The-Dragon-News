import { Link, NavLink } from 'react-router';
import { FaAddressCard } from "react-icons/fa";
import { AuthContext } from '../../Provider/AuthContext';

const Navbar = () => {

    // const { user } = use(AuthContext);
    // console.log(user);

    return (
        <div className='w-11/12  mx-auto flex items-center justify-between p-2'>
            <div></div>
            <div className='nav space-x-5 text-accent'>
                <NavLink to={'/'}
                    className={'nav-link font-semibold text-md'}>Home</NavLink>
                <NavLink to={'/'}
                    className={'nav-link font-semibold text-md'}>About</NavLink>
                <NavLink to={'/'}
                    className={'nav-link font-semibold text-md'}>Carrer</NavLink>
            </div>
            <div className='flex items-center gap-2'>
                <FaAddressCard className='text-3xl'></FaAddressCard>
                <Link
                    to={'/auth'}
                    className='login-btn btn btn-primary px-10 py-1'>Login</Link>
            </div>
        </div>
    );
};

export default Navbar;