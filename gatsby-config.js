module.exports = {
  siteMetadata: {
    siteUrl: "https://nogelai.net/",
    title: "nogelainet",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nogelainet`,
        short_name: `Nogelainet`,
        start_url: `/`,
        background_color: `#F2EFE9`,
        theme_color: `#0B0B0B`,
        display: `standalone`,
        icon: "src/images/icon.png"
      },
    }
  ],
};
