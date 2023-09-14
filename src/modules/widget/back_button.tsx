import { ActionIcon } from "@mantine/core";
import { useRouter } from "next/navigation";
import { MdArrowBackIos } from "react-icons/md";

export default function BackButton() {
    const router = useRouter()
    return <ActionIcon onClick={router.back} >
        <MdArrowBackIos size={36} />
    </ActionIcon>
}