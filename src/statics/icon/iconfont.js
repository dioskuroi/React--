import { createGlobalStyle } from 'styled-components'

// 注意：在 React 中使用 iconfont 不能使用类名的方式，需要使用 unicode 编码方式
export default createGlobalStyle`
  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1546911094858'); /* IE9 */
    src: url('./iconfont.eot?t=1546911094858#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAPMAAsAAAAAB8wAAAN+AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDHAqDDIJwATYCJAMQCwoABCAFhG0HRBveBlFULhpkPwtjt8WQMy4XxTTlyvVnL1/YV5aCfY2Hr/1+5+7ufyymSZJL9ekkpps0C50EJVMKoVCyl/Dvf26HSQn3+jYkkkyT9sn9id8Oe52WSYkQITSG8rJBmWxB+UfpAH+JtBmpuDhUzbQNNh8oLnOM81AugOGtARtztQUpcAtSIO8wduVF7CfQZZKmdGS5P0FTYQwLxH2Ma0IzpVVqCkMVmpK5RbyhVtNL+gRe/d+Pf8OgI2llxtjjy4UD46++5OJ2MX8XgTeeGWwRGUtAIa5LracqYXRJRZfSuWoHqKrEWC1/abcRfy/Sakr1/cdLRMPI7wFbMJb5yubGsqFaQBmYJ8ELkVeY8wy8M3DjLk+KNEyhq6MHJBN30sx9sXv3PO/ccb9716Puvhm7j1Fimnz/vher5A1MhCfFnYgjfXybBYlObu+QDbIOAAISu12112CJl1eJf6a+x+IoKB4j6w4g9PKKUvIqKSE8mxuB+0i4R6u4e/7gOS+nXztfFJdXx8TKkoTH2l35nd8TE1F0uOvgRj1uwMCMulDMCsc6lBr/EP9Ok8s/mIsHplCpmTIwnYtyEObibzYFdiOtbkqb34xg/B9qdi/W0MkDmYbGGN6n+m2Yln6krQSpTRSTZDxjGAJIO2PdN4Fe6Rc8HL95JT5KCIK/lO5ktFOn7gsRrHYEzBB/NBvP++c1CzaPO1KW+fO4uEnOBd4PNmq+fd9jM3iqHCw5HC1AMgAA+H+At7CBT/2PdzOIl2QfXPDv/sZSZF12EJP+VzqSCgAAPPAVzITu/yWuRTsZ/ABea96f4rUsKarA0JUiC22uZivWEsMkdOnC/0ky5DeGfLR1PqEajSHpMAFZNYUs2CVo6bYFjWoXuixaLe42jFVE6cSCF4Aw4A1Jnw/IBnyQBfuFljF/aAwEhi4nwbZmt5mIIcxSyRRyMDQHY8LSRFkGaQeFB3KvkclJgU+5EBd+AFUUlbOJFSXEY0xIy3SH6ekKI1PTGC3BYRRFKSanpgHZYkSnSzZSUoos+yIjLCmGtkOMmARxIMsT8tlSCeVWFu3czx8Q11XExDVFFeYLwgp++2jA0G+BXEmTVkXX8kjhxjUkhIIUloqhJTCTyIymUFbeK0BswuD1CGdGeqicais15pfHT7gKuhjblUiRo0RL8xBhsu2VTUK6NyDSo0yyQz8BAAAA') format('woff2'),
    url('./iconfont.woff?t=1546911094858') format('woff'),
    url('./iconfont.ttf?t=1546911094858') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1546911094858#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

`


