import Container from '../components/common/Container'
import Heading from '../components/common/Heading'
import Paragprah from '../components/common/Paragraph'
import { Cursor, useTypewriter} from 'react-simple-typewriter'
import AboutMeData from '../data/AboutMeData'

const AboutMe = () => {
    const [text] = useTypewriter({
        words: ['Developer', 'Gamer', 'Student'],
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
            <div className="content mt-4 w-3/4 h-3/4 text-justify overflow-y-auto p-5 scrollbar-thin scrollbar-webkit">
                {
                    AboutMeData.map((data) => (
                        <Paragprah> 
                            {data.text}
                        </Paragprah>
                    ))
                }
            </div>
        </Container>
    )
}

export default AboutMe