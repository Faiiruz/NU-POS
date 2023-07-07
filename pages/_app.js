import { MyProvider } from "@/components/context/MyProvider";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-slate-100">
      <MyProvider>
        <Component {...pageProps} />
      </MyProvider>
    </div>
  );
}
