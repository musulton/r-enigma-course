import React from "react";
import Pagination from "../components/Pagination";
import useQuery from "../hooks/useQuery";
import EmptyState from "../components/EmptyState";
import {Button} from "react-bootstrap";
import StyledContainer from "../components/StyledContainer";

const withPagination = (Component, opts) => {
    return (props) => {
        const {onNavigate} = props
        const [currentPage, onChangeCurrentPage] = React.useState(1)
        const {data, refetch} = useQuery(opts.query, {
            params: currentPage
        })

        return (
            <StyledContainer>
                <h1>{opts.titlePage}</h1>
                <Button
                    variant="success"
                    onClick={() => onNavigate(opts.buttonAddRoute)}
                >
                    Add Data
                </Button>
                {data?.data?.length > 0 ?
                    <Component {...props} data={data?.data} refetch={refetch}/> :
                    <EmptyState text="Data masih kosong" />
                }
                <Pagination
                    onChangeCurrentPage={onChangeCurrentPage}
                    currentPage={currentPage}
                    totalPage={data?.totalPage}
                />
            </StyledContainer>
        )
    }
}

export default withPagination
