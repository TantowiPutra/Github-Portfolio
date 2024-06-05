const Paragprah = ({children}) => {
    return (
        <div className="first-paragprah mb-3 lg:text-base md:text-sm" dangerouslySetInnerHTML={{ __html: children }}></div>
    );
}

export default Paragprah;