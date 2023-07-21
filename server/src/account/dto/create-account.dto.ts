import {
  IsOptional,
  IsString,
  IsBoolean,
  IsObject,
} from '@nestjs/class-validator';

export class CreateAccountDto {
  @IsString()
  address: string;

  @IsBoolean()
  favorite: boolean;

  @IsString()
  dateAdded: string;

  @IsObject()
  @IsOptional()
  customRate: { usd: number | null; eur: number | null };
}
