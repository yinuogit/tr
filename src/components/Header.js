import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    // 导航栏滚动变色逻辑
    useEffect(() => {
        const handleScroll = () => {
            const header = document.getElementById('main-header');
            if (window.scrollY > 10) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header id="main-header" className="header">
            <div className="nav-container">
                <div className="name">刘一诺</div>
                <nav>
                    <ul>
                        <li><Link to="/">首页</Link></li>
                        <li><Link to="/resume">简历</Link></li>
                        <li><Link to="/hobbies">爱好</Link></li>
                        <li><Link to="/hometown">家乡</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;