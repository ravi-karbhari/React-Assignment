export const StudentFormField = [
    { label: 'First Name', id: 'firstName', type: 'text' },
    { label: 'Last Name', id: 'lastName', type: 'text' },
    { label: 'City', id: 'city', type: 'text' },
    { label: 'Country', id: 'country', type: 'text' },
    { label: 'Contact', id: 'contact', type: 'number' },
    { label: 'Email', id: 'email', type: 'email' },
    { label: 'Gender', id: 'gender', type: 'radio' },
]

export type StudentDetailContent = {
    id: number,
    firstName: string,
    lastName: string,
    city: string,
    country: string,
    contact: number,
    email: string,
    gender: string
}