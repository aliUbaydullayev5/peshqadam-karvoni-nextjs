import React from 'react'
import Container from './style'
import {data} from "@/mock/yangiliklar"
import {HiOutlineArrowRight} from "react-icons/hi";


const YangiliklarComponent = () => {
    return(
        <Container>
            <p className="title">Yangiliklar</p>
            <Container.Inset>
                {
                    data.map(({id, title, data, desc, img})=> (
                        <Container.Card key={id}>
                            <Container.ImageBack src={img} />
                            <p className="data">{data}</p>
                            <p className="title">{title}</p>
                            <p className="desc">{desc}</p>
                            <p className="linkBatafsil">
                                <HiOutlineArrowRight color={'#D8A66F'} />
                                <span>Batafsil</span>
                            </p>
                        </Container.Card>
                    ))
                }
            </Container.Inset>
        </Container>
    )
}

export default YangiliklarComponent