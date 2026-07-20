import { Pagination, Stack } from "@mui/material"


export const AppPagination = () => {
    return (
        <Stack spacing={1}>
            <Pagination
                count={50}
                shape="rounded"
                variant="outlined" />
        </Stack>
    )
}