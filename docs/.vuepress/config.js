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
          { text: 'HTML', link: '/blog/basics/html' },
          { text: 'CSS', link: '/blog/basics/css' }
        ]
      },
      { text: 'JavaScript', link: '/blog/javascript/基础' },
      
      { text: 'Vue', link: 'https://baidu.com' }
    ],
    sidebar: {
      '/blog/basics/': [{
      title: 'HTML+CSS',
      collapsable: false, 
      sidebarDepth: 2,
      children: [
        { title: 'HTML', path:'/blog/basics/html'},
        { title: 'CSS', path:'/blog/basics/css'}
      ]
    }],
      '/blog/javascript/': [{
      title: 'JavaScript',
      collapsable: false,
      sidebarDepth: 2,
      children: [
        { title: '基础', path:'/blog/javascript/基础' },
        { title: '问题', path:'/blog/javascript/问题' }
      ]
    }],
      
    }


  }
};