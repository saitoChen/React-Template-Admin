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

export interface Response<T=any> {
    code: string | number
    message: string
    data?: T
}

export interface PermissionRes {
    menus: Menu['menus']
    buttons: Button['buttons']
    name: string
    id: string
}

const x = 'x' as const
type test =  typeof x
let a:test = true
console.log(a)