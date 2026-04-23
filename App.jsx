import InvoiceList from "./pages/InvoiceList";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <InvoiceList />
    </ThemeProvider>
  );
}

export default App;
