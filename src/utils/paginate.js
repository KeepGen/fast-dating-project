export function paginate(items, pageNumbers, pageSize) {
    const startIndex = (pageNumbers - 1) * pageSize;
    return [...items].splice(startIndex, pageSize);
}
