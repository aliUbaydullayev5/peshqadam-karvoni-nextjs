import React from 'react'
import Container from './style'
import Button from "@/components/Button";

const BannerComponent = () => {
    return(
        <Container style={{border: '1px solid red'}}>
            <div className="left">
                <div className="title">Ushbu yo‘nalishlardan qaysi biri sizga ma‘qul keidi?</div>
                <div className="desc">O‘z qobiliyatingiz bilan jamiyat rivojiga hissa qo‘shing, Peshqadamlar karvoniga qo‘shilish uchun ro‘yhatdan o‘ting!</div>
            </div>
            <div className="right">
                <Button>Ro‘yxatdan o‘tish</Button>
            </div>
        </Container>
    )
}

export default BannerComponent