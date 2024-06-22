const data = [
  { id: 1, content: 'content 1' },
  { id: 2, content: 'content 2' },
  { id: 3, content: 'content 3' },
  { id: 4, content: 'content 4' },
]

export const getData = (id) => {
  return new Promise ((resolve) => {
    setTimeout(() => {
      resolve(data.find(item => item.id === id).content)
    }, 2000)
  })
}