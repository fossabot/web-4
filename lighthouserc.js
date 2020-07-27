module.exports = {
  ci: {
    // assert: {
    //   preset: "lighthouse:recommended",
    // },
    collect: {
      url: ["http://localhost:4200/"],
      startServerCommand: "NODE_ENV=production yarn nx run research:serve --skip-nx-cache",
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
}
