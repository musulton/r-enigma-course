import React from "react";
import './App.css';
import AddCourse from "./pages/AddCourse";
import CourseList from "./pages/CourseList"
import constants from "./constants";

const DATA = [
  {  title: "Title 1", description: "Description" },
  {  title: "Title 2", description: "Description" },
]

function App() {
  const [screenName, setScreenName] = React.useState('');
  let ScreenComponent;
  let props = {};

  switch (screenName) {
    case constants.routes.COURSE_LIST:
      ScreenComponent = CourseList;
      props = {
        courses: DATA
      }
      break;
    case constants.routes.ADD_COURSE:
      ScreenComponent = AddCourse;
      break;
    default:
      ScreenComponent = CourseList;
      props = {
        courses: DATA
      }
      break;
  }

  const onNavigate = (screenName) => {
    setScreenName(screenName)
  }

  return (
    <div className="App">
      <ScreenComponent {...props} onNavigate={onNavigate} />
    </div>
  )
}

export default App;
