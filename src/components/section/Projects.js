import { Cursor, useTypewriter} from 'react-simple-typewriter'

import Header from "components/common/reusable/Header"
import Container from "components/common/reusable/Container"

import ProjectsCard from "components/common/ProjectsCard"

import SectionWrapper from "components/layout/SectionWrapper"

import { Helmet } from "react-helmet"

import ProjectsData from '_data/ProjectsData'

const Projects = () => {
    const [text] = useTypewriter({
        words: ['Archives of My Projects'],
        loop: {},
    })

    const ProjectEntry = ProjectsData.map(({id, imgPath, title, description, techStack}) => (
        <ProjectsCard 
            key={id}
            imgPath={imgPath}
            title={title} 
            description={description} 
            techStack={techStack}
        />
    ))

    return (
        <Container>
            <Helmet>
                <title>Projects | Tantowi Putra</title>
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
                <div className="grid lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 gap-8 flex-col w-full">
                    {ProjectEntry}
                </div>
            </SectionWrapper>

        </Container>
    ) 
}

export default Projects