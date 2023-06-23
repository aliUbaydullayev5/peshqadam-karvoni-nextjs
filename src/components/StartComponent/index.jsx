import React, {useState} from 'react'
import Container from './style'
import Logo from '../../assets/svg/logo.svg'
import Button from "@/components/Button"
import camelImg from '../../assets/png/camelImg.png'
import Image from "next/image"
import {pushRotate as Menu} from 'react-burger-menu'
import {AiOutlineMenu} from "react-icons/ai"

const StartComponent = () => {

    const [hamburget, setHamburger] = useState(false)

    return (
        <Container>
            <Container.Hamburger>
                <Menu isOpen={hamburget} left={true} width={'100%'} >
                    <p onClick={() => setHamburger(!hamburget)} id="home" className="menu-item">Home</p>
                    <p id="about" className="menu-item">About</p>
                    <p id="contact" className="menu-item">Contact</p>
                    <p className="menu-item--small">Settings</p>
                </Menu>
            </Container.Hamburger>
            <Container.LogoSection>
                <Container.Icon onClick={()=> setHamburger(!hamburget)}>
                    <AiOutlineMenu size={30} />
                </Container.Icon>
                <Logo className={'pointer'}/>
            </Container.LogoSection>
            <Container.MainContent>
                <div className={'left'}>
                    <p className="title">
                        PESHQADAMLAR KARVONI
                    </p>
                    <br/><br/>
                    <p className="description">
                        S<span>hAYX MUHAMMAD SODIQ MUHAMMAD YUSUF RAHIMAHULLOHNING MUBORAK HAYOTLARI VA YORQIN ILM YOʻLLARINI DAVOM ETTIRISH MAQSADIDA QADAM TASHLANG!</span>
                    </p>
                    <Button margin={'40px 0 0 0'}>Ro‘yxatdan o‘tish</Button>
                </div>
                <div className={'right'}>
                    <div className="top">
                        <p>Biz haqimizda</p>
                        <p>Yo‘nalishlar</p>
                        <p>Yangiliklar</p>
                        <p>Kontakt</p>
                        <p>Hamkorlar</p>
                    </div>
                    <div className="imgSection">
                        <Image src={camelImg} alt={'Camel Image'} height={500}/>
                    </div>
                </div>
            </Container.MainContent>
        </Container>
    )
}


export default StartComponent