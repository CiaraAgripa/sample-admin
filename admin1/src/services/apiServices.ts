import { EAPIServiceAPIRoutes } from "@/enums/mainEnums";
import AxiosService from "./axiosServices";
import { TGetRequestConfig } from "@/utilities/geMethodUtils";
import { TRequestConfig } from "@/utilities/bearerUtils";
import { TPostContentParams } from "@/types/mainSchema";

class APIService extends AxiosService {
  //get
  
  public async getAdminListAPI({ config }: { config: TGetRequestConfig }): Promise<any> {
    const url: string = EAPIServiceAPIRoutes.getAdminList;
    const result: any = await this.client.get(url, config);
    return result;
  }

  public async getAdminByID({ id, config }: { id: number; config: TGetRequestConfig }): Promise<any> {
    const url: string = `${EAPIServiceAPIRoutes.getAdminList}/${id}`;
    const result: any = await this.client.get(url, config);
    return result;
  }

  public async getLogs({ config }: { config: TGetRequestConfig }): Promise<any> {
    const url: string = EAPIServiceAPIRoutes.getLogs;
    const result: any = await this.client.get(url, config);
    return result;
  }

  public async getPostStatusOverview({ config }: { config: TGetRequestConfig }): Promise<any> {
    const url: string = EAPIServiceAPIRoutes.getPostStatsOverview;
    const result: any = await this.client.get(url, config);
    return result;
  }

  public async getPosts({ config }: { config: TGetRequestConfig }): Promise<any> {
    const url: string = EAPIServiceAPIRoutes.getPosts;
    const result: any = await this.client.get(url, config);
    return result;
  }

  // post

  public async postContent({ params, config }: { params: TPostContentParams; config: TRequestConfig }): Promise<any> {
    const url: string = EAPIServiceAPIRoutes.getPosts;
    const result = await this.client.post(url, params, config);
    return result;
  }
}

export const apiServices = new APIService();
