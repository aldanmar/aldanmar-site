import React, { useState, useEffect } from 'react';
import {
  MapPin,
  Compass,
  CheckCircle2,
  ExternalLink,
  Mail,
  Phone,
  ArrowRight,
  ArrowLeft,
  Building2,
  Waves,
  Sun,
  Camera,
  FolderOpen,
  History,
  Send,
  Bed,
  Bath,
  Users,
  Check,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Home,
  HardDrive,
} from 'lucide-react';
import siteData from './siteConfig.json';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'blue' | 'red' | 'green'>('home');
  const [viewsCategory, setViewsCategory] = useState<'all' | 'exterior' | 'sunset' | 'beach' | 'grounds'>('all');
  const [lightboxImg, setLightboxImg] = useState<{ src: string; title: string; subtitle?: string } | null>(null);
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleHash = () => {
      const h = window.location.hash.toLowerCase().replace(/^#\/?/, '');
      if (h === 'blue') setCurrentPage('blue');
      else if (h === 'red') setCurrentPage('red');
      else if (h === 'green') setCurrentPage('green');
      else setCurrentPage('home');
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const navigateTo = (page: 'home' | 'blue' | 'red' | 'green') => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '#/' : '#/' + page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.name && formState.email) {
      setSubmitted(true);
    }
  };

  const apartmentsList = siteData?.apartments || [];
  const activeApartment = apartmentsList.find((a: any) => a.id === currentPage) || apartmentsList[0];
  const externalViews = siteData?.externalViews || [];
  const filteredViews = viewsCategory === 'all'
    ? externalViews
    : externalViews.filter((v: any) => v.category === viewsCategory);

  const prevApartment = apartmentsList[(apartmentsList.findIndex((a: any) => a.id === currentPage) - 1 + apartmentsList.length) % apartmentsList.length];
  const nextApartment = apartmentsList[(apartmentsList.findIndex((a: any) => a.id === currentPage) + 1) % apartmentsList.length];

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 antialiased selection:bg-blue-600 selection:text-white dark:bg-neutral-950 dark:text-neutral-100">
      {/* Top Header */}
      <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/95 backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-950/95">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6">
          <button onClick={() => navigateTo('home')} className="flex items-center gap-3 text-left">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white font-bold text-base shadow-sm">
              A
            </div>
            <div>
              <div className="font-extrabold text-sm tracking-tight text-neutral-900 dark:text-white leading-none">
                {siteData.propertyName}
              </div>
              <div className="text-[11px] font-medium text-neutral-500 dark:text-neutral-400">
                {siteData.akaName} · Direct Beachfront
              </div>
            </div>
          </button>

          <nav className="hidden items-center gap-2 md:flex text-xs font-semibold">
            <button
              onClick={() => navigateTo('home')}
              className={'inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 transition-colors ' + (currentPage === 'home' ? 'bg-neutral-100 font-bold text-neutral-900 dark:bg-neutral-800 dark:text-white' : 'text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white')}
            >
              <Home className="h-3.5 w-3.5" />
              <span>Building Views</span>
            </button>

            <button
              onClick={() => navigateTo('blue')}
              className={'inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 transition-colors ' + (currentPage === 'blue' ? 'bg-sky-50 font-bold text-sky-800 dark:bg-sky-950/50 dark:text-sky-300 border border-sky-300 dark:border-sky-800' : 'text-neutral-600 hover:text-sky-700 dark:text-neutral-400 dark:hover:text-sky-300')}
            >
              <span className="h-2 w-2 rounded-full bg-sky-500"></span>
              <span>Blue Apt</span>
            </button>

            <button
              onClick={() => navigateTo('red')}
              className={'inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 transition-colors ' + (currentPage === 'red' ? 'bg-rose-50 font-bold text-rose-800 dark:bg-rose-950/50 dark:text-rose-300 border border-rose-300 dark:border-rose-800' : 'text-neutral-600 hover:text-rose-700 dark:text-neutral-400 dark:hover:text-rose-300')}
            >
              <span className="h-2 w-2 rounded-full bg-rose-500"></span>
              <span>Red Apt</span>
            </button>

            <button
              onClick={() => navigateTo('green')}
              className={'inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 transition-colors ' + (currentPage === 'green' ? 'bg-emerald-50 font-bold text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800' : 'text-neutral-600 hover:text-emerald-700 dark:text-neutral-400 dark:hover:text-emerald-300')}
            >
              <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
              <span>Green Apt</span>
            </button>

            {currentPage === 'home' && (
              <>
                <a href="#specs" className="rounded-lg px-2.5 py-1.5 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">Specs</a>
                <a href="#media" className="rounded-lg px-2.5 py-1.5 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">Media</a>
              </>
            )}

            <a href="#inquire" className="rounded-lg px-2.5 py-1.5 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">Inquire</a>
          </nav>

          <a
            href="#inquire"
            className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-blue-700 transition-colors"
          >
            <span>Inquire Directly</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </header>

      {/* Main Switcher */}
      <main>
        {currentPage === 'home' ? (
          <>
            {/* Hero Section */}
            <section id="hero" className="relative border-b border-neutral-200 bg-white py-16 md:py-20 dark:border-neutral-800 dark:bg-neutral-950">
              <div className="mx-auto max-w-6xl px-6">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center">
                  <div className="lg:col-span-7">
                    <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-3 py-1 text-[11px] font-bold text-blue-800 dark:border-blue-900/60 dark:bg-blue-950/40 dark:text-blue-300">
                      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      <span>{siteData.listingStatus}</span>
                    </div>

                    <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl text-neutral-900 dark:text-white leading-[1.15]">
                      {siteData.heroHeadline}
                    </h1>

                    <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-neutral-600 dark:text-neutral-400">
                      <MapPin className="h-4 w-4 text-blue-600 shrink-0" />
                      <span>{siteData.address}, {siteData.barangay}, {siteData.municipality}, {siteData.province}, {siteData.country}</span>
                    </div>

                    <p className="mt-5 text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
                      {siteData.heroDescription}
                    </p>

                    <div className="mt-8 flex flex-wrap items-center gap-3">
                      <a
                        href="#views-gallery"
                        className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 px-5 py-3 text-sm font-bold text-white shadow-md hover:bg-neutral-800 transition-colors dark:bg-white dark:text-neutral-900"
                      >
                        <Camera className="h-4 w-4" />
                        <span>Browse Aldanmar Views</span>
                      </a>
                      <div className="flex items-center gap-2">
                        <button onClick={() => navigateTo('blue')} className="rounded-xl border border-sky-300 bg-sky-50 px-3 py-2.5 text-xs font-bold text-sky-800 hover:bg-sky-100 transition-colors">Blue Apt</button>
                        <button onClick={() => navigateTo('red')} className="rounded-xl border border-rose-300 bg-rose-50 px-3 py-2.5 text-xs font-bold text-rose-800 hover:bg-rose-100 transition-colors">Red Apt</button>
                        <button onClick={() => navigateTo('green')} className="rounded-xl border border-emerald-300 bg-emerald-50 px-3 py-2.5 text-xs font-bold text-emerald-800 hover:bg-emerald-100 transition-colors">Green Apt</button>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-5">
                    <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 shadow-xl dark:border-neutral-800 dark:bg-neutral-900">
                      <div className="relative aspect-4/3 w-full bg-neutral-800 cursor-pointer" onClick={() => setLightboxImg({ src: externalViews[0]?.image || 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80', title: 'Aldanmar Apartments (Casa Santana)', subtitle: 'Dulangan Beachfront Triplex' })}>
                        <img
                          src={externalViews[0]?.image || 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80'}
                          alt={siteData.propertyName}
                          className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                          <span className="rounded bg-black/60 px-2 py-0.5 font-mono text-[10px] tracking-wider uppercase backdrop-blur-xs">
                            Dulangan Beachfront
                          </span>
                          <h3 className="mt-1 text-lg font-bold">Casa Santana Villa Triplex</h3>
                          <p className="text-xs text-neutral-200">164 Dulangan Road · 3 Self-Contained Units</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* General External Images Gallery: Aldanmar Views */}
            <section id="views-gallery" className="border-b border-neutral-200 bg-white py-20 dark:border-neutral-800 dark:bg-neutral-950">
              <div className="mx-auto max-w-6xl px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/70 px-3 py-1 text-xs font-semibold text-blue-700 dark:border-blue-900/60 dark:bg-blue-950/40 dark:text-blue-300">
                      <Camera className="h-3.5 w-3.5" />
                      <span>General External Building Views</span>
                    </div>
                    <h2 className="mt-2 text-2xl font-extrabold sm:text-4xl text-neutral-900 dark:text-white">
                      Aldanmar Views: Facade, Beach & Grounds
                    </h2>
                    <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 max-w-2xl">
                      Explore building exteriors, beach waterline access on Dulangan Beach, sunset panoramas, and tropical grounds along 164 Dulangan Road.
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="flex items-center gap-1.5 rounded-lg bg-neutral-100 px-3 py-1.5 font-mono text-xs text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800">
                      <HardDrive className="h-3.5 w-3.5 text-blue-600" />
                      <span>{siteData.viewsLocalPath || 'G:\\My Drive\\Aldanmar Views'}</span>
                    </span>
                  </div>
                </div>

                {/* Filter Pills */}
                <div className="mt-8 flex flex-wrap gap-2 border-b border-neutral-200 pb-4 dark:border-neutral-800">
                  {[
                    { id: 'all', label: 'All Building Views' },
                    { id: 'exterior', label: 'Villa Facade & Verandas' },
                    { id: 'sunset', label: 'Sunset Panorama' },
                    { id: 'beach', label: 'Beachfront & Sand' },
                    { id: 'grounds', label: 'Tropical Grounds & Palms' },
                  ].map((cat: any) => (
                    <button
                      key={cat.id}
                      onClick={() => setViewsCategory(cat.id)}
                      className={'rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all ' + (viewsCategory === cat.id ? 'bg-neutral-900 text-white shadow-xs dark:bg-white dark:text-neutral-900' : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800')}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>

                {/* Grid */}
                <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredViews.map((item: any, idx: number) => (
                    <div
                      key={item.id || idx}
                      onClick={() => setLightboxImg({ src: item.image, title: item.title, subtitle: item.caption })}
                      className="group relative cursor-pointer overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 shadow-xs transition-all hover:-translate-y-0.5 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900"
                    >
                      <div className="aspect-16/10 w-full overflow-hidden bg-neutral-800">
                        <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity"></div>
                      <div className="absolute top-3 right-3 rounded-full bg-black/60 p-1.5 text-white opacity-0 transition-opacity group-hover:opacity-100">
                        <Maximize2 className="h-4 w-4" />
                      </div>
                      <div className="absolute bottom-3 left-4 right-4 text-white">
                        <span className="rounded bg-blue-600/90 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider">{item.category}</span>
                        <h3 className="mt-1.5 text-sm font-bold text-white leading-tight">{item.title}</h3>
                        <p className="mt-1 line-clamp-2 text-xs text-neutral-300">{item.caption}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* The 3 Apartments Showcase with Direct Page Buttons */}
            <section id="apartments" className="border-b border-neutral-200 bg-neutral-50/60 py-20 dark:border-neutral-800 dark:bg-neutral-900/30">
              <div className="mx-auto max-w-6xl px-6">
                <div>
                  <span className="text-xs font-bold tracking-widest uppercase text-blue-600 dark:text-blue-400">Accommodation Breakdown</span>
                  <h2 className="mt-1 text-2xl font-extrabold sm:text-4xl text-neutral-900 dark:text-white">
                    The 3 Apartments: Red, Green & Blue
                  </h2>
                  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 max-w-2xl">
                    Each apartment is fully furnished with its own private entrance, kitchen, bathroom, and dedicated gallery page.
                  </p>
                </div>

                <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
                  {apartmentsList.map((apt: any) => (
                    <div
                      key={apt.id}
                      className="flex flex-col justify-between overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900"
                    >
                      <div>
                        <div className="relative aspect-16/10 w-full overflow-hidden bg-neutral-800 cursor-pointer" onClick={() => navigateTo(apt.id)}>
                          <img src={apt.image} alt={apt.name} className="h-full w-full object-cover" />
                          <div className="absolute top-3 left-3">
                            <span className={'rounded-md border px-2.5 py-1 text-xs font-bold shadow-xs ' + (apt.id === 'blue' ? 'bg-sky-50 text-sky-800 border-sky-300' : apt.id === 'red' ? 'bg-rose-50 text-rose-800 border-rose-300' : 'bg-emerald-50 text-emerald-800 border-emerald-300')}>
                              {apt.name}
                            </span>
                          </div>
                          <div className="absolute bottom-2 right-2 rounded bg-black/70 px-2 py-0.5 text-[10px] font-mono text-white">
                            {apt.floorLevel}
                          </div>
                        </div>

                        <div className="p-6">
                          <h3 className="text-lg font-bold text-neutral-900 dark:text-white">{apt.name}</h3>
                          <p className="mt-1 text-xs font-medium text-neutral-500 dark:text-neutral-400">{apt.tagline}</p>

                          <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-semibold text-neutral-700 dark:text-neutral-300">
                            <span className="flex items-center gap-1 rounded bg-neutral-100 px-2 py-1 dark:bg-neutral-800">
                              <Bed className="h-3.5 w-3.5 text-blue-600" />
                              <span>{apt.bedrooms} Bed</span>
                            </span>
                            <span className="flex items-center gap-1 rounded bg-neutral-100 px-2 py-1 dark:bg-neutral-800">
                              <Bath className="h-3.5 w-3.5 text-blue-600" />
                              <span>{apt.bathrooms} Bath</span>
                            </span>
                            <span className="flex items-center gap-1 rounded bg-neutral-100 px-2 py-1 dark:bg-neutral-800">
                              <Users className="h-3.5 w-3.5 text-blue-600" />
                              <span>{apt.capacity}</span>
                            </span>
                          </div>

                          <p className="mt-4 text-xs leading-relaxed text-neutral-600 dark:text-neutral-300">
                            {apt.description}
                          </p>

                          <div className="mt-4 text-[11px] text-neutral-500 font-mono">
                            Folder: {apt.localDrivePath || ('G:\\My Drive\\Aldanmar ' + (apt.id.charAt(0).toUpperCase() + apt.id.slice(1)))}
                          </div>
                        </div>
                      </div>

                      <div className="p-6 pt-0">
                        <button
                          onClick={() => navigateTo(apt.id)}
                          className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-2.5 text-xs font-bold text-white shadow-xs hover:bg-blue-700 transition-colors"
                        >
                          <span>Open Dedicated {apt.name} Page</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Property Specs */}
            <section id="specs" className="border-b border-neutral-200 bg-white py-20 dark:border-neutral-800 dark:bg-neutral-950">
              <div className="mx-auto max-w-6xl px-6">
                <div className="text-center max-w-2xl mx-auto">
                  <span className="text-xs font-bold tracking-widest uppercase text-blue-600 dark:text-blue-400">Technical & Investment Summary</span>
                  <h2 className="mt-1 text-2xl font-extrabold sm:text-4xl text-neutral-900 dark:text-white">
                    Property Specifications & Asset Highlights
                  </h2>
                </div>

                <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
                  {(siteData.propertyFeatures || []).map((feat: any) => (
                    <div key={feat.id} className="rounded-2xl border border-neutral-200 bg-neutral-50/50 p-6 dark:border-neutral-800 dark:bg-neutral-900/50">
                      <span className="font-mono text-xs font-bold text-blue-600">{feat.number}.</span>
                      <h3 className="mt-2 text-base font-bold text-neutral-900 dark:text-white">{feat.title}</h3>
                      <p className="mt-2 text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">{feat.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Media Vault */}
            <section id="media" className="border-b border-neutral-200 bg-neutral-50/70 py-20 dark:border-neutral-800 dark:bg-neutral-900/40">
              <div className="mx-auto max-w-6xl px-6 text-center">
                <h2 className="text-2xl font-extrabold sm:text-4xl text-neutral-900 dark:text-white">Official Media Vault & Drive Dossiers</h2>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                  <a href={siteData.externalMedia?.googleDriveUrl || '#'} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-neutral-200 bg-white px-5 py-3 text-xs font-bold text-neutral-800 hover:border-blue-500 shadow-xs flex items-center gap-2 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200">
                    <FolderOpen className="h-4 w-4 text-blue-600" />
                    <span>Google Drive Documents</span>
                  </a>
                  <a href={siteData.externalMedia?.googlePhotosUrl || '#'} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-neutral-200 bg-white px-5 py-3 text-xs font-bold text-neutral-800 hover:border-blue-500 shadow-xs flex items-center gap-2 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200">
                    <Camera className="h-4 w-4 text-amber-600" />
                    <span>Google Photos Albums</span>
                  </a>
                  <a href={siteData.externalMedia?.googleMapsUrl || '#'} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-neutral-200 bg-white px-5 py-3 text-xs font-bold text-neutral-800 hover:border-blue-500 shadow-xs flex items-center gap-2 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200">
                    <MapPin className="h-4 w-4 text-emerald-600" />
                    <span>Google Maps GPS Pin</span>
                  </a>
                </div>
              </div>
            </section>
          </>
        ) : (
          /* Dedicated Apartment Page */
          <div className="py-12">
            <div className="mx-auto max-w-6xl px-6">
              {/* Breadcrumb & Navigation */}
              <div className="flex items-center justify-between border-b border-neutral-200 pb-4 dark:border-neutral-800">
                <button
                  onClick={() => navigateTo('home')}
                  className="inline-flex items-center gap-2 text-xs font-bold text-neutral-600 hover:text-blue-600 dark:text-neutral-400"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span>Back to Landing Page (Aldanmar Views)</span>
                </button>

                <div className="flex items-center gap-2">
                  <button onClick={() => navigateTo(prevApartment.id)} className="rounded-lg border border-neutral-200 px-3 py-1.5 text-xs font-semibold text-neutral-700 hover:bg-neutral-100 dark:border-neutral-800 dark:text-neutral-300">
                    {prevApartment.name.replace('The ', '')}
                  </button>
                  <button onClick={() => navigateTo(nextApartment.id)} className="rounded-lg border border-neutral-200 px-3 py-1.5 text-xs font-semibold text-neutral-700 hover:bg-neutral-100 dark:border-neutral-800 dark:text-neutral-300">
                    {nextApartment.name.replace('The ', '')}
                  </button>
                </div>
              </div>

              {/* Apartment Header */}
              <div className="mt-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                  <div className="flex items-center gap-2">
                    <span className={'rounded-md border px-3 py-1 text-xs font-bold ' + (activeApartment.id === 'blue' ? 'bg-sky-50 text-sky-800 border-sky-300' : activeApartment.id === 'red' ? 'bg-rose-50 text-rose-800 border-rose-300' : 'bg-emerald-50 text-emerald-800 border-emerald-300')}>
                      {activeApartment.name}
                    </span>
                    <span className="rounded-md bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400">{activeApartment.floorLevel}</span>
                  </div>
                  <h1 className="mt-3 text-3xl font-extrabold sm:text-5xl text-neutral-900 dark:text-white">{activeApartment.name}</h1>
                  <p className="mt-2 text-base text-neutral-600 dark:text-neutral-300">{activeApartment.tagline}</p>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 bg-neutral-100 px-3 py-2 rounded-xl border border-neutral-200 dark:bg-neutral-900 dark:border-neutral-800">
                  <HardDrive className="h-4 w-4 text-blue-600" />
                  <span>Folder: {activeApartment.localDrivePath || ('G:\\My Drive\\Aldanmar ' + (activeApartment.id.charAt(0).toUpperCase() + activeApartment.id.slice(1)))}</span>
                </div>
              </div>

              {/* Specs Pills */}
              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="rounded-xl border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
                  <span className="text-xs text-neutral-500">Bedrooms</span>
                  <div className="mt-1 text-lg font-bold">{activeApartment.bedrooms} Bedroom</div>
                </div>
                <div className="rounded-xl border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
                  <span className="text-xs text-neutral-500">Bathrooms</span>
                  <div className="mt-1 text-lg font-bold">{activeApartment.bathrooms} Bath</div>
                </div>
                <div className="rounded-xl border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
                  <span className="text-xs text-neutral-500">Capacity</span>
                  <div className="mt-1 text-lg font-bold">{activeApartment.capacity}</div>
                </div>
                <div className="rounded-xl border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
                  <span className="text-xs text-neutral-500">View</span>
                  <div className="mt-1 text-sm font-bold line-clamp-1">{activeApartment.view}</div>
                </div>
              </div>

              {/* Photo Gallery Grid */}
              <div className="mt-12">
                <h2 className="text-xl font-bold text-neutral-900 dark:text-white">{activeApartment.name} Photo Gallery</h2>
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {(activeApartment.galleryImages || [activeApartment.image]).map((img: string, idx: number) => (
                    <div
                      key={idx}
                      onClick={() => setLightboxImg({ src: img, title: activeApartment.name + ' - Photo ' + (idx + 1) })}
                      className="group relative cursor-pointer overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 shadow-xs dark:border-neutral-800 dark:bg-neutral-900"
                    >
                      <div className="aspect-16/10 w-full overflow-hidden bg-neutral-800">
                        <img src={img} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      </div>
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="rounded-full bg-white/90 p-2 text-neutral-900"><Maximize2 className="h-5 w-5" /></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Description & Features */}
              <div className="mt-12 rounded-2xl border border-neutral-200 bg-white p-8 dark:border-neutral-800 dark:bg-neutral-900">
                <h3 className="text-base font-bold text-neutral-900 dark:text-white">Unit Details & Specifications</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">{activeApartment.description}</p>
                <div className="mt-6 border-t border-neutral-100 pt-4 dark:border-neutral-800">
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-white">Key Amenities:</span>
                  <ul className="mt-2.5 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-700 dark:text-neutral-300">
                    {(activeApartment.keyFeatures || []).map((feat: string, i: number) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Acquisition Inquiry Form */}
        <section id="inquire" className="py-20 bg-neutral-50/80 dark:bg-neutral-900/60 border-t border-neutral-200 dark:border-neutral-800">
          <div className="mx-auto max-w-xl px-6">
            <div className="text-center">
              <span className="text-xs font-bold tracking-widest uppercase text-blue-600">Direct Contact</span>
              <h2 className="mt-1 text-2xl font-extrabold sm:text-3xl text-neutral-900 dark:text-white">
                Inquire on Aldanmar Apartments
              </h2>
              <p className="mt-2 text-xs text-neutral-600 dark:text-neutral-400">
                Direct inquiry to owner at <span className="font-bold">{siteData.ownerEmail}</span>
              </p>
            </div>

            <div className="mt-8 rounded-2xl border border-neutral-200 bg-white p-6 shadow-lg dark:border-neutral-800 dark:bg-neutral-900">
              {submitted ? (
                <div className="py-8 text-center">
                  <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-600" />
                  <h3 className="mt-3 text-lg font-bold">Inquiry Received</h3>
                  <p className="mt-2 text-xs text-neutral-600 dark:text-neutral-400">Thank you! Your inquiry has been logged. We will reply to {formState.email} promptly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="font-bold text-neutral-700 dark:text-neutral-300">Your Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Maria Santos"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="mt-1 w-full rounded-xl border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-neutral-900 focus:outline-hidden dark:border-neutral-700 dark:bg-neutral-800 dark:text-white"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-bold text-neutral-700 dark:text-neutral-300">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="your.email@example.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="mt-1 w-full rounded-xl border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-neutral-900 focus:outline-hidden dark:border-neutral-700 dark:bg-neutral-800 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="font-bold text-neutral-700 dark:text-neutral-300">Phone / WhatsApp</label>
                      <input
                        type="tel"
                        placeholder="+63 900 000 0000"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="mt-1 w-full rounded-xl border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-neutral-900 focus:outline-hidden dark:border-neutral-700 dark:bg-neutral-800 dark:text-white"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="font-bold text-neutral-700 dark:text-neutral-300">Message</label>
                    <textarea
                      rows={3}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder={'I am interested in acquiring or renting Aldanmar Apartments (Casa Santana)...'}
                      className="mt-1 w-full rounded-xl border border-neutral-300 bg-white p-3.5 text-sm text-neutral-900 focus:outline-hidden dark:border-neutral-700 dark:bg-neutral-800 dark:text-white"
                    />
                  </div>
                  <button type="submit" className="w-full rounded-xl bg-blue-600 py-3 text-sm font-bold text-white shadow-md hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                    <Send className="h-4 w-4" />
                    <span>Send Inquiry to Owner</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-md" onClick={() => setLightboxImg(null)}>
          <button onClick={() => setLightboxImg(null)} className="absolute top-5 right-5 z-50 rounded-full bg-white/10 p-2 text-white hover:bg-white/20">
            <X className="h-6 w-6" />
          </button>
          <div className="relative max-h-[85vh] max-w-5xl overflow-hidden rounded-2xl bg-neutral-950 flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img src={lightboxImg.src} alt={lightboxImg.title} className="max-h-[70vh] w-auto max-w-full object-contain" />
            <div className="w-full bg-neutral-900/90 p-4 text-center text-white border-t border-neutral-800">
              <h3 className="text-base font-bold">{lightboxImg.title}</h3>
              {lightboxImg.subtitle && <p className="mt-1 text-xs text-neutral-400">{lightboxImg.subtitle}</p>}
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-white py-12 dark:border-neutral-800 dark:bg-neutral-950">
        <div className="mx-auto max-w-6xl px-6 text-center text-xs text-neutral-500 dark:text-neutral-400 space-y-3">
          <div className="font-extrabold text-sm text-neutral-900 dark:text-white">
            {siteData.propertyName} ({siteData.akaName})
          </div>
          <p>{siteData.address}, {siteData.barangay}, {siteData.municipality}, {siteData.province}, {siteData.country}</p>
          <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-xs font-semibold text-neutral-600 dark:text-neutral-400">
            <a href={siteData.externalMedia?.googleDriveUrl || '#'} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">Google Drive</a>
            <a href={siteData.externalMedia?.googlePhotosUrl || '#'} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">Google Photos</a>
            <a href={siteData.externalMedia?.googleMapsUrl || '#'} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">Google Maps</a>
            <a href={siteData.externalMedia?.waybackMachineUrl || '#'} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">Wayback Machine</a>
          </div>
          <p className="pt-4 text-[11px] text-neutral-400">&copy; {new Date().getFullYear()} {siteData.propertyName}. Direct Owner Sale. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
