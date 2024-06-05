import AboutMe from "../../sections/AboutMe"

const navigation = [
    { id: 1, name: 'About Me', href: '#about-me', current: true, component: <AboutMe />},
    { id: 2, name: 'Projects', href: '#projects', current: false },
    { id: 3, name: 'Contact Me', href: '#contact-me', current: false },
]

const Content = () => {
    return (
        <div className="h-100">
            {
                navigation.map((item) => (
                    <div key={item.id} className="flex flex-col h-1/2 items-center">
                        {item.current ? item.component : ''}
                    </div>
                ))
            }
        </div>
    )
}

export default Content