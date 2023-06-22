import React from 'react'
import Container from './style'
import Button from "@/components/Button"
import {HiOutlineArrowRight} from "react-icons/hi"
const BannerBottomComponent = () => {
    return(
        <Container>
            <Container.TopSection>
                <div className={'titleBlock'}>
                    <p className="title">BUGUN KITOB O‘QIGAN ODAM KЕCHAGI ODAM EMAS</p>
                </div>
                <div className={'imgBlock'}>
                    {/*<Image src={img7} alt={'img do not important'}/>*/}
                </div>
            </Container.TopSection>
            <Container.BottomSection>
                <Container.BottomLeftBackImg>

                </Container.BottomLeftBackImg>
                <div className="right">
                    <p className="title">«Peshqadam Karvoni» loyihasi haqida</p>
                    <div className="line"></div>
                    <p className="desc">Shayx Muhammad Sodiq Muhammad Yusuf rahimahulloh hazratlarining umr yo‘llari, qoldirgan asarlari va undagi shiorlari, bergan saboq va nasihatlariga nazar soladigan bo‘lsak, butun e’tiborlari xalqimiz ma’rifatiga qaratilganiga guvoh bo‘lamiz</p>
                    <Button margin={'0'} width={'170px'}>
                        <span style={{height: '25px'}}>
                            <HiOutlineArrowRight color={'#000'} />
                        </span>
                        Batafsil
                    </Button>
                </div>
            </Container.BottomSection>
            <Container.Line />
        </Container>
    )
}

export default BannerBottomComponent