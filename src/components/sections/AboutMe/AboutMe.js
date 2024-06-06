import Container from 'components/common/reusable/Container'
import Heading from 'components/common/reusable/Heading'
import Paragprah from 'components/common/reusable/Paragraph'
import { Cursor, useTypewriter} from 'react-simple-typewriter'
import AboutMeData from '_data/AboutMeData'

const AboutMe = () => {
    const [text] = useTypewriter({
        words: ['DEVELOPER', 'GAMER', 'STUDENT'],
        loop: {},
    })

    return (
        <Container>
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
                    AboutMeData.map((data) => (
                        <Paragprah key={data.id}> 
                            {data.text}
                        </Paragprah>
                    ))
                }
            </div>
        </Container>
    )
}

export default AboutMe