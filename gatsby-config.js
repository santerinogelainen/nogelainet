require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: "https://nogelai.net/",
    title: "nogelainet",
  },
  plugins: [
    "gatsby-plugin-sass", 
    "gatsby-plugin-react-helmet",
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
