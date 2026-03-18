import react,{ useState } from "react";

function Amenities() {
  const options = ["Audio", "Video", "White Board", "HDMI", "Projector", "Speaker Phone"];
  const [selected, setSelected] = useState(["Audio"]);

  const addItem = (item) => {
    if (!selected.includes(item)) {
      setSelected([...selected, item]);
    }
  };

  const removeItem = (item) => {
    setSelected(selected.filter(i => i !== item));
  };

  return (
    <div className="col-md-8">

      <label for="inputAmenities" className="form-label">Amenities</label>

      <div className="form-control d-flex flex-wrap gap-2 p-2">
        {selected.map((item, index) => (
          <span key={index} className="badge bg-light text-dark border d-flex align-items-center">
            {item}
            <button
              className="btn-close ms-2"
              style={{ fontSize: "10px" }}
              onClick={() => removeItem(item)}
              type="button"
            ></button>
          </span>
        ))}
      </div>

      <div className="mt-2 d-flex flex-wrap gap-2">
        {options.map((item, index) => (
          <button
            key={index}
            className="btn btn-outline-secondary btn-sm rounded-pill"
            onClick={() => addItem(item)}
            type="button"
          >
            {item}
          </button>
        ))}
      </div>

    </div>
  );
}

export default Amenities;