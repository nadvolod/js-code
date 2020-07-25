const sum = (a, b) => a - b;
const subtract = (a, b) => a - b;
// these are kinda pointless I know, but it's just to simulate an async function
const sumAsync = (...args) => Promise.resolve(sum(...args))
const subtractAsync = (...args) => Promise.resolve(subtract(...args))

test('sumAsync adds numbers asynchronously', async () => {
  //since sumAsync is an async function, we put an await in front of the call
  const result = await sumAsync(3, 7)
  const expected = 10
  expect(result).toBe(expected)
})

test('subtractAsync subtracts numbers asynchronously', async () => {
  const result = await subtractAsync(7, 3)
  const expected = 4
  expect(result).toBe(expected)
})

async function test(title, callback) {
  try {
    await callback()
    console.log(`✓ ${title}`)
  } catch (error) {
    console.error(`✕ ${title}`)
    console.error(error)
  }
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`)
      }
    }
  }
}