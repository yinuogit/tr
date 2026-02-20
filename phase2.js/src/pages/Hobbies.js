import React from 'react';
import Header from '../components/Header';
import './Hobbies.css';

const Hobbies = () => {
    // 爱好数据
    const hobbies = [
        {
            title: '象棋',
            img: '/img/chess.jpg',
            desc: '象棋是我闲暇时最喜欢的益智游戏，每一步棋都需要深思熟虑，在楚河汉界之间博弈，既能锻炼逻辑思维，也能体会古人的智慧。'
        },
        {
            title: '游泳',
            img: '/img/swim.jpg',
            desc: '游泳是极佳的全身运动，潜入水中的那一刻，所有烦恼都能被水流带走。无论是自由泳还是蛙泳，都能让我感受到身体与水的和谐。'
        },
        {
            title: '羽毛球',
            img: '/img/badminton.jpg',
            desc: '羽毛球是充满活力的运动，和朋友一起挥拍竞技，不仅能锻炼身体的反应速度和协调性，还能增进彼此的友谊。'
        },
        {
            title: '桌游',
            img: '/img/boardgames.jpg',
            desc: '桌游是社交的绝佳方式，无论是策略类、合作类还是欢乐类桌游，都能和朋友度过轻松愉快的时光，在游戏中体验不同的乐趣。'
        }
    ];

    return (
        <div className="hobbies-page">
            <Header />
            <br />
            {/* 爱好展示容器（田字格） */}
            <div className="hobbies-container">
                {hobbies.map((hobby, index) => (
                    <div className="hobby-card" key={index}>
                        <img src={hobby.img} alt={hobby.title} className="hobby-img" />
                        <div className="hobby-content">
                            <h2>{hobby.title}</h2>
                            <p>{hobby.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Hobbies;