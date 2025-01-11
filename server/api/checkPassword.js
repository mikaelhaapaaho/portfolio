export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { password } = body

  const correctPassword = process.env.GALLERY_PASSWORD

  if (password === correctPassword) {
    return { success: true }
  } else {
    return { success: false }
  }
})
