// 由于拆分了 reducer，所以为了防止不同 reducer 的 actionTypes 命名冲突，
// 需要自己在原来的字符串基础上加上子 reducer 的名称路径
export const SEARCH_FOCUS = 'header/search_focus'

export const SEARCH_BLUR = 'header/search_blur'

export const GET_HEADER_LIST = 'header/get_header_list'

export const CHANGE_HEADER_LIST = 'header/change_header_list'

export const MOUSE_ENTER = 'header/mouse_enter'

export const MOUSE_LEAVE = 'header/mouse_leave'

export const CHANGE_PAGE = 'header/change_page'