export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "616c6273117afe78a50a3cbe",
                  title: "Sanity Studio",
                  name: "zwierzaki-sanity-studio",
                  apiId: "4e98e869-13ac-45de-abc4-704f7b0f1687",
                },
                {
                  buildHookId: "616c6274a4aa9e36dac8088d",
                  title: "Blog Website",
                  name: "zwierzaki-sanity",
                  apiId: "1d2aceb1-a9f9-40d3-ae46-312a9134008a",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/slawekSk13/zwierzaki-sanity",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://zwierzaki-sanity.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
