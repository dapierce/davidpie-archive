# david🥧.design

## Portfolio of David Aaron Pierce

My personal portfolio website, built using **[Gatsby](https://www.gatsbyjs.org)**, and used the **[gatsby-starter-default](https://github.com/gatsbyjs/gatsby-starter-default)** as a basis.

On top of the starter, I use:

- **[use-dark-mode](https://github.com/donavon/use-dark-mode)** & **[gatsby-plugin-use-dark-mode](https://www.gatsbyjs.org/packages/gatsby-plugin-use-dark-mode/)** - Enables a light/dark mode switch within the site (and pulls from your OS settings in the newest browsers).

## 🚀 Running the dev environment

Using [gatsby-cli](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-cli) you can run a live updating dev environment:

```
gatsby develop
```

## 💫 Build and serve


```
gatsby build
```

Gatsby CLI will build a static site you'll have HTML and webpacked JS in the `/public` directory.

From there it can simply be uploaded to your web host manually, or use:

```
gatsby serve
```

And the production build will be served on your computer (at default localhost:9000).

Or, use

- [Gitlab Pages](https://docs.gitlab.com/ee/user/project/pages/)
- [Github Pages](https://pages.github.com/)
- [Netlify](https://www.netlify.com)

and have your static site hosted for free!
