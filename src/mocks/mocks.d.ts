export interface Response<T=any> {
    code: string | number
    message: string
    data?: T
}

interface Menu {
    menus: MenuItem[]
}

interface MenuItem {
    id: string
    parentId: string
    routerPath: string
    code?: string
    name: string
    children: Menu['menus']
}

type ButtonItem = Omit<MenuItem, 'routerPath' | 'children'>

interface Button {
    buttons: ButtonItem[]
}