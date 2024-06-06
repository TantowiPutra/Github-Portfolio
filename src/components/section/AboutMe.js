import { Helmet } from 'react-helmet'
import { Cursor, useTypewriter} from 'react-simple-typewriter'

import Container from 'components/common/reusable/Container'
import Heading from 'components/common/reusable/Heading'
import Paragprah from 'components/common/reusable/Paragraph'
import AboutMeData from '_data/AboutMeData'

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

            <Heading>
            I'm a&nbsp;
                <span style={{ color: "#D84D4D" }}>
                    {text}
                </span>
                <span>
                    <Cursor/>
                </span>
            </Heading>
            
            <div className="mt-4 w-3/4 h-[600px] text-justify overflow-y-auto p-5 scrollbar-thin scrollbar-webkit fade-in-top-2-sec">
                {
                    aboutMeEntry
                }
            </div>
        </Container>
    )
}

export default AboutMe