import { useSearchParams } from "react-router-dom";

interface DataPasangan {
  nama: string;
  ayah: string;
  ibu: string;
  jk: string;
}

export const getDataPasangan = (gelar: string | null): DataPasangan[] => {
  const isGelarEnabled = gelar && ["true", "1"].includes(gelar.toLowerCase());
  return [
    {
      nama: "Dhita Ayu Affiah" + (isGelarEnabled ? ", M.Pd." : ""),
      ayah: (isGelarEnabled ? "" : "Bapak ") + "Donny Mulianto",
      ibu:
        (isGelarEnabled ? "" : "Ibu ") +
        "Harlina" +
        (isGelarEnabled ? ", S.Pd." : ""),
      jk: "Putri pertama dari dua bersaudara",
    },
    {
      nama:
        "Muhammad Zha'farudin Pudya Wardana" +
        (isGelarEnabled ? ", M.Cs." : ""),
      ayah: (isGelarEnabled ? "Drs. H. " : "Bapak ") + "Bambang Puji Siswanto",
      ibu:
        (isGelarEnabled ? "Hj. " : "Ibu ") +
        "Sri Wulan Cahyani" +
        (isGelarEnabled ? ", S.Pd." : ""),
      jk: "Putra ketiga dari tiga bersaudara",
    },
  ];
};

export function getGelar() {
  const [searchParams] = useSearchParams();
  const gelar = searchParams.get("g");
  return gelar;
}

export const isDevelopment = () => {
  return process.env["NODE_ENV"] === "development";
};
