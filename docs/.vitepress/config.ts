import { defineConfig } from "vitepress";

export default defineConfig({
  title: "LatinaDocs",
  description: "Dokumentasi untuk LalatinaHub",
  themeConfig: {
    socialLinks: [{ icon: "github", link: "https://github.com/LalatinaHub" }],
    nav: [
      {
        text: "Get Subs",
        items: [
          {
            text: "API",
            link: "/api/",
          },
        ],
      },
    ],
    sidebar: [
      {
        text: "API",
        collapsed: true,
        items: [
          {
            text: "Pengenalan",
            link: "/api/",
          },
          {
            text: "Endpoint",
            items: [
              {
                text: "Get",
                link: "/api/get",
              },
            ],
          },
        ],
      },
      {
        text: "Lainnya",
        items: [
          {
            text: "Bantuan",
            link: "/support",
          },
        ],
      },
    ],
    footer: {
      message: 'Released under the <a href="https://github.com/LalatinaHub/License/blob/main/LICENSE">MIT License</a>.',
      copyright: 'by <a href="https://github.com/dickymuliafiqri">Dicky Mulia Fiqri</a>',
    },
    editLink: {
      pattern: "https://github.com/LalatinaHub/LatinaDocs/edit/master/docs/:path",
      text: "Edit this page on GitHub",
    },
    i18nRouting: true,
  },
  locales: {
    root: {
      label: "Bahasa",
      lang: "id",
    },
  },
  lastUpdated: true,
});
