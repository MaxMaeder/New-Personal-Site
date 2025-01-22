import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypePostFields {
    title: EntryFieldTypes.Symbol;
    previewText?: EntryFieldTypes.Text;
    date: EntryFieldTypes.Date;
    content: EntryFieldTypes.RichText;
}

export type TypePostSkeleton = EntrySkeletonType<TypePostFields, "post">;
export type TypePost<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypePostSkeleton, Modifiers, Locales>;
