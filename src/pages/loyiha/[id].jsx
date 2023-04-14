import React from 'react'
import YonalishComponents from "@/components/yonalishComponents"
import {useRouter} from "next/router"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"


const YonalishIdPage = () => {
    const router = useRouter()

    const {id} = router.query

    return(
        <Navbar>
            <YonalishComponents id={id} />
            <Footer />
        </Navbar>
    )
}

export default YonalishIdPage