import { NextPage } from "next";
import MainLayout from "./layout/MainLayout";
import AdminLayout from "./layout/AdminLayout";

export type PageWithMainLayoutType = NextPage & {
  layout: typeof MainLayout;
};

export type PageWithAdminLayoutType = NextPage & {
  layout: typeof AdminLayout;
};

type PageWithLayoutType = PageWithMainLayoutType | PageWithAdminLayoutType;

export default PageWithLayoutType;
