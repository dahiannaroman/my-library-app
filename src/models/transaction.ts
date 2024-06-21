export type TipoTransaccion = 'venta' | 'abastecimiento';

export class Transaccion {
    constructor(
        public tipo: TipoTransaccion,
        public fecha: Date,
        public cantidad: number,
    ) {}
}