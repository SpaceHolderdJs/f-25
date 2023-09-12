

export interface UserInterface {
    email: string,
    password: string
}

export interface Interface {
    a: string,
    obj: ObjInterface
}

export interface ObjInterface {
    b: number,
    c: number
}

export type UserType = { name: string, age?: number, password: string, email: string, id: string }

export type AuthFormType = Pick<UserType, "email" | "password">
export type WithoutIdType<T> = Omit<T, "id">;

export type SettingsFormType = WithoutIdType<UserType>


// https://www.typescriptlang.org/docs/handbook/jsx.html - documentation


// const data: SettingsFormType = {

// }

// export type FullUserType = Required<UserType>;

// const user: FullUserType = { name: "Igor", age: 10 }

// export type Falsy = undefined | null | '' | 0;
// export type OptionalProperty<TData, TData2> = TData | TData2 | Falsy;

// const optionalUser: OptionalProperty<{ name: string }, number> = { name: "asas" }

// const obj = {
//     a: 10,
//     b: ["Hello"]
// }

// type FieldsType = "login" | "password" | "name";
// type FieldsCases = "a" | "b"

// type AllFields = FieldsType | FieldsCases;

// interface A1 {
//     a: number
// }

// interface A extends A1 {
//     b: number
// }

// const obj1: A | A1 = {
//     a: 10,
//     b: 11
// }


// const fields: Record<FieldsType, FieldsCases> = {
//     login: "a",
//     name: "b",
//     password: "a",
// }

