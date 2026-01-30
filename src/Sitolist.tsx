import Grid from "@mui/material/Grid";
import type { Dispositivo, SitoConDispositivi } from "./models";
import SitoCard from "./Sitocard";

interface Props {
    dispositivi: Dispositivo[];
    eliminaDispositivo: (nome: string) => void;
    modificaDispositivo: (d: Dispositivo) => void;
}

export default function SitoList({
    dispositivi,
    eliminaDispositivo,
    modificaDispositivo,
}: Props) {
    const siti = Object.values(
    dispositivi.reduce<Record<number, SitoConDispositivi>>((acc, d) => {
        const id = d.sito.idSito;
        acc[id] ??= { sito: d.sito, dispositivi: [] };
        acc[id].dispositivi.push(d);
        return acc;
    }, {})
);

    return (
    <Grid container spacing={2}>
        {siti.map(({ sito, dispositivi }) => (
        <SitoCard
            key={sito.idSito}
            sito={sito}
            dispositivi={dispositivi}
            eliminaDispositivo={eliminaDispositivo}
            modificaDispositivo={modificaDispositivo}
        />
        ))}
    </Grid>
);
}
