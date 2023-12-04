export class User {
    id: number;
    username?: string;
    password: string;
    first_name: string;
    last_name: string;
    confirmPassword: string;
    is_Admin: number;
    token?: string;
    email: string;

}

export class UserList {
    id: number
    name: string
    client_id: string
    email: string
    phone: string
    created_at: string
}

export class UserPayload {
    id: number
    client_id: string
    patient_forename: string
    patient_surname: string
    patient_phone: string
    patient_email: string
    password: string
}


export class UserRecord {
    client_id: string
    created_at: string
    email: string
    id: number
    name: string
    phone: string
    status: number
    image: string
    availability: any = []
    assigned: any = []
    document: any = []
    profile: Profile = new Profile();
}

export class Profile {
    account_number: string
    address: string
    allergies: string
    bank_name: string
    created_at: string
    date_of_birth: string
    email: string
    id: number
    job_title: string
    medication: string
    next_of_kin: string
    ni_number: string
    nok_address: string
    nok_email: string
    nok_phone: string
    paramedic_number: string
    phone: string
    sort_code: string
    status: number
    updated_at: string
    user_id: number
}