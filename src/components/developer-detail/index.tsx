import { Link } from "react-router-dom";
import { computer } from "../svgs";

let dummyText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra enim id mi aliquet consequat ac nec enim. Praesent ut laoreet turpis. Curabitur tempus nec lorem quis mollis. Suspendisse lacus purus, lacinia at nibh id, dignissim vulputate lorem. Duis et lobortis dolor, at fermentum ipsum. Curabitur iaculis sagittis metus sit amet maximus. Nunc at tempus velit. Fusce pretium justo eget ullamcorper ultricies. Sed id fringilla sem. Quisque non dui at nulla maximus convallis. Praesent ullamcorper cursus lobortis. Vestibulum in metus ex. In vel vulputate purus. Ut id metus non augue";

export interface DeveloperDetailProps {
  dev: {
    repourl: string;
    avatar: string;
    reponame: string;
    description: string;
    author: string;
  };
}

export const DeveloperDetail = ({ dev }: DeveloperDetailProps) => {
  const { repourl, avatar, reponame, description, author } = dev;
  debugger;
  return (
    <div className="p-3 border-bottom">
      
    </div>
  );
};
