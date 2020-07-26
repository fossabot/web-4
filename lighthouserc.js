module.exports = {
  ci: {
    assert: {
      preset: "lighthouse:recommended",
    },
    collect: {
      url: ["http://localhost:4200/"],
      staticDistDir: "dist/apps/research/exported",
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
}
