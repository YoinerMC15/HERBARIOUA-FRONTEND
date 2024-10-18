export interface Taxonomia {
    reino?: string;
    filo?: string;
    clase?: string;
    orden?: string;
    familia?: string;
    genero?: string;
    especie?: string;
}

export interface Especie {
    _id?: string;
    nombreCientifico: string;
    nombresComunes?: string[];
    taxonomia?: Taxonomia;
    visible?: boolean;
    estado?: 'activa' | 'inactiva';
    imagenId?: string | null;
    usuarioRegistrador: string;
    fechaCreacion?: Date;
    usuarioModificador?: string | null;
    fechaModificacion?: Date | null;
}
