import AdminShell from "@/components/AdminShell";
import "@/styles/admin.css";

export default function App({ Component, pageProps }) {
  return (
    <AdminShell>
      <Component {...pageProps} />
    </AdminShell>
  );
}
