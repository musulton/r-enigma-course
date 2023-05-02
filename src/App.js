import React from "react";
import './App.css';
import AddCourse from "./pages/AddCourse";
import CourseList from "./pages/CourseList"
import constants from "./constants";
import EditCourse from "./pages/EditCourse/EditCourse";

function App() {
  const [screenName, setScreenName] = React.useState('');
  const [params, setParams] = React.useState(null);
  let ScreenComponent;

  switch (screenName) {
    case constants.routes.COURSE_LIST:
      ScreenComponent = CourseList;
      break;
    case constants.routes.ADD_COURSE:
      ScreenComponent = AddCourse;
      break;
    case constants.routes.EDIT_COURSE:
      ScreenComponent = EditCourse;
      break;
    default:
      ScreenComponent = CourseList;
      break;
  }

  const onNavigate = (screenName, screenParams) => {
    setScreenName(screenName)
    setParams(screenParams)
  }

  return (
    <div className="App">
      <ScreenComponent onNavigate={onNavigate} params={params} />
    </div>
  )
}

export default App;
