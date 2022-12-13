import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Text, TextDocument } from './document.schema';

@Injectable()
export class AppService {
  constructor(@InjectModel(Text.name) private textModel: Model<TextDocument>) {}

  async getHello(): Promise<string> {
    const data = await this.textModel.findOne({ key: 'message' });
    return data.text;
  }
}
