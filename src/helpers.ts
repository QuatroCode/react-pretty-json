export function htmlEncode(t: any) {
    return t != null ? t.toString().replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;") : '';
}

export function generateSpace(n: Number) {
    let spaces = '';
    for (let i = 0; i < n; i++) {
        spaces += '\u00A0';
    }

    return spaces;
}

export function objectSize(obj: any) {
    let size = 0;
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            size++;
        }
    }
    
    return size;
}