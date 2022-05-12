export default {
  meta: {
    title: "Adam Freiesleben",
    description: "Jsem webový vývojář zaměřený hlavně na vývoj front-end aplikací. Rád navrhuji a kóduji webové stránky od základu s využitím moderních vývojářských nástrojů a technologií. Toto je mé portfolio"
  },
  nav: {
    about: "O mně",
    skills: "Dovednosti",
    projects: "Projekty",
    contact: "Kontakt"
  },
  sections: {
    hero: {
      welcome: "Vítejte, já jsem",
      title: "Adam Freiesleben.",
      subtitle: "Vytvářím moderní webové aplikace.",
      description: "Jsem webový vývojář zaměřený primárně na vývoj front-end aplikací. Rád navrhuji a kóduji webové stránky od základů s využitím moderních vývojářských nástrojů a technologií.",
      button: "Kontaktujte mě!"
    },
    about: {
      title: "O mně",
      content: [
        "Zdravím! Jmenuji se Adam a rád vytvářím moderní webové aplikace. O vývoj webů jsem se začal zajímat už v dětství. Toto nadšení stále roste a s radostí ho následuji dodnes.",
        "Základy webového vývoje jsem se začal učit ještě před nastoupením na střední školu v roce 2014. Tam jsem se tyto a mnoho dalších základních technologiích (HTML, CSS, JavaScript, PHP, SQL) naučil více do podrobna.",
        "Po dokončení studia jsem se sám začal učit více pokročilé a široce používáné technologie, které nyní rád používám ve svých projektech (ES6+, React, TypeScript, Tailwind, a další)."
      ],
    },
    skills: {
      title: "Co umím",
      description: "Primárně se věnuji front-end vývoji, ale v ostatních odvětví se také neztratím. Rád se učím nové technologie a zdokonaluji se v efektivitě své produktivity.",
      tabs: {
        frontend: "Front-End",
        backend: "Back-End",
        other: "Ostatní"
      }
    },
    projects: {
      title: "Některé mé projekty",
      subtitles: "Osobní projekt",
      divider: {
        title: "Divider",
        description: "Jednoduchá aplikace sloužící k rozpočítávání účtenek nebo faktur mezi vícero lidí. Aplikace využívá lokálního úložiště prohlížeče.",
      },
      shortener: {
        title: "Short.me",
        description: "Jednoduchá aplikace ke zkracování dlouhých odkazů. Inspirací sloužily weby jako bit.ly nebo tinyurl. Jako back-end řešení jsem využil neplacené cloud služby Supabase.",
      },
      snippets: {
        title: "Code Snippets",
        description: "Tato aplikace slouží jako repozitář částí kódu, které běžně používám ve většině svých projektů. Data jsou zobrazována pomocí inkrementální statcké regenerace z headless cms platformy Contentful."
      }
    },
    contact: {
      subtitle: "Co dále?",
      title: "Kontaktujte mě",
      description: "Pokud pro mě máte jakoukoliv otázku, nabídku nebo výtku, budu rád, když se na mě obrátíte e-mailem. Na osobně mířené zprávy zpravidla odpovídám do 24 hodin.",
      button: "Napište mi"
    }
  }
}