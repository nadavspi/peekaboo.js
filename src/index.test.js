import { expect } from 'chai';
import $ from 'jquery';
import peekaboo from './index';

describe('test document', () => {
  it('should have a toggle', () => {
    expect($('.peekaboo').length).to.equal(1);
  });
});

describe('peekaboo', () => {
  it('should be available', () => {
    expect($.fn.peekaboo).to.be.a('function');
  });
});
