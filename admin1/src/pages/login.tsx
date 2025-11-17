import Login from "@/components/routes/login";
import authentication from "@/utilities/authentication";
import { GetServerSidePropsContext } from "next";
import React from "react";

const Page = () => <Login />;

Page.getLayout = (page: React.ReactNode) => page;

export default Page;

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => await authentication(ctx);
