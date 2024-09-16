import { Letras } from "./Letras";


export const Palabras = ({ palabras }: { palabras: Array<string> }) => {
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
