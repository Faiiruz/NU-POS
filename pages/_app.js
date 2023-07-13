import { MyProvider } from "@/components/context/MyProvider";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <MyProvider>
      <Component {...pageProps} />
    </MyProvider>
  );
}
