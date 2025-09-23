import Button from "../components/Button";

const PreventingDefault = () => {
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("Submitted");
        }}
      >
        <input type="text" className="border mx-2 rounded-md" />
        <button>Send</button>
      </form>
    </>
  );
};

export default PreventingDefault;
