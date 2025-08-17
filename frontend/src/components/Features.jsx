export default function Features() {
  const features = [
    { title: 'Fast & Accurate', desc: 'AI-powered extraction in seconds' },
    { title: 'Secure & Private', desc: 'Your health data stays protected' },
    { title: 'Never Forget', desc: 'Smart reminders at the right time' },
  ]
  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <h2 className="text-3xl font-bold text-center">Why Choose Smart Prescription Manager?</h2>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(f => (
          <div key={f.title} className="card p-6">
            <div className="text-3xl">💡</div>
            <h3 className="mt-2 font-semibold">{f.title}</h3>
            <p className="text-slate-600 text-sm mt-1">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
