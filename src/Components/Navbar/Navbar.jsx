import { Link, NavLink } from 'react-router';
import { FaAddressCard, FaUserCircle } from "react-icons/fa";
import { AuthContext } from '../../Provider/AuthContext';
import { use } from 'react';

const Navbar = () => {
    const { user, logOut } = use(AuthContext);

    // const { user } = use(AuthContext);
    // console.log(user);
    const handleSignOutButton = () => {
        console.log('Button is Clicked');
        logOut()
            .then(() => {
                alert('You Logged Out Successfully!');
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div className='w-11/12  mx-auto flex items-center justify-between p-2'>
            <div>
                {/* ✅ Sweet user display using icon */}
                {
                    user ? (
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 border-2 border-primary">
                                <FaUserCircle className="text-3xl text-primary" />
                            </div>
                            <span className="font-medium text-sm text-gray-700">
                                {user.displayName || user.email}
                            </span>
                        </div>
                    ) : (
                        <span className="text-gray-500 text-sm">Guest</span>
                    )
                }
            </div>
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
                {
                    user ? <button
                        className='login-btn btn btn-primary px-10 py-1'
                        onClick={handleSignOutButton}>Sign Out</button> : <Link
                            to={'/auth'}
                            className='login-btn btn btn-primary px-10 py-1'>Login
                    </Link>
                }
            </div>
        </div>
    );
};

export default Navbar;