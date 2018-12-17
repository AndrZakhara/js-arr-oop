const MyArray = require('./MyArr.js');

describe('test custom class Array', () => {

  describe('test  map of class Array', () => {

    it('has method map', ()=>{
      const arr = new MyArray();
      expect(arr).toBeInstanceOf(MyArray);
    })
  });

  describe('test method pus. Pushed element mast be on last position', () => {

    it('has method map', ()=>{
      const arr = new MyArray(1, 2, 3);
      arr.push('element');
      expect(arr[arr.length-1]).toBe('element');
    })
  });

  describe('test method string. Result must be a string', () => {
    it('must return type of String', () => {
      const monthNames = new MyArray('Янв', 'Фев', 'Мар', 'Апр');
      expect(typeof monthNames.toString()).toBe('string');
      expect(monthNames.toString()).toBe('Янв,Фев,Мар,Апр');
    });
  });
});
