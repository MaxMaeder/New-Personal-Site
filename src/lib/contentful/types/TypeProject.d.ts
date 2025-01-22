import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeProjectFields {
    title: EntryFieldTypes.Symbol;
    image: EntryFieldTypes.AssetLink;
    action: EntryFieldTypes.Symbol<"Open link" | "Show embed">;
    url: EntryFieldTypes.Symbol;
    date: EntryFieldTypes.Date;
}

export type TypeProjectSkeleton = EntrySkeletonType<TypeProjectFields, "project">;
export type TypeProject<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeProjectSkeleton, Modifiers, Locales>;
