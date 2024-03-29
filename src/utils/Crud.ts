import { config } from '../config';
import { insertR, updateR, deleteR } from './index';
const { pool: db } = config.database;

export default class Crud {
  //Create Helper
  public static createData = (data: any, tb_name: string, returnIdx: string, client: any): Promise<any> => {
    return new Promise((resolve, reject) => {
      try {
        const qs = insertR(data, tb_name, returnIdx);
        const colValues = Object.keys(data).map(function (key) {
          return data[key];
        });
        if (client) {
          client.query(qs, colValues, (err: any, result: any) => {
            if (err) {
              console.log(err);
              return reject({ success: false, error: err });
            }
            resolve({ success: true, data: result });
          });
        } else {
          db.query(qs, colValues, (err: any, result: any) => {
            if (err) {
              console.log(err);
              return reject({ success: false, error: err });
            }
            resolve({ success: true, data: result });
          });
        }
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  };

  // Update Helper
  public static updateData = (where: any, data: any, tb_name: string, client: any): Promise<any> => {
    return new Promise((resolve, reject) => {
      try {
        const qs = updateR(where.id, data, tb_name, where.qs, 'updated');
        const colValues = Object.keys(data).map(function (key) {
          return data[key];
        });
        if (client) {
          client.query(qs, colValues, (err: any, result: any) => {
            if (err) {
              console.log(err);
              return reject({ success: false, error: err });
            }
            resolve({ success: true, result });
          });
        } else {
          db.query(qs, colValues, (err: any, result: any) => {
            if (err) {
              console.log(err);
              return reject({ success: false, error: err });
            }
            resolve({ success: true, result });
          });
        }
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  };

  //   Delete Helper
  public static deleteData = (where: any, tb_name: string, client: any) => {
    return new Promise((resolve, reject) => {
      try {
        const qs = deleteR(where.id, tb_name, where.qs);
        if (client) {
          client.query(qs, (err: any, result: any) => {
            if (err) {
              console.log(err);
              return reject({ success: false, error: err });
            }
            resolve({ success: true, result });
          });
        } else {
          db.query(qs, (err: any, result: any) => {
            if (err) {
              return reject({ success: false, error: err });
            }
            resolve({ success: true, result });
          });
        }
      } catch (error) {
        reject(error);
      }
    });
  };
}
