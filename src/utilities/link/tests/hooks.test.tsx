import React, {useContext} from 'react';
import {mountWithContext} from 'test-utilities';
import {useLink} from '../hooks';
import {LinkContext} from '../context';

let consoleErrorSpy: jest.SpyInstance;

function Component() {
  return useLink() === useContext(LinkContext) ? <div /> : null;
}

describe('useLink', () => {
  beforeEach(() => {
    consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleErrorSpy.mockRestore();
  });

  it('returns context', () => {
    const component = mountWithContext(<Component />);
    expect(component).toContainReactComponent('div');
  });
});
