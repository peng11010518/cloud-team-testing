import { Permission } from "./types/Permission";

export function findLabel(permissions: Permission[], code: string): string {
    for (const permission of permissions) {
        if (permission.code === code) return permission.label
        if (permission.children.length && code.match(permission.code)) return findLabel(permission.children, code)
    }
    return 'Not found'
}
