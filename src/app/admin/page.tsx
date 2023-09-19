import ViewAdminHome from "@/modules/admin/home/home";
import _ from "lodash";
import { redirect } from "next/navigation";
import {cookies} from 'next/headers'

export default function Page() {
    const c = cookies().get('_t')
    if(!c || !c.value || _.isEmpty(c.value)) return redirect('/login')

    return <>

       <ViewAdminHome />
    </>
}