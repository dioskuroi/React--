import { createGlobalStyle } from 'styled-components'

// 注意：在 React 中使用 iconfont 不能使用类名的方式，需要使用 unicode 编码方式
export default createGlobalStyle`
  @font-face {
    font-family: "iconfont";
    src: url('./iconfont.eot?t=1547090543579'); /* IE9 */
    src: url('./iconfont.eot?t=1547090543579#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAQ8AAsAAAAACGAAAAPvAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDMgqDfINQATYCJAMUCwwABCAFhG0HSxtfB8iusCnDvUgJabe6PI1s9c+7xsq8Ff4JLx4gu8fezM7+bPZHcCl1VBdXSQdVAEqjUlECvquuAv+a+3w/OSzjluiTOgIKvABtZrNldsDqwJWI1FXVVjhyjMsHtOlJJptmGGpybZeVBKCBRTE8SCrp5E50+kVDby2FACio1mjSU3ZwOf1vWALzLMtlzGV7U08VYDSBAhtj0wIJdICUc8PYlRexm4BSGyuFRpdUNUGKxBgUEJabugQpKa1UkxoUgkrJzCTshlwRtwhvgV3+58Ov4qEgyjPGyIkLi1XI+zb5x6Rs23/ZXBcB3nhmsHlk6AUkwopS63Ji6O9FVCq/SzAcKBWi+K3xt47fhvyY9P9RhTuSl2aAJI7z54UKI7kWGA4DiW+NbW4s6wjVIpQNgQwyfkzi30tyDkqYcBh8YZBauUsUJbF+NaxVFI2jbrNtuvfU1ydNoak59ON568Zn06cnYzY8nTTj/jMxC738vOOzZy1im6ffmrc9H9WoPddT2MVseJUnX8eW00c1jbBHtncca1MenzZTulM9CMpQ3i+3vg8bW2ds90/Mmnb1jA1TPfgkhBmteqR1+8ay5dh+UxupzSc6ubcYukWTOadaLpraevr87Zudp9162uvvu+2zhiMr84W9V29sinlbjZfy7qU/n9DOUf1/70iV/t9qFDy4M7MXpYgnnjw4xGERm4UTQswKR1bvGP6HNomzhsoGz8UdZsTgpVVxvYC5+Mkuur9w3Keloz9hnf9d+N0aWtssFMhmzo/0dxR/ltY35CPCdFmLObp7ZGVexq/5M/ib6Y3/nuHfFtHfjB8fHBw0OySEzTXGBXzridO/v9+vCa9Pz61Wq6dOqzYRPyYM7Oj/3erpex07uaYY0gD+H3fEbJ/y7DJB0y5u/u3fcTLbvFpQN+tTkMCLua8pzPtfDtkG8O9kWvN+Mq9lUVIFhi5PcqHNlW25fgmtqFSV+LXOBn6OY28MYnNQcB6EqIbWkCl0QhOxF+SqBkFFYRiUeiqdX9UQIwqpJnrYDSCo5wJEddyDTD3v0EQchlwTv6GiXsigND1MXLGqS1gyopChxFEl8npiKtTTLAMfEaQ2oL7akVhS4JNbkAWmi8T69MuGStFDNsaYYI0e51wjGqMuKQH7oeNQ4jNqocLDBud+RqTvwrIHhRXqwgijMEjCIRUhW48wKSiP5lbmRuTe3wDpVnNIWA2mwtwCMQGzdSImLNoCLZV6rTDX0j6whi6O4zTcT8NQLqIEmpFj+inCL+9mQQouzOjh9WWIoHJaW2l4frn7jJugZFyUhxiykEIeKtJK3/SSApSYYgj50qiLEK2KYlGxTQ8AAA==') format('woff2'),
    url('./iconfont.woff?t=1547090543579') format('woff'),
    url('./iconfont.ttf?t=1547090543579') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1547090543579#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

`


