import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger)

import IMG_FRONT from './botella-frontal.jpg'
import IMG_BACK from './botella-trasera.jpg'

function App() {
  const bottleRef = useRef(null)
  const heroRef = useRef(null)
  const splitLeft = useRef(null)
  const splitRight = useRef(null)

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true, syncTouch: true })
    let frame

    const raf = (time) => {
      lenis.raf(time * 1000)
      ScrollTrigger.update()
      frame = requestAnimationFrame(raf)
    }
    frame = requestAnimationFrame(raf)

    const ctx = gsap.context(() => {
      gsap.from('.hero-kicker', { y: 20, opacity: 0, duration: 1, ease: 'power3.out' })
      gsap.from('.hero-title span', { yPercent: 110, opacity: 0, duration: 1.35, stagger: 0.08, ease: 'power4.out', delay: 0.15 })

      gsap.to(bottleRef.current, {
        yPercent: -18, rotate: -2, scale: 1.05, ease: 'none',
        scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: true }
      })

      gsap.to('.hero-copy', {
        yPercent: -35, opacity: 0.15, ease: 'none',
        scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: true }
      })

      gsap.from('.story-line', {
        y: 80, opacity: 0, stagger: 0.18, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: '.story', start: 'top 65%' }
      })

      gsap.to(splitLeft.current, {
        xPercent: -95, rotate: -4, ease: 'none',
        scrollTrigger: { trigger: '.separation', start: 'top top', end: '+=100%', scrub: true, pin: true }
      })

      gsap.to(splitRight.current, {
        xPercent: 95, rotate: 4, ease: 'none',
        scrollTrigger: { trigger: '.separation', start: 'top top', end: '+=100%', scrub: true, pin: true }
      })

      gsap.from('.turn-line', {
        y: 80, opacity: 0, duration: 1.1, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: '.turn', start: 'top 62%' }
      })

      gsap.from('.equation-item', {
        y: 50, opacity: 0, stagger: 0.18, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: '.equation', start: 'top 70%' }
      })

      gsap.from('.product-image', {
        scale: 0.86, opacity: 0, rotate: 2, duration: 1.2, ease: 'power3.out',
        scrollTrigger: { trigger: '.product', start: 'top 65%' }
      })

      gsap.from('.origin-word', {
        yPercent: 100, opacity: 0, stagger: 0.08, duration: 1.1, ease: 'power4.out',
        scrollTrigger: { trigger: '.origin', start: 'top 70%' }
      })

      gsap.from('.final-title span', {
        yPercent: 100, opacity: 0, duration: 1.2, stagger: 0.1, ease: 'power4.out',
        scrollTrigger: { trigger: '.final', start: 'top 65%' }
      })
    })

    return () => {
      cancelAnimationFrame(frame)
      lenis.destroy()
      ctx.revert()
    }
  }, [])

  return (
    <main>
      <nav className="nav">
        <span>É O NO</span><span>ORIGEN 01</span><span>GLÓRIA</span>
      </nav>

      <section className="hero" ref={heroRef}>
        <div className="hero-copy">
          <p className="hero-kicker">ANÍS + MOSTO · TRASIERRA · EXTREMADURA</p>
          <h1 className="hero-title"><span>GLÓRIA</span></h1>
          <p className="hero-subtitle">Dicen que una vez fuimos uno.</p>
        </div>
        <div className="hero-bottle" ref={bottleRef}>
          <img src={IMG_FRONT} alt="Botella de Glória, vista frontal" />
        </div>
        <div className="scroll-note"><span>SCROLL</span><span className="scroll-line" /></div>
      </section>

      <section className="story section">
        <div className="section-label">01 / EL MITO</div>
        <div className="story-content">
          <p className="story-line huge">DICEN QUE UNA VEZ</p>
          <p className="story-line huge">FUIMOS UNO.</p>
          <div className="story-body">
            <p>Aristófanes contaba que, al principio de los tiempos, los humanos eran seres completos.</p>
            <p className="story-small">Dos cuerpos unidos.<br />Cuatro brazos.<br />Cuatro piernas.<br />Una fuerza extraordinaria.</p>
          </div>
        </div>
      </section>

      <section className="separation">
        <div className="split split-left" ref={splitLeft} style={{backgroundImage: `linear-gradient(rgba(74,41,28,.2), rgba(74,41,28,.2)), url("${IMG_FRONT}")`}}>
          <div className="split-inner"><span>UNA MITAD</span></div>
        </div>
        <div className="split split-right" ref={splitRight} style={{backgroundImage: `linear-gradient(rgba(74,41,28,.2), rgba(74,41,28,.2)), url("${IMG_BACK}")`}}>
          <div className="split-inner"><span>OTRA MITAD</span></div>
        </div>
        <div className="separation-center">
          <p>HASTA QUE LOS DIOSES</p>
          <h2>DECIDIERON<br />SEPARARLOS.</h2>
          <span>Y DESDE ENTONCES, CADA MITAD BUSCÓ AQUELLO QUE LE FALTABA.</span>
        </div>
      </section>

      <section className="turn section">
        <div className="section-label">02 / NUESTRA VERSIÓN</div>
        <div className="turn-content">
          <p className="turn-line">PERO NOSOTROS</p>
          <p className="turn-line accent">PREFERIMOS OTRA VERSIÓN.</p>
          <p className="turn-description">No siempre encontramos nuestra otra mitad para completarnos.</p>
          <p className="turn-final">A veces la encontramos para <em>crear algo nuevo.</em></p>
          <div className="principio">ESTO SOLO ES EL PRINCIPIO.</div>
        </div>
      </section>

      <section className="equation section">
        <div className="section-label">03 / DE UN DIBUJO A ALGO MÁS GRANDE</div>
        <div className="equation-grid">
          <div className="equation-item"><span>01</span><strong>ISMA</strong><small>UNA IDEA</small></div>
          <div className="equation-symbol equation-item">+</div>
          <div className="equation-item"><span>02</span><strong>MARCE</strong><small>OTRA MIRADA</small></div>
          <div className="equation-symbol equation-item">=</div>
          <div className="equation-item gloria-eq"><span>03</span><strong>GLORIA</strong><small>ALGO NUEVO</small></div>
        </div>
      </section>

      <section className="product section">
        <div className="product-copy">
          <div className="section-label">04 / EL PRODUCTO</div>
          <p className="product-kicker">GLÓRIA</p>
          <h2>ANÍS<br />CON MOSTO.</h2>
          <p className="product-description">Mezcla tradicional de anís y mosto de uva extremeña. Dulce, aromática y con carácter.</p>
          <div className="specs">
            <span><b>10%</b><small>VOL.</small></span>
            <span><b>250</b><small>ML</small></span>
            <span><b>FRÍO</b><small>SERVIR</small></span>
          </div>
        </div>
        <div className="product-visual"><img className="product-image" src={IMG_FRONT} alt="Glória" /></div>
      </section>

      <section className="origin">
        <div className="origin-bg" style={{backgroundImage: `linear-gradient(rgba(74,41,28,.35), rgba(74,41,28,.35)), url("${IMG_BACK}")`}} />
        <div className="origin-content">
          <div className="section-label">05 / EL ORIGEN</div>
          <p className="origin-word">TRASIERRA</p>
          <p className="origin-word">EXTREMADURA</p>
          <p className="origin-copy">Una bebida nacida del territorio, del mosto y del anís.</p>
          <div className="origin-details"><span>ANÍS + MOSTO</span><span>UVA EXTREMEÑA</span><span>ORIGEN 01</span></div>
        </div>
      </section>

      <section className="label-story section">
        <div className="section-label">06 / LA ETIQUETA</div>
        <div className="label-grid">
          <div className="label-card"><img src={IMG_FRONT} alt="Etiqueta frontal de Glória" /></div>
          <div className="label-text">
            <p>UNA HISTORIA</p>
            <h2>DIBUJADA<br />A MANO.</h2>
            <p>Una idea se convierte en una ilustración. La ilustración se convierte en una etiqueta. Y la etiqueta termina convirtiéndose en Gloria.</p>
          </div>
        </div>
      </section>

      <section className="final section">
        <div className="final-inner">
          <p className="section-label">07 / EL PRINCIPIO</p>
          <h2 className="final-title"><span>NO SE TRATA</span><span>DE ENCONTRAR</span><span>NUESTRA OTRA MITAD.</span></h2>
          <p className="final-message">Se trata de encontrarnos para crear algo nuevo.</p>
          <div className="final-brand">GLÓRIA</div>
          <div className="final-meta">É O NO · ORIGEN 01 · TRASIERRA · EXTREMADURA</div>
        </div>
      </section>
    </main>
  )
}

export default App
