import React from "react";
import {Button, ButtonGroup, Col} from "react-bootstrap";
import {StyledListItem} from "./CourseItem.styled";

const CourseItem = (props) => {
    const {title, description, onDelete, onEdit} = props;
    return (
        <StyledListItem>
            <Col>
                <h3 className="lead">{title}</h3>
                <p>{description}</p>
            </Col>
            <ButtonGroup>
                <Button variant="primary" onClick={onEdit}>Edit</Button>
                <Button variant="danger" onClick={onDelete}>Delete</Button>
                <Button variant="secondary">Download</Button>
            </ButtonGroup>
        </StyledListItem>
    )
}

export default React.memo(CourseItem)
