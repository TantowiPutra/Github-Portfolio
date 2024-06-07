import Header from "components/common/reusable/Header"
import Container from "components/common/reusable/Container"

import { Helmet } from "react-helmet"

const Certifications = () => {
    return (
        <Container>
            <Helmet>
                <title>Certifications | Tantowi Putra</title>
            </Helmet>

            <Header>
                My Certifications
            </Header>

        </Container>
    )    
}

export default Certifications