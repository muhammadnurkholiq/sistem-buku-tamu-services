import { config } from '../config';
import { IResM } from '../interfaces/Response';
import { ISummaryParam } from '../interfaces/Summary';
const { pool: db } = config.database;

// export
export default class Summary {
  public static getSummaryGlobal = (param?: ISummaryParam): Promise<IResM> => {
    return new Promise((resolve, reject) => {
      try {
        const role = param?.role || '';
        const sqlParams: any[] = [];

        let qs = '';
        if (role === '01') {
          qs = `select count(tu.*) as total_user,
              (select count(tu2.*) from sc_main.t_user tu2 where tu2.role = '01') as total_user_admin,
              (select count(tu3.*) from sc_main.t_user tu3 where tu3.role = '02') as total_user_staff
              from sc_main.t_user tu`;
        }

        db.query(qs, sqlParams, (err: any, result: any) => {
          if (err) {
            reject({ success: false, error: err });
          }
          resolve({ success: true, data: result });
        });
      } catch (error) {
        reject(error);
      }
    });
  };
}
