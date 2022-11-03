import React, { useState } from "react";

// const checkboxes = [
//   { id: 1, text: "Checkbox 1" },
//   { id: 2, text: "Checkbox 2" },
//   { id: 3, text: "Checkbox 3" },
// ];

const CheckBoxGroup = ({ checkboxes, selectedCb, setSelectedCb }) => {
  const [selectedCheckbox, setSelectedCheckbox] = useState([]);

  const handleChange = (id) => {
    const findIdx = selectedCheckbox.indexOf(id);

    if (findIdx > -1) {
      selectedCheckbox.splice(findIdx, 1);
    } else {
      selectedCheckbox.push(id);
    }
    setSelectedCheckbox(selectedCheckbox);
    // setSelectedCb(selectedCheckbox);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSelectedCb(JSON.stringify(selectedCb));
    // console.log(JSON.stringify(selectedCb));
  };

  return (
    <div>
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          {checkboxes.options.map((checkbox) => (
            <>
              <div className="checkBoxFieldWrapper ">
                <span className="checkBoxLabel">{checkbox.label}</span>
                <label key={checkbox.id}>
                  {checkbox.text}
                  <input
                    type={checkboxes.type}
                    className="defaultCheckbox longCheckbox"
                    onChange={() => handleChange(checkbox.label)}
                    selected={selectedCb.includes(checkbox.id)}
                  />
                </label>
              </div>
            </>
          ))}
          <button type="submit">Submit</button>
        </form>
      </div>
      <p>Selected checkboxes: {JSON.stringify(selectedCheckbox)}</p>
    </div>
  );
};

export default CheckBoxGroup;

// class SearchResults extends React.Component {
//   state = {
//     selectedCheckboxes: []
//   };

//   onChange = id => {
//     const selectedCheckboxes = this.state.selectedCheckboxes;

//     // Find index
//     const findIdx = selectedCheckboxes.indexOf(id);

//     // Index > -1 means that the item exists and that the checkbox is checked
//     // and in that case we want to remove it from the array and uncheck it
//     if (findIdx > -1) {
//       selectedCheckboxes.splice(findIdx, 1);
//     } else {
//       selectedCheckboxes.push(id);
//     }

//     this.setState({
//       selectedCheckboxes: selectedCheckboxes
//     });
//   };
//   render() {
//     const { selectedCheckboxes } = this.state;
//     return (
//       <div className="App">
//         {checkboxes.map(checkbox => (
//           <label key={checkbox.id}>
//             {checkbox.text}
//             <input
//               type="checkbox"
//               onChange={() => this.onChange(checkbox.id)}
//               selected={selectedCheckboxes.includes(checkbox.id)}
//             />
//           </label>
//         ))}
//         <p>Selected checkboxes: {JSON.stringify(selectedCheckboxes)}</p>
//       </div>
//     );
//   }
// }

// export default SearchResults;
