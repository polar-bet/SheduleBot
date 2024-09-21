export const lessonTimes = ['8:00', '9:40', '11:20', '13:00']

export const days = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
]

const links = {
  bondarenko: 'https://meet.google.com/ezq-bvgc-yyg',
  shpak: 'https://meet.google.com/rxz-ebra-kdb',
  hodanych: 'https://meet.google.com/rme-ubqo-hgn',
  poyda: 'https://meet.google.com/pxd-mdcj-hzh',
  petrushko: 'https://meet.google.com/ddj-jeyx-owe',
  shumylo: 'https://meet.google.com/epg-jogu-eqw',
  nelybov: 'https://meet.google.com/ybb-vbpe-zfz',
}

const labels = {
  management: 'Рекламний менеджмент',
  java: 'Поглиблене вивчення Java',
  philosophy: 'Філософія',
  db: 'Проектування баз даних та знань',
  os: 'Системне програмування в ОС',
  blockchain: 'Технологія блокчейн та машинне навчання',
  clientServer: 'Розробка Інтернет клієнт-серверних систем',
  math: 'Лінійне програмування',
}

export const shedule = {
  monday: [
    {
      time: lessonTimes[1],
      name: labels.management,
      link: links.bondarenko,
    },
    {
      time: lessonTimes[2],
      name: labels.management,
      link: links.bondarenko,
    },
    {
      time: lessonTimes[3],
      name: labels.clientServer,
      link: links.shpak,
    },
  ],
  tuesday: [
    {
      time: lessonTimes[0],
      name: labels.philosophy,
      link: links.hodanych,
    },
    {
      time: lessonTimes[1],
      name: labels.philosophy,
      link: links.hodanych,
    },
    {
      time: lessonTimes[2],
      name: labels.java,
      link: links.poyda,
    },
    {
      time: lessonTimes[3],
      name: labels.java,
      link: links.poyda,
    },
  ],
  wednesday: [
    {
      time: lessonTimes[0],
      name: labels.java,
      link: links.poyda,
    },
    {
      time: lessonTimes[1],
      name: labels.java,
      link: links.poyda,
    },
  ],
  thursday: [
    {
      time: lessonTimes[1],
      name: labels.clientServer,
      link: links.shpak,
    },
    {
      time: lessonTimes[2],
      name: labels.blockchain,
      link: links.shpak,
    },
    {
      time: lessonTimes[3],
      name: labels.blockchain,
      link: links.shpak,
    },
  ],
  friday: [
    {
      time: lessonTimes[0],
      name: labels.os,
      link: links.petrushko,
    },
    {
      time: lessonTimes[1],
      name: labels.os,
      link: links.petrushko,
    },
    {
      time: lessonTimes[2],
      name: labels.math,
      link: links.shumylo,
    },
    {
      time: lessonTimes[3],
      name: labels.math,
      link: links.shumylo,
    },
  ],
  saturday: [
    {
      time: lessonTimes[0],
      name: labels.db,
      link: links.nelybov,
    },
    {
      time: lessonTimes[1],
      name: labels.db,
      link: links.nelybov,
    },
    {
      time: lessonTimes[2],
      name: labels.os,
      link: links.petrushko,
    },
    {
      time: lessonTimes[3],
      name: labels.os,
      link: links.petrushko,
    },
  ],
}
