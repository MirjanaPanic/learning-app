function Dugme({ poruka, children}) {
  return <button className="btn btn-outline-info m-2" onClick={() => alert(poruka)}> {children}</button>;
}

export default function Poruka() {
  const poruka1 = "poruka 1";
  const poruka2 = "poruka 2";
  return (
    <div >
      <Dugme poruka={poruka1}> DUGME 1 </Dugme>
      <Dugme poruka={poruka2}> DUGME 2</Dugme>
    </div>
  );
}
