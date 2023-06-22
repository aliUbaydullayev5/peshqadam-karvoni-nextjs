import React from 'react'
import Container from './style'
import {HiOutlineArrowRight} from "react-icons/hi";

const VideoBolimComponent = () => {
    return(
        <Container>
            <Container.Inset>
                <p className="title">Video bo‘lim</p>
                <Container.SectionContainer>
                    <Container.Section>
                        <div className="videoArea">
                            <iframe width="355" height="255" src="https://www.youtube.com/embed/Wd8XpxN_iJw"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen></iframe>
                        </div>
                        <p className="data">28 fevral 2023 - yil</p>
                        <p className="title">Kuyov tanlash borasidagi ko‘rsatmalar</p>
                        <p className="linkBatafsil">
                            <HiOutlineArrowRight color={'#D8A66F'} />
                            <span>Batafsil</span>
                        </p>
                    </Container.Section>
                    <Container.Section>
                        <div className="videoArea">
                            <iframe width="355" height="255" src="https://www.youtube.com/embed/Wd8XpxN_iJw"
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen></iframe>
                        </div>

                        <p className="data">28 fevral 2023 - yil</p>
                        <p className="title">Kuyov tanlash borasidagi ko‘rsatmalar</p>
                        <p className="linkBatafsil">
                            <HiOutlineArrowRight color={'#D8A66F'} />
                            <span>Batafsil</span>
                        </p>
                    </Container.Section>
                    <Container.Section>
                        <div className="videoArea">
                            <iframe width="355" height="255" src="https://www.youtube.com/embed/Wd8XpxN_iJw"
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen></iframe>
                        </div>
                        <p className="data">28 fevral 2023 - yil</p>
                        <p className="title">Kuyov tanlash borasidagi ko‘rsatmalar</p>
                        <p className="linkBatafsil">
                            <HiOutlineArrowRight color={'#D8A66F'} />
                            <span>Batafsil</span>
                        </p>
                    </Container.Section>
                </Container.SectionContainer>
            </Container.Inset>
        </Container>
    )
}

export default VideoBolimComponent



