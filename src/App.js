import { ThemeProvider } from "@mui/styles";
import { CssBaseline } from "@mui/material";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from "./Layout";
import { theme } from "./theme/theme";
import Mocks from "./Mocks";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Mocks />} />
            <Route path="/:collectorId/:userId" element={<Mocks />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
