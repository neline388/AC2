import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import type { ListaSensori } from "./models";

export default function SensoreItem({ sensore }: { sensore: ListaSensori }) {
    const misurazioniMock = [
    { timestamp: "10:00", valore: 42 }, //somsething to be there , have no ide where to get the actual thing
    { timestamp: "10:10", valore: 45 }
    ];

    return (
        <Accordion sx={{ ml: 2 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>
            {sensore.nomeSensore} ({sensore.unitaMisura})
            </Typography>
            </AccordionSummary>
            <AccordionDetails>
            {misurazioniMock.map((m, i) => (
            <Typography key={i} variant="body2">
                {m.timestamp} → {m.valore} {sensore.unitaMisura}
            </Typography>
    ))}
        </AccordionDetails>
        </Accordion>
    );
}
