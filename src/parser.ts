export interface QuranAyat {
  id: number;
  no_surat: number;
  no_ayat: number;
  ayat: string;
}

export async function getQuranRawText(rawQuran: any) {
  const raw = await fetch(rawQuran);
  return raw.text();
}

export function parseQuranData(text: string): QuranAyat[] {
  const ayats = text.split("\n");
  return ayats.slice(0, 6236).map((a, id) => {
    const row = a.split("|");
    const [no_surat, no_ayat, ayat] = row;

    return {
      id,
      no_surat: Number(no_surat),
      no_ayat: Number(no_ayat),
      ayat: id !== 0 && no_ayat === "1" ? ayat.replace("بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ", "") : ayat
    };
  });
}
