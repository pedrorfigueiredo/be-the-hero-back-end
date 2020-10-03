const genereateUniqueId = require('../../src/utils/generateUniqueId');

describe('Generate Unique ID', () => {
  it('should generate an unique ID', () => {
    const id = genereateUniqueId();

    expect(id).toHaveLength(8);
  });
});