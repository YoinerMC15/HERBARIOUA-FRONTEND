export interface Planta {
    _id?: string;
    codigo: string;
    especie: string; 
    nombreComun: string;
    imagenId?: string | null;
    visible?: boolean;
    estado?: 'activa' | 'inactiva';
    fechaRegistro?: Date;
    usuarioRegistrador: string;
    usuarioModificador?: string | null;
    fechaModificacion?: Date | null;
}
