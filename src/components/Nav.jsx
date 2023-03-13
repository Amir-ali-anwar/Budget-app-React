// rrd imports
import {Form, NavLink} from 'react-router-dom';
// library
import { TrashIcon } from '@heroicons/react/24/solid'
// assets
import logomark from "../assets/logomark.svg"

const Nav=({username})=>{
    return (
        <nav>
            <NavLink to="/" aria-label='Go to home'>
                <img src={logomark} height={30} />
            </NavLink>
        </nav>
    )
}


export default Nav