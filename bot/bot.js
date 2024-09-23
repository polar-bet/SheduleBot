import { Telegraf } from 'telegraf'
import cron from 'node-cron'
import { days, lessonTimes, shedule } from './data.js'
import dotenv from 'dotenv'

dotenv.config()

const bot = new Telegraf(process.env.BOT_TOKEN)
const timeZone = 'Europe/Kyiv'
let active = true

const sendDaySchedule = (chatId, day) => {
  const lessons = shedule[day]
  if (lessons && lessons.length > 0) {
    let dailyShedule = 'Сьогодні ваші заняття:\n\n'
    lessons.forEach(lesson => {
      dailyShedule += `• ${lesson.name} о ${lesson.time} \n`
    })
    bot.telegram.sendMessage(chatId, dailyShedule)
  }
}

const sendLessonReminder = (chatId, lesson) => {
  bot.telegram.sendMessage(
    chatId,
    `Зараз у вас: ${lesson.name} о ${lesson.time}. Приєднатися можна тут:\n ${lesson.link}`
  )
}

bot.start(ctx => {
  ctx.reply('Welcome! Bot has started.')
})

bot.command('exit', ctx => {
  active = false
  ctx.reply('Розклад вимкнено. Щоб знову активувати, введіть /start.')
})

cron.schedule(
  '58 7 * * 1-6',
  () => {
    if (active) {
      const dayInKyiv = new Date()
        .toLocaleString('en-GB', { weekday: 'long', timeZone: timeZone })
        .toLowerCase()

      const chatId = process.env.CHAT_ID

      if (days.includes(dayInKyiv)) {
        sendDaySchedule(chatId, dayInKyiv)
      }
    }
  },
  { timezone: timeZone }
)

lessonTimes.forEach((value, index) => {
  const [hour, minute] = value.split(':')
  const earlierMin = (minute - 1 + 60) % 60

  cron.schedule(
    `${earlierMin} ${hour} * * 1-6`,
    () => {
      if (active) {
        const dayInKyiv = new Date()
          .toLocaleString('en-GB', { weekday: 'long', timeZone })
          .toLowerCase()

        const chatId = process.env.CHAT_ID

        if (days.includes(dayInKyiv)) {
          const lesson = shedule[dayInKyiv].find(l => l.time === value)

          if (lesson) {
            sendLessonReminder(chatId, lesson)
          }
        }
      }
    },
    { timezone: timeZone }
  )
})

bot.command('test', ctx => {
  ctx.reply('all works')
})

bot.command('shedule', ctx => {
  const scheduleMessage = days
    .map(day => {
      const lessons = shedule[day]
      if (!lessons) return ''

      const lessonList = lessons
        .map((lesson, index) => {
          return `${
            lessonTimes.indexOf(
              lessonTimes.find(item => item === lesson.time)
            ) + 1
          }. ${lesson.name} о ${lesson.time}`
        })
        .join('\n')

      return `${day.charAt(0).toUpperCase() + day.slice(1)}:\n${lessonList}`
    })
    .join('\n\n')

  ctx.reply(scheduleMessage || 'Розклад не знайдено.')
})

bot.launch()

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
