import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import React from "react";
import AccountSetting from "./AccountSetting";
// import { useSelector } from 'react-redux'

function Settings() {
  return (
    <Box padding={"20px"} sx={{ "&>*": { padding: "20px" } }}>
      <Box>
        <Typography variant="h3">Settings</Typography>
      </Box>
      <Box>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="h5">Account</Typography>
          </AccordionSummary>
          <AccordionDetails>
          </AccordionDetails>
          <AccountSetting/>
        </Accordion>

        <Accordion >
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="h5">General Settings</Typography>
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe,
            veniam facere dolor obcaecati eum atque aut dolorem esse id dolore
            quas quo beatae dicta aliquid?
          </AccordionDetails>
          <AccordionDetails>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur, tempore.
          </AccordionDetails>
          <AccordionDetails>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur, tempore.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="h5">Users</Typography>
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur, tempore.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="h5">Advance Settings</Typography>
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur, tempore.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="h5">Personal Data</Typography>
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur, tempore.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="h5">Privacy</Typography>
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur, tempore.
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
}

export default Settings;
