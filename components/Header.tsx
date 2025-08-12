'use client';

import { useState } from 'react';
import { IconMenu2, IconX, IconPhone } from '@tabler/icons-react';

const navigation = [
  { name: 'Usługi', href: '#services' },
  { name: 'Branże', href: '#industries' },
  { name: 'Jak pracujemy', href: '#process' },
  { name: 'Normy', href: '#standards' },
  { name: 'Realizacje', href: '#results' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Kontakt', href: '#contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="container" aria-label="Global">
        <div className="flex h-16 items-center justify-between">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5" aria-label="Wiśniewski HVAC">
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500 text-white font-bold">
                  W
                </div>
                <span className="text-xl font-bold text-slate-900">Wiśniewski</span>
              </div>
            </a>
          </div>
          
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700"
              onClick={() => setMobileMenuOpen(true)}
              aria-expanded="false"
              aria-controls="mobile-menu"
            >
              <span className="sr-only">Otwórz menu główne</span>
              <IconMenu2 className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-slate-900 hover:text-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
          
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="tel:+48500000000"
              className="btn-primary"
            >
              <IconPhone className="h-4 w-4 mr-2" />
              Zadzwoń
            </a>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}
          id="mobile-menu"
        >
          <div className="fixed inset-0 z-50" />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-slate-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <div className="flex items-center space-x-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-500 text-white font-bold text-sm">
                    W
                  </div>
                  <span className="text-lg font-bold text-slate-900">Wiśniewski</span>
                </div>
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-slate-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Zamknij menu</span>
                <IconX className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-slate-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-900 hover:bg-slate-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="tel:+48500000000"
                    className="btn-primary w-full"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <IconPhone className="h-4 w-4 mr-2" />
                    Zadzwoń teraz
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}