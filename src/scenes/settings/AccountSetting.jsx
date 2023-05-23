import { ExpandMore } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography, useTheme } from '@mui/material'
import React from 'react'
import { tokens } from '../../theme';

function AccountSetting() {
    const theme=useTheme();
    const color=tokens(theme.palette.mode);
  return (
    <Box sx={{ backgroundColor: color.secondary[200] }}>
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMore/>}>
                <Typography fontSize={'13px'}>
                    Change Profile Name
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, aut.
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMore/>}>
                <Typography fontSize={'13px'}>
                    Change DOB
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, aut.
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMore/>}>
                <Typography fontSize={'13px'}>
                    Change Mobile No
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, aut.
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMore/>}>
                <Typography fontSize={'13px'}>
                    Change Password
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, aut.
            </AccordionDetails>
        </Accordion>
    </Box>
  )
}

export default AccountSetting