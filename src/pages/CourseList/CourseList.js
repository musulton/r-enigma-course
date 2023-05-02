import {Button} from "react-bootstrap";

import EmptyState from "../../components/EmptyState";
import CourseItem from "./components/CourseItem";
import {StyledListGroup} from "./CourseList.styled";
import StyledContainer from "../../components/StyledContainer";
import constants from "../../constants";
import useQuery from "../../hooks/useQuery";
import { getCourses } from "../../services/course";

const ListItem = (props) => {
    const {data} = props;
    return (
        <StyledListGroup>
            {data.map((course, index) => {
                return (
                    <CourseItem
                        title={course.title}
                        description={course.description}
                        key={index}
                    />
                )
            })}
        </StyledListGroup>
    )
}

const CourseList = (props) => {
    const {onNavigate} = props;
    const {data} = useQuery(getCourses);
    
    return (
        <StyledContainer>
            <h1>Course List Page</h1>
            <Button
                variant="success"
                onClick={() => onNavigate(constants.routes.ADD_COURSE)}
            >
                Add Course
            </Button>
            {
                data?.data?.length > 0 ?
                <ListItem data={data?.data} /> :
                <EmptyState text="Data masih kosong" />
            }
        </StyledContainer>
    )
}

export default CourseList
