import React, {useState} from 'react'
import Container, {Section} from './style'
import Image from "next/image"
import {data} from "@/mock/yonalishlar"
import {HiOutlineArrowRight} from "react-icons/hi"


const YonalishlarComponent = () => {

    return(
        <Container>
            <p className="title">Yo‘nalishlar</p>
            <p className="description">Ilmni o‘ziga mash‘ala tutgan Peshqadamlar Karvoni yo‘lga chiqadi va sizni o‘z safiga chaqiradi. Bu loyiha 6 yo‘nalishni o‘z ichiga oladi</p>
            <Container.Inset>
                {
                    data.map(({id, title, desc, img, position}, index)=> (
                        <Section key={id} position={position} index={index}>
                            <div className="imgBlock">
                                <Image src={img} alt={title} className={'img'} />
                            </div>
                            <div className="textBlock">
                                <p className="title">{title}</p>
                                <p className="desc">{desc}</p>
                                <div className="link">
                                    <HiOutlineArrowRight color={'#D8A66F'} />
                                    <p>Batafsil</p>
                                </div>
                            </div>
                        </Section>
                    ))
                }
            </Container.Inset>
        </Container>
    )
}


export default YonalishlarComponent