import { AuthProvider } from "./context/AuthContext";
import { AxiosProvider } from "./context/AxiosContext";
import PagesProvider from "./PagesProvider";

export default function App() {
  return (
    <AuthProvider>
      <AxiosProvider>
        <PagesProvider />
      </AxiosProvider>
    </AuthProvider>
  );
}
