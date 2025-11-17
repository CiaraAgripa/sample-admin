import MyAccount from "@/components/routes/myAccount";
import { NextPageWithLayout } from "@/pages/_app";
import authentication from "@/utilities/authentication";
import { GetServerSidePropsContext } from "next";
import React from "react";

const Page: NextPageWithLayout = () => <MyAccount />;

export default Page;

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => await authentication(ctx);