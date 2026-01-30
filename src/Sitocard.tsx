import {
    Card,
    CardContent,
    Typography,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
} from "@mui/material";
import Grid from '@mui/material/Grid';
import { useState } from "react";
import type { Dispositivo, SitoConDispositivi } from "./models";
import DispositivoItem from "./Dispositivoitem";

interface Props {
    sito: SitoConDispositivi["sito"];
    dispositivi: Dispositivo[];
    eliminaDispositivo: (nome: string) => void;
    modificaDispositivo: (d: Dispositivo) => void;
    }

    export default function SitoCard({
    sito,
    dispositivi,
    eliminaDispositivo,
    modificaDispositivo,
    }: Props) {
    const [open, setOpen] = useState(false);

    return (
        <Grid size={{ xs: 12, md: 6 }}>
        <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flexGrow: 1 }}>
            <Typography variant="h6">{sito.nomeSito}</Typography>
            <Typography variant="body2" color="text.secondary">
                {sito.location}
            </Typography>

            <Button sx={{ mt: 2 }} variant="outlined" onClick={() => setOpen(true)}>
                Dispositivi
            </Button>
            <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="sm">
                <DialogTitle>Dispositivi – {sito.nomeSito}</DialogTitle>

                <DialogContent dividers>
                {dispositivi.map(d => (
                    <DispositivoItem
                    key={d.nomeDispositivo}
                    dispositivo={d}
                    eliminaDispositivo={eliminaDispositivo}
                    modificaDispositivo={modificaDispositivo}
                    />
                ))}
                </DialogContent>
                <DialogActions>
                <Button onClick={() => setOpen(false)}>close</Button>
                </DialogActions>
            </Dialog>
            </CardContent>
        </Card>
        </Grid>
    );
}
