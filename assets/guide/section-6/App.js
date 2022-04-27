import { Scroll } from "scrollex";
import "./styles.css";

const keyframes = {
  heading: ({ section, container }) => ({
    [section.topAt("container-bottom")]: {
      translateX: -container.width,
    },
    [section.topAt("container-top") - container.height / 4]: {
      translateX: 0,
    },
    [section.topAt("container-top") + container.height / 4]: {
      translateX: 0,
    },
    [section.bottomAt("container-top")]: {
      translateX: container.width,
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
