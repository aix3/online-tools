/**
 * Return the classnames joined by ' '
 * @param classname Multiple single classname
 */
export function classNames(...classname: string[]) {
    const classes = [];
    for (let i = 0; i < classname.length; i++) {
        const arg = classname[i];
        if (!arg) {
            continue;
        }
        classes.push(arg);
    }
    return classes.join(' ');
}