import { 
  IconSearch, 
  IconShield, 
  IconTool, 
  IconFileCheck 
} from '@tabler/icons-react';

const process = [
  {
    step: '1',
    title: 'Audyt',
    text: 'Przegląd instalacji, inspekcja, plan prac i BHP.',
    icon: IconSearch
  },
  {
    step: '2', 
    title: 'Zabezpieczenia',
    text: 'Strefowanie, oznakowanie, harmonogram bez przestojów.',
    icon: IconShield
  },
  {
    step: '3',
    title: 'Realizacja', 
    text: 'Czyszczenie i dezynfekcja z użyciem certyfikowanych urządzeń.',
    icon: IconTool
  },
  {
    step: '4',
    title: 'Walidacja i raport',
    text: 'Pomiary, dokumentacja zdjęciowa, rekomendacje.',
    icon: IconFileCheck
  }
];

export default function Process() {
  return (
    <section id="process" className="section bg-slate-50">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Jak pracujemy
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Systematyczne podejście gwarantujące najwyższą jakość i bezpieczeństwo wykonania
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {process.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div
                key={index}
                className="relative text-center"
              >
                {/* Connection line */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-1/2 w-full h-px bg-slate-300 transform translate-x-1/2" />
                )}
                
                <div className="relative space-y-4">
                  <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-sky-500 relative z-10">
                    <IconComponent className="h-8 w-8 text-white" />
                    <div className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-white text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-slate-900">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}