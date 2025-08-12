import { 
  IconWind, 
  IconSpray, 
  IconEye, 
  IconClipboardData 
} from '@tabler/icons-react';

const services = [
  {
    title: 'Czyszczenie kanałów i central wentylacyjnych',
    icon: IconWind,
    bullets: [
      'Szczotkowanie mechaniczne i odciąg',
      'Usuwanie osadów i biofilmu',
      'Wymiana/serwis filtrów (G4–HEPA)'
    ]
  },
  {
    title: 'Dezynfekcja i dekontaminacja HVAC',
    icon: IconSpray,
    bullets: [
      'Mgła/rozpylanie zgodnie z wytycznymi',
      'Powierzchnie i kanały',
      'Bezpieczne protokoły, kontrola dostępu'
    ]
  },
  {
    title: 'Inspekcje i raporty',
    icon: IconEye,
    bullets: [
      'Kamera inspekcyjna (przed/po)',
      'Raport fotograficzny i opisowy',
      'Zalecenia serwisowe'
    ]
  },
  {
    title: 'Pomiary i walidacja',
    icon: IconClipboardData,
    bullets: [
      'Pomiary przepływów i podciśnień',
      'Ocena czystości wg PN‑EN 15780',
      'ATP/sampling*' // TODO: doprecyzuj
    ]
  }
];

export default function Services() {
  return (
    <section id="services" className="section bg-slate-50">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Nasze usługi
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Kompleksowe rozwiązania dla systemów HVAC w środowiskach o najwyższych wymaganiach
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-200"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-sky-500">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">
                      {service.title}
                    </h3>
                    <ul className="space-y-2">
                      {service.bullets.map((bullet, bulletIndex) => (
                        <li key={bulletIndex} className="flex items-start">
                          <div className="h-1.5 w-1.5 bg-sky-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span className="text-slate-600 text-sm">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* TODO Note */}
        <div className="mt-8 text-center">
          <p className="text-sm text-slate-500">
            * TODO: Doprecyzuj procedury ATP/sampling
          </p>
        </div>
      </div>
    </section>
  );
}