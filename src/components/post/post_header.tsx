import { Frontmatter } from "@/lib/utils/mdx.util";
import { Separator } from "../ui/separator";
import { FaRegClock } from "react-icons/fa6";

interface PostHeaderProps {
  frontmatter: Frontmatter;
  reading_time: string;
}

const formatDate = (date: string) => {
  // Month Day, Year
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export const PostHeader: React.FC<PostHeaderProps> = (props) => {
  const published_on = formatDate(props.frontmatter.publishedOn);

  return (
    <div className="my-5 mb-6 rounded-md">
      <div className="mb-4">
        <h1 className="text-3xl mb-5">{props.frontmatter.title}</h1>

        <div>
          <span>{props.frontmatter.abstract}</span>
        </div>
      </div>

      <div className="flex flex-row justify-center gap-6 mt-2">
        <div>
          <span className="font-medium">
            <FaRegClock className="inline" /> {props.reading_time}
          </span>
        </div>
        {/* <Separator orientation="vertical" /> */}
        <div>
          <time dateTime={published_on}>Published On: {published_on}</time>
        </div>
      </div>

      <Separator orientation="horizontal" className="mt-5" />
    </div>
  );
  // <>
  //   <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
  //     {/* {title} */}
  //   </h1>
  //   <div className="flex items-center space-x-4 text-muted-foreground">
  //     <div>{/* <span className="font-medium">{author}</span> */}</div>
  //     <Separator orientation="vertical" />
  //     <div>
  //       {/* <time dateTime={date}>{new Date(date).toLocaleDateString()}</time> */}
  //     </div>
  //   </div>
  // </>;
};

export default PostHeader;
