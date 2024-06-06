const Heading = ({children}) => {
    return (
        <h1 className="text-xl mt-3 border-b-4 border-white p-3 w-fit font-mono test-sample fade-in-top-1-sec">
            {children}
        </h1> 
    )
}

export default Heading;