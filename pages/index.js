import { Analytics } from "@vercel/analytics/next";

export default function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h1>Welcome to TeleApp (Next.js)</h1>
      <Analytics />
    </div>
  );
}
