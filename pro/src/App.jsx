```typescript
import React from "react";
import { Navigate, Routes, Route } from "react-router-dom"; // Import all necessary components from react-router-dom
import Sidebar from "./components/Side/Sidebar";
import Ma from "./components/main/Ma";
import Card from "./components/main/Team";
import Mem1 from "./components/main/Mem1";
import Forms from "./components/main/Forms";
import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        {/* Redirect root path to /home */}
        <Route path="/" element={<Navigate to="/home" />} />
        {/* Route for the home page */}
        <Route path="/home" element={<Ma />} />
        {/* Route for the forms page */}
        <Route path="/forms" element={<Forms />} />
      </Routes>
    </div>
  );
}

export default App;
```