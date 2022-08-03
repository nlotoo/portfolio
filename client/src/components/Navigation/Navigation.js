import './navigation.css'
import { AiOutlineHome } from 'react-icons/ai';
import { BiMessageDetail } from 'react-icons/bi';
import { MdWorkspacesFilled } from 'react-icons/md';

export const Navigation = () => {

    return (
        <nav>
            <ul className='navigation-menu' >
                <li>
                    <a href="#home"><AiOutlineHome /></a>
                </li>
                <li>
                    <a href="#contact"><BiMessageDetail /></a>
                </li>
                <li>
                    <a href="#experience"><MdWorkspacesFilled /></a>
                </li>

            </ul>
        </nav>
    )
}