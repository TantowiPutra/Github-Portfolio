const Paragprah = ({children}) => {
    return (
        <div className="first-paragprah mb-3" dangerouslySetInnerHTML={{ __html: children }}></div>
    );
}

export default Paragprah;