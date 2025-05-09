export default function Footer() {
  return (
    <footer className="bg-black py-8 text-center text-sm text-white/60">
      <p>
      &copy; {new Date().getFullYear()} GioMint — Powered by VerdictPDF.{' '}
        <a className="underline" href="/terms">
          Terms & Privacy
        </a>
      </p>
    </footer>
  );
}