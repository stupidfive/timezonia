import {utcTimezones, utcOf, currentUtc} from "../index";

describe('Timezones', () => {
  it('should have 38 UTC timezones', () => {
    expect(utcTimezones().length).toBe(38)
  });

  describe('get UTC timezone', () => {
    it('should get "UTC +8"', () => {
      expect(utcOf(-480)).toBe('UTC +8')
    });
    it('should get "UTC +0"', () => {
      expect(utcOf(0)).toBe('UTC +0')
    });
    it('should get "UTC -0', () => {
      expect(utcOf(60)).toBe('UTC -1')
    })
    it('should get "UTC -3:30', () => {
      expect(utcOf(210)).toBe('UTC -3:30')
    })
    it('should get "UTC +8:45', () => {
      expect(utcOf(-525)).toBe('UTC +8:45')
    })
    it('should print correct UTC', () => {
      console.log(currentUtc());
    });
  })
})
