import { Cursor, useTypewriter} from 'react-simple-typewriter'

import Heading from "components/common/reusable/Heading"
import Container from "components/common/reusable/Container"

import ProjectsCard from "components/common/ProjectsCard"

import SectionWrapper from "components/layout/SectionWrapper"

import { Helmet } from "react-helmet"

const Projects = () => {
    const [text] = useTypewriter({
        words: ['Archives of My Projects'],
        loop: {},
    })

    return (
        <Container>
            <Helmet>
                <title>Projects | Tantowi Putra</title>
            </Helmet>

            <Heading>
                <span>
                    {text}
                </span>
                <span>
                    <Cursor/>
                </span>
            </Heading>

            <SectionWrapper>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 gap-8">
                    <ProjectsCard />
                    {/* <ProjectsCard />
                    <ProjectsCard />
                    <ProjectsCard />
                    <ProjectsCard />
                    <ProjectsCard />
                    <ProjectsCard />
                    <ProjectsCard />
                    <ProjectsCard />
                    <ProjectsCard />
                    <ProjectsCard />
                    <ProjectsCard />
                    <ProjectsCard />
                    <ProjectsCard />
                    <ProjectsCard />

                    <ProjectsCard />
                    <ProjectsCard />
                    <ProjectsCard />
                    <ProjectsCard />
                    <ProjectsCard />
                    <ProjectsCard />
                    <ProjectsCard />
                    <ProjectsCard />
                    <ProjectsCard />
                    <ProjectsCard />
                    <ProjectsCard />
                    <ProjectsCard />
                    <ProjectsCard /> */}
                </div>
            </SectionWrapper>

        </Container>
    ) 
}

export default Projects