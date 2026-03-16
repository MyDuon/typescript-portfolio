import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import CalculatorPage from "./pages/CalculatorPage";
import TicTacToePage from "./pages/TicTacToePage";
import TodoListPage from "./pages/TodoListPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />{" "}
          {/*Kan legge til errorelement attributt senere */}
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/tictactoe" element={<TicTacToePage />} />
          <Route path="/todolist" element={<TodoListPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
