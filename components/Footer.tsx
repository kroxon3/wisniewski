import { IconPhone, IconMail } from '@tabler/icons-react';

const navigation = [
  { name: 'Usługi', href: '#services' },
  { name: 'Branże', href: '#industries' },
  { name: 'Jak pracujemy', href: '#process' },
  { name: 'Normy', href: '#standards' },
  { name: 'Realizacje', href: '#results' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Kontakt', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container">
        <div className="py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-500 text-white font-bold text-sm">
                  W
                </div>
                <span className="text-xl font-bold">Wiśniewski</span>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Profesjonalne czyszczenie i dezynfekcja instalacji HVAC 
                w skali przemysłowej. Specjalizujemy się w obsłudze szpitali, 
                farmacji i przemysłu.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Szybkie linki</h3>
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-slate-300 hover:text-white text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Kontakt</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <IconPhone className="h-4 w-4 text-slate-400 flex-shrink-0" />
                  <a
                    href="tel:+48500000000"
                    className="text-slate-300 hover:text-white text-sm transition-colors"
                  >
                    +48 500 000 000
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <IconMail className="h-4 w-4 text-slate-400 flex-shrink-0" />
                  <a
                    href="mailto:kontakt@wisniewski-hvac.pl"
                    className="text-slate-300 hover:text-white text-sm transition-colors"
                  >
                    kontakt@wisniewski-hvac.pl
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <p className="text-slate-400 text-sm">
              © 2025 Wiśniewski. Wszystkie prawa zastrzeżone.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-slate-400 hover:text-slate-300 text-sm transition-colors"
              >
                Polityka prywatności
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-slate-300 text-sm transition-colors"
              >
                Regulamin
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* TODO Notice */}
      <div className="bg-slate-800 py-2">
        <div className="container">
          <p className="text-center text-xs text-slate-500">
            TODO: Zaktualizuj linki do polityki prywatności i regulaminu
          </p>
        </div>
      </div>
    </footer>
  );
}