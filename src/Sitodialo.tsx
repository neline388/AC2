import {
  Dialog,
  DialogTitle,
  DialogContent,
  Stack,
  Typography
} from "@mui/material";
import DispositivoItem from "./Dispositivoitem";
import type { Dispositivo, SitoConDispositivi } from "./models";

interface Props {
  open: boolean;
  onClose: () => void;
  sitoConDispositivi: SitoConDispositivi;
  eliminaDispositivo: (nome: string) => void;
  modificaDispositivo: (d: Dispositivo) => void;
}

export default function SitoDialog({
  open,
  onClose,
  sitoConDispositivi,
  eliminaDispositivo,
  modificaDispositivo
}: Props) {
  const { sito, dispositivi } = sitoConDispositivi;

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>
        {sito.nomeSito} — {sito.location}
      </DialogTitle>

      <DialogContent>
        {dispositivi.length === 0 ? (
          <Typography>No devices in this site</Typography>
        ) : (
          <Stack spacing={1}>
            {dispositivi.map(d => (
              <DispositivoItem
                key={d.nomeDispositivo}
                dispositivo={d}
                eliminaDispositivo={eliminaDispositivo}
                modificaDispositivo={modificaDispositivo}
              />
            ))}
          </Stack>
        )}
      </DialogContent>
    </Dialog>
  );
}
