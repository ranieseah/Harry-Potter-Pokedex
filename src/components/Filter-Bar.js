import React from "react";

const FilterBar = (props) => {
  const handleFilter = (element) => {
    props.function(element.target.value);
    // switch (element.target.value) {
    //   case "Gryffindor":
    //     console.log("flip gryffindor");
    //     break;
    //   case "Hufflepuff":
    //     console.log("flip hufflepuff");
    //     break;
    //   case "Slytherin":
    //     console.log("flip slytherin");
    //     break;
    //   case "Ravenclaw":
    //     console.log("flip ravenclaw");
    //     break;
    //   case "Male":
    //     console.log("flip male");
    //     break;
    //   case "Female":
    //     console.log("flip female");
    //     break;
    //   case "Student":
    //     console.log("flip student");
    //     break;
    //   case "Staff":
    //     console.log("flip staff");
    //     break;
    //   case "Alive":
    //     console.log("flip alive");
    //     break;
    //   case "Dead":
    //     console.log("flip dead");
    //     break;
    // }
  };
  return (
    <div>
      <table
        style={{
          backgroundColor: "white",
          marginLeft: "auto",
          marginRight: "auto",
          width: "80%",
        }}
      >
        <tr>
          <th>House</th>
          <th></th>
          <th>Gender</th>
          <th>Student?</th>
          <th>Staff?</th>
          <th>Alive?</th>
        </tr>
        <tr>
          <td>
            <input
              type="checkbox"
              value="Gryffindor"
              onChange={handleFilter}
              defaultChecked
            />
            Gryffindor
          </td>
          <td>
            <input
              type="checkbox"
              value="Hufflepuff"
              onChange={handleFilter}
              defaultChecked
            />
            Hufflepuff
          </td>
          <td>
            <input
              type="checkbox"
              value="male"
              onChange={handleFilter}
              defaultChecked
            />
            Male
          </td>
          <td>
            <input
              type="checkbox"
              value="Student"
              onChange={handleFilter}
              defaultChecked
            />
            Student
          </td>
          <td>
            <input
              type="checkbox"
              value="Staff"
              onChange={handleFilter}
              defaultChecked
            />
            Staff
          </td>
          <td>
            <input
              type="checkbox"
              value="Alive"
              onChange={handleFilter}
              defaultChecked
            />
            Alive
          </td>
        </tr>
        <tr>
          <td>
            <input
              type="checkbox"
              value="Slytherin"
              onChange={handleFilter}
              defaultChecked
            />
            Slytherin
          </td>
          <td>
            <input
              type="checkbox"
              value="Ravenclaw"
              onChange={handleFilter}
              defaultChecked
            />
            Ravenclaw
          </td>
          <td>
            <input
              type="checkbox"
              value="female"
              onChange={handleFilter}
              defaultChecked
            />
            Female
          </td>
          <td>
            <input
              type="checkbox"
              value="NonStudent"
              onChange={handleFilter}
              defaultChecked
            />
            Non-Student
          </td>
          <td>
            <input
              type="checkbox"
              value="NonStaff"
              onChange={handleFilter}
              defaultChecked
            />
            Non-Staff
          </td>
          <td>
            <input
              type="checkbox"
              value="Dead"
              onChange={handleFilter}
              defaultChecked
            />
            Dead
          </td>
        </tr>
        <tr>
          <td>
            <input
              type="checkbox"
              value=""
              onChange={handleFilter}
              defaultChecked
            />
            No House
          </td>
        </tr>
      </table>
    </div>
  );
};

export default FilterBar;
