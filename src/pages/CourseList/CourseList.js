import CourseItem from "./components/CourseItem";
import {StyledListGroup} from "./CourseList.styled";
import constants from "../../constants";
import useMutation from "../../hooks/useMutation";
import { getCourses, deleteCourse } from "../../services/course";
import withPagination from "../../hoc/withPagination";

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

export default withPagination(ListItem, {
    query: getCourses,
    titlePage: "Add Course",
    buttonAddRoute: constants.routes.ADD_COURSE
})
