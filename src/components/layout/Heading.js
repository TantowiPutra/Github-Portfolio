import Brand from "components/common/reusable/Brand"
import { Link } from "react-router-dom";

const Heading = () => {
    return (
        <Link
            to={'/about-me'}
        >
            <div id="heading" name="heading" className="w-full justify-center lg:flex hidden">
                <Brand />
            </div>
        </Link>
    );
}

export default Heading;