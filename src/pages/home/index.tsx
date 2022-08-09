import IGHeader from "components/IGHeader";
import IGContanier from "components/IGContainer";
import Loading from "components/Loading";
import IGStory from './compents/IGStory'
import IGPost from "./compents/IGPost";
import IGProfile from "./compents/IGProfile";



import { useGetIGPostsQuery } from "services/homeServices";
const IGPostList: React.FC = () => {
  const { data, isLoading } = useGetIGPostsQuery("all");
  return (
    <>
      {isLoading && (
        <div className="w-full flex justify-center mt-20">
          <Loading />
        </div>
      )}
      {!isLoading &&
        data?.map((item) => {
          const {
            id,
            location,
            account,
            avatar,
            photo,
            likes,
            description,
            hashTags,
            createTime,
          } = item;
          return (
            <IGPost
              location={location}
              account={account}
              avatar={avatar}
              photo={photo}
              likes={likes}
              description={description}
              hashTags={hashTags}
              createTime={createTime}
              key={id}
            />
          );
        })}
    </>
  );
};

const Home: React.FC = () => {
  return (
    <>
      <IGHeader />
      <IGContanier>
        <div className="flex lg:justify-center">
          {/* 左側 */}
            <div className="w-full lg:w-[600px]">
              <IGStory />
              <IGPostList />

            </div>
             {/* 右側 */}
           <div className="hidden  lg:block lg:w-[424px]">
           <IGProfile />
           </div>
        </div>
      </IGContanier>
    </>
  );
};

export default Home;
