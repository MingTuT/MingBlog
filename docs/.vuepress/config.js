module.exports = {
  title: 'Ming\'s blog',
  description: '记录所学知识',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
  ],
  base: '/MingBlog/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    logo: '/Ming.jpg',
    // 导航栏配置
    nav: [
      {
        text: 'HTML+CSS',
        items: [
          { text: 'HTML', link: '/basics/html/' },
          { text: 'CSS', link: '/basics/css/' }
        ]
      },
      { text: 'JS', link: '/algorithm/' },
      { text: 'Vue', link: 'https://baidu.com' }
    ],
    // 侧边栏配置
    sidebar: [
      {
        title: 'HTML+CSS',
        collapsable: false,
        children: [
          { title: 'HTML', path: '/basics/html' },
          { title: 'CSS', path: '/basics/css' }
        ]
      }
    ],
    sidebarDepth: 2, // 侧边栏显示2级
  }
};