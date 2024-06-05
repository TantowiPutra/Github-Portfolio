const Container = ({ children }) => {
    return (
        <div className="container text-white flex flex-col items-center w-100 h-100">
            {children}
        </div>
    );
}

export default Container;
