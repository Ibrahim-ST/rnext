function Button({ onSmash, children }) {
  return <button onClick={onSmash}>{children}</button>;
}

function PlayButton({ movieName }) {
  function handlePlayClick() {
    alert(`Playing ${movieName}!`);
  }

  return <Button onSmash={handlePlayClick}>Play</Button>;
}

function UploadButton() {
  return <Button onSmash={() => alert("Uploading!")}>Upload Image</Button>;
}

const AddingEvent = () => {
  return (
    <div>
      <button
        onClick={() => alert("Btn Clicked!")}
        className="bg-green-800 px-2 rounded-md m-2 text-white"
      >
        Click
      </button>
      <PlayButton movieName="Flow" />
      <UploadButton />
    </div>
  );
};

export default AddingEvent;
