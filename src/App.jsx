import AppRoutes from "./routes/Routes";
import { Toaster } from "sileo";

import AuthProvider from "./context/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <Toaster position="top-right" />

      <AppRoutes />
    </AuthProvider>
  );
}

export default App;