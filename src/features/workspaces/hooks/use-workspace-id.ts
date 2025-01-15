import { useParams } from "next/navigation"

export const useWorkspaceId = () => {
    return useParams().workspaceId as string
}