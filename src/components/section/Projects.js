import { useEffect, useState } from 'react'

import { Cursor, useTypewriter} from 'react-simple-typewriter'

import Header from "components/common/reusable/Header"
import Container from "components/common/reusable/Container"
import FilterBadge from 'components/common/reusable/FilterBadge'

import ProjectsCard from "components/common/ProjectsCard"

import SectionWrapper from "components/layout/SectionWrapper"

import { Helmet } from "react-helmet"

import ProjectsData from '_data/Projects'
import TechData from '_data/Techs'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Projects = () => {
    useEffect(() => {
        Aos.init();
    }, []);

    const [text] = useTypewriter({
        words: ['Archives of My Projects'],
        loop:{}
    })

    const [filteredProject, setFilteredProject] = useState([]);
    const [techFilter, setTechFilter] = useState([]);

    const filterProjects = (newVal) => {
        if(techFilter.includes(newVal)) {
            setTechFilter(
                techFilter.filter((item) => (
                    item !== newVal
                ))
            )

            return
        }

        setTechFilter([
            ...techFilter, 
            newVal
        ])
    }

    const clearFilter = () => {
        setTechFilter([])
    }

    // Load Project Data at the End of Process
    useEffect(() => {
       let filtered = ProjectsData;

       if(!!techFilter.length) {
            filtered = filtered.filter(({ techStack }) => {
                techStack = techStack.map((item) => (
                    item.toLowerCase()
                ))

                const set_tech_stack = new Set(techStack)

                return (
                    techFilter.every((item) => (
                        set_tech_stack.has(item.toLowerCase())
                    ))
                )
            })
        }

        setFilteredProject(filtered)
    }, [techFilter])

    const ProjectEntry = filteredProject.map(({id, imgPath, title, description, techStack}) => (
        <ProjectsCard 
            key={id}
            imgPath={imgPath}
            title={title} 
            description={description} 
            techStack={techStack}
        />
    ))

    const filterEntry = TechData.map(({id, tech}) => (
        <FilterBadge
            key={id}
            filter={tech}
            active={techFilter.includes(tech)}
            onClick={() => filterProjects(tech)}
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
                <div className="font-mono space-x-4 space-y-2 text-xs pt-3"> 
                    Filter: {filterEntry}
                </div>
            </SectionWrapper>

            <SectionWrapper>
                {/* Project Found */}
                {
                    !!ProjectEntry.length && 
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 gap-8 flex-col w-full">
                        {ProjectEntry}
                    </div>
                }

                {/* Project Not Found */}
                {
                    !ProjectEntry.length && 
                    <div className="xl:text-xl md:text-lg text-base w-100 text-center mb-2 font-mono">
                        <p className='mb-3'>Project(s) not found... try another filter..</p>
                        <button className='underline text-cyan-600 cursor-pointer' onClick={clearFilter}>Clear Filter</button>
                    </div>
                }
            </SectionWrapper>

        </Container>
    ) 
}

export default Projects