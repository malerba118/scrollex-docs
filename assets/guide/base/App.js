import { Parallax } from "./scrollex";

export default function App() {
  return (
    <Parallax.Container scrollAxis="y" height="100vh" width="100vw">
      <Parallax.Section
        style={{ height: "200vh", backgroundColor: "green" }}
      ></Parallax.Section>
      <Parallax.Section
        style={{ height: "200vh", backgroundColor: "red" }}
      ></Parallax.Section>
    </Parallax.Container>
  );
}
