import { Sender } from './Sender';

export class Package
{
    packageDescription: string;
    //receiver: Remitente;
    sender: Sender;
    deliveryDate: Date;
    shippingDate: Date;
}