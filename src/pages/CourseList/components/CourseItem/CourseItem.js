import React from "react";
import {Button, ButtonGroup, Col} from "react-bootstrap";
import {StyledListItem} from "./CourseItem.styled";

const CourseItem = (props) => {
    const {title, description} = props;
    return (
        <StyledListItem>
            <Col>
                <h3 className="lead">{title}</h3>
                <p>{description}</p>
            </Col>
            <ButtonGroup>
                <Button variant="primary">Edit</Button>
                <Button variant="danger">Delete</Button>
                <Button variant="secondary">Download</Button>
            </ButtonGroup>
        </StyledListItem>
    )
}

export default React.memo(CourseItem)
