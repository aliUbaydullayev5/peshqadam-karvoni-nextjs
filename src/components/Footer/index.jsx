import React from 'react'
import Container from './style'
import Svg21 from '../../assets/svg/img21.svg'
import Svg22 from '../../assets/svg/img22.svg'
import Svg23 from '../../assets/svg/img23.svg'
import Svg24 from '../../assets/svg/img24.svg'
import {AiOutlineArrowUp} from "react-icons/ai"

const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    return(
        <Container>
            <div className="left">
                <p className="text">Biz haqimizda</p>
                <p className="text">Yo‘nalishlar</p>
                <p className="text">Yangiliklar</p>
                <p className="text">Kontakt</p>
                <p className="text">Hamkorlar</p>
            </div>
            <div className="right">
                <p className="rightText">Tadbirlar va boshqa yangiliklar haqida birinchilardan bo`lib xabardor bo`lish uchun ijtimoiy tarmoqlarda bizga obuna bo`ling.</p>
                <div className="rightSvgBlock">
                    <div className="roundBlockSvg">
                        <Svg21 />
                    </div>
                    <div className="roundBlockSvg">
                        <Svg22 />
                    </div>
                    <div className="roundBlockSvg">
                        <Svg23 />
                    </div>
                    <div className="roundBlockSvg">
                        <Svg24 />
                    </div>
                </div>
            </div>
            <div className="bottom">
                <p className="title">© 2022, «Peshqadam karvoni». Barcha huquqlar himoyalangan.</p>
            </div>
            <div className="bottomBottom" onClick={()=> scrollToTop()}>
                <AiOutlineArrowUp size={'22px'} />
            </div>
        </Container>
    )
}

export default Footer