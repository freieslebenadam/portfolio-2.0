
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