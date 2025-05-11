export default function Info() {
  return (
    <section className="bg-dark py-20 px-6">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
        How it works
      </h2>

      <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-3 text-center">
        <div>
          <h3 className="text-primary mb-2 text-xl font-medium">1. Upload</h3>
          <p>Send a PDF via <code className="text-xs">POST /convert</code> or through the dashboard.</p>
        </div>
        <div>
          <h3 className="text-primary mb-2 text-xl font-medium">2. Extract</h3>
          <p>OCR + table detection convert all pages to accurate JSON &amp; CSV.</p>
        </div>
        <div>
          <h3 className="text-primary mb-2 text-xl font-medium">3. Retrieve</h3>
          <p>Webhook or GET call returns structured data ready for your DB or BI tool.</p>
        </div>
      </div>

      <h2 className="text-3xl md:text-4xl font-semibold text-center mt-20 mb-8">
        Key features
      </h2>
      <ul className="mx-auto max-w-3xl list-disc list-inside space-y-2 text-white/90">
        <li>Table extraction with <strong>Camelot</strong> &amp; custom ML fallback</li>
        <li>Full-page OCR (English &amp; Spanish)</li>
        <li>REST API + webhook, JSON &amp; CSV</li>
        <li>All files deleted automatically after 60 min</li>
        <li>7-day no-questions-asked refund policy</li>
      </ul>

      <h2 className="text-3xl md:text-4xl font-semibold text-center mt-20 mb-8">
        Example output
      </h2>
      <pre className="mx-auto max-w-3xl bg-white/5 p-4 rounded-xl overflow-x-auto text-xs">
{`{
  "page": 1,
  "tables": [
    {
      "columns": ["Date", "Case", "Amount"],
      "rows": [
        ["2025-05-10", "ABC-123", "$1,250.00"]
      ]
    }
  ]
}`}
      </pre>

      <h2 className="text-3xl md:text-4xl font-semibold text-center mt-20 mb-8">
        FAQ
      </h2>
      <div className="mx-auto max-w-3xl space-y-4 text-white/90">
        <p><strong>What if a PDF fails?</strong> You are not charged; refunds are automatic on failed jobs.</p>
        <p><strong>Can I cancel anytime?</strong> Yes — subscriptions are month-to-month, cancel in one click.</p>
      </div>
    </section>
  );
}