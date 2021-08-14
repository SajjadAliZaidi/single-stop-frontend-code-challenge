export const commentFactory = comment => {
  const [date, time] = new Date().toLocaleString().split(', ')
  const id = new Date().getTime() + ''
  const commentWithDateAndTime = {
    ...comment,
    date,
    time,
    id
  }
  return commentWithDateAndTime
}