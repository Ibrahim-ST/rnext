import Button from "../components/Button";

const PreventingDefault = () => {
  
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(e, "Submitted");
        }}
      >
        <input type="text" className="border mx-2 rounded-md" name='name'/>
        <button>Send</button>
      </form>
    </>
  );
};

export default PreventingDefault;
