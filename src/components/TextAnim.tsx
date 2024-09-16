import { Letras } from "./Letras";


export const TextAnim= ({ palabras }: { palabras: Array<string> }) => {
  return (
    <>
      {palabras.map((palabra, i) => (
        <p key={i} style={{ display: "inline-flex"}}>
          <Letras palabra={palabra} />
        </p>
      ))}
    </>
  );
};