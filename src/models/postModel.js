import {prisma} from "../server.js";

export const findPostWithName = async(postName) => {
  try {
    const post = await prisma.post.findUnique({
      where : {
        title : postName
      },
    });

    console.log(post);

    if (!post) {
      return {IsPostExist : false, postContent : null};
    }
    return {IsPostExist : true, postContent : post};
  } catch(error) {
    console.log(error);
    return {IsPostExist : false, postContent : null};
  }
};


//TODO(namnh): implement APIs for pagination.
const findPostsWithOffset = async(req) => {
  try{
    const page = req.query.page;
    //TODO(namnh): Should we hard fix offset like that ?
    const pageSize = 10;

    const post = await prisma.post.findMany({
      skip: page * pageSize,
      take: pageSize,
    });

    if (post) {
      return false;
    }
    return true;
  } catch(error) {
    console.log(error);
  }
}

// const findPostOfCategoryWithOffset = async(params) => {
//   try {
//     const categoryId = params.categoryId;
//     const page = req.query.page;
//     const pageSize = 10;

//     const listPosts = await prisma.post.findMany({
//       // where : {
//       //   categoryId : ,
//       // },
//       skip: page * pageSize,
//       take: pageSize,
//     });
//   }
// };