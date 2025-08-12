import { IconPhone, IconMail, IconClock } from '@tabler/icons-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative bg-white">
      <div className="container">
        <div className="relative grid lg:grid-cols-2 gap-12 items-center py-16 sm:py-20 lg:py-24">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Czyszczenie i dezynfekcja instalacji{' '}
                <span className="text-sky-500">HVAC</span> w skali przemysłowej
              </h1>
              <p className="text-xl text-slate-600 leading-8">
                Specjalizujemy się w kompleksowym serwisie systemów wentylacji dla szpitali, 
                farmacji i przemysłu spożywczego. Zapewniamy najwyższą jakość zgodną z normami 
                i standardami bezpieczeństwa.
              </p>
              <p className="text-lg text-slate-500">
                Działamy w całej Polsce z pełną dokumentacją i gwarancją jakości.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="tel:+48500000000" className="btn-primary">
                <IconPhone className="h-5 w-5 mr-2" />
                Zadzwoń teraz
              </a>
              <a href="#contact" className="btn-secondary">
                <IconMail className="h-5 w-5 mr-2" />
                Wyceń usługę
              </a>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-slate-600">
              <div className="flex items-center">
                <div className="h-2 w-2 bg-sky-500 rounded-full mr-2" />
                Szpitale
              </div>
              <div className="flex items-center">
                <div className="h-2 w-2 bg-emerald-500 rounded-full mr-2" />
                Farmacja
              </div>
              <div className="flex items-center">
                <IconClock className="h-4 w-4 mr-2 text-slate-400" />
                24/7
              </div>
            </div>
          </div>

          <div className="relative">
            <Image
              src="https://placehold.co/800x600?text=Wi%C5%9Bniewski+HVAC+Cleaning"
              alt="Profesjonalne czyszczenie instalacji HVAC - Wiśniewski"
              width={800}
              height={600}
              className="rounded-2xl shadow-xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}