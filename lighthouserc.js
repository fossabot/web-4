module.exports = {
    ci: {
      collect: {
        url: ['http://localhost:4200/'],
        startServerCommand: 'yarn nx research:serve',
      },
      upload: {
        target: 'temporary-public-storage',
      },
    },
  };