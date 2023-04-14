import React from 'react'
import Container from './style'
import {CgPushRight} from "react-icons/cg"
import {data} from "../../../mock/yonalishlar"
import {useRouter} from "next/router";
import Image from "next/image";

const YonalishlarCom = () => {

    const navigate = useRouter()

    return(
        <Container>
            <p className="mainTitle nocopy">Yo’nalishlar</p>
            <Container.BlocksSection>
                <div className="section">
                    {data.map(({id, title, desc, icon})=> (
                        <Container.Block key={id} onClick={()=> navigate.push(`/loyiha/${id}`)}>
                            {icon}
                            <p className="title">{title}</p>
                            <p className="desc">{desc}</p>
                            <button className={'button'}>
                                Batafsil…
                                <CgPushRight className={'buttonIcon'} />
                            </button>
                        </Container.Block>
                    ))}
                </div>
            </Container.BlocksSection>
        </Container>
    )
}

export default YonalishlarCom