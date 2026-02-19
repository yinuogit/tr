import React from 'react';
import Header from '../components/Header';
import './Resume.css';

const Resume = () => {
    return (
        <div className="resume-page">
            <Header />
            <div className="container">
                {/* 头部：头像+姓名+联系方式 */}
                <div className="header-section">
                    <img src="/img/me.jpg" title="个人头像" className="avatar" />
                    <h1 className="name">刘一诺</h1>
                </div>

                {/* 信息模块 */}
                <div className="section">
                    <h2 className="title">基础信息</h2>
                    <ul className="jianjie">
                        <li><span>性别：</span>男</li>
                        <li><span>学校：</span>中国科学技术大学</li>
                        <li><span>学院：</span>微电子学院</li>
                        <li><span>年级：</span>大一</li>
                    </ul>
                </div>

                {/* 技能模块 */}
                <div className="section">
                    <h2 className="title">专业技能</h2>
                    <div className="skills">
                        <span className="skill">html</span>
                        <span className="skill">JS</span>
                        <span className="skill">react</span>
                        <span className="skill">C语言</span>
                        <span className="skill">C++（略懂）</span>
                    </div>
                </div>

                {/* 经历模块 */}
                <div className="section">
                    <h2 className="title">项目经历</h2>
                    <div className="project-item">
                        <p className="project-desc">
                            负责大一上学期《集成电路科技导论》期末大作业wiki制作
                        </p>
                    </div>
                </div>

                {/* 评价模块 */}
                <div className="section">
                    <h2 className="title">自我评价</h2>
                    <div className="project-item">
                        <p className="project-desc">
                            一个活泼开朗的阳光boy，学习能力较强，有一定的动手能力，期待与大家一起学习、共同进步！
                        </p>
                    </div>
                </div>

                {/* 联系模块 */}
                <div className="section">
                    <h2 className="title">联系方式</h2>
                    <div className="project-item">
                        <p className="project-desc">
                            ○ 电话：19855113878 <br />
                            ○ 邮箱：lyn666@mail.ustc.edu.cn
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;