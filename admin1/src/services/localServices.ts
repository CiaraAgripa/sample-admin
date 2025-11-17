import { ELocalServiceAPIRoutes } from "@/enums/mainEnums";
import {
  TGeAdminListResponse,
  TGetAdminByIDResponse,
  TGetLogResponse,
  TGetLogsParams,
  TGetMemberListParams,
  TGetPostParams,
  TGetPostResponse,
  TGetPostStatusOverviewRes,
  TPostContentParams,
  TPostContentResponse,
} from "@/types/mainSchema";
import { getBaseURL } from "@/utilities/mainUtils";
import axios, { Axios } from "axios";

class LocalServices {
  protected client: Axios;
  constructor() {
    const requestCreation = axios.create({
      baseURL: getBaseURL(),
      headers: {
        "Content-Type": "application/json",
      },
    });
    this.client = requestCreation;
  }

  // get

  public async getAdminListLocal({ params }: { params: TGetMemberListParams }): Promise<TGeAdminListResponse> {
    const url: string = ELocalServiceAPIRoutes.getAdminList;
    const result = await this.client.get(url, { params });
    return result.data;
  }

  public async getAdminByIDLocal({ id }: { id: number }): Promise<TGetAdminByIDResponse> {
    const url: string = `${ELocalServiceAPIRoutes.getAdminByID}/${id}`;
    const result = await this.client.get(url);
    return result.data;
  }

  public async getLogsLocal({ params }: { params: TGetLogsParams }): Promise<TGetLogResponse> {
    const url: string = ELocalServiceAPIRoutes.getLogList;
    const result = await this.client.get(url, { params });
    return result.data;
  }

  public async getPostStatsOverviewLocal(): Promise<TGetPostStatusOverviewRes> {
    const url: string = ELocalServiceAPIRoutes.getPostStatsOverview;
    const result = await this.client.get(url);
    return result.data;
  }

  public async getPosts({ params }: { params: TGetPostParams }): Promise<TGetPostResponse> {
    const url: string = ELocalServiceAPIRoutes.getPosts;
    const result = await this.client.get(url, { params });
    return result.data;
  }

  // post

  public async postContent({ params }: { params: TPostContentParams }): Promise<TPostContentResponse> {
    const url = ELocalServiceAPIRoutes.postContent;
    const result = await this.client.post(url, params);
    return result.data;
  }
}

export const localService = new LocalServices();
