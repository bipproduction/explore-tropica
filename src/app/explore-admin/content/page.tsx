import { funContentList } from "@/app_modules/admin_dashboard/fun/content_list"
import ViewContentList from "@/app_modules/admin_dashboard/view/content_list"

export const revalidate = 0

export default async function Page() {
    const data = await funContentList()
    return <>
    <ViewContentList data={data} />
    </>
}