import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import './Hometown.css';

const Hometown = () => {
    const navigate = useNavigate();

    // 关闭按钮返回上一页
    const handleClose = () => {
        navigate(-1);
    };

    return (
        <div className="hometown-page">
            <Header />
            {/* 家乡详情内容 */}
            <div className="detail-page" id="hometown-detail">
                <div className="close-detail" onClick={handleClose}>
                    <i className="fa fa-times"></i>
                </div>
                <div className="detail-scroll-container">
                    <div className="detail-content">
                        <h2>我的家乡·江西高安</h2>
                        <div className="text-area">
                            <p>
                                我的家乡江西高安，是一座浸润着千年墨香与烟火气息的古城，像一颗温润的明珠镶嵌在赣中腹地，紧邻南昌，却藏着独属于自己的从容与厚重。这座始建于汉高祖六年的城池，曾是“吴头楚尾”的交通要冲，古往今来的马蹄与车辙，在青石板路上刻下了岁月的痕迹。华林寨的峰峦间，还留存着明代华林起义的营盘遗址，演兵场的断壁残垣、斩敌石的斑驳痕迹，无声诉说着“杀富济贫”的侠义传奇，而西王母之子玄秀真人筑坛的传说，又为这座山添了几分缥缈仙气。
                            </p>
                        </div>
                        <div className="image-gallery">
                            <div className="gallery-item">
                                <img src="/img/Daguanlou.webp" alt="高安大观楼" />
                            </div>
                            <div className="gallery-item">
                                <img src="/img/Hualin.webp" alt="华林寨遗址" />
                            </div>
                        </div>
                        <div className="text-area">
                            <p>
                                谈及高安的味道，最是让人魂牵梦绕。被誉为“素中之荤”的高安腐竹，是刻在每个游子舌尖的乡愁。选用本地优质黄豆，经浸泡、磨浆、煮浆、凝固、压榨等多道古法工序，才能成就那片色泽黄亮、油光透亮的珍品，无论是清炒时的豆香醇厚，还是炖汤时的吸汁入味，每一口都是自然与匠心的交融。
                            </p>
                            <p>
                                清晨的街巷里，一碗热气腾腾的炒粉是唤醒城市的密码，劲道的米粉裹着鲜美的酱汁，配上酸豆角、花生米，简单的食材在火候中碰撞出最地道的风味。
                            </p>
                        </div>
                        <div className="image-gallery">
                            <div className="gallery-item">
                                <img src="/img/fuzhu.webp" alt="高安腐竹" />
                            </div>
                            <div className="gallery-item">
                                <img src="/img/chaofen.webp" alt="高安炒粉" />
                            </div>
                        </div>
                        <div className="text-area">
                            <p>
                                高安的美，藏在山水与烟火的交织里。锦江穿城而过，滋养出两岸的旖旎风光，春日里柳丝垂岸，夏日里荷风送香，秋日里芦花飞雪，冬日里江雾迷蒙，每一季都有不同的景致。
                            </p>
                            <p>
                                城郊的巴夫洛生态谷，是自然的馈赠，万亩田园里，稻田翻浪、花海铺锦，周末时分，游人三三两两，或骑行漫步，或采摘垂钓，尽享田园之乐。而散布在乡间的古村落，青瓦白墙映着绿水青山，祠堂里的雕梁画栋、古道上的青苔石阶，都保留着最本真的模样，让人仿佛穿越回旧时光。
                            </p>
                        </div>
                        <div className="image-gallery">
                            <div className="gallery-item">
                                <img src="/img/jinjiang.jpg" alt="锦江两岸" />
                            </div>
                            <div className="gallery-item">
                                <img src="/img/bafuluo.jpg" alt="巴夫洛生态谷" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hometown;