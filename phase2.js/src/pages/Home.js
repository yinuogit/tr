import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import './Home.css';

const Home = () => {
    // 初始化点赞数：优先从localStorage读取，无数据则初始化为0
    const [likeCount, setLikeCount] = useState(() => {
        const savedCount = localStorage.getItem('likeCount');
        return savedCount ? parseInt(savedCount) : 0;
    });

    // 仅在点赞数变化时同步到localStorage（页面刷新/重新打开会读取此值）
    useEffect(() => {
        localStorage.setItem('likeCount', likeCount.toString());
    }, [likeCount]);

    // 点赞逻辑：点击+1，达到1000则归零，无其他自动归零逻辑
    const handleLike = () => {
        setLikeCount(prevCount => {
            const newCount = prevCount + 1;
            // 仅当新数值≥1000时归零，否则正常+1
            return newCount >= 1000 ? 0 : newCount;
        });

        // 点赞动画效果
        const likeBtn = document.getElementById('like-btn');
        likeBtn.classList.add('liked');
        setTimeout(() => {
            likeBtn.classList.remove('liked');
        }, 600);
    };

    return (
        <div className="home-container">
            <div className="starry-bg"></div>
            <div className="bg-overlay"></div>

            <div className="avatar-container">
                <img src="/img/me.jpg" alt="个人头像" />
            </div>

            {/* 点赞按钮区域（头像下方） */}
            <div className="like-btn-container">
                <button
                    id="like-btn"
                    className="like-btn"
                    onClick={handleLike}
                >
                    给我点赞👍 <span className="like-count">{likeCount}</span>
                </button>
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
