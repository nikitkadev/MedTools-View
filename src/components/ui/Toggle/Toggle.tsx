import { ToggleButton, ToggleButtonGroup } from '@mui/material';

import type React from 'react';

interface JournalTypeToggleProps {
    value: string;
    onChange: (
        event: React.MouseEvent<HTMLElement>,
        newAligment: string) => void;
}

export const Toggle = ({
    value,
    onChange
}: JournalTypeToggleProps) => {

    return (

        <ToggleButtonGroup
            value={value}
            exclusive

            onChange={onChange}
            aria-label='Database type'

            sx={{
                '& .MuiToggleButtonGroup-grouped': {
                    fontSize: 'var(--fs-body2)',
                    fontWeight: 'var(--fw-default)',
                    fontFamily: 'var(--inter)',
                    border: '1px solid var(--border-default)',
                    margin: '0',
                    padding: 'var(--space-5) var(--space-5)'
                },
                '& .MuiToggleButtonGroup-firstButton': {
                    borderTopLeftRadius: 'var(--radius-l)',
                    borderBottomLeftRadius: 'var(--radius-l)',
                },
                '& .MuiToggleButtonGroup-lastButton': {
                    borderTopRightRadius: 'var(--radius-l)',
                    borderBottomRightRadius: 'var(--radius-l)',
                    borderLeft: 'none'
                },
                '& .Mui-selected': {
                    color: 'var(--black)',
                    background: 'var(--selected-background)',
                },
                '& .Mui-selected:hover': {
                    background: 'none',
                },
            }}>

            <ToggleButton value='smorx'>СМО РХ</ToggleButton>
            <ToggleButton value='inogorod'>Иногородние</ToggleButton>

        </ToggleButtonGroup>
    )
};