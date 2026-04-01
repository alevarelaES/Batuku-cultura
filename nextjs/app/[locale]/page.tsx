import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Home() {
  const t = useTranslations('Home');

  return (
    <div className="w-full relative">
      <section className="bg-deep min-h-[90vh] flex flex-col md:flex-row items-center px-4 md:px-12 relative overflow-hidden">
        
        <div className="w-full md:w-1/2 z-10 py-20 relative">
          <h1 className="text-accent text-6xl md:text-8xl mb-4 text-shadow-lg drop-shadow-2xl">
            {t('heroTitle')}
          </h1>
          <p className="text-white text-xl md:text-3xl italic mb-8 font-body opacity-90 drop-shadow-md">
            {t('heroSubtitle')}
          </p>
          
          <div className="flex flex-wrap gap-4 mt-8">
            <button className="bg-accent text-deep hover:bg-white border-2 border-accent text-lg py-4 px-8 font-bold rounded-full shadow-[0_0_20px_rgba(245,184,0,0.5)] transition-all">
              {t('joinBtn')}
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-deep text-lg py-4 px-8 font-bold rounded-full transition-all">
              {t('discoverBtn')}
            </button>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 h-[50vh] md:h-[90vh] relative z-10 flex items-center justify-center">
          <div className="relative p-4">
            <div className="relative z-20 rounded-[40px] overflow-hidden border-8 border-accent shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <Image 
                src="https://images.unsplash.com/photo-1696236930810-5bd7ea978369?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwbXVzaWMlMjBmZXN0aXZhbCUyMGNyb3dkJTIwY29sb3JmdWx8ZW58MXx8fHwxNzc0MjcxMTM1fDA&ixlib=rb-4.1.0&q=80&w=1080" 
                alt="Performance Africaine" 
                width={500}
                height={600}
                className="w-full max-w-[500px] h-auto object-cover"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-full h-full border-8 border-primary rounded-[40px] z-10 transform -rotate-3"></div>
          </div>
        </div>
      </section>
      
      {/* Autres sections du Home s'intègrent ici de la même manière */}
    </div>
  );
}