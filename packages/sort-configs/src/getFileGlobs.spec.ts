import { getFileGlobs } from './getFileGlobs'

test('default to current folder', () => {
  expect(getFileGlobs({ include: null }, undefined)).toEqual(['.'])
})


test('return config.include if no globs specified', () => {
  expect(getFileGlobs({ include: ['.', 'packages/*'] }, undefined)).toEqual(['.', 'packages/*']);
})

test('retuns globs if specified', () => {
  expect(getFileGlobs({ include: null }, ['abc'])).toEqual(['abc'])
})

test('empty include returns current folder', () => {
  expect(getFileGlobs({ include: [] }, undefined)).toEqual(['.'])
})
