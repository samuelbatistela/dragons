import { Dragon } from '@/io/redux/dragons/dragons.types';
import { getApiUrl } from '@/io/environment';
import httpRequestHandler from '@/io/httpRequestHandler';
import { GET, POST, PUT, DELETE } from '@/io/httpMethod.enum';
import moment from 'moment';

class DragonApi {
  private static baseUrl = `${getApiUrl()}/dragon`;

  public static async getDragons(): Promise<Dragon[]> {
    const response = await httpRequestHandler<Dragon[]>({
      method: GET,
      url: this.baseUrl,
    });

    const sorted = this.adapter(response.data).sort((a, b) =>
      a.name.localeCompare(b.name, 'pt-BR', { sensitivity: 'base' }),
    );

    return sorted;
  }

  public static async getDragonById(id: string): Promise<Dragon> {
    const url = `${this.baseUrl}/${id}`;
    const response = await httpRequestHandler<Dragon>({
      method: GET,
      url,
    });

    return response.data;
  }

  public static async createDragon(dragon: Dragon): Promise<Dragon> {
    const response = await httpRequestHandler<Dragon>({
      method: POST,
      url: this.baseUrl,
      data: dragon,
    });

    return response.data;
  }

  public static async updateDragon(dragon: Dragon): Promise<Dragon> {
    const url = `${this.baseUrl}/${dragon.id}`;
    const response = await httpRequestHandler<Dragon>({
      method: PUT,
      url,
      data: dragon,
    });

    return response.data;
  }

  public static async deleteDragon(id: string): Promise<void> {
    const url = `${this.baseUrl}/${id}`;
    await httpRequestHandler<void>({
      method: DELETE,
      url,
    });
  }

  private static adapter(items: Dragon[]) {
    return items.map((item) => ({
      ...item,
      createdAt: moment(item.createdAt).format('DD-MM-YYYY hh:mm:ss'),
    }));
  }
}

export default DragonApi;
