import { useState } from "react";

let initialArtists = [
  { id: 0, name: "Marta Colvin Andrade" },
  { id: 1, name: "Lamidi Olonade Fakeye" },
  { id: 2, name: "Louise Nevelson" },
];

const RemoveFromArray = () => {
  const [artists, setArtists] = useState(initialArtists);
  return (
    <div>
      <h1>This is RemoveFromArray component</h1>
      {artists.map((artist) => (
        <ul key={artist.id}>
          <li>
            {`id : ${artist.id} - name : ${artist.name}`}{" "}
            <button
              onClick={() => {
                setArtists(artists.filter((a) => a.id != artist.id));
              }}
            >
              X
            </button>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default RemoveFromArray;
