import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import {
  Brush,
  Layers,
  Sparkles,
  Shield,
  ArrowRight,
  Phone,
  MessageCircle,
  Star,
  CheckCircle2,
  Clock,
  Award,
  PaintBucket,
} from "lucide-react";
import { PaintRevealIntro } from "@/components/PaintRevealIntro";
import heroImg from "@/assets/hero-interior.jpg";
import rollerImg from "@/assets/paint-roller.jpg";
import beforeAfter from "@/assets/before-after-1.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gabriel Pinturas — Acabamento Premium em Pintura Residencial e Comercial" },
      {
        name: "description",
        content:
          "Pintura residencial e comercial de alto padrão. Massa corrida, textura e seladora com acabamento impecável. Solicite seu orçamento.",
      },
      { property: "og:title", content: "Gabriel Pinturas — Acabamento Premium" },
      {
        property: "og:description",
        content: "Transformamos ambientes com pintura de alto padrão. Orçamento rápido pelo WhatsApp.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,600;12..96,700;12..96,800&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

const WHATSAPP = "https://wa.me/5500000000000?text=Ol%C3%A1%20Gabriel%2C%20gostaria%20de%20um%20or%C3%A7amento";

function Index() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <PaintRevealIntro onDone={() => setIntroDone(true)} />
      <Nav />
      <Hero ready={introDone} />
      <Marquee />
      <Services />
      <BeforeAfter />
      <Differentials />
      <Gallery />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 2.2, duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-glow">
            <PaintBucket className="w-5 h-5 text-primary-foreground" strokeWidth={2.5} />
          </div>
          <span className="font-display font-bold text-lg tracking-tight">
            Gabriel<span className="text-gradient-gold">Pinturas</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#servicos" className="hover:text-foreground transition">Serviços</a>
          <a href="#galeria" className="hover:text-foreground transition">Galeria</a>
          <a href="#diferenciais" className="hover:text-foreground transition">Diferenciais</a>
          <a href="#depoimentos" className="hover:text-foreground transition">Depoimentos</a>
        </nav>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noreferrer"
          className="hidden sm:inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:opacity-90 transition"
        >
          <MessageCircle className="w-4 h-4" /> WhatsApp
        </a>
      </div>
    </motion.header>
  );
}

function Hero({ ready }: { ready: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} id="top" className="relative min-h-screen flex items-end pb-20 pt-32 px-6">
      {/* Background image */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Interior elegante pintado por Gabriel Pinturas"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />
      </motion.div>

      <div className="mx-auto max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Pintura premium · São Paulo
          </div>

          <h1 className="font-display text-[clamp(3rem,9vw,8rem)] leading-[0.92] tracking-tighter font-bold">
            Acabamento
            <br />
            <span className="text-gradient-gold italic font-light">impecável.</span>
            <br />
            Confiança real.
          </h1>

          <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Pintura residencial e comercial com padrão de obra fina. Massa corrida, textura e seladora executadas por uma equipe que respeita prazo, casa e detalhes.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#orcamento"
              className="group relative inline-flex items-center gap-3 rounded-full px-7 py-4 font-medium text-primary-foreground overflow-hidden shadow-glow"
              style={{ background: "var(--gradient-gold)" }}
            >
              <span className="relative z-10">Solicitar Orçamento</span>
              <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition" />
              <div className="absolute inset-0 shimmer opacity-50" />
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-full glass px-7 py-4 font-medium hover:bg-white/10 transition"
            >
              <MessageCircle className="w-4 h-4 text-primary" />
              Falar no WhatsApp
            </a>
          </div>

          <div className="mt-16 flex flex-wrap gap-x-10 gap-y-4 text-sm text-muted-foreground">
            <Stat n="500+" l="Obras entregues" />
            <Stat n="12 anos" l="De experiência" />
            <Stat n="4.9★" l="Avaliação média" />
          </div>
        </motion.div>
      </div>

      {/* Floating roller */}
      <motion.img
        src={rollerImg}
        alt=""
        aria-hidden
        className="hidden lg:block absolute right-0 top-1/3 w-[420px] object-contain animate-float pointer-events-none mix-blend-screen opacity-90"
        initial={{ opacity: 0, x: 100 }}
        animate={ready ? { opacity: 0.9, x: 0 } : {}}
        transition={{ delay: 0.4, duration: 1 }}
      />
    </section>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="font-display text-2xl font-bold text-foreground">{n}</div>
      <div className="text-xs uppercase tracking-widest mt-0.5">{l}</div>
    </div>
  );
}

function Marquee() {
  const items = ["Pintura Residencial", "Pintura Comercial", "Massa Corrida", "Textura", "Seladora", "Acabamento Premium"];
  return (
    <div className="border-y border-border/50 py-6 overflow-hidden">
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {[...items, ...items, ...items].map((it, i) => (
          <div key={i} className="flex items-center gap-12 text-2xl md:text-3xl font-display font-light text-muted-foreground">
            <span>{it}</span>
            <span className="text-primary">✦</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function Services() {
  const services = [
    { icon: Brush, t: "Pintura Residencial & Comercial", d: "Casas, apartamentos, escritórios e lojas. Tinta de primeira linha aplicada com técnica refinada." },
    { icon: Layers, t: "Massa Corrida", d: "Superfícies perfeitamente niveladas — base essencial para um acabamento liso e elegante." },
    { icon: Sparkles, t: "Textura", d: "Texturas modernas, projetadas e grafiatos que dão personalidade e profundidade às paredes." },
    { icon: Shield, t: "Seladora", d: "Selamento profissional que aumenta a durabilidade da pintura e valoriza o resultado final." },
  ];
  return (
    <section id="servicos" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionLabel>02 — Serviços</SectionLabel>
        <h2 className="font-display text-5xl md:text-7xl tracking-tighter mt-4 max-w-3xl">
          Cada técnica, <span className="text-gradient-gold italic font-light">executada com mestria.</span>
        </h2>
        <div className="mt-16 grid md:grid-cols-2 gap-px bg-border/50 rounded-2xl overflow-hidden">
          {services.map((s, i) => (
            <motion.div
              key={s.t}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative bg-card p-10 md:p-12 hover:bg-secondary transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-xl glass flex items-center justify-center mb-8 group-hover:bg-primary/10 transition">
                <s.icon className="w-6 h-6 text-primary" strokeWidth={1.75} />
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-semibold mb-3">{s.t}</h3>
              <p className="text-muted-foreground leading-relaxed max-w-md">{s.d}</p>
              <ArrowRight className="absolute top-10 right-10 w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
      <span className="w-8 h-px bg-primary" />
      {children}
    </div>
  );
}

function BeforeAfter() {
  return (
    <section className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionLabel>03 — Transformação</SectionLabel>
          <h2 className="font-display text-5xl md:text-6xl tracking-tighter mt-4">
            Antes & depois <span className="text-gradient-gold italic font-light">que falam por si.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Cada projeto é uma promessa: entregar o ambiente que você imaginou — sem improvisos, sem retrabalhos, sem surpresas. Veja a diferença que técnica e cuidado fazem.
          </p>
          <ul className="mt-8 space-y-3">
            {["Preparação minuciosa de superfícies", "Tintas premium com garantia", "Proteção total de móveis e pisos", "Limpeza completa após a entrega"].map((i) => (
              <li key={i} className="flex items-center gap-3 text-foreground/90">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                {i}
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-elevated">
            <img src={beforeAfter} alt="Antes e depois de pintura residencial" className="w-full h-auto" loading="lazy" width={1280} height={960} />
            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent flex justify-between text-sm font-medium">
              <span className="text-white/70">Antes</span>
              <span className="text-primary">Depois</span>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 glass rounded-2xl p-5 max-w-[200px]">
            <div className="text-3xl font-display font-bold text-gradient-gold">100%</div>
            <div className="text-xs text-muted-foreground mt-1">Clientes satisfeitos com o resultado</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Differentials() {
  const items = [
    { icon: Award, t: "12 anos de mestria", d: "Equipe especializada em acabamentos finos e detalhes que fazem a diferença." },
    { icon: Clock, t: "Prazo respeitado", d: "Cronograma claro do início ao fim, sem prolongamentos ou desculpas." },
    { icon: Shield, t: "Garantia de qualidade", d: "Cobrimos qualquer imperfeição. Sua tranquilidade é parte do serviço." },
    { icon: Sparkles, t: "Materiais premium", d: "Trabalhamos apenas com tintas e produtos das melhores marcas do mercado." },
  ];
  return (
    <section id="diferenciais" className="relative py-32 px-6 bg-secondary/30">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <SectionLabel>04 — Diferenciais</SectionLabel>
            <h2 className="font-display text-5xl md:text-6xl tracking-tighter mt-4 max-w-2xl">
              Por que somos <span className="text-gradient-gold italic font-light">a escolha certa.</span>
            </h2>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.t}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass rounded-2xl p-8 hover:-translate-y-1 transition"
            >
              <it.icon className="w-8 h-8 text-primary mb-6" strokeWidth={1.5} />
              <h3 className="font-display text-xl font-semibold mb-2">{it.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{it.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const items = [
    { src: g1, t: "Quarto Master", c: "Residencial" },
    { src: g2, t: "Sala Comercial", c: "Comercial" },
    { src: g3, t: "Sala de Jantar", c: "Textura" },
    { src: g4, t: "Fachada Premium", c: "Externa" },
  ];
  return (
    <section id="galeria" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionLabel>05 — Portfólio</SectionLabel>
        <h2 className="font-display text-5xl md:text-6xl tracking-tighter mt-4 max-w-3xl">
          Trabalhos recentes que <span className="text-gradient-gold italic font-light">orgulham.</span>
        </h2>
        <div className="mt-16 grid md:grid-cols-12 gap-4">
          {items.map((it, i) => {
            const span = [
              "md:col-span-7 md:row-span-2 aspect-[4/5]",
              "md:col-span-5 aspect-[4/3]",
              "md:col-span-5 aspect-[4/3]",
              "md:col-span-12 aspect-[16/7]",
            ][i];
            return (
              <motion.figure
                key={it.t}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className={`group relative overflow-hidden rounded-2xl bg-card ${span}`}
              >
                <img
                  src={it.src}
                  alt={it.t}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-transparent" />
                <figcaption className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-primary mb-1">{it.c}</div>
                    <div className="font-display text-2xl text-white">{it.t}</div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-white/60 group-hover:text-primary group-hover:translate-x-1 transition" />
                </figcaption>
              </motion.figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    { n: "Mariana Costa", r: "Apartamento — Vila Mariana", q: "Acabamento perfeito. O Gabriel respeitou o prazo, deixou tudo limpo e o resultado superou o que eu imaginava." },
    { n: "Rafael Andrade", r: "Escritório — Pinheiros", q: "Profissionalismo do começo ao fim. Recomendo de olhos fechados para qualquer obra de padrão." },
    { n: "Juliana Mendes", r: "Casa — Alphaville", q: "A textura na sala ficou impressionante. Equipe educada, organizada e extremamente caprichosa." },
  ];
  return (
    <section id="depoimentos" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionLabel>06 — Depoimentos</SectionLabel>
        <h2 className="font-display text-5xl md:text-6xl tracking-tighter mt-4 max-w-3xl mb-16">
          Quem confia, <span className="text-gradient-gold italic font-light">recomenda.</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <motion.blockquote
              key={t.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass rounded-2xl p-8 flex flex-col"
            >
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/90 leading-relaxed flex-1">"{t.q}"</p>
              <footer className="mt-6 pt-6 border-t border-border">
                <div className="font-medium">{t.n}</div>
                <div className="text-sm text-muted-foreground">{t.r}</div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="orcamento" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl relative">
        <div
          className="relative overflow-hidden rounded-3xl p-12 md:p-20 text-center"
          style={{ background: "var(--gradient-gold)" }}
        >
          <div className="absolute inset-0 grain" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-black/10 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-primary-foreground mb-8">
              Atendimento em até 24h
            </div>
            <h2 className="font-display text-5xl md:text-7xl tracking-tighter text-primary-foreground max-w-3xl mx-auto leading-[0.95]">
              Vamos transformar o seu espaço?
            </h2>
            <p className="mt-6 text-lg text-primary-foreground/80 max-w-xl mx-auto">
              Solicite um orçamento sem compromisso. Respondemos rápido, com clareza e sem letras miúdas.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-background text-foreground px-8 py-4 font-medium hover:bg-background/90 transition shadow-elevated"
              >
                <MessageCircle className="w-5 h-5 text-primary" /> Falar no WhatsApp
              </a>
              <a
                href="tel:+5500000000000"
                className="inline-flex items-center gap-3 rounded-full bg-foreground/10 backdrop-blur text-primary-foreground border border-primary-foreground/20 px-8 py-4 font-medium hover:bg-foreground/20 transition"
              >
                <Phone className="w-5 h-5" /> Ligar agora
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/50 py-12 px-6">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <PaintBucket className="w-4 h-4 text-primary-foreground" strokeWidth={2.5} />
          </div>
          <span className="font-display font-bold">
            Gabriel<span className="text-gradient-gold">Pinturas</span>
          </span>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Gabriel Pinturas. Pintura premium, feita com cuidado.
        </p>
        <a href={WHATSAPP} target="_blank" rel="noreferrer" className="text-sm text-muted-foreground hover:text-primary transition">
          contato@gabrielpinturas.com.br
        </a>
      </div>
    </footer>
  );
}
