import { ExpandMore} from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material'
import React from 'react'

function FaqPage() {
  return (
    <Box padding={'20px'}>
        <Box padding={'20px'}>
            <Typography variant='h3'>FAQ Page</Typography>
        </Box>
        <Box padding={'20px'}>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMore/>}>
                    <Typography variant='h5'>Question 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, perferendis consequatur ea nihil voluptatum sapiente praesentium repudiandae! Recusandae veniam corporis qui, iste nemo non hic repudiandae, quia amet ad tempore.
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMore/>}>
                    <Typography variant='h5'>Question 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, perferendis consequatur ea nihil voluptatum sapiente praesentium repudiandae! Recusandae veniam corporis qui, iste nemo non hic repudiandae, quia amet ad tempore.
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMore/>}>
                    <Typography variant='h5'>Question 3</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, perferendis consequatur ea nihil voluptatum sapiente praesentium repudiandae! Recusandae veniam corporis qui, iste nemo non hic repudiandae, quia amet ad tempore.
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMore/>}>
                    <Typography variant='h5'>Question 4</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, perferendis consequatur ea nihil voluptatum sapiente praesentium repudiandae! Recusandae veniam corporis qui, iste nemo non hic repudiandae, quia amet ad tempore.
                </AccordionDetails>
            </Accordion>
            <Accordion >
                <AccordionSummary expandIcon={<ExpandMore/>}>
                    <Typography variant='h5'>Question  5</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, perferendis consequatur ea nihil voluptatum sapiente praesentium repudiandae! Recusandae veniam corporis qui, iste nemo non hic repudiandae, quia amet ad tempore.
                </AccordionDetails>
            </Accordion>
            <Accordion >
                <AccordionSummary expandIcon={<ExpandMore/>}>
                    <Typography variant='h5'>Question 6</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, perferendis consequatur ea nihil voluptatum sapiente praesentium repudiandae! Recusandae veniam corporis qui, iste nemo non hic repudiandae, quia amet ad tempore.
                </AccordionDetails>
            </Accordion>
        </Box>
    </Box>
  )
}

export default FaqPage