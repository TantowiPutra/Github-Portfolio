import AboutMe from "../../pages/AboutMe"

const navigation = [
    { name: 'About Me', href: '#about-me', current: true, component: <AboutMe />},
    { name: 'Projects', href: '#projects', current: false },
    { name: 'Contact Me', href: '#contact-me', current: false },
]

const Content = () => {
    return (
        <div>
            {
                navigation.map((item) => (
                    item.current ? item.component : ''
                ))
            }
        </div>
    )
}

export default Content