'use client';

import { useState } from 'react';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';

const faq = [
  {
    q: 'Jak szybko możecie rozpocząć prace?',
    a: 'W trybie standard: 3–5 dni. W trybie pilnym 24/7 — według dostępności zespołu.'
  },
  {
    q: 'Czy zapewniacie raporty z pomiarów?',
    a: 'Tak. Raport \'przed/po\' z dokumentacją foto/wideo i zaleceniami.'
  },
  {
    q: 'Czy prace można wykonać bez przestoju?',
    a: 'Tak, planujemy etapy i strefowanie tak, aby zminimalizować przerwy.'
  },
  {
    q: 'Jakie środki stosujecie?',
    a: 'Dobieramy środki zgodnie z wymogami obiektu i kartami charakterystyki — szczegóły w planie prac.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section bg-white">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Najczęściej zadawane pytania
            </h2>
            <p className="text-lg text-slate-600">
              Odpowiedzi na najważniejsze pytania dotyczące naszych usług
            </p>
          </div>

          <div className="space-y-4">
            {faq.map((item, index) => (
              <div
                key={index}
                className="border border-slate-200 rounded-lg overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 transition-colors"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="font-semibold text-slate-900 pr-4">
                    {item.q}
                  </span>
                  <span className="flex-shrink-0">
                    {openIndex === index ? (
                      <IconChevronUp className="h-5 w-5 text-slate-500" />
                    ) : (
                      <IconChevronDown className="h-5 w-5 text-slate-500" />
                    )}
                  </span>
                </button>
                
                <div
                  id={`faq-answer-${index}`}
                  className={`overflow-hidden transition-all duration-200 ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-4 text-slate-600">
                    {item.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}