import {Button} from "react-bootstrap";

import EmptyState from "../../components/EmptyState";
import CourseItem from "./components/CourseItem";
import {StyledListGroup} from "./CourseList.styled";
import StyledContainer from "../../components/StyledContainer";
import constants from "../../constants";
import useQuery from "../../hooks/useQuery";
import useMutation from "../../hooks/useMutation";
import { getCourses, deleteCourse } from "../../services/course";

const ListItem = (props) => {
    const {data, refetch, onNavigate} = props;
    const {onMutation: onDelete} = useMutation(deleteCourse, {
        onSuccess: refetch
    })

    const onDeleteHandler = (id) => () => {
        const isOk = window.confirm("Apa kamu yakin akan menghapus course ini?")
        if (isOk) onDelete(id)
    }

    const onEditHandler = (id) => () => {
        onNavigate(constants.routes.EDIT_COURSE, {
            state: {
                id
            }
        })
    }

    return (
        <StyledListGroup>
            {data.map((course, index) => {
                return (
                    <CourseItem
                        title={course.title}
                        description={course.description}
                        key={index}
                        onDelete={onDeleteHandler(course.courseId)}
                        onEdit={onEditHandler(course.courseId)}
                    />
                )
            })}
        </StyledListGroup>
    )
}

const CourseList = (props) => {
    const {onNavigate} = props;
    const {data, refetch} = useQuery(getCourses);

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
                <ListItem data={data?.data} refetch={refetch} onNavigate={onNavigate} /> :
                <EmptyState text="Data masih kosong" />
            }
        </StyledContainer>
    )
}

export default CourseList
