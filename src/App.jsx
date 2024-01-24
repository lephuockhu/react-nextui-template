import AuthProvider from "./providers/AuthProvider";
import Routes from "./routes";

import "./App.css";

function App() {
  return (
		<AuthProvider>
			<Routes></Routes>
		</AuthProvider>
  );
}

export default App;
