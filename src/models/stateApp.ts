

export interface AppState {
  status: string
  error: string
  FrontStudyStages: frontStudy[]
}


export interface frontStudy {
  projectTitle: string
  date: string
  desc: string
  stack: string[]
  preview: string
  sourceUrl: string
}


export const DEF_APP_STATE: AppState = {
  status: '', error: '', FrontStudyStages: [
    {
      projectTitle: 'Мы продолжаем «утеплять» подразделения. ',
      date: 'Декабрь 2022',
      desc: 'Первый день зимы. Пусть там, где идет специальная военная операция, она еще не вступила в полные права, но теплыми дни уже не назовешь. Мы же продолжаем «утеплять» подразделения. Мотострелкам переданы печки и теплые носки. 💬«Личный состав получил необходимые в зимнее холодное время печки для обогрева и теплые носки. Хотим сказать вам спасибо»',
      stack: [],
      preview: "",
      sourceUrl: 'https://t.me/vpervieruki/189'
    },
    
  ]
}


