import {Button} from "react-bootstrap";

import EmptyState from "../../components/EmptyState";
import CourseItem from "./components/CourseItem";
import {StyledListGroup} from "./CourseList.styled";
import StyledContainer from "../../components/StyledContainer";
import constants from "../../constants";

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
    const {courses, onNavigate} = props;
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
                courses.length > 0 ?
                <ListItem data={courses} /> :
                <EmptyState text="Data masih kosong" />
            }
        </StyledContainer>
    )
}

export default CourseList
