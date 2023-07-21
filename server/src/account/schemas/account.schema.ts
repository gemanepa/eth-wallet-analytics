import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AccountDocument = HydratedDocument<Account>;

@Schema()
export class Account {
  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  favorite: boolean;

  @Prop({ required: true })
  dateAdded: string;

  @Prop({ required: true, type: Object })
  customRate: { usd: number | null; eur: number | null };
}

export const AccountSchema = SchemaFactory.createForClass(Account);
