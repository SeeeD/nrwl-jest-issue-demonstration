module.exports = {
  name: 'libname',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/libname',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
