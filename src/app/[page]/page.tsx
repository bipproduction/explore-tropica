export default function Page({ params }: { params: { page: string } }) {
    return <>
        {params.page}
    </>
}