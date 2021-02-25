import {utcTimezones} from "../index";

describe('Timezones', () => {
  it('should have 38 UTC timezones', () => {
    expect(utcTimezones().length).toBe(38)
  });
})
