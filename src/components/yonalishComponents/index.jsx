import React, {useEffect} from 'react'
import Container from './style'
import {data} from "../../mock/yonalishlar"
import {BiExit} from "react-icons/bi"
import {useRouter} from "next/router";

const YonalishComponents = ({id}) => {

    const oneData = data.filter((value)=> value.id == id)[0]

    useEffect(()=> {window.scrollTo(0,0)}, [])

    const navigate = useRouter()

    return(
        <Container>
            <Container.Inset>
                <Container.Button onClick={()=> navigate.push('/')}>
                    Ortga
                    <BiExit className={'icon'} />
                </Container.Button>
                <h1>{oneData?.title}</h1>
                <p>{oneData?.fullDesc}</p>
            </Container.Inset>
        </Container>
    )
}

export default YonalishComponents