
const SectionWrapper = ({ children }) => {
    return (
        <div className="mt-4 w-3/4 h-[1000px] text-justify overflow-y-auto p-5 scrollbar-thin scrollbar-webkit">
            {
                children
            }
        </div>
    )
}

export default SectionWrapper