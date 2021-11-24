

import './AboutItem.css'

function AboutItem(){



    return(
        <div className="about-container">
            <div className="about-wrapper">
                <img className="about-img" alt="Zoe" src="https://images.contentstack.io/v3/assets/blt187521ff0727be24/blta5516014683545a0/60ee1444a471a34acb2c2016/zoe-splash.jpg"  />
                <div className="about-text">
                    <h2 className="about-text__title">
                        Zoe
                    </h2>
                    <p className="about-text__description">
                        Q: Nghịch sao - Trúng phát chết luôn <br/>
                        W: Lụm lụm lụm - Lụm hết<br/>
                        E: Bóng ngủ - Đưa em vào giấc mộng thật xinh , khi tỉnh dậy em thấy xám màn hình<br/>
                        R: Vòng tròn xuyên thấu - Anh muốn bay xuyên thời gian, xuyên không gian để tới bên em, anh muốn bước đi cùng em trên đoạn đường đầy nắng
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutItem