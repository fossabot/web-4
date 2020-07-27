module.exports = {
    ci: {
      // assert: {
      //   preset: "lighthouse:recommended",
      // },
      collect: {
        numberOfRuns: 5,
        url: [
          "http://localhost:4200/"
        ],
        startServerCommand:"yarn nx run core:serve",
      },
      upload: {
        target: "temporary-public-storage",
      },
    },
  }
  