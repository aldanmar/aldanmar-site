import React, { useState } from 'react';
import {
  MapPin,
  Compass,
  CheckCircle2,
  ExternalLink,
  Mail,
  Phone,
  ArrowRight,
  ShieldCheck,
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
} from 'lucide-react';
import siteData from './siteConfig.json';

export default function App() {
  const [activeTab, setActiveTab] = useState<'all' | 'blue' | 'red' | 'green'>('all');
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.name && formState.email) {
      setSubmitted(true);
    }
  };

  const apartmentsList = siteData?.apartments || [];
  const filteredApartments =
    activeTab === 'all'
      ? apartmentsList
      : apartmentsList.filter((apt: any) => apt.id === activeTab);

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 antialiased selection:bg-blue-600 selection:text-white dark:bg-neutral-950 dark:text-neutral-100">
      {/* Top Header */}
      <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/95 backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-950/95">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6">
          <a href="#hero" className="flex items-center gap-3">
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
          </a>

          <nav className="hidden items-center gap-6 md:flex text-xs font-semibold text-neutral-600 dark:text-neutral-300">
            <a href="#apartments" className="hover:text-blue-600 dark:hover:text-blue-400">The 3 Apartments</a>
            <a href="#specs" className="hover:text-blue-600 dark:hover:text-blue-400">Property Details</a>
            <a href="#media" className="hover:text-blue-600 dark:hover:text-blue-400">Media Vault</a>
            <a href="#location" className="hover:text-blue-600 dark:hover:text-blue-400">Location</a>
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

      {/* Hero Section */}
      <section id="hero" className="relative border-b border-neutral-200 bg-white py-16 md:py-24 dark:border-neutral-800 dark:bg-neutral-950">
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
                  href="#apartments"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-md hover:bg-blue-700 transition-colors"
                >
                  <Waves className="h-4 w-4" />
                  <span>View Red, Green & Blue Suites</span>
                </a>
                <a
                  href="#media"
                  className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 bg-white px-5 py-3 text-sm font-bold text-neutral-800 hover:bg-neutral-100 transition-colors dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200"
                >
                  <FolderOpen className="h-4 w-4 text-blue-600" />
                  <span>Media Dossier & Maps</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 shadow-xl dark:border-neutral-800 dark:bg-neutral-900">
                <div className="relative aspect-4/3 w-full bg-neutral-800">
                  <img
                    src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
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

                <div className="p-5 space-y-3 text-xs">
                  <div className="flex items-center justify-between border-b border-neutral-200 pb-2 dark:border-neutral-800">
                    <span className="text-neutral-500 dark:text-neutral-400">Total Units:</span>
                    <span className="font-bold text-neutral-900 dark:text-white">3 Distinct Apartments</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-neutral-200 pb-2 dark:border-neutral-800">
                    <span className="text-neutral-500 dark:text-neutral-400">Unit Colorways:</span>
                    <span className="font-bold text-neutral-900 dark:text-white">Blue (Ocean), Red (Sunset), Green (Garden)</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-neutral-200 pb-2 dark:border-neutral-800">
                    <span className="text-neutral-500 dark:text-neutral-400">Access:</span>
                    <span className="font-bold text-neutral-900 dark:text-white">Direct Beach Frontage + Road Access</span>
                  </div>
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-neutral-500 dark:text-neutral-400">Listing:</span>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400">Direct From Owner</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 3 Apartments Showcase */}
      <section id="apartments" className="border-b border-neutral-200 bg-neutral-50/60 py-20 dark:border-neutral-800 dark:bg-neutral-900/30">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-blue-600 dark:text-blue-400">
                Accommodation Breakdown
              </span>
              <h2 className="mt-1 text-2xl font-extrabold sm:text-4xl text-neutral-900 dark:text-white">
                The 3 Apartments: Red, Green & Blue
              </h2>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 max-w-2xl">
                Each apartment is fully furnished, separately metered, and configured with its own private entrance, kitchen, and bathroom.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-1.5 rounded-lg border border-neutral-200 bg-white p-1 dark:border-neutral-800 dark:bg-neutral-900 self-start">
              {(['all', 'blue', 'red', 'green'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={
                    'rounded-md px-3 py-1.5 text-xs font-bold capitalize transition-colors ' +
                    (activeTab === tab
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white')
                  }
                >
                  {tab === 'all' ? 'All Units' : tab + ' Apt'}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {filteredApartments.map((apt: any) => {
              const borderAccent =
                apt.id === 'blue'
                  ? 'border-sky-300 dark:border-sky-800'
                  : apt.id === 'red'
                  ? 'border-rose-300 dark:border-rose-800'
                  : 'border-emerald-300 dark:border-emerald-800';

              const headerBg =
                apt.id === 'blue'
                  ? 'bg-sky-50 dark:bg-sky-950/40 text-sky-800 dark:text-sky-300'
                  : apt.id === 'red'
                  ? 'bg-rose-50 dark:bg-rose-950/40 text-rose-800 dark:text-rose-300'
                  : 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300';

              const fallbackImg =
                apt.id === 'blue'
                  ? 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80'
                  : apt.id === 'red'
                  ? 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80'
                  : 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80';

              return (
                <div
                  key={apt.id}
                  className={'flex flex-col justify-between overflow-hidden rounded-2xl border bg-white shadow-sm transition-all hover:shadow-md dark:bg-neutral-900 ' + borderAccent}
                >
                  <div>
                    {/* Apartment Image */}
                    <div className="relative aspect-16/10 w-full overflow-hidden bg-neutral-800">
                      <img
                        src={fallbackImg}
                        alt={apt.name}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute top-3 left-3">
                        <span className={'rounded-md border px-2.5 py-1 text-xs font-bold shadow-xs ' + headerBg}>
                          {apt.name}
                        </span>
                      </div>
                      <div className="absolute bottom-2 right-2 rounded bg-black/70 px-2 py-0.5 text-[10px] font-mono text-white">
                        {apt.floorLevel}
                      </div>
                    </div>

                    {/* Details */}
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-neutral-900 dark:text-white">{apt.name}</h3>
                      <p className="mt-1 text-xs font-medium text-neutral-500 dark:text-neutral-400">{apt.tagline}</p>

                      {/* Specs pills */}
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

                      {/* Key features */}
                      <div className="mt-5 border-t border-neutral-100 pt-4 dark:border-neutral-800">
                        <span className="text-[11px] font-bold text-neutral-900 dark:text-white uppercase tracking-wider">
                          Key Amenities & Design
                        </span>
                        <ul className="mt-2 space-y-1.5 text-xs text-neutral-600 dark:text-neutral-300">
                          {apt.keyFeatures.map((feat: string, idx: number) => (
                            <li key={idx} className="flex items-start gap-2">
                              <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Historical Archive note */}
                      <div className="mt-4 rounded-lg bg-neutral-50 p-3 text-[11px] text-neutral-600 dark:bg-neutral-950 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-800">
                        <div className="flex items-center gap-1.5 font-bold text-neutral-900 dark:text-white">
                          <History className="h-3.5 w-3.5 text-blue-600" />
                          <span>Archival Heritage</span>
                        </div>
                        <p className="mt-1 leading-snug">{apt.historicalHighlights}</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <a
                      href="#inquire"
                      className="block w-full rounded-xl border border-neutral-300 py-2.5 text-center text-xs font-bold text-neutral-800 hover:bg-neutral-100 transition-colors dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800"
                    >
                      Inquire on {apt.name}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Property Details & Infrastructure */}
      <section id="specs" className="border-b border-neutral-200 bg-white py-20 dark:border-neutral-800 dark:bg-neutral-950">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold tracking-widest uppercase text-blue-600 dark:text-blue-400">
              Technical & Investment Summary
            </span>
            <h2 className="mt-1 text-2xl font-extrabold sm:text-4xl text-neutral-900 dark:text-white">
              Property Specifications & Asset Highlights
            </h2>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              Built with durable reinforced coastal construction, independent utility metering, and direct frontage on Dulangan Bay.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {(siteData.propertyFeatures || []).map((feat: any) => (
              <div
                key={feat.id}
                className="rounded-2xl border border-neutral-200 bg-neutral-50/50 p-6 dark:border-neutral-800 dark:bg-neutral-900/50"
              >
                <span className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400">{feat.number}.</span>
                <h3 className="mt-2 text-base font-bold text-neutral-900 dark:text-white">{feat.title}</h3>
                <p className="mt-2 text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">{feat.description}</p>
                <ul className="mt-4 space-y-1.5 border-t border-neutral-200/60 pt-3 text-xs text-neutral-700 dark:border-neutral-800 dark:text-neutral-300">
                  {feat.highlights.map((item: string, idx: number) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Official Media Vault & Archive Links */}
      <section id="media" className="border-b border-neutral-200 bg-neutral-50/70 py-20 dark:border-neutral-800 dark:bg-neutral-900/40">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold tracking-widest uppercase text-blue-600 dark:text-blue-400">
              Verification & Media Assets
            </span>
            <h2 className="mt-1 text-2xl font-extrabold sm:text-4xl text-neutral-900 dark:text-white">
              Official Media Vault & Historical Archives
            </h2>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              Direct access to Google Drive title dossiers, Google Photos high-resolution albums, Google Maps GPS coordinates, and historical Wayback Machine records.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Google Drive */}
            <a
              href={siteData.externalMedia.googleDriveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-6 shadow-xs hover:border-blue-500 hover:shadow-md transition-all dark:border-neutral-800 dark:bg-neutral-900"
            >
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400">
                  <FolderOpen className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-bold text-neutral-900 dark:text-white">Google Drive Dossier</h3>
                <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">
                  Access title documentation, property surveys, boundary maps, and architectural layout files.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400">
                <span>Open Google Drive</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </div>
            </a>

            {/* Google Photos */}
            <a
              href={siteData.externalMedia.googlePhotosUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-6 shadow-xs hover:border-blue-500 hover:shadow-md transition-all dark:border-neutral-800 dark:bg-neutral-900"
            >
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600 dark:bg-amber-950/60 dark:text-amber-400">
                  <Camera className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-bold text-neutral-900 dark:text-white">Google Photos Album</h3>
                <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">
                  Browse original high-res photo galleries of the Red, Green, and Blue apartments and Dulangan beach.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-1.5 text-xs font-bold text-amber-600 dark:text-amber-400">
                <span>View Photos</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </div>
            </a>

            {/* Google Maps */}
            <a
              href={siteData.externalMedia.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-6 shadow-xs hover:border-blue-500 hover:shadow-md transition-all dark:border-neutral-800 dark:bg-neutral-900"
            >
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400">
                  <MapPin className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-bold text-neutral-900 dark:text-white">Google Maps Location</h3>
                <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">
                  Pinpoint 164 Dulangan Road and verify proximity to Puerto Galera harbor, dive sites, and town center.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                <span>Open in Maps</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </div>
            </a>

            {/* Wayback Machine */}
            <a
              href={siteData.externalMedia.waybackMachineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-6 shadow-xs hover:border-blue-500 hover:shadow-md transition-all dark:border-neutral-800 dark:bg-neutral-900"
            >
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-600 dark:bg-purple-950/60 dark:text-purple-400">
                  <History className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-bold text-neutral-900 dark:text-white">Wayback Machine Archives</h3>
                <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">
                  Internet Archive historical records showing continuous rental operations, guest reviews, and legacy.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-1.5 text-xs font-bold text-purple-600 dark:text-purple-400">
                <span>View Web Archive</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="border-b border-neutral-200 bg-white py-20 dark:border-neutral-800 dark:bg-neutral-950">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs font-bold tracking-widest uppercase text-blue-600 dark:text-blue-400">
                Geographic Setting
              </span>
              <h2 className="mt-1 text-2xl font-extrabold sm:text-4xl text-neutral-900 dark:text-white">
                164 Dulangan Road, Puerto Galera
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                Nestled on the tranquil shores of Dulangan Beach in Puerto Galera, Oriental Mindoro. Recognized as a UNESCO Biosphere Reserve, Puerto Galera is internationally renowned for pristine diving, lush tropical mountain backdrops, and calm protected bays.
              </p>

              <div className="mt-6 space-y-3 text-xs">
                <div className="flex items-start gap-3 rounded-xl border border-neutral-200 bg-neutral-50 p-3.5 dark:border-neutral-800 dark:bg-neutral-900">
                  <Compass className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-neutral-900 dark:text-white">Coordinates:</span>
                    <p className="text-neutral-600 dark:text-neutral-400">{siteData.externalMedia.coordinates}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-neutral-200 bg-neutral-50 p-3.5 dark:border-neutral-800 dark:bg-neutral-900">
                  <MapPin className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-neutral-900 dark:text-white">Accessibility:</span>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      Direct car and van access via Dulangan Road, 15 minutes to Muelle Pier and Sabang ferry connections to Batangas.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 p-6 shadow-md dark:border-neutral-800 dark:bg-neutral-900">
                <h3 className="text-base font-bold text-neutral-900 dark:text-white">Neighborhood Highlights</h3>
                <ul className="mt-4 space-y-3 text-xs text-neutral-600 dark:text-neutral-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Direct frontage onto peaceful, uncrowded Dulangan Beach</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Minutes to world-class coral reefs and scuba diving centers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Reliable island electricity with high-speed fiber internet availability</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Close to local seafood markets, international dining, and yacht clubs</span>
                  </li>
                </ul>

                <div className="mt-6 border-t border-neutral-200 pt-4 dark:border-neutral-800">
                  <a
                    href={siteData.externalMedia.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 px-4 py-2.5 text-xs font-bold text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900"
                  >
                    <span>View Exact Satellite Location</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="inquire" className="py-20 bg-neutral-50/80 dark:bg-neutral-900/60">
        <div className="mx-auto max-w-xl px-6">
          <div className="text-center">
            <span className="text-xs font-bold tracking-widest uppercase text-blue-600 dark:text-blue-400">
              Direct Contact
            </span>
            <h2 className="mt-1 text-2xl font-extrabold sm:text-3xl text-neutral-900 dark:text-white">
              Inquire on Aldanmar Apartments
            </h2>
            <p className="mt-2 text-xs text-neutral-600 dark:text-neutral-400">
              Send an inquiry directly to the owner at <span className="font-bold text-neutral-900 dark:text-white">{siteData.ownerEmail}</span>
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-neutral-200 bg-white p-6 shadow-lg dark:border-neutral-800 dark:bg-neutral-900">
            {submitted ? (
              <div className="py-8 text-center">
                <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-600" />
                <h3 className="mt-3 text-lg font-bold text-neutral-900 dark:text-white">Inquiry Received</h3>
                <p className="mt-2 text-xs text-neutral-600 dark:text-neutral-400">
                  Thank you! Your message regarding Aldanmar Apartments (Casa Santana) has been logged. We will respond directly to {formState.email}.
                </p>
                <div className="mt-6">
                  <a
                    href={'mailto:' + siteData.ownerEmail + '?subject=Inquiry: Aldanmar Apartments (Casa Santana)'}
                    className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-bold text-white hover:bg-blue-700"
                  >
                    <Mail className="h-4 w-4" />
                    <span>Send Follow-Up via Email</span>
                  </a>
                </div>
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
                    className="mt-1 w-full rounded-xl border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-neutral-900 focus:border-blue-600 focus:outline-hidden dark:border-neutral-700 dark:bg-neutral-800 dark:text-white"
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
                      className="mt-1 w-full rounded-xl border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-neutral-900 focus:border-blue-600 focus:outline-hidden dark:border-neutral-700 dark:bg-neutral-800 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-neutral-700 dark:text-neutral-300">Phone / WhatsApp</label>
                    <input
                      type="tel"
                      placeholder="+63 900 000 0000"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="mt-1 w-full rounded-xl border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-neutral-900 focus:border-blue-600 focus:outline-hidden dark:border-neutral-700 dark:bg-neutral-800 dark:text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-bold text-neutral-700 dark:text-neutral-300">Message / Inquiry Details</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="I am interested in acquiring Aldanmar Apartments (Casa Santana). Please provide title dossiers, floor layouts, and viewing availability."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="mt-1 w-full rounded-xl border border-neutral-300 bg-white p-3.5 text-sm text-neutral-900 focus:border-blue-600 focus:outline-hidden dark:border-neutral-700 dark:bg-neutral-800 dark:text-white"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-blue-600 py-3 text-sm font-bold text-white shadow-md hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="h-4 w-4" />
                  <span>Submit Inquiry to Owner</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-white py-12 dark:border-neutral-800 dark:bg-neutral-950">
        <div className="mx-auto max-w-6xl px-6 text-center text-xs text-neutral-500 dark:text-neutral-400 space-y-3">
          <div className="font-extrabold text-sm text-neutral-900 dark:text-white">
            {siteData.propertyName} ({siteData.akaName})
          </div>
          <p>
            {siteData.address}, {siteData.barangay}, {siteData.municipality}, {siteData.province}, {siteData.country}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-xs font-semibold text-neutral-600 dark:text-neutral-400">
            <a href={siteData.externalMedia.googleDriveUrl} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">Google Drive</a>
            <a href={siteData.externalMedia.googlePhotosUrl} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">Google Photos</a>
            <a href={siteData.externalMedia.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">Google Maps</a>
            <a href={siteData.externalMedia.waybackMachineUrl} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">Wayback Machine</a>
          </div>
          <p className="pt-4 text-[11px] text-neutral-400">
            &copy; {new Date().getFullYear()} {siteData.propertyName}. Direct Owner Sale. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
