import DbControll from './../utils/Crud';
import response from '../utils/response';
import { Response } from 'express';
import GuestBookModel from './../models/GuestBook';
import { IGuestBookParam } from '../interfaces/GuestBook';
import { config } from '../config';

const { tx } = config.database;

class GuestBook {
  // get all
  async getAllGuestBook(req: IGuestBookParam, res: Response): Promise<Response> {
    try {
      const result = await GuestBookModel.getAllGuestBook(req?.query);

      if (result.success) {
        return response(res, 200, 'Berhasil mendapatkan daftar Buku Tamu', true, result.data.rows);
      } else {
        return response(res, 500, 'Terjadi kesalahan');
      }
    } catch (error) {
      console.log(error);
      return response(res, 500, 'Terjadi kesalahan');
    }
  }
}

export default new GuestBook();
