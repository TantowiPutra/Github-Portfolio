import { Helmet } from 'react-helmet'
import { Cursor, useTypewriter} from 'react-simple-typewriter'

import SectionWrapper from 'components/layout/SectionWrapper'

import Header from 'components/common/reusable/Header'
import Container from 'components/common/reusable/Container'
import Paragprah from 'components/common/reusable/Paragraph'

import AboutMeData from '_data/AboutMe'

const AboutMe = () => {
    const [text] = useTypewriter({
        words: ['DEVELOPER', 'GAMER', 'STUDENT'],
        loop: {},
    })

    const aboutMeEntry = AboutMeData.map((data) => (
        <Paragprah key={data.id}> 
            {data.text}
        </Paragprah>
    ))

    return (
        <Container>
            <Helmet>
                <title>About Me | Tantowi Putra</title>
            </Helmet>

            <Header>
                I'm a&nbsp;
                    <span style={{ color: "#D84D4D" }}>
                        {text}
                    </span>
                    <span>
                        <Cursor/>
                    </span>
            </Header>

            
            <SectionWrapper>
                {
                    aboutMeEntry
                }
            </SectionWrapper>
        </Container>
    )
}

export default AboutMe