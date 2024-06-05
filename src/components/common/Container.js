const Container = ({ children }) => {
    return (
        <div className="container text-white flex flex-col items-center justify-center">
            {children}
        </div>
    );
}

export default Container;
