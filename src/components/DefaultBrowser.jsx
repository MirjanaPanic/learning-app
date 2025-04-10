//podrazumevano, kada se koristi <form> i njen onSubmit() dogadjaj, klik na dugme unutar forme generise dogadjaj
//i izvrsava se RELOAD(ponovno renderovanje cele str)
export default function FormReload() {
  return (
    <form
      onSubmit={() => {
        alert("Submitting!");
      }}
    >
      <input />
      <button onClick={()=>alert("kliknuto dugme")}>Send, with reload</button> 
    </form>
  );
}
//kad kliknemo na dugme - prvo ce da obradi dogadjaj onClick pa onda onSubmit


export function PreventFormReload() {
    return (
      <form
        onSubmit={e => {
        e.preventDefault();
          alert("Submitting!");
        }}
      >
        <input />
        <button>Send, prevent reload</button>
      </form>
    );
  }
  