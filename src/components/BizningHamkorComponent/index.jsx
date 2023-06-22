import React from 'react'
import Container from './style'
import {data} from "@/mock/hamkorlar"
import Image from "next/image";

const BizningHamkorComponent = () => {
    return(
        <Container>
            <p className="title">Bizning hamkorlar</p>
            <div className="container">
                {
                    data.map(({id, img})=> (
                        <Image src={img} alt={'logo'} key={id} className={'logo'} />
                    ))
                }
            </div>
        </Container>
    )
}

export default BizningHamkorComponent