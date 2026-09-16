import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-gestacao.jpg";
import babyImg from "@/assets/recem-nascido.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Portfólio | Enfermeira Vanessa e Plano de Parto" },
      {
        name: "description",
        content:
          "Portfólio de consultoria em saude Marterna : pré-natal, plano de parto, acompanhamento do trabalho de parto, pós-parto e cuidados com o recém-nascido.",
      },
      { property: "og:title", content: "Portfólio | Enfermeira Vanessa e Plano de Parto" },
      {
        property: "og:description",
        content:
          "Acompanhamento perinatal humanizado: gestação, parto, puerpério, amamentação e cuidados com o bebê.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const sections = [
  {
    id: "pre-natal",
    number: "01",
    title: "Assistência Pré-Natal",
    lead: "Acolhimento desde as primeiras semanas, com escuta e informação clara.",
    items: [
      "consultoria em saude Marterna",
      "Aferição da pressão arterial materna e ausculta dos batimentos cardíacos fetais",
      "Orientações sobre imunização durante a gestação",
      "Encaminhamento a profissionais especializados em amamentação, quando necessário",
      "Educação em saúde sobre sinais de alerta e intercorrências gestacionais",
      "Elaboração individualizada do plano de parto",
      "Curso básico de primeiros socorros para o recém-nascido",
      "Orientações sobre as fases do trabalho de parto e nascimento",
      "Ensino de métodos não farmacológicos para alívio da dor",
      "Suporte emocional à gestante e aos familiares em todo o período gestacional",
    ],
  },
  {
    id: "trabalho-de-parto",
    number: "02",
    title: "Acompanhamento do Trabalho de Parto",
    lead: "Presença contínua para que o parto siga seu ritmo fisiológico.",
    items: [
      "Acompanhamento domiciliar durante a fase inicial do trabalho de parto",
      "Monitorização materna e fetal",
      "Incentivo à deambulação e a posições que favorecem a evolução do parto",
      "Orientação contínua à gestante e ao acompanhante",
      "Apoio à amamentação na primeira hora de vida, quando possível",
      "Avaliação da necessidade de encaminhamento à equipe multiprofissional",
    ],
  },
  {
    id: "pos-parto",
    number: "03",
    title: "Assistência no Pós-Parto",
    lead: "Cuidado com a recuperação do corpo e com o emocional da puérpera.",
    items: [
      "Consulta puerperal",
      "Avaliação da cicatrização perineal ou da ferida operatória, quando aplicável",
      "Orientações sobre recuperação física e emocional",
      "Identificação precoce de sinais e sintomas de possíveis complicações",
      "Apoio e orientações relacionadas ao aleitamento materno",
    ],
  },
  {
    id: "recem-nascido",
    number: "04",
    title: "Cuidados com o Recém-Nascido",
    lead: "Segurança e confiança nos primeiros dias em casa.",
    items: [
      "Orientações sobre banho e higiene do recém-nascido",
      "Cuidados com o coto umbilical",
      "Orientações sobre sono seguro",
      "Identificação de sinais de alerta e situações que exigem avaliação profissional",
    ],
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-20 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <span className="font-display text-lg tracking-tight">Enfermeira Vanessa</span>
          <nav className="hidden gap-6 text-sm text-muted-foreground md:flex">
            {sections.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="transition-colors hover:text-primary">
                {s.title.split(" ").slice(-1)[0]}
              </a>
            ))}
            <a href="#material" className="transition-colors hover:text-primary">
              Material
            </a>
          </nav>
        </div>
      </header>

      <section className="mx-auto grid max-w-5xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Portfólio</p>
          <h1 className="font-display mt-4 text-4xl leading-tight md:text-5xl">
            Planejamento de parto e acompanhamento perinatal
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
            Cuidado individualizado da gestação ao puerpério, com informação, presença e respeito às
            escolhas de cada família.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#pre-natal"
              className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Ver os cuidados
            </a>
            <a
              href="#material"
              className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-accent"
            >
              Material complementar
            </a>
          </div>
        </div>
        <img
          src={heroImg}
          alt="Gestante com as mãos sobre a barriga em ambiente acolhedor"
          width={1600}
          height={1104}
          className="w-full rounded-[2rem] object-cover shadow-[var(--shadow-soft)]"
        />
      </section>

      <main className="mx-auto max-w-5xl space-y-16 px-6 pb-8">
        {sections.map((s) => (
          <section key={s.id} id={s.id} className="scroll-mt-24">
            <div className="flex items-baseline gap-4">
              <span className="font-display text-2xl text-primary/40">{s.number}</span>
              <div>
                <h2 className="font-display text-2xl md:text-3xl">{s.title}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{s.lead}</p>
              </div>
            </div>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {s.items.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-border/70 bg-card p-4 text-sm leading-relaxed text-card-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ))}

        <section
          id="material"
          className="scroll-mt-24 grid items-center gap-8 rounded-[2rem] bg-secondary p-6 md:grid-cols-2 md:p-10"
        >
          <img
            src={babyImg}
            alt="Mão de recém-nascido segurando o dedo de um adulto"
            width={1200}
            height={912}
            loading="lazy"
            className="w-full rounded-3xl object-cover"
          />
          <div>
            <h2 className="font-display text-2xl md:text-3xl">Material Complementar</h2>
            <p className="mt-3 text-sm leading-relaxed text-secondary-foreground/80">
              Portfólio de orientações para famílias de primeira viagem, com informações sobre
              gestação, parto, puerpério, amamentação, cuidados com o recém-nascido e prevenção de
              acidentes.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/60 py-10 text-center text-sm text-muted-foreground">
        Enfermeira Vanessa COREM - 915901 · Planejamento de parto e acompanhamento perinatal
      </footer>
    </div>
  );
}
