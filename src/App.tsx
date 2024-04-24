import { Outlet } from "react-router-dom";
// import useAuthCheck from "./hook/useAuthCheck";

function App() {
  // const auth = useAuthCheck();
  // return !auth ? (
  //   <div>Loading please wait</div>
  // ) :
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
