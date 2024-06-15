import { AuthProvider } from "./src/context/AuthContext";
import { AxiosProvider } from "./src/context/AxiosContext";
import PagesProvider from "./src/components/PagesProvider";

export default function App() {
  return (
    <AuthProvider>
      <AxiosProvider>
        <PagesProvider />
      </AxiosProvider>
    </AuthProvider>
  );
}
