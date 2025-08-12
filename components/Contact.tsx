import { 
  IconPhone, 
  IconMail, 
  IconMapPin, 
  IconClock 
} from '@tabler/icons-react';

export default function Contact() {
  return (
    <section id="contact" className="section bg-slate-50">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Kontakt
            </h2>
            <p className="text-lg text-slate-600">
              Skontaktuj się z nami w sprawie wyceny lub pilnych interwencji
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-sky-500">
                      <IconPhone className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">Telefon</h3>
                    <a
                      href="tel:+48500000000"
                      className="text-sky-600 hover:text-sky-500 font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
                    >
                      +48 500 000 000
                    </a>
                    <p className="text-sm text-slate-500 mt-1">
                      TODO: Zaktualizuj numer telefonu
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500">
                      <IconMail className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">E-mail</h3>
                    <a
                      href="mailto:kontakt@wisniewski-hvac.pl"
                      className="text-emerald-600 hover:text-emerald-500 font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
                    >
                      kontakt@wisniewski-hvac.pl
                    </a>
                    <p className="text-sm text-slate-500 mt-1">
                      TODO: Zaktualizuj adres e-mail
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500">
                      <IconMapPin className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">Adres</h3>
                    <address className="text-slate-600 not-italic">
                      ul. Przykładowa 1<br />
                      00-000 Miasto
                    </address>
                    <p className="text-sm text-slate-500 mt-1">
                      TODO: Zaktualizuj adres
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500">
                      <IconClock className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">Godziny pracy</h3>
                    <p className="text-slate-600">
                      Działamy 24/7 w nagłych przypadkach
                    </p>
                    <p className="text-sm text-slate-500 mt-1">
                      Standardowo: pon-pt 8:00-17:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Mapa</h3>
              <div className="aspect-video bg-slate-100 rounded-lg flex items-center justify-center">
                <div className="text-center text-slate-500">
                  <IconMapPin className="h-12 w-12 mx-auto mb-2 text-slate-400" />
                  <p>Mapa zostanie dodana</p>
                  <p className="text-sm">po podaniu dokładnego adresu</p>
                </div>
              </div>
              <p className="text-sm text-slate-500 mt-4">
                TODO: Dodaj mapę Google Maps z rzeczywistą lokalizacją
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-sky-50 border border-sky-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Potrzebujesz pilnej interwencji?
              </h3>
              <p className="text-slate-600 mb-4">
                Zadzwoń teraz — działamy 24/7 w sytuacjach awaryjnych
              </p>
              <a
                href="tel:+48500000000"
                className="btn-primary"
              >
                <IconPhone className="h-5 w-5 mr-2" />
                Zadzwoń teraz
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}