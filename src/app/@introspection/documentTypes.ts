
function strEnum<T extends string>(o: Array<T>): {[K in T]: K} {
    return o.reduce((res, key) => {
        res[key] = key;
        return res;
    }, Object.create(null));
}
export const DocumentTypes = strEnum(['home.query.graphql',
'home.subscription.graphql']);
export type DocumentTypes = keyof typeof DocumentTypes;