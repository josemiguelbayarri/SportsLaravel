export interface Appointment {//exportamos lo parametros requeridos para el usuario
    id?:number,
    appointmentDate:string,
    type:string,
    user_id?:number
}