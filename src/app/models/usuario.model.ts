export interface Usuario {
    _id?: string;
    email: string;
    firstName: string;
    lastName: string;
    celular: string;
    estado?: 'activo' | 'inactivo';
    emailVerified?: boolean;
    fechaRegistro?: Date;
    fechaUltimaModificacion?: Date;
    roles: string[]; 
}
