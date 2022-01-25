import { IPost } from "../../../types";

export const initialPosts: IPost[] = [
    {
        author: {
          id: "sdfsdf",
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOhmSDjd-AA1FliRnAc5nFJIBu7iJCXbn0AQ&usqp=CAU",
          name: "National Geographic",
        },
        content: "Львы тигры геопарды",
        createdAt: "15 minutes ago",
        images: [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyCWGzt8z4wAzAWt8QVMk0S8IZ9sZJNfd_gw&usqp=CAU",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJup2gnECVTBYgHeMdMFhvGOtmU3pCcGqDdg&usqp=CAU",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsBRDP020Ws8HdEbof579P4VlrPdq54GTIOw&usqp=CAU",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThYZvsRGGhQcHkoYlsjNFjTk9fZtmf0wK8ZQ&usqp=CAU",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn5ozzhtFy8XeARF4GVtEHXOKRjmP91qlicg&usqp=CAU",
        ],
    },
]