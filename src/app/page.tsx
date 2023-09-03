import { funContentList } from '@/app_modules/admin_dashboard/fun/content_list';
import ViewLanding from '@/app_modules/landing/view/landing';

export default async function Page() {
  const data = await funContentList()
  return (<ViewLanding data={data} />);
}
