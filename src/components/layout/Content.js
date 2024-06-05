import AboutMe from "../../sections/AboutMe"

const navigation = [
    { id: 1, name: 'About Me', href: '#about-me', current: true, component: <AboutMe />},
    { id: 2, name: 'Projects', href: '#projects', current: false },
    { id: 3, name: 'Contact Me', href: '#contact-me', current: false },
]

const Content = () => {
    return (
        <span>
            {
                navigation.map((item) => (
                    <span key={item.id} className="flex flex-col justify-center items-center">
                        {item.current ? item.component : ''}
                    </span>
                ))
            }
        </span>
    )
}

export default Content