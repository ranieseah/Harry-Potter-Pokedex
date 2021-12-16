# Harry-Potter-Pokedex
SEI33 Project 2 (React.js)

Project not deployed. 

# The App
- create an App using React.js
- App generates cards based on the information from API and filtered based on user input on the filters
- Overlay

# What isnt working
1) deployment with a static(https://harrypotter-pokedex.netlify.app/).
2) tried to overlay a frame over the images, but couldn't get it to work.

# What is working
### filtering of characters
- capturing the filter options in a state
```
const [checked, setChecked] = useState({
    house: ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw", ""],
    gender: ["male", "female"],
    hogwartsStudent: [true, false],
    hogwartsStaff: [true, false],
    alive: [true, false],
  });
  ```
- setting the state based on the user input
```
const updateClick = () => {
    if (
      click === "Ravenclaw" ||
      click === "Slytherin" ||
      click === "Hufflepuff" ||
      click === "Gryffindor" ||
      click === ""
    ) {
      const currentIndex = checked.house.indexOf(click);
      const newHouse = checked;
      if (currentIndex === -1) {
        newHouse.house.push(click);
      } else {
        newHouse.house.splice(currentIndex, 1);
      }
      setClick();
      setChecked(newHouse);
    }
    if (click === "male" || click === "female") {
      const currentIndex = checked.gender.indexOf(click);
      const newGender = checked;

      if (currentIndex === -1) {
        newGender.gender.push(click);
      } else {
        newGender.gender.splice(currentIndex, 1);
      }
      setClick();
      setChecked(newGender);
    }
    if (click === "Student") {
      const currentIndex = checked.hogwartsStudent.indexOf(true);
      const newStudent = checked;

      if (currentIndex === -1) {
        newStudent.hogwartsStudent.push(true);
      } else {
        newStudent.hogwartsStudent.splice(currentIndex, 1);
      }
      setClick();
      setChecked(newStudent);
    }
    if (click === "NonStudent") {
      const currentIndex = checked.hogwartsStudent.indexOf(false);
      const newStudent = checked;

      if (currentIndex === -1) {
        newStudent.hogwartsStudent.push(false);
      } else {
        newStudent.hogwartsStudent.splice(currentIndex, 1);
      }
      setClick();
      setChecked(newStudent);
    }
    if (click === "Staff") {
      const currentIndex = checked.hogwartsStaff.indexOf(true);
      const newStaff = checked;

      if (currentIndex === -1) {
        newStaff.hogwartsStaff.push(true);
      } else {
        newStaff.hogwartsStaff.splice(currentIndex, 1);
      }
      setClick();
      setChecked(newStaff);
    }
    if (click === "NonStaff") {
      const currentIndex = checked.hogwartsStaff.indexOf(false);
      const newStaff = checked;

      if (currentIndex === -1) {
        newStaff.hogwartsStaff.push(false);
      } else {
        newStaff.hogwartsStaff.splice(currentIndex, 1);
      }
      setClick();
      setChecked(newStaff);
    }
    if (click === "Alive") {
      const currentIndex = checked.alive.indexOf(true);
      const newAlive = checked;

      if (currentIndex === -1) {
        newAlive.alive.push(true);
      } else {
        newAlive.alive.splice(currentIndex, 1);
      }
      setClick();
      setChecked(newAlive);
    }
    if (click === "Dead") {
      const currentIndex = checked.alive.indexOf(false);
      const newDead = checked;

      if (currentIndex === -1) {
        newDead.alive.push(false);
      } else {
        newDead.alive.splice(currentIndex, 1);
      }
      setClick();
      setChecked(newDead);
    }
  };
 ```
 - create a filter function
```
const checkFilter = (char) => {
    return (
      checked.house.indexOf(char.house) >= 0 &&
      checked.gender.indexOf(char.gender) >= 0 &&
      checked.hogwartsStudent.indexOf(char.hogwartsStudent) >= 0 &&
      checked.hogwartsStaff.indexOf(char.hogwartsStaff) >= 0 &&
      checked.alive.indexOf(char.alive) >= 0
    );
  };
  ```
  - filter the information from the API, then generate the Card components for each character that passes the filter
  ```
  const printList = charCtx.characters.filter(checkFilter);
  let listChar = [];
  for (let i = 0; i < printList.length; i++) {
    listChar.push(
      <Card
        info={printList[i]}
        function={openPopup}
        setModalContent={setModalContent}
      />
    );
    ```
### Modal
- was originally struggling with getting the Modal Window to appear
- installed Bootstrap for React, and Bootstrap took care of it

# What could be done better
Looking to complete stretched goals of using Redux Toolkit to add functionality of being able to pick characters and proceed into another view that runs a comparison on all the information present in the API across the selected characters.

# Credits
API used: https://hp-api.herokuapp.com/
