import response from '../utils/response';
import { Response } from 'express';
import SummaryModel from '../models/Summary';
import { ISummaryParam } from '../interfaces/Summary';

// export
class Summary {
  async getSummaryGlobal(req: ISummaryParam, res: Response): Promise<Response> {
    try {
      const result = await SummaryModel.getSummaryGlobal({ role: req?.users?.role });

      if (result.success) {
        return response(res, 200, 'Berhasil mendapatkan summary', true, result?.data?.rows[0]);
      } else {
        return response(res, 500, 'Terjadi kesalahan');
      }
    } catch (error) {
      console.log(error);
      return response(res, 500, 'Terjadi kesalahan');
    }
  }
}

export default new Summary();
