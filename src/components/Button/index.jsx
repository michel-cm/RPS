import * as C from "./styles";

export function Button({ title, fn, type }) {
  return (
    <>
      {type === undefined ? (
        <C.Container onClick={fn}>
          <p>{title}</p>
        </C.Container>
      ) : (
        <C.Container type={type} onClick={fn}>
          <p>{title}</p>
        </C.Container>
      )}
    </>
  );
}
