import React from 'react'
import Container from './style'
import backImg from '../../../assets/png/startPageBack.jpg'
import { Autoplay, Pagination } from "swiper"
import {Swiper, SwiperSlide} from "swiper/react"
import {useRouter} from "next/router"
import "swiper/css"
import "swiper/css/pagination"
const StartCom = () => {

    const navigate = useRouter()

    const data = [
        {
            id: 1,
            title: 'Peshqadam karvonidan qolib ketmang!',
            subTitle: 'ShAYX MUHAMMAD SODIQ MUHAMMAD YUSUF RAHIMAHULLOHNING MUBORAK HAYOTLARI VA YORQIN ILM YOʻLLARINI DAVOM ETTIRISH MAQSADIDA QADAM TASHLANG!',
            img: backImg
        },
        {
            id: 2,
            title: 'Peshqadam karvonidan qolib ketmang!',
            subTitle: 'ShAYX MUHAMMAD SODIQ MUHAMMAD YUSUF RAHIMAHULLOHNING MUBORAK HAYOTLARI VA YORQIN ILM YOʻLLARINI DAVOM ETTIRISH MAQSADIDA QADAM TASHLANG!',
            img: backImg
        },
        {
            id: 3,
            title: 'Peshqadam karvonidan qolib ketmang!',
            subTitle: 'ShAYX MUHAMMAD SODIQ MUHAMMAD YUSUF RAHIMAHULLOHNING MUBORAK HAYOTLARI VA YORQIN ILM YOʻLLARINI DAVOM ETTIRISH MAQSADIDA QADAM TASHLANG!',
            img: backImg
        },
        {
            id: 4,
            title: 'Peshqadam karvonidan qolib ketmang!',
            subTitle: 'ShAYX MUHAMMAD SODIQ MUHAMMAD YUSUF RAHIMAHULLOHNING MUBORAK HAYOTLARI VA YORQIN ILM YOʻLLARINI DAVOM ETTIRISH MAQSADIDA QADAM TASHLANG!',
            img: backImg
        }
    ]

    return (
        <Container>
            <Container.Swiper autoplay={{delay: 2500, disableOnInteraction: false,}} pagination={{clickable: true,}} modules={[Autoplay, Pagination]} className="mySwiper">
                {
                    data.map(({id, title, img, subTitle}) => (
                            <SwiperSlide key={id} className="SwiperSlide">
                                <Container.Inset imgBack={img}>
                                    <h1 className="title">
                                        {title}
                                    </h1>
                                    <p className="subTitle">
                                        {subTitle}
                                    </p>
                                    <div className={'nocopy'}>
                                        <Container.Button target={'_blank'} href={'https://docs.google.com/forms/d/1K3L76qTuT1smjryZhIGbrH_EKKaK5hfyPaQONDBEqQA/viewform?edit_requested=true'} back={'#01444F'} color={'#fff'}>Ariza topshirish</Container.Button>
                                        <Container.Button onClick={()=> navigate.push('/loyiha')} mobileNone={true} back={'#fff'} color={'#01444F'}>Loyiha bilan tanishish</Container.Button>
                                    </div>
                                </Container.Inset>
                            </SwiperSlide>
                        )
                    )
                }
            </Container.Swiper>
        </Container>
    );
}

export default StartCom