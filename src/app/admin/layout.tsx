import ViewAdmin from "@/modules/admin/admin/admin_layout";
import { PropsWithChildren } from "react";

export default function Layout({ children }: { children: any }) {
    return <ViewAdmin>
        {children}
    </ViewAdmin>
}