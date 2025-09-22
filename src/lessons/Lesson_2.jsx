import Button from "../components/Button";


const Lesson_2 = () => {
  return (
    <div onClick={() => alert('Toolbar Clicked')} className = 'border rounded-md w-full flex justify-center'>       
      <Button onSmash={() => alert("Playing!")}>Play Movie</Button>
      <Button onSmash={() => alert("Uploading!")}>Upload Image</Button>
    </div>
  );
};

export default Lesson_2;
