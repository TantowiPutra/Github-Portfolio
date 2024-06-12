import { useState, useEffect } from "react"

import Header from "components/common/reusable/Header"
import Container from "components/common/reusable/Container"

import SectionWrapper from "components/layout/SectionWrapper"

import TechData from "_data/Techs"
import ImageContainer from "components/common/reusable/ImageContainer"

import classNames from "utils/classNames"
import { Helmet } from "react-helmet"

import { Cursor, useTypewriter } from "react-simple-typewriter"

import Skeleton from 'react-loading-skeleton'
import "react-loading-skeleton/dist/skeleton.css";

const TechStack = () => {
    const [text] = useTypewriter({
        words: ['My Tech Stacks'],
        loop: {},
    })

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const techEntry = TechData.map(({ id, imgPath }) => (
        imgPath ? (
            isLoading ? (
                <Skeleton
                    key={id}
                    width={60} 
                    height={60}
                />
            ) : (
                <ImageContainer 
                    key={id} 
                    imgPath={imgPath} 
                    classes="h-[80px] w-[80px]"
                    backgroundSize="contain"
                /> 
            )
        ) : ''
    ))

    return (
        <Container>
            <Helmet>
                <title>Tech Stack | Tantowi Putra</title>
            </Helmet>

            <Header>
                <span>
                    {text}
                </span>
                <span>
                    <Cursor/>
                </span>
            </Header>

            <SectionWrapper>
                {/* Tech Found */}
                {
                    !!techEntry.length && (
                        <span>
                            <div className="grid lg:grid-cols-8 md:grid-cols-3 sm:grid-cols-3 grid-cols-2 w-full gap-y-3">
                                {techEntry}
                            </div>
                        </span>
                    )
                }

                {/* Tech Not Found */}
                {
                    !techEntry.length && 
                    <div className="xl:text-xl md:text-lg text-base w-100 text-center mb-2 font-mono">
                        <p className='mb-3'>Tech(s) not found... </p>
                        <button className='underline text-cyan-600 cursor-pointer'>Clear Filter</button>
                    </div>
                }
            </SectionWrapper>

        </Container>
    ) 
}

export default TechStack