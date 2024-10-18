export interface RegistroPlanta {
    _id?: string;
    planta: string; 
    fechaRegistro?: Date;
    altura: number;
    diametroTallo?: number;
    temperatura?: number;
    humedad?: number;
    phSuelo?: number;
    nivelLuz?: number;
    estadoSalud?: string;
    condicionSuelo?: string;
    aguaAplicada?: number;
    fertilizacion?: string;
    plagas?: string;
    observaciones?: string;
    visible?: boolean;
    estado?: 'activo' | 'inactivo';
    usuarioRegistrador: string;
    fechaCreacion?: Date;
    usuarioModificador?: string | null;
    fechaModificacion?: Date | null;
}
