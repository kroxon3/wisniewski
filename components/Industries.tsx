import { 
  IconBuildingHospital, 
  IconFlask, 
  IconChefHat, 
  IconBuilding 
} from '@tabler/icons-react';
import Image from 'next/image';

const industries = [
  {
    name: 'Szpitale i placówki medyczne',
    icon: IconBuildingHospital,
    color: 'text-red-500 bg-red-50'
  },
  {
    name: 'Farmacja / cleanroom',
    icon: IconFlask,
    color: 'text-blue-500 bg-blue-50'
  },
  {
    name: 'Przemysł spożywczy',
    icon: IconChefHat,
    color: 'text-green-500 bg-green-50'
  },
  {
    name: 'Biura i obiekty publiczne',
    icon: IconBuilding,
    color: 'text-purple-500 bg-purple-50'
  }
];

export default function Industries() {
  return (
    <section id="industries" className="section bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Branże, w których działamy
              </h2>
              <p className="text-lg text-slate-600">
                Specjalizujemy się w obsłudze obiektów o najwyższych wymaganiach 
                sanitarnych i technicznych. Nasze doświadczenie obejmuje środowiska 
                sterylne i kontrolowane.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {industries.map((industry, index) => {
                const IconComponent = industry.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-4 rounded-lg border border-slate-200 hover:border-slate-300 transition-colors"
                  >
                    <div className={`p-2 rounded-lg ${industry.color}`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <span className="font-medium text-slate-900 text-sm">
                      {industry.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <Image
              src="https://placehold.co/1200x400?text=Bran%C5%BCe"
              alt="Branże obsługiwane przez Wiśniewski HVAC"
              width={1200}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}