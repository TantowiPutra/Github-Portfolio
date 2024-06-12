
const SectionWrapper = ({ children }) => {
    return (
        // <div className="mt-4 w-full 2xl:max-h-[800px] xl:max-h-[700px] lg:max-h-[700px] md:max-h-[500px] max-h-[400px] overflow-y-auto p-5 scrollbar-thin scrollbar-webkit">
        //     {
        //         children
        //     }
        // </div>
        <div className="container mt-4 w-content max-h-[800px] overflow-y-auto p-5 scrollbar-thin scrollbar-webkit">
            {children}
        </div>
    )
}

export default SectionWrapper