import { Button } from "@chakra-ui/react";
import { Routes } from "react-router-dom";

function App() {
  return (
    <Box minH={"100vh"}>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/create" element={<CreatePage />}></Route>
      </Routes>
    </Box>
  );
}

export default App;
