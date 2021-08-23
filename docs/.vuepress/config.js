module.exports = {
  base: '/fqzyzbzy/',
  dest: './dist',
  title: '父权制与资本主义',
  description: '父权制与资本主义，电子书，上野千鹤子',
  head: [
    ['link', { rel: 'icon', href: '/images/icon.png' }]
  ],
  themeConfig: {
    // displayAllHeaders: true,
    lastUpdated: '上次更新',
    sidebarDepth: 2,
    sidebar: {
      '/chapters/': [
        '01.md', '02.md', '03.md',
        '04.md', '05.md', '06.md',
        '07.md', '08.md', '09.md',
        '10.md', '11.md', '12.md',
        '13.md', '14.md', '15.md',
        '16.md', '17.md'
      ]
    }
  }
}