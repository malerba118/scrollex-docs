import { Scroll } from "./scrollex";
import "./styles.css";

const keyframes = {
  heading: ({ section }) => ({
    [section.topAt("container-bottom")]: {
      translateX: -200,
    },
    [section.topAt("container-top") - 100]: {
      translateX: 0,
    },
    [section.topAt("container-top") + 100]: {
      translateX: 0,
    },
    [section.bottomAt("container-top")]: {
      translateX: 200,
    },
  }),
};

export default function App() {
  return (
    <Scroll.Container scrollAxis="y" className="h-screen">
      <Scroll.Section className="h-full center bg-1">
        <Scroll.Item keyframes={keyframes.heading}>
          <h1>Page One</h1>
        </Scroll.Item>
      </Scroll.Section>
      <Scroll.Section className="h-full center bg-2">
        <Scroll.Item keyframes={keyframes.heading}>
          <h1>Page Two</h1>
        </Scroll.Item>
      </Scroll.Section>
      <Scroll.Section className="h-full center bg-1">
        <Scroll.Item keyframes={keyframes.heading}>
          <h1>Page Three</h1>
        </Scroll.Item>
      </Scroll.Section>
    </Scroll.Container>
  );
}
