export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-primary/20 to-dark py-24 px-6 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">VerdictPDF</h1>
      <p className="mx-auto max-w-2xl text-lg md:text-xl text-white/80 mb-8">
        Transform your PDFs into structured <span className="font-medium text-primary">JSON & CSV</span> via a single API call.
      </p>
      <a
        href="https://pay.paddle.com/checkout/123456"
        className="inline-block rounded-2xl bg-primary px-8 py-4 text-lg font-medium text-dark shadow-lg hover:opacity-90 transition"
      >
        Get&nbsp;started&nbsp;– $9/mo
      </a>
    </section>
  );
}