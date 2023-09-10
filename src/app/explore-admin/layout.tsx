import { ViewAdminDashboardLayout } from "@/app_modules/admin_dashboard";
import { unsealData } from "iron-session";
import _ from "lodash";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Layout({ children }: { children: any }) {
    const c = cookies().get('_xt')
    if (!c || !c.value || _.isEmpty(c.value)) return redirect('/login')
    const userId = await unsealData(c.value, { password: process.env.PWD as any })
    return <ViewAdminDashboardLayout userId={userId} isEditable={userId !== null || userId !== ""} >
        {children}
    </ViewAdminDashboardLayout>
}