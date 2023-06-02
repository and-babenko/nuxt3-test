export default defineNuxtConfig({
  app: {
    head: {
      title: "Nuxt 3 test",
      meta: [
        {
          name: "charset",
          content: "utf-8",
        },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "SSR project on Nuxt.JS" },
      ],
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap",
        },
      ],
    },
  },
  modules: ["@nuxtjs/tailwindcss"],
});
