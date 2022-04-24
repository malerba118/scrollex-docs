import { Scroll } from "./scrollex";
import "./styles.css";

const keyframes = {
  heading: ({ section }) => ({
    [section.topAt("container-top")]: {
      rotateZ: "0deg",
    },
    [section.bottomAt("container-top")]: {
      rotateZ: "180deg",
    },
  }),
};

export default function App() {
  return (
    <Scroll.Container scrollAxis="y" className="h-screen">
      <Scroll.Section className="h-full children-center">
        <Scroll.Item keyframes={keyframes.heading}>
          <h1>Page One</h1>
        </Scroll.Item>
      </Scroll.Section>
      <Scroll.Section className="h-full children-center">
        <Scroll.Item keyframes={keyframes.heading}>
          <h1>Page Two</h1>
        </Scroll.Item>
      </Scroll.Section>
      <Scroll.Section className="h-full children-center">
        <Scroll.Item keyframes={keyframes.heading}>
          <h1>Page Three</h1>
        </Scroll.Item>
      </Scroll.Section>
    </Scroll.Container>
  );
}
