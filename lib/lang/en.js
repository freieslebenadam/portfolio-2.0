export default {
  meta: {
    title: "Adam Freiesleben",
    description: "I'm a web developer specializing mainly in front-end applications. I love designing and building websites from scratch, utilizing modern development tools and technologies. This is my portfolio."
  },
  nav: {
    about: "About",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact"
  },
  sections: {
    hero: {
      welcome: "Welcome, my name is",
      title: "Adam Freiesleben.",
      subtitle: "I build modern web applications.",
      description: "I'm a web developer specializing mainly in front-end applications. I love designing and building websites from scratch, utilizing modern development tools and technologies.",
      button: "Get in touch with me!"
    },
    about: {
      title: "About Me",
      content: [
        "Hello! My name is Adam and I enjoy making modern website applications. My interest in web development started back when I was a child and I have enjoyed pursuing it ever since.",
        "I have learned the basics of front-end development even before I went to study at my high school back in 2014. There, I learned the basic technologies of front-end and back-end (HTML, CSS, JavaScript, PHP, SQL) in greater detail.",
        "Since then, I learned a couple of widely popular practices and technologies, that I love to use during development of most my projects."
      ],
    },
    skills: {
      title: "What I Can Do",
      description: "Primarily I develop front-end application, but that doesn't mean I get lost in other branches. I love to learn new things and get better with my productivity.",
      tabs: {
        frontend: "Front-End",
        backend: "Back-End",
        other: "Other"
      }
    },
    projects: {
      title: "Some of My Work",
      subtitles: "Personal Project",
      divider: {
        title: "Divider",
        description: "A simple application for dividing prices of receipts or invoices between multiple people. This app uses a local storage of a browser.",
      },
      shortener: {
        title: "Short.me",
        description: "A simple application for converting long urls into a shorter aliases. Inspiration came from sites like bit.ly or tinyurl. For back-end i used a free cloud hosted service called Supabase.",
      },
      snippets: {
        title: "Code Snippets",
        description: "This application serves as a repository for some of my code snippets I commonly use in almost every project. Data are fetched from Contentful headles cms and rendered using incremental static regeneration."
      }
    },
    contact: {
      subtitle: "What's Next?",
      title: "Get in Touch",
      description: "If you ever have a question, an offer or a critique, don't hesitate to reach out to me via e-mail. I usually respond to personal mails within 24 hours.",
      button: "Say hello"
    }
  }
}