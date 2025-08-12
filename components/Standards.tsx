import { IconCheck, IconFileText } from '@tabler/icons-react';

const standards = [
  'Prace zgodnie z PN‑EN 15780 (wentylacja — czystość systemów)',
  'Doświadczenie w środowiskach wrażliwych (szpitale, cleanroom)',
  'Procedury BHP, uprawnienia, ubezpieczenie OC — dostępne na żądanie'
];

export default function Standards() {
  return (
    <section id="standards" className="section bg-white">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-sky-50 to-emerald-50 rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                    Normy i bezpieczeństwo
                  </h2>
                  <p className="text-lg text-slate-600">
                    Przestrzegamy najwyższych standardów branżowych i zapewniamy 
                    pełną dokumentację zgodności.
                  </p>
                </div>

                <ul className="space-y-4">
                  {standards.map((standard, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-500 flex items-center justify-center mr-4 mt-0.5">
                        <IconCheck className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-slate-700">{standard}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center text-sky-600 hover:text-sky-500 font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
                  >
                    <IconFileText className="h-5 w-5 mr-2" />
                    Poproś o dokumenty
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square bg-white rounded-xl shadow-lg p-8 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="mx-auto h-16 w-16 rounded-full bg-sky-100 flex items-center justify-center">
                      <IconCheck className="h-8 w-8 text-sky-600" />
                    </div>
                    <div className="space-y-2">
                      <div className="text-2xl font-bold text-slate-900">PN-EN 15780</div>
                      <div className="text-sm text-slate-600">Certyfikowane procedury</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}