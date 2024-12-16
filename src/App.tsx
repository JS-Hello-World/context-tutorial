import { Button } from "./components/Button";
import { ThemeProvider } from "./context/ThemeProvider/ThemeProvider";

export default function App() {
  return (
    <ThemeProvider>
      <Button role="radio">
        Test
      </Button>
    </ThemeProvider>
  );
}