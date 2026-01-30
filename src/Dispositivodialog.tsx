import type { Dispositivo } from "./models";
import { useState,useEffect } from "react";
import { 
    Dialog,
    DialogTitle,
    DialogContent,
    TextField,
    DialogActions,
    Button
} from "@mui/material";

interface Props {
    open: boolean;
    onClose: () => void;
    onSave: (d: Dispositivo) => void;
    dispositivo?: Dispositivo;}


export default function DispositivoDialog({ open,onClose,onSave,dispositivo}:Props){
    const [form, setForm] = useState<Dispositivo>({
        nomeDispositivo: "",
        descrizioneDispositivo: "",
        listaSensori: [],
        sito: {
        idSito: 0,
        nomeSito: "",
        location: "",
        latitudine: "",
        longitudine: ""
    }
    });

    useEffect(() => {
        if (dispositivo) setForm(dispositivo);
    }, [dispositivo]);
    const handleChange = (field: keyof Dispositivo, value: any) => {
        setForm(prev => ({ ...prev, [field]: value }));
    };

    return (
        <Dialog open={open} onClose={onClose} fullWidth>
        <DialogTitle>
            {dispositivo ? "Modifica Dispositivo" : "Nuovo Dispositivo"}
        </DialogTitle>

        <DialogContent>
            <TextField
            fullWidth
            label="Nome Dispositivo"
            value={form.nomeDispositivo}
            onChange={e => handleChange("nomeDispositivo", e.target.value)}
            margin="dense"/>

        <TextField
            fullWidth
            label="Descrizione"
            value={form.descrizioneDispositivo}
            onChange={e =>
                handleChange("descrizioneDispositivo", e.target.value)
            }
            margin="dense"/>

            <TextField
            fullWidth
            label="Nome Sito"
            value={form.sito.nomeSito}
            onChange={e =>
                setForm(prev => ({
                ...prev,
                sito: { ...prev.sito, nomeSito: e.target.value }
            }))
            }
            margin="dense"/>
        </DialogContent>

        <DialogActions>
            <Button onClick={onClose}>cancel</Button>
            <Button
            variant="contained"
            onClick={() => {
                onSave(form);
                onClose();
            }}
            >
            save
            </Button>
        </DialogActions>
        </Dialog>
    );}