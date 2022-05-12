
export interface INavItem {
  id: string,
  title: string,
  path: string
}

export interface ISkill {
  id: number,
  title: string,
  icon: JSX.Element,
}

export interface ITab {
  id: number,
  name: string,
  title: string,
  items: ISkill[]
}

export interface ITranslation {
  meta: {
    title: string,
    description: string
  },
  nav: {
    about: string,
    skills: string,
    projects: string,
    contact: string 
  },
  sections: {
    hero: {
      welcome: string,
      title: string,
      subtitle: string,
      description: string,
      button: string
    },
    about: {
      title: string,
      content: string | string[],
    },
    skills: {
      title: string,
      description: string,
      tabs: {
        frontend: string,
        backend: string,
        other: string
      }
    },
    projects: {
      title: string,
      subtitles: string,
      divider: {
        title: string,
        description: string,
      },
      shortener: {
        title: string,
        description: string,
      },
      snippets: {
        title: string,
        description: string
      }
    },
    contact: {
      subtitle: string,
      title: string,
      description: string,
      button: string
    }
  }
}