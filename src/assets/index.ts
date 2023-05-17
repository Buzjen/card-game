export enum LANGUAGES {
  en = "en",
  ru = "ru",
}

export interface Word extends Record<LANGUAGES, string> {
  id: number;
  count: number;
}

export const Words: Word[] = [
  {
    [LANGUAGES.en]: "Hello",
    [LANGUAGES.ru]: "Привет",
    id: 0,
    count: 0,
  },
  {
    [LANGUAGES.en]: "Dog",
    [LANGUAGES.ru]: "Собака",
    id: 1,
    count: 0,
  },
  {
    [LANGUAGES.en]: "Cat",
    [LANGUAGES.ru]: "Кот",
    id: 2,
    count: 0,
  },
  {
    [LANGUAGES.en]: "Back",
    [LANGUAGES.ru]: "Назад",
    id: 3,
    count: 0,
  },
  {
    [LANGUAGES.en]: "Down",
    [LANGUAGES.ru]: "Вниз",
    id: 4,
    count: 0,
  },
];
