import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    IconButton,
    Stack
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import type { Dispositivo } from "./models";
import SensoreItem from "./SensoreItem";
import DispositivoDialog from "./Dispositivodialog";
import { useState } from "react";


interface Props {
    dispositivo: Dispositivo;
    eliminaDispositivo: (nome: string) => void;
    modificaDispositivo: (d: Dispositivo) => void;
}


    export default function DispositivoItem({
    dispositivo,
    eliminaDispositivo,
    modificaDispositivo
    }: Props) {
    const [editOpen, setEditOpen] = useState(false);

    return (
        <>
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Stack direction="row" spacing={1} alignItems="center">
                <Typography>{dispositivo.nomeDispositivo}</Typography>

                <IconButton
                size="small"
                onClick={() => setEditOpen(true)}
                >
                <EditIcon fontSize="small" />
                </IconButton>

                <IconButton
                size="small"
                color="error"
                onClick={() =>
                    eliminaDispositivo(dispositivo.nomeDispositivo)
                }
                >
                <DeleteIcon fontSize="small" />
                </IconButton>
            </Stack>
            </AccordionSummary>

            <AccordionDetails>
            <Typography variant="body2" gutterBottom>
                {dispositivo.descrizioneDispositivo}
            </Typography>

            {dispositivo.listaSensori.map(s => (
                <SensoreItem key={s.idSensore} sensore={s} />
            ))}
            </AccordionDetails>
        </Accordion>

        <DispositivoDialog 
            open={editOpen}
            dispositivo={dispositivo}
            onClose={() => setEditOpen(false)}
            onSave={d => {
            modificaDispositivo(d);
            setEditOpen(false);
            }}
        />
        </>
    );}
