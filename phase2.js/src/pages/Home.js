import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <div className="starry-bg"></div>
            <div className="bg-overlay"></div>

            <div className="avatar-container">
                <img src="/img/me.jpg" alt="个人头像" />
            </div>

            <div className="btn-container">
                <Link to="/resume" className="btn-custom intro-btn">
                    <i className="fa fa-user-o"></i> 简要介绍
                </Link>
                <Link to="/hobbies" className="btn-custom hobby-btn">
                    <i className="fa fa-heart-o"></i> 兴趣爱好
                </Link>
                <Link to="/hometown" className="btn-custom study-btn">
                    <i className="fa fa-building"></i> 我的家乡
                </Link>
            </div>

            <Footer />
        </div>
    );
};

export default Home;