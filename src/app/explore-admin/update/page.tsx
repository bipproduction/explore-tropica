import { funContentById } from "@/app_modules/admin_dashboard/fun/content_by_id";
import ViewContentUpdate from "@/app_modules/admin_dashboard/view/content_update";

export default async function Page(params: { searchParams: { id: string } }) {
    if (!params.searchParams.id) return <>wrong method id</>
    const data = await funContentById({ id: params.searchParams.id })
    return <>
        <ViewContentUpdate data={data} />
    </>
}