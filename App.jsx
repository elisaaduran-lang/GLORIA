import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

import IMG_FRONT from './botella-frontal.jpg'
import IMG_BACK from './botella-trasera.jpg'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const heroRef = useRef(null)
  const splitLeft = useRef(null)
  const splitRight = useRef(null)

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    const lenis = new Lenis({
      duration: reduceMotion ? 0 : 1.05,
      smoothWheel: !reduceMotion,
      syncTouch: false,
      autoRaf: false,
    })

    const updateScroll = () => {
      ScrollTrigger.update()
    }

    const raf = (time) => {
      lenis.raf(time * 1000)
    }

    lenis.on('scroll', updateScroll)
    gsap.ticker.add(raf)

    gsap.ticker.lagSmoothing(0)

    const ctx = gsap.context(() => {
      if (reduceMotion) return

      /* =========================================
         HERO
      ========================================= */

      const heroIntro = gsap.timeline({
        defaults: {
          ease: 'power3.out',
        },
      })

      heroIntro
        .from('.hero-kicker', {
          y: 18,
          opacity: 0,
          duration: 0.8,
        })
        .from(
          '.hero-title span',
          {
            yPercent: 105,
            opacity: 0,
            duration: 1.05,
          },
          '-=0.45'
        )
        .from(
          '.hero-subtitle',
          {
            y: 18,
            opacity: 0,
            duration: 0.75,
          },
          '-=0.55'
        )

      /*
        El texto del Hero se desplaza ligeramente
        al comenzar el scroll.
      */

      gsap.to('.hero-copy', {
        yPercent: -22,
        opacity: 0.25,
        ease: 'none',
        force3D: true,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.7,
        },
      })

      /* =========================================
         HISTORIA
      ========================================= */

      gsap.from('.story-line', {
        y: 55,
        opacity: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: 'power3.out',
        force3D: true,
        scrollTrigger: {
          trigger: '.story',
          start: 'top 72%',
          once: true,
        },
      })

      gsap.from('.story-body', {
        y: 35,
        opacity: 0,
        duration: 0.8,
        delay: 0.15,
        ease: 'power3.out',
        force3D: true,
        scrollTrigger: {
          trigger: '.story-body',
          start: 'top 78%',
          once: true,
        },
      })

      /* =========================================
         SEPARACIÓN
      ========================================= */

      const separationTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: '.separation',
          start: 'top top',
          end: '+=90%',
          scrub: 0.65,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })

      separationTimeline
        .to(
          splitLeft.current,
          {
            xPercent: -88,
            rotate: -3,
            force3D: true,
            ease: 'none',
            duration: 1,
          },
          0
        )
        .to(
          splitRight.current,
          {
            xPercent: 88,
            rotate: 3,
            force3D: true,
            ease: 'none',
            duration: 1,
          },
          0
        )
        .to(
          '.separation-center',
          {
            scale: 0.94,
            opacity: 0.9,
            force3D: true,
            ease: 'none',
            duration: 1,
          },
          0
        )

      /* =========================================
         NUESTRA VERSIÓN
      ========================================= */

      gsap.from('.turn-line', {
        y: 55,
        opacity: 0,
        stagger: 0.1,
        duration: 0.85,
        ease: 'power3.out',
        force3D: true,
        scrollTrigger: {
          trigger: '.turn',
          start: 'top 68%',
          once: true,
        },
      })

      gsap.from('.turn-description, .turn-final', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        force3D: true,
        scrollTrigger: {
          trigger: '.turn-description',
          start: 'top 78%',
          once: true,
        },
      })

      /* =========================================
         ISMA + MARCE = GLÓRIA
      ========================================= */

      gsap.from('.equation-item', {
        y: 35,
        opacity: 0,
        stagger: 0.12,
        duration: 0.7,
        ease: 'power3.out',
        force3D: true,
        scrollTrigger: {
          trigger: '.equation',
          start: 'top 72%',
          once: true,
        },
      })

      /* =========================================
         PRODUCTO
      ========================================= */

      gsap.from('.product-copy', {
        y: 35,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        force3D: true,
        scrollTrigger: {
          trigger: '.product',
          start: 'top 72%',
          once: true,
        },
      })

      gsap.from('.product-image', {
        y: 45,
        opacity: 0,
        scale: 0.94,
        duration: 1,
        ease: 'power3.out',
        force3D: true,
        scrollTrigger: {
          trigger: '.product',
          start: 'top 68%',
          once: true,
        },
      })

      /* =========================================
         ORIGEN
      ========================================= */

      gsap.from('.origin-word', {
        yPercent: 70,
        opacity: 0,
        stagger: 0.08,
        duration: 0.9,
        ease: 'power3.out',
        force3D: true,
        scrollTrigger: {
          trigger: '.origin',
          start: 'top 72%',
          once: true,
        },
      })

      gsap.from('.origin-copy, .origin-details', {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.75,
        ease: 'power3.out',
        force3D: true,
        scrollTrigger: {
          trigger: '.origin-copy',
          start: 'top 80%',
          once: true,
        },
      })

      /* =========================================
         ETIQUETA
      ========================================= */

      gsap.from('.label-card', {
        y: 40,
        opacity: 0,
        scale: 0.96,
        duration: 0.9,
        ease: 'power3.out',
        force3D: true,
        scrollTrigger: {
          trigger: '.label-story',
          start: 'top 70%',
          once: true,
        },
      })

      gsap.from('.label-text', {
        y: 35,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        force3D: true,
        scrollTrigger: {
          trigger: '.label-text',
          start: 'top 75%',
          once: true,
        },
      })

      /* =========================================
         FINAL
      ========================================= */

      gsap.from('.final-title span', {
        yPercent: 80,
        opacity: 0,
        duration: 0.9,
        stagger: 0.08,
        ease: 'power4.out',
        force3D: true,
        scrollTrigger: {
          trigger: '.final',
          start: 'top 68%',
          once: true,
        },
      })

      gsap.from('.final-message, .final-brand, .final-meta', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        force3D: true,
        scrollTrigger: {
          trigger: '.final-message',
          start: 'top 82%',
          once: true,
        },
      })
    })

    const refresh = () => {
      ScrollTrigger.refresh()
    }

    window.addEventListener('load', refresh)

    const refreshTimer = window.setTimeout(refresh, 300)

    return () => {
      window.removeEventListener('load', refresh)
      window.clearTimeout(refreshTimer)

      gsap.ticker.remove(raf)

      lenis.off('scroll', updateScroll)
      lenis.destroy()

      ctx.revert()
    }
  }, [])

  return (
    <main>

      {/* =========================================
          NAV
      ========================================= */}

      <nav className="nav">
        <span>É O NO</span>
        <span>ORIGEN 01</span>
        <span>GLÓRIA</span>
      </nav>


      {/* =========================================
          HERO
      ========================================= */}

      <section className="hero" ref={heroRef}>

        <div className="hero-copy">

          <p className="hero-kicker">
            ANÍS + MOSTO · TRASIERRA · EXTREMADURA
          </p>

          <h1 className="hero-title">
            <span>GLÓRIA</span>
          </h1>

          <p className="hero-subtitle">
            Dicen que una vez fuimos uno.
          </p>

        </div>

        <div className="scroll-note">
          <span>SCROLL</span>
          <span className="scroll-line" />
        </div>

      </section>


      {/* =========================================
          HISTORIA
      ========================================= */}

      <section className="story section">

        <div className="section-label">
          01 / EL MITO
        </div>

        <div className="story-content">

          <p className="story-line huge">
            DICEN QUE UNA VEZ
          </p>

          <p className="story-line huge">
            FUIMOS UNO.
          </p>

          <div className="story-body">

            <p>
              Aristófanes contaba que, al principio
              de los tiempos, los humanos eran
              seres completos.
            </p>

            <p className="story-small">
              Dos cuerpos unidos.
              <br />
              Cuatro brazos.
              <br />
              Cuatro piernas.
              <br />
              Una fuerza extraordinaria.
            </p>

          </div>

        </div>

      </section>


      {/* =========================================
          SEPARACIÓN
      ========================================= */}

      <section className="separation">

        <div
          className="split split-left"
          ref={splitLeft}
          style={{
            backgroundImage:
              `linear-gradient(rgba(74,41,28,.2), rgba(74,41,28,.2)), url("${IMG_FRONT}")`,
          }}
        >
          <div className="split-inner">
            <span>UNA MITAD</span>
          </div>
        </div>

        <div
          className="split split-right"
          ref={splitRight}
          style={{
            backgroundImage:
              `linear-gradient(rgba(74,41,28,.2), rgba(74,41,28,.2)), url("${IMG_BACK}")`,
          }}
        >
          <div className="split-inner">
            <span>OTRA MITAD</span>
          </div>
        </div>

        <div className="separation-center">

          <p>
            HASTA QUE LOS DIOSES
          </p>

          <h2>
            DECIDIERON
            <br />
            SEPARARLOS.
          </h2>

          <span>
            Y DESDE ENTONCES, CADA MITAD
            BUSCÓ AQUELLO QUE LE FALTABA.
          </span>

        </div>

      </section>


      {/* =========================================
          NUESTRA VERSIÓN
      ========================================= */}

      <section className="turn section">

        <div className="section-label">
          02 / NUESTRA VERSIÓN
        </div>

        <div className="turn-content">

          <p className="turn-line">
            PERO NOSOTROS
          </p>

          <p className="turn-line accent">
            PREFERIMOS OTRA VERSIÓN.
          </p>

          <p className="turn-description">
            No siempre encontramos nuestra otra
            mitad para completarnos.
          </p>

          <p className="turn-final">
            A veces la encontramos para{' '}
            <em>crear algo nuevo.</em>
          </p>

          <div className="principio">
            ESTO SOLO ES EL PRINCIPIO.
          </div>

        </div>

      </section>


      {/* =========================================
          ISMA + MARCE
      ========================================= */}

      <section className="equation section">

        <div className="section-label">
          03 / DE UN DIBUJO A ALGO MÁS GRANDE
        </div>

        <div className="equation-grid">

          <div className="equation-item">

            <span>01</span>

            <strong>
              ISMA
            </strong>

            <small>
              UNA IDEA
            </small>

          </div>

          <div className="equation-symbol equation-item">
            +
          </div>

          <div className="equation-item">

            <span>02</span>

            <strong>
              MARCE
            </strong>

            <small>
              OTRA MIRADA
            </small>

          </div>

          <div className="equation-symbol equation-item">
            =
          </div>

          <div className="equation-item gloria-eq">

            <span>03</span>

            <strong>
              GLORIA
            </strong>

            <small>
              ALGO NUEVO
            </small>

          </div>

        </div>

      </section>


      {/* =========================================
          PRODUCTO
      ========================================= */}

      <section className="product section">

        <div className="product-copy">

          <div className="section-label">
            04 / EL PRODUCTO
          </div>

          <p className="product-kicker">
            GLÓRIA
          </p>

          <h2>
            ANÍS
            <br />
            CON MOSTO.
          </h2>

          <p className="product-description">
            Mezcla tradicional de anís y mosto
            de uva extremeña. Dulce, aromática
            y con carácter.
          </p>

          <div className="specs">

            <span>
              <b>10%</b>
              <small>VOL.</small>
            </span>

            <span>
              <b>250</b>
              <small>ML</small>
            </span>

            <span>
              <b>FRÍO</b>
              <small>SERVIR</small>
            </span>

          </div>

        </div>

        <div className="product-visual">

          <img
            className="product-image"
            src={IMG_FRONT}
            alt="Glória"
            loading="lazy"
            decoding="async"
          />

        </div>

      </section>


      {/* =========================================
          ORIGEN
      ========================================= */}

      <section className="origin">

        <div
          className="origin-bg"
          style={{
            backgroundImage:
              `linear-gradient(rgba(74,41,28,.35), rgba(74,41,28,.35)), url("${IMG_BACK}")`,
          }}
        />

        <div className="origin-content">

          <div className="section-label">
            05 / EL ORIGEN
          </div>

          <p className="origin-word">
            TRASIERRA
          </p>

          <p className="origin-word">
            EXTREMADURA
          </p>

          <p className="origin-copy">
            Una bebida nacida del territorio,
            del mosto y del anís.
          </p>

          <div className="origin-details">

            <span>
              ANÍS + MOSTO
            </span>

            <span>
              UVA EXTREMEÑA
            </span>

            <span>
              ORIGEN 01
            </span>

          </div>

        </div>

      </section>


      {/* =========================================
          ETIQUETA
      ========================================= */}

      <section className="label-story section">

        <div className="section-label">
          06 / LA ETIQUETA
        </div>

        <div className="label-grid">

          <div className="label-card">

            <img
              src={IMG_FRONT}
              alt="Etiqueta frontal de Glória"
              loading="lazy"
              decoding="async"
            />

          </div>

          <div className="label-text">

            <p>
              UNA HISTORIA
            </p>

            <h2>
              DIBUJADA
              <br />
              A MANO.
            </h2>

            <p>
              Una idea se convierte en una
              ilustración. La ilustración se
              convierte en una etiqueta.
              Y la etiqueta termina
              convirtiéndose en Gloria.
            </p>

          </div>

        </div>

      </section>


      {/* =========================================
          FINAL
      ========================================= */}

      <section className="final section">

        <div className="final-inner">

          <p className="section-label">
            07 / EL PRINCIPIO
          </p>

          <h2 className="final-title">

            <span>
              NO SE TRATA
            </span>

            <span>
              DE ENCONTRAR
            </span>

            <span>
              NUESTRA OTRA MITAD.
            </span>

          </h2>

          <p className="final-message">
            Se trata de encontrarnos para crear
            algo nuevo.
          </p>

          <div className="final-brand">
            GLÓRIA
          </div>

          <div className="final-meta">
            É O NO · ORIGEN 01 · TRASIERRA · EXTREMADURA
          </div>

        </div>

      </section>

    </main>
  )
}

export default App
