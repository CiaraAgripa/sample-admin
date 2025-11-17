import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { TAuthMeResponse, TLoginParams, TLoginResponse, TLoginToken, TSessionToken } from "@/types/mainSchema";
import { EAuthServiceAPIRoutes, ERoutes } from "@/enums/mainEnums";

export function buildAuthOptions(req: NextApiRequest, res: NextApiResponse) {
  return {
    providers: [
      CredentialsProvider({
        id: "user-credentials",
        name: "Credentials",
        credentials: {
          userId: {
            label: "userId",
            type: "text",
            placeholder: "아이디를 입력하세요",
          },
          password: { label: "Password", type: "password" },
        },
        async authorize(credentials, req: any): Promise<any> {
          const { userId, password } = credentials!;

          try {
            const params: TLoginParams = {
              email: userId,
              password: password,
            };

            const response = await axios.post<TLoginResponse>(`${process.env.NEXT_API_URL}${EAuthServiceAPIRoutes.apiLogin}`, params, {
              headers: {
                "Content-Type": "application/json",
              },
            });

            if (response.data.message === "Login successful") {
              return Promise.resolve({
                sub: response.data?.token,
                name: response.data?.token,
                session: response.data.token,
                image: null,
                email: null,
              });
            }
          } catch (ex) {
            console.log(JSON.stringify(ex));
          }

          throw new Error("로그인 실패");
        },
      }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
      error: ERoutes.adminError,
      signOut: ERoutes.login,
    },
    session: {
      strategy: "jwt",
      maxAge: 24 * 60 * 60,
      updateAge: 2 * 24 * 60 * 60,
    },
    callbacks: {
      async jwt({ token }: { token: TLoginToken }): Promise<TLoginToken | null> {
        try {
          const { name } = token;

          const getCurrentUserInfo = await axios.get<TAuthMeResponse>(`${process.env.NEXT_API_URL}${EAuthServiceAPIRoutes.apiMe}`, {
            headers: {
              "Content-Type": "application/json",
              Authorization: name as string,
            },
          });

          token.accessToken = getCurrentUserInfo.data;
          return token;
        } catch (error) { 
          console.error("Error:", error);
          return null;
        }
      },
      async session({ session, token }: { session: TLoginToken; token: TLoginToken }): Promise<TSessionToken> {
        return {
          authenticated: true,
          token: token?.name,
          user: {
            id: token.accessToken?.admin.id ?? 0,
            email: token.accessToken?.admin.email ?? "",
            name: token.accessToken?.admin.name ?? "",
            role: token.accessToken?.admin.role ?? "",
            status: token.accessToken?.admin.status ?? "",
            permissions: token.accessToken?.admin.permissions ?? [],
            department: token.accessToken?.admin.department ?? "",
            employeeId: token.accessToken?.admin.employeeId ?? "",
          },
          expiresAt: token.expiresAt ?? "",
        };
      },
      async redirect({ url, baseUrl }: { url: string; baseUrl: string }) {
        if (url.startsWith(ERoutes.root)) {
          return `${baseUrl}${url}`;
        } else if (new URL(url).origin === baseUrl) {
          return `${baseUrl}`;
        }
        return baseUrl;
      },
    },
  };
}

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  return NextAuth(req, res, buildAuthOptions(req, res) as any);
}
