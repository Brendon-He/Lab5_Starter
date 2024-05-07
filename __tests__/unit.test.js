// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('Tests if letters returns false in phone #', () => {
  expect(isPhoneNumber("abc")).toBe(false);
});

test('Tests if empty string returns false in phone #', () => {
  expect(isPhoneNumber("")).toBe(false);
});

test('Tests if phone # returns true in phone #', () => {
  expect(isPhoneNumber("747-823-9132")).toBe(true);
});

test('Tests if police # returns true  in phone #', () => {
  expect(isPhoneNumber("942-123-1132")).toBe(true);
});

test('Tests if phone muber returns false in email ', () => {
  expect(isEmail("942-123-1132")).toBe(false);
});

test('Tests if empty string muber returns false in email ', () => {
  expect(isEmail("")).toBe(false);
});


test('Tests if school email returns false in email ', () => {
  expect(isEmail("bjhe@ucsd.edu")).toBe(true);
});

test('Tests if gmail email returns false in email ', () => {
  expect(isEmail("youuhoo@gmail.com")).toBe(true);
});

test('Tests if empty string is strong password ', () => {
  expect(isStrongPassword("")).toBe(false);
});

test('Tests if 123123 string is strong password ', () => {
  expect(isStrongPassword("123123")).toBe(false);
});

test('Tests if smashing keyboard string is strong password ', () => {
  expect(isStrongPassword("AbvSDFas__a")).toBe(true);
});

test('Tests if 3 of each character type is strong password ', () => {
  expect(isStrongPassword("abwAOS123___")).toBe(true);
});


test('Tests if empty string is a date ', () => {
  expect(isDate("")).toBe(false);
});

test('Tests if the 100th day of a month is a date ', () => {
  expect(isDate("30/100/24")).toBe(false);
});

test('Tests if the 29th  is a date ', () => {
  expect(isDate("2/29/2024")).toBe(true);
});

test('Tests if the first is a date ', () => {
  expect(isDate("1/1/0001")).toBe(true);
});

test('Tests if the empty string is a hex color ', () => {
  expect(isHexColor("")).toBe(false);
});

test('Tests if a nonhex number is a hex color ', () => {
  expect(isHexColor("GGGGGG")).toBe(false);
});

test('Tests if the lower case string is a hex color ', () => {
  expect(isHexColor("ffffff")).toBe(true);
});

test('Tests if the upercase string is a hex color ', () => {
  expect(isHexColor("FFFFFF")).toBe(true);
});