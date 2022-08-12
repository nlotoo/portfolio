import './navigation.css'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiMessageDetail } from 'react-icons/bi';
import { BiGitBranch } from 'react-icons/bi';
import { MdWorkOutline } from 'react-icons/md';

import { useState } from 'react';

export const Navigation = () => {

    const [activeNav, setActiveNav] = useState('#');

    return (
        <nav className='nav-paf'>
            <ul className='navigation-menu' >

                <li>
                    <a onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active-a-tag' : ''} href="#home"><AiOutlineHome /></a>
                </li>
                <li>
                    <a onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active-a-tag' : ''} href="#about"><AiOutlineUser /></a>
                </li>
                <li>
                    <a onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active-a-tag' : ''} href="#experience"><BiGitBranch /></a>
                </li>

                <li>
                    <a onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active-a-tag' : ''} href="#portfolio"><MdWorkOutline /></a>
                </li>
                <li>
                    <a onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active-a-tag' : ''} href="#contact"><BiMessageDetail /></a>
                </li>

            </ul>
        </nav >
    )
}