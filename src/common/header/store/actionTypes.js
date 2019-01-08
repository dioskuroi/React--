// 由于拆分了 reducer，所以为了防止不同 reducer 的 actionTypes 命名冲突，
// 需要自己在原来的字符串基础上加上子 reducer 的名称路径
export const SEARCH_FOCUS = 'header/search_focus'

export const SEARCH_BLUR = 'header/search_blur'