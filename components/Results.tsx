import Image from 'next/image';

const results = [
  {
    title: 'Szpital — blok operacyjny',
    stat: '48h',
    text: 'Kompleksowe czyszczenie i dezynfekcja bez przestoju oddziału.',
    color: 'text-blue-600'
  },
  {
    title: 'Zakład farmaceutyczny', 
    stat: '−72%',
    text: 'Spadek zanieczyszczeń powierzchniowych po serwisie.',
    color: 'text-emerald-600'
  },
  {
    title: 'Biuro 20 000 m²',
    stat: '+35%', 
    text: 'Poprawa przepływu powietrza i efektywności filtracji.',
    color: 'text-purple-600'
  }
];

export default function Results() {
  return (
    <section id="results" className="section bg-slate-50">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Nasze realizacje
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Przykłady projektów pokazujące skuteczność naszych rozwiązań
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {results.map((result, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-200 overflow-hidden"
            >
              <div className="aspect-video relative">
                <Image
                  src="https://placehold.co/800x500?text=Case+Study"
                  alt={`Case study: ${result.title}`}
                  width={800}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6 space-y-4">
                <div className="text-center">
                  <div className={`text-4xl font-bold ${result.color} mb-2`}>
                    {result.stat}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {result.title}
                  </h3>
                </div>
                
                <p className="text-slate-600 text-sm text-center leading-relaxed">
                  {result.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500">
            * Wyniki mogą się różnić w zależności od specyfiki obiektu i stanu instalacji
          </p>
        </div>
      </div>
    </section>
  );
}