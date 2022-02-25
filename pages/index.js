import FluidAnimation from "react-fluid-animation";

const Home = () => {
  return (
    <div>
      <FluidAnimation style={{ height: "100vh" }} />
      <div style={{ color: "red", position: "absolute", top: 0, left: 0 }}>
        YOOOOU
      </div>
    </div>
  );
};

export default Home;
