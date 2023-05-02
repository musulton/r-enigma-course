import {useLocation} from "react-router-dom";
import StyledContainer from "../../components/StyledContainer";

const NotFound = () => {
    const location = useLocation();
    return (
        <StyledContainer>
            <h3>No match for <code>{location.pathname}</code></h3>
        </StyledContainer>
    )
}

export default NotFound;