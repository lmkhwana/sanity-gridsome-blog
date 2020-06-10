export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ee0ee2b8db0aa26394160a9',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-1bak9aaj',
                  apiId: 'b8fb3566-8905-4bc1-aeff-d5f1a5568669'
                },
                {
                  buildHookId: '5ee0ee2b49d3c9bebd5ce35f',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-tnuqdik5',
                  apiId: 'a3a8c7f4-c257-496a-a344-09711f131fa5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/lmkhwana/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-tnuqdik5.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
