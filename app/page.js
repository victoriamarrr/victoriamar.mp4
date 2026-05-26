'use client'

export default function PortfolioWebsite() {
  const edicionBasica = [
    {
      titulo: '',
      video:
        'https://res.cloudinary.com/dqmmkhytj/video/upload/v1778867367/gaming_clip_yevt2k.mp4',
    },

    {
      titulo: '',
      video:
        'https://res.cloudinary.com/dqmmkhytj/video/upload/v1778872868/stream_clip_sikhms.mp4',
    },

    {
      titulo: '',
      video:
        'https://res.cloudinary.com/dqmmkhytj/video/upload/v1778867369/Podcast_clip_irpsys.mp4',
    },
  ]

  const edicionIntermedia = [
    {
      titulo: '',
      video:
        'https://res.cloudinary.com/dqmmkhytj/video/upload/v1779589312/anabelle_listo-copia_1_lsr1ns.mp4',
    },

    {
      titulo: '',
      video:
        'https://res.cloudinary.com/dqmmkhytj/video/upload/v1779588057/B%C3%81SICO_1_shnge5.mp4',
    },

    {
      titulo: '',
      video:
        'https://res.cloudinary.com/dqmmkhytj/video/upload/v1779588053/B%C3%A1sico_2_hia5y9.mp4',
    },
  ]

  return (
    <div className="bg-[#F2EDE3] text-[#121212] min-h-screen overflow-x-hidden">
      {/* Fondo */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#F2EDE3]/70 border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <h1 className="text-sm tracking-[0.35em] uppercase font-medium">
            victoriamar.mp4
          </h1>

          <nav className="hidden md:flex gap-10 text-sm tracking-wide">
            <a href="#portfolio" className="hover:text-[#2646C7] transition-colors">
              Portfolio
            </a>

            <a href="#packs" className="hover:text-[#2646C7] transition-colors">
              Packs
            </a>

            <a href="#sobre-mi" className="hover:text-[#2646C7] transition-colors">
              Sobre mí
            </a>

            <a href="#contacto" className="hover:text-[#2646C7] transition-colors">
              Contacto
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center px-6 pt-32 pb-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center w-full">
          <div>
            <p className="uppercase tracking-[0.4em] text-xs mb-6 text-[#2646C7]">
              Editora de Video
            </p>

            <h2 className="text-6xl md:text-8xl leading-[0.9] font-serif tracking-tight mb-8">
              Contenido editado para redes sociales.
            </h2>

            <p className="text-lg md:text-xl text-black/70 max-w-xl leading-relaxed mb-10">
              Edición para streamers, gaming, podcasts, YouTube y creadores de contenido.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#portfolio"
                className="bg-[#2646C7] text-white px-8 py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-lg inline-block"
              >
                Ver trabajos
              </a>

              <a
                href="#contacto"
                className="border border-black/10 px-8 py-4 rounded-full hover:bg-black hover:text-white transition-all duration-300 inline-block"
              >
                Contactarme
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl">
              <img
                src="https://res.cloudinary.com/dqmmkhytj/image/upload/v1779600472/image_24_zfc0ya.png"
                alt="Victoria Mar"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -bottom-10 -left-10 bg-[#C93333] text-white p-6 rounded-3xl shadow-xl max-w-xs">
              <p className="text-sm uppercase tracking-widest mb-2">
                Edición Dinámica
              </p>

              <p className="text-lg leading-snug">
                Cortes dinámicos, subtítulos y ritmo visual pensado para redes sociales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="px-6 py-32">
        <div className="max-w-7xl mx-auto">

          {/* EDICIÓN BÁSICA */}
          <div className="mb-40">
            <div className="mb-16">
              <p className="uppercase tracking-[0.3em] text-xs mb-4 text-[#2646C7]">
                Nivel 1
              </p>

              <h4 className="text-4xl md:text-6xl font-serif mb-6">
                Edición Básica
              </h4>

              <p className="text-lg text-black/70 max-w-3xl leading-relaxed">
                Incluye cortes, música, zooms simples, subtítulos básicos,
                transiciones simples y formato vertical.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {edicionBasica.map((item, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-[32px] bg-white shadow-xl"
                >
                  <div className="aspect-[9/16] overflow-hidden relative">
                    <video
                      src={item.video}
                      controls
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-cover"
                    />

                    <div className="absolute bottom-0 left-0 p-6 text-white pointer-events-none">
                      <h4 className="text-2xl font-serif leading-tight">
                        {item.titulo}
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* EDICIÓN INTERMEDIA */}
          <div>
            <div className="mb-16">
              <p className="uppercase tracking-[0.3em] text-xs mb-4 text-[#C93333]">
                Nivel 2
              </p>

              <h4 className="text-4xl md:text-6xl font-serif mb-6">
                Edición Intermedia
              </h4>

              <p className="text-lg text-black/70 max-w-3xl leading-relaxed">
                Incluye subtítulos dinámicos, zooms, efectos de sonido, imágenes y efectos visuales, cambios de ritmo, música sincronizada y color básico.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {edicionIntermedia.map((item, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-[32px] bg-white shadow-xl"
                >
                  <div className="aspect-[9/16] overflow-hidden relative">
                    <video
                      src={item.video}
                      controls
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-cover"
                    />

                    <div className="absolute bottom-0 left-0 p-6 text-white pointer-events-none">
                      <h4 className="text-2xl font-serif leading-tight">
                        {item.titulo}
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PACKS */}
      <section id="packs" className="px-6 py-32 bg-[#121212] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <p className="uppercase tracking-[0.3em] text-xs mb-4 text-[#F2A6C4]">
              Packs
            </p>

            <h3 className="text-5xl md:text-7xl font-serif leading-[0.95] max-w-4xl">
              Packs pensados para contenido constante en redes.
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Básico */}
            <div className="bg-white/5 border border-white/10 rounded-[32px] p-10 backdrop-blur-sm">
              <p className="uppercase tracking-[0.3em] text-xs mb-4 text-[#2646C7]">
                Básico
              </p>

              <h4 className="text-4xl font-serif mb-8">
                Edición Básica
              </h4>

              <div className="space-y-5 text-white/80 text-lg">
                <p>5 Videos: AR$ 27.000 / 23 USD</p>
                <p>10 Videos: AR$ 50.000 / 43 USD</p>
              </div>
            </div>

            {/* Intermedio */}
            <div className="bg-white/5 border border-white/10 rounded-[32px] p-10 backdrop-blur-sm">
              <p className="uppercase tracking-[0.3em] text-xs mb-4 text-[#C93333]">
                Intermedio
              </p>

              <h4 className="text-4xl font-serif mb-8">
                Edición Intermedia
              </h4>

              <div className="space-y-5 text-white/80 text-lg">
                <p>5 Videos: AR$ 47.000 / 36 USD</p>
                <p>10 Videos: AR$ 90.000 / 74 USD</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Mi */}
      <section id="sobre-mi" className="px-6 py-32">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <img
              src="https://res.cloudinary.com/dqmmkhytj/image/upload/v1779600472/image_24_zfc0ya.png"
              alt="Victoria Mar"
              className="rounded-[36px] shadow-2xl"
            />
          </div>

          <div>
            <p className="uppercase tracking-[0.3em] text-xs mb-4 text-[#2646C7]">
              Sobre mí
            </p>

            <h3 className="text-5xl md:text-7xl font-serif leading-[0.95] mb-10">
              Creando contenido visual para redes sociales.
            </h3>

            <p className="text-lg text-black/70 leading-relaxed mb-8">
              Soy Viki y me enfoco en crear edits para streamers,
              gaming, podcasts y creadores de contenido.
            </p>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="px-6 py-40 text-center">
        <div className="max-w-5xl mx-auto">
          <p className="uppercase tracking-[0.3em] text-xs mb-6 text-[#C93333]">
            Contacto
          </p>

          <h3 className="text-6xl md:text-8xl font-serif leading-[0.95] mb-10">
            Hagamos que tu contenido destaque.
          </h3>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://wa.me/5491131601555?text=Hola%20Viki%2C%20quiero%20consultar%20por%20edici%C3%B3n%20de%20videos."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#C93333] text-white px-10 py-5 rounded-full text-lg hover:scale-105 transition-all duration-300 shadow-xl inline-block"
            >
              Whatsapp
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=victoriamar.mp4@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-black/10 px-10 py-5 rounded-full text-lg hover:bg-black hover:text-white transition-all duration-300 inline-block"
            >
              Email
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}