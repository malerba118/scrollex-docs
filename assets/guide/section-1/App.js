import { Scroll } from "./scrollex";
import "./styles.css";

export default function App() {
  return (
    <Scroll.Container scrollAxis="y" className="h-screen">
      <Scroll.Section className="h-full children-center">
        <h1>Page One</h1>
      </Scroll.Section>
      <Scroll.Section className="h-full children-center">
        <h1>Page Two</h1>
      </Scroll.Section>
      <Scroll.Section className="h-full children-center">
        <h1>Page Three</h1>
      </Scroll.Section>
    </Scroll.Container>
  );
}
