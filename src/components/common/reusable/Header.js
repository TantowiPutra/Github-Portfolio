const Header = ({children}) => {
    return (
        <h1 className="xl:text-xl md:text-lg text-base border-b-4 border-white p-3 w-fit font-mono test-sample">
            {children}
        </h1> 
    )
}

export default Header;