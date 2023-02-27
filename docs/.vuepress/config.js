module.exports = {
  base: '/wmlyscdyy/',
  dest: './dist',
  title: '我们赖以生存的隐喻',
  description: '我们赖以生存的隐喻，电子书，隐喻',
  head: [
    ['link', { rel: 'icon', href: '/images/icon.png' }]
  ],
  themeConfig: {
    // displayAllHeaders: true,
    nav: [
      { text: '中文', link: '/version_1/01.md' },
      { text: '英文', link: '/version_2/01.md' }
    ],
    lastUpdated: '上次更新',
    sidebarDepth: 2,
    sidebar: {
      '/version_1/': [
        '01.md', '02.md', '03.md', '04.md',
        '05.md', '06.md', '07.md', '08.md',
        '09.md', '10.md', '11.md', '12.md',
        '13.md', '14.md', '15.md', '16.md',
        '17.md', '18.md', '19.md', '20.md',
        '21.md', '22.md', '23.md', '24.md',
        '25.md', '26.md', '27.md', '28.md',
        '29.md', '30.md', '31.md', '32.md'
      ],
      '/version_2/': [
        '01.md', '02.md', '03.md', '04.md',
        '05.md', '06.md', '07.md', '08.md',
        '09.md', '10.md', '11.md', '12.md',
        '13.md', '14.md', '15.md', '16.md',
        '17.md', '18.md', '19.md', '20.md',
        '21.md', '22.md', '23.md', '24.md',
        '25.md', '26.md', '27.md', '28.md',
        '29.md', '30.md', '31.md', '32.md'
      ]
    }
  }
}