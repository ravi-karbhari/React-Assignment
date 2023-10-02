import { atom } from "jotai";

import { StudentDetailContent } from "../constants/StudentDetail";

export const studentAtom = atom<StudentDetailContent[]>([]);
export const newStudentAtom = atom<any>({});

const addStudent = (students: StudentDetailContent[], item: any): StudentDetailContent[] => [
    ...students,
    {
        id: Math.max(0, Math.max(...students.map(({ id }) => id))) + 1,
        firstName: item.firstName,
        lastName: item.lastName,
        city: item.city,
        contact: item.contact,
        country: item.country,
        email: item.email,
        gender: item.gender
    },
];

const updateStudent = (todos: StudentDetailContent[], item: any): StudentDetailContent[] =>
    todos.map((todo) => ({
        ...todo,
        firstName: todo.id === item.id ? item.firstName : todo.firstName,
        lastName: todo.id === item.id ? item.lastName : todo.lastName,
        city: todo.id === item.id ? item.city : todo.city,
        contact: todo.id === item.id ? item.contact : todo.contact,
        country: todo.id === item.id ? item.country : todo.country,
        email: todo.id === item.id ? item.email : todo.email,
        gender: todo.id === item.id ? item.gender : todo.gender,
    }));

const removeTodo = (todos: StudentDetailContent[], id: number): StudentDetailContent[] =>
    todos.filter((todo) => todo.id !== id);

export const addStudentAtom = atom(
    () => "",
    (get, set) => {
        set(studentAtom, addStudent(get(studentAtom), get(newStudentAtom)));
        set(newStudentAtom, {});
    }
);

export const updateStudentAtom = atom(
    () => "",
    (get, set) => {
        set(studentAtom, updateStudent(get(studentAtom), get(newStudentAtom)));
        set(newStudentAtom, {});
    }
);

export const removeTodoAtom = atom(
    () => "",
    (get, set, id: number) => {
        set(studentAtom, removeTodo(get(studentAtom), id));
    }
);
