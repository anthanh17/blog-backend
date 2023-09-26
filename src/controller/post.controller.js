import {findPostWithName} from "../models/postModel.js";

BigInt.prototype.toJSON = function () {
  const int = Number.parseInt(this.toString());
  return int ?? this.toString();
};

export const getPostByName= async(req, res) => {
  try {
    const postName = req.query.postName;
    const postObj = findPostWithName(postName);

    if ((await postObj).IsPostExist == false) {
      res.status(404).json({ message: "Post not found." });
    }

    return res.status(200).send((await postObj).postContent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};