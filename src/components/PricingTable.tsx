const plans = [
  { name: 'Starter', pages: '300', price: '$9 / mo' },
  { name: 'Pro', pages: '5 000', price: '$29 / mo' },
  { name: 'PAYG', pages: '—', price: '$0.05 / page' }
];
export default function PricingTable() {
  return (
    <section id="pricing" className="py-20 px-6 bg-dark">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">Pricing</h2>
      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
        {plans.map((p) => (
          <div
            key={p.name}
            className="rounded-2xl bg-white/5 p-8 text-center shadow-lg hover:scale-105 transition"
          >
            <h3 className="text-2xl font-semibold mb-2">{p.name}</h3>
            <p className="text-primary mb-6 text-lg">{p.pages} pages/mo</p>
            <p className="text-3xl font-bold mb-8">{p.price}</p>
            <a
              href="https://pay.paddle.com/checkout/123456"
              className="inline-block rounded-xl bg-primary px-6 py-3 text-dark font-medium hover:opacity-90"
            >
              Buy now
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}