import React from "react";
import './App.css';
import AddCourse from "./pages/AddCourse";
import CourseList from "./pages/CourseList"
import constants from "./constants";

function App() {
  const [screenName, setScreenName] = React.useState('');
  let ScreenComponent;

  switch (screenName) {
    case constants.routes.COURSE_LIST:
      ScreenComponent = CourseList;
      break;
    case constants.routes.ADD_COURSE:
      ScreenComponent = AddCourse;
      break;
    default:
      ScreenComponent = CourseList;
      break;
  }

  const onNavigate = (screenName) => {
    setScreenName(screenName)
  }

  return (
    <div className="App">
      <ScreenComponent onNavigate={onNavigate} />
    </div>
  )
}

export default App;
