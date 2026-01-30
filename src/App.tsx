import { useState, useMemo } from "react";
import {
  Container,
  Typography,
  Button,
  TextField,
  Stack
} from "@mui/material";
import type { Dispositivo } from "./models";
import datiIniziali from "./data/mockData.json";
import SitoList from "./Sitolist";
import DispositivoDialog from "./Dispositivodialog";

export default function App() {
  const [dispositivi, setDispositivi] = useState<Dispositivo[]>(
    datiIniziali.data
  );

  const [dialogOpen, setDialogOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const aggiungiDispositivo = (nuovo: Dispositivo) => {
    setDispositivi(prev => [...prev, nuovo]);
  };

  const eliminaDispositivo = (nomeDispositivo: string) => {
    setDispositivi(prev =>
      prev.filter(d => d.nomeDispositivo !== nomeDispositivo)
    );
  };

  const modificaDispositivo = (dispositivoModificato: Dispositivo) => {
    setDispositivi(prev =>
      prev.map(d =>
        d.nomeDispositivo === dispositivoModificato.nomeDispositivo
          ? dispositivoModificato
          : d
      )
    );
  };


  const dispositiviFiltrati = useMemo(() => {
    if (!searchTerm.trim()) return dispositivi;

    return dispositivi.filter(d =>
      d.sito.nomeSito
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
  }, [dispositivi, searchTerm]);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" >
        The Siti
      </Typography>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        sx={{ mb: 2 }}
      >
        <TextField
          label="search per nome sito"
          placeholder="Ex. Centro Storico"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          fullWidth
        />

        <Button
          variant="contained"
          onClick={() => setDialogOpen(true)}
        >
          add Dispositivo
        </Button>
      </Stack>

      <SitoList
        dispositivi={dispositiviFiltrati}
        eliminaDispositivo={eliminaDispositivo}
        modificaDispositivo={modificaDispositivo}
      />

      <DispositivoDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        onSave={d => {
          aggiungiDispositivo(d);
          setDialogOpen(false);
        }}
      />
    </Container>
  );
}
