interface iMeta {
    name: string,
    content: string
}

export interface iSEO {
    title: string;
    content: string;
    meta?: iMeta[];
}
