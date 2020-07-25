module.exports = {
    ci: {
      collect: {
        url: ['http://localhost:4200/'],
        startServerCommand: 'yarn nx run research:serve',
      },
      upload: {
        target: 'temporary-public-storage',
      },
    },
  };